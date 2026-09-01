import { siteConfig } from "@/data/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function downloadCV() {
  const link = document.createElement("a");
  link.href = `${basePath}${siteConfig.cvPath}`;
  link.download = siteConfig.cvFileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
