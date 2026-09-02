import Image from "next/image";
import Link from "next/link";
import { publicPath } from "@/lib/public-path";

type ProjectCardProps = {
  id: string;
  title: string;
  subtitle?: string;
  tag: string;
  image?: string;
};

export default function ProjectCard({ id, title, subtitle, tag, image }: ProjectCardProps) {
  return (
    <li>
      <Link href={`/projects/${id}`} className="group block">
        <div className="project-shot aspect-[16/10]">
          {image ? (
            <Image
              src={publicPath(image)}
              alt=""
              width={960}
              height={600}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full items-end bg-[linear-gradient(160deg,#fbf9f5_0%,#efeae1_100%)] p-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                {tag}
              </p>
            </div>
          )}
        </div>
        <h3 className="mt-4 font-display text-[1.35rem] font-medium tracking-tight text-foreground transition-colors group-hover:text-accent-deep">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-6 text-muted">{subtitle ?? tag}</p>
      </Link>
    </li>
  );
}
