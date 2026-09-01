"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const SPEED = 0.4;
const CHAOS = 20;
const CORE_SIZE = 10;
const SPEED_MULT = 1;

export default function ParticleSwarmCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = reduceMotion ? 1200 : window.innerWidth < 768 ? 2800 : 7000;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0c1210, 0.012);

    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 2000);
    camera.position.set(0, 0, 88);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x0c1210, 1);
    host.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 1.35, 0.35, 0);
    composer.addPass(bloomPass);

    const geometry = new THREE.TetrahedronGeometry(0.28);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mesh = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    scene.add(mesh);

    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    const target = new THREE.Vector3();
    const positions = Array.from({ length: count }, () =>
      new THREE.Vector3((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100),
    );

    for (let i = 0; i < count; i += 1) {
      mesh.setColorAt(i, color.setHex(0x0e7a66));
    }

    const clock = new THREE.Clock();
    let frame = 0;
    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) clock.getDelta();
      },
      { threshold: 0.08 },
    );
    observer.observe(host);

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (width < 2 || height < 2) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      composer.setSize(width, height);
      bloomPass.setSize(width, height);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!visible) return;

      const time = clock.getElapsedTime() * SPEED_MULT;
      mesh.rotation.y = time * 0.12;

      for (let i = 0; i < count; i += 1) {
        const norm = i / count;
        const progress = (norm + time * SPEED * 0.2) % 1;
        const easeProgress = progress ** 1.5;
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const theta = (2 * Math.PI * i) / goldenRatio;
        const phi = Math.acos(1 - 2 * norm);
        const currentRadius = CORE_SIZE + 150 * (1 - easeProgress);
        const instability = (1 - progress) ** 2;
        const wobbleX = Math.sin(time * 2 + norm * 100) * CHAOS * instability;
        const wobbleY = Math.cos(time * 1.5 + norm * 200) * CHAOS * instability;
        const wobbleZ = Math.sin(time * 3 - norm * 300) * CHAOS * instability;
        const sinPhi = Math.sin(phi);

        target.set(
          currentRadius * sinPhi * Math.cos(theta) + wobbleX,
          currentRadius * sinPhi * Math.sin(theta) + wobbleY,
          currentRadius * Math.cos(phi) + wobbleZ,
        );

        const hue = 0.46 + 0.08 * progress;
        const saturation = 0.55 + 0.35 * progress;
        const corePulse = progress > 0.95 ? Math.sin(time * 10) * 0.22 : 0;
        const lightness = 0.18 + 0.52 * progress + corePulse;
        color.setHSL(hue, saturation, Math.max(0, Math.min(1, lightness)));

        positions[i].lerp(target, 0.1);
        dummy.position.copy(positions[i]);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        mesh.setColorAt(i, color);
      }

      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      composer.render();
    };
    tick();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      mesh.dispose();
      composer.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={hostRef} className="h-full w-full" />;
}
