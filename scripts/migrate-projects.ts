import { projects } from "../src/data/portfolio";
import { enrichProjects } from "../src/app/projects/lib/enrich";

const enriched = enrichProjects(projects);

const missing = enriched.filter(
  (project) =>
    !project.challengeCategory ||
    !project.metrics?.length ||
    !project.hardestBug ||
    !project.architectureDiagram ||
    !project.retrospectiveSteps?.length ||
    !project.descriptionTech ||
    !project.githubUrl,
);

console.log(`Migrated ${enriched.length} projects.`);
for (const project of enriched) {
  console.log(
    `- ${project.id}: ${project.challengeCategory} · metrics=${project.metrics.length} · steps=${project.retrospectiveSteps.length}`,
  );
}

if (missing.length > 0) {
  console.error("Defaults failed for:", missing.map((project) => project.id).join(", "));
  process.exit(1);
}

console.log("All new Project fields have defaults. Existing records remain valid.");
