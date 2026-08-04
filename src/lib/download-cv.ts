import { siteConfig } from "@/data/portfolio";

export function downloadCV() {
  const link = document.createElement("a");
  link.href = siteConfig.cvPath;
  link.download = siteConfig.cvFileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
