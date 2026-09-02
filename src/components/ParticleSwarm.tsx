import ParticleSwarmLoader from "./particle-swarm-loader";

export default function ParticleSwarm() {
  return (
    <section
      id="systems"
      className="relative overflow-hidden border-t border-border bg-[#0c1210]"
      aria-label="Particle field"
    >
      <div className="h-[min(52vh,28rem)] w-full">
        <ParticleSwarmLoader />
      </div>
    </section>
  );
}
