export default function ProjectDetailLoading() {
  return (
    <div className="container-reading py-12 lg:py-16" aria-busy="true">
      <div className="h-4 w-28 bg-surface" />
      <div className="mt-8 h-10 w-4/5 bg-surface" />
      <div className="mt-4 h-5 w-2/3 bg-surface" />
      <div className="mt-10 aspect-[16/9] w-full bg-surface" />
      <p className="sr-only">Loading case study…</p>
    </div>
  );
}
