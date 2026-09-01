import ParticleSwarmLoader from "./particle-swarm-loader";

export default function ParticleSwarm() {
  return (
    <section
      id="systems"
      className="relative overflow-hidden border-t border-border bg-[#0c1210]"
      aria-label="Operational signal converging into one core"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-[#0c1210] to-transparent px-4 pb-10 pt-8 sm:px-8">
        <div className="container-site px-0">
          <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-[#7dcebc] uppercase">
            Systems
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
            Operational noise pulling into one core — the same shape as the work.
          </p>
        </div>
      </div>
      <div className="h-[min(52vh,28rem)] w-full">
        <ParticleSwarmLoader />
      </div>
    </section>
  );
}
