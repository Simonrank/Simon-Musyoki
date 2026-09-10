import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function ProjectNotFound() {
  const first = projects[0];

  return (
    <div className="container-reading py-16 lg:py-24">
      <p className="t-label">Error 404</p>
      <h1 className="t-h1 mt-4 text-foreground">Case study not found</h1>
      <p className="t-body mt-4 max-w-md">
        That address is not in the index. Head back to the project list, or open the featured
        case study below.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/projects" className="btn btn-primary">
          All projects
        </Link>
        <Link href={`/projects/${first.id}`} className="btn btn-secondary">
          Open {first.title}
        </Link>
      </div>
    </div>
  );
}
