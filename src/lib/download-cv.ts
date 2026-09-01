import { siteConfig } from "@/data/portfolio";
import { publicPath } from "@/lib/public-path";

export function downloadCV() {
  const link = document.createElement("a");
  link.href = publicPath(siteConfig.cvPath);
  link.download = siteConfig.cvFileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
