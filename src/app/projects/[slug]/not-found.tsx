import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function ProjectNotFound() {
  const first = projects[0];
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:px-10">
      <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">404</p>
      <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground">
        Project not found
      </h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        That slug is not in the index. Open the first system or return to the project list.
      </p>
      <Link href={`/projects/${first.id}`} className="btn btn-primary mt-6">
        Open {first.title}
      </Link>
    </div>
  );
}
