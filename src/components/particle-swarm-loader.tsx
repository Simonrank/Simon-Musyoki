"use client";

import dynamic from "next/dynamic";

const ParticleSwarmCanvas = dynamic(() => import("./particle-swarm-canvas"), {
  ssr: false,
});

export default function ParticleSwarmLoader() {
  return <ParticleSwarmCanvas />;
}
