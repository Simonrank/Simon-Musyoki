import { siteConfig, type ChallengeCategory, type Project } from "@/data/portfolio";

export type EnrichedProject = Project & {
  challengeCategory: ChallengeCategory;
  metrics: { label: string; value: string }[];
  hardestBug: string;
  architectureDiagram: string;
  retrospectiveSteps: { day: number; title: string; description: string }[];
  descriptionTech: string;
  githubUrl: string;
  liveDemoUrl?: string;
};

const CATEGORY_ORDER: ChallengeCategory[] = [
  "Performance",
  "Architecture",
  "UI/UX",
  "DevOps",
];

export const CATEGORY_META: Record<
  ChallengeCategory,
  { label: string; icon: string }
> = {
  Performance: { label: "Performance", icon: "⚡" },
  Architecture: { label: "Architecture", icon: "🧠" },
  "UI/UX": { label: "UI/UX", icon: "🎨" },
  DevOps: { label: "DevOps", icon: "🔧" },
};

const extrasById: Partial<Record<string, Partial<EnrichedProject>>> = {
  "fleet-intelligence": {
    challengeCategory: "Performance",
    metrics: [
      { label: "Analysis windows", value: "3" },
      { label: "KPI surfaces", value: "4+" },
      { label: "Data sources", value: "5" },
      { label: "Decision latency", value: "<1d" },
    ],
    hardestBug:
      "Wialon telemetry arrived with mixed units, delayed packets, and duplicate ignition events. Utilization and fuel KPIs drifted unless the ingest path de-duplicated by unit + timestamp and normalized engine hours before aggregation.",
    architectureDiagram: `flowchart LR
  W[Wialon API] --> I[Ingest + normalize]
  I --> S[(Operational store)]
  S --> D[Fleet dashboard]
  S --> E[ERP / business systems]
  D --> O[Ops decisions]`,
    retrospectiveSteps: [
      {
        day: 1,
        title: "Map the decision, not the tracker",
        description:
          "Sat with operators and listed the questions they actually ask: who is idle, who is leaking fuel, what changed in the last 7 days. Tracking screens were not the product.",
      },
      {
        day: 2,
        title: "Contract the telemetry",
        description:
          "Locked a Wialon ingest contract: unit identity, timestamps, fuel, engine hours, and event types. Everything else stayed raw until a KPI needed it.",
      },
      {
        day: 3,
        title: "Ship analysis windows",
        description:
          "Today / 7-day / 30-day filters became first-class. Managers could investigate a spike without exporting CSV and rebuilding the chart in Excel.",
      },
      {
        day: 4,
        title: "Join the commercial picture",
        description:
          "Where it added value, fleet activity sat next to ERP context so exceptions were operational, not just geospatial.",
      },
    ],
    descriptionTech:
      "Next.js dashboard over Wialon REST telemetry. Python/SQL transforms produce utilization, fuel, and incident aggregates. Role-aware views for ops, support, and admin. Optional ERP join for a single operational picture.",
    githubUrl: siteConfig.social.github,
  },
  "yakwetu-pricing": {
    challengeCategory: "Performance",
    metrics: [
      { label: "Simulated revenue lift", value: "+11.5%" },
      { label: "Demand accuracy", value: "77.9%" },
      { label: "Forecast window", value: "7 days" },
      { label: "High-demand price", value: "+20%" },
    ],
    hardestBug:
      "The first demand model looked almost perfect until we found leakage — engagement metrics that only exist after someone has already watched. A pricing engine cannot use that. We rebuilt on forecastable features only: weather, calendar, and lagged demand. Accuracy dropped, then reached 77.9% on a model a commercial team could actually trust.",
    architectureDiagram: `flowchart LR
  V[Views + transactions] --> J[Daily join]
  W[Weather] --> J
  J --> M[Demand model]
  M --> P[Price recommendation]
  P --> D[7-day dashboard]`,
    retrospectiveSteps: [
      {
        day: 1,
        title: "Price the demand, not the weather story",
        description:
          "The question was commercial: when should the ticket move. Weather was an input, not the product.",
      },
      {
        day: 2,
        title: "Kill the leaked model",
        description:
          "Post-watch metrics made accuracy look perfect and made the price unusable. Forecastable features only.",
      },
      {
        day: 3,
        title: "Turn prediction into a rule",
        description:
          "+20% on high demand, -10% on low, with weather and weekend weight. Something a pricing meeting can debate.",
      },
      {
        day: 4,
        title: "Put it on a desk",
        description:
          "Live climate, 7-day demand class, and recommended price — not a notebook a commercial lead will not open.",
      },
    ],
    descriptionTech:
      "Shipped demand and pricing product: platform usage joined to Open-Meteo climate, XGBoost demand class, Prophet trend, hybrid forecast, and a live 7-day price dashboard.",
    liveDemoUrl: "https://yakwetu-weather-dynamic-project.vercel.app/",
    githubUrl: "https://github.com/joyaran/Yakwetu_project",
  },
  "erp-ai-helpdesk": {
    challengeCategory: "Architecture",
    metrics: [
      { label: "Retrieval modes", value: "3" },
      { label: "Answer grounding", value: "SOP" },
      { label: "File types", value: "3" },
      { label: "Roles", value: "2" },
    ],
    hardestBug:
      "Staff never typed SOP titles. Pure vector search missed short, paraphrased questions; keyword-only search missed conceptual matches. Hybrid retrieval (vector + keyword + title) with a re-rank step was the difference between a demo and a helpdesk.",
    architectureDiagram: `flowchart LR
  U[Staff question] --> R[Hybrid retriever]
  KB[(pgvector SOP store)] --> R
  R --> LLM[Gemini grounded answer]
  M[Manager upload] --> IDX[Chunk + embed]
  IDX --> KB
  LLM --> A[Cited response]`,
    retrospectiveSteps: [
      {
        day: 1,
        title: "Ground in SOPs, not vibes",
        description:
          "The assistant is not a general chatbot. Every answer has to come from approved process documents or it is a liability.",
      },
      {
        day: 2,
        title: "Hybrid retrieval",
        description:
          "Embeddings for meaning, keywords for SKUs and form names, title match for known SOP heads. One channel was never enough.",
      },
      {
        day: 3,
        title: "Let managers update the brain",
        description:
          "PDF / DOCX / image upload and reindexing so process changes do not wait for a deploy.",
      },
      {
        day: 4,
        title: "Log the conversation",
        description:
          "Chat history and activity logs for Staff vs Manager roles. If guidance is wrong, we can see what was asked and what was retrieved.",
      },
    ],
    descriptionTech:
      "RAG helpdesk on Next.js, Supabase pgvector, and Google Gemini. Chunking + embeddings over SOP/FAQ corpus. Hybrid retrieval: vector, keyword, and title. Manager reindex tools. Role split, chat history, activity logging.",
    githubUrl: siteConfig.social.github,
  },
  "rank-solutions": {
    challengeCategory: "Architecture",
    metrics: [
      { label: "Employees in view", value: "26" },
      { label: "Workforce cards", value: "4" },
      { label: "Attendance states", value: "5" },
      { label: "Tenancy", value: "Isolated" },
    ],
    hardestBug:
      "Payslip confidentiality broke the naive file-download path. A signed, password-gated retrieval with request logging was required so finance could not leak compensation through a shared URL, and so every access had an actor and timestamp.",
    architectureDiagram: `flowchart TB
  T[Tenant workspace] --> RBAC[Role + position RBAC]
  RBAC --> EMP[Employee portal]
  RBAC --> MGR[Manager portal]
  RBAC --> HR[HR portal]
  RBAC --> FIN[Finance portal]
  HR --> PG[(PostgreSQL)]
  FIN --> SL[Payslip vault]`,
    retrospectiveSteps: [
      {
        day: 1,
        title: "Tenant first",
        description:
          "Each organization is an isolated workspace. Shared tables without a tenant key are a data-leak waiting to happen.",
      },
      {
        day: 2,
        title: "Encode the people process",
        description:
          "Leave, attendance, advances, and approvals became state machines instead of WhatsApp threads.",
      },
      {
        day: 3,
        title: "Protect compensation",
        description:
          "Payslips are retrieved, not emailed as naked attachments. Password gate + request log.",
      },
      {
        day: 4,
        title: "Service layer, not page logic",
        description:
          "Next.js + TypeScript APIs on Drizzle/PostgreSQL so HR rules live in one place across portals.",
      },
    ],
    descriptionTech:
      "Multi-tenant HR/payroll on Next.js, Auth.js, Drizzle, and PostgreSQL. Tenant isolation, position-aware RBAC, leave/attendance/advance workflows, and password-protected payslip retrieval with audit metadata.",
    githubUrl: siteConfig.social.github,
  },
  libranest: {
    challengeCategory: "UI/UX",
    metrics: [
      { label: "Circulation actions", value: "4" },
      { label: "Role types", value: "4" },
      { label: "Inventory loop", value: "Audit" },
      { label: "Front desk", value: "Realtime" },
    ],
    hardestBug:
      "Issue/return looked simple until renew + reserve collided with loan limits. A copy could be reserved, overdue, and requested for renew in the same hour. The UI had to show one legal next action, not four competing buttons.",
    architectureDiagram: `flowchart LR
  CAT[Catalog] --> CIRC[Circulation engine]
  MEM[Membership] --> CIRC
  CIRC --> LOAN[(Loan + fine store)]
  CIRC --> UI[Front-desk UI]
  LOAN --> AN[Usage analytics]`,
    retrospectiveSteps: [
      {
        day: 1,
        title: "Design the desk, not the schema",
        description:
          "Librarians need issue / return / renew / reserve in a few seconds. If the happy path takes a modal stack, the register wins.",
      },
      {
        day: 2,
        title: "Make state visible",
        description:
          "Due dates, overdues, and loan limits on the member record. No hidden rules in code the desk cannot see.",
      },
      {
        day: 3,
        title: "Barcode as a first-class input",
        description:
          "Scan-driven circulation beats typing accession numbers. QR/barcode support is UX, not a gimmick.",
      },
      {
        day: 4,
        title: "Close the loop with analytics",
        description:
          "Borrowing trends and member activity so the library is a measurable service, not only a ledger.",
      },
    ],
    descriptionTech:
      "Role-aware library ops on Next.js, TypeScript, MongoDB/Mongoose, and TanStack Query. Circulation engine for issue/return/renew/reserve, fines, inventory audits, barcode/QR, and usage analytics for admins, librarians, teachers, and students.",
    githubUrl: siteConfig.social.github,
  },
};

function fallbackExtras(project: Project): EnrichedProject {
  return {
    ...project,
    challengeCategory: "Architecture",
    metrics: [
      { label: "Stack items", value: String(project.stack.length) },
      { label: "Capabilities", value: String(project.features.length) },
      { label: "Outcomes", value: String(project.impact.length) },
      { label: "Status", value: "Shipped" },
    ],
    hardestBug:
      "The hard part was not the UI. It was keeping operational truth consistent as source systems lagged, duplicated, or disagreed — then showing one action the user could trust.",
    architectureDiagram: `flowchart LR
  S[Sources] --> T[Transform]
  T --> A[(Application data)]
  A --> U[Role-aware UI]`,
    retrospectiveSteps: [
      {
        day: 1,
        title: "Name the decision",
        description: `Started from the operator question behind ${project.title}, not from a screen inventory.`,
      },
      {
        day: 2,
        title: "Bound the data",
        description: "Locked identities, timestamps, and the few metrics that actually change a decision.",
      },
      {
        day: 3,
        title: "Ship a thin slice",
        description: "One workflow in production beats a perfect architecture deck.",
      },
      {
        day: 4,
        title: "Instrument and harden",
        description: "Auth, roles, and an audit path so the system can be trusted after the demo.",
      },
    ],
    descriptionTech: `${project.solution} Stack: ${project.stack.join(", ")}.`,
    githubUrl: siteConfig.social.github,
  };
}

/** Runtime migration: fill new Project fields so older records keep compiling. */
export function withProjectDefaults(project: Project): EnrichedProject {
  const extras = extrasById[project.id] ?? {};
  const fallback = fallbackExtras(project);

  return {
    ...project,
    challengeCategory: project.challengeCategory ?? extras.challengeCategory ?? fallback.challengeCategory,
    metrics: project.metrics ?? extras.metrics ?? fallback.metrics,
    hardestBug: project.hardestBug ?? extras.hardestBug ?? fallback.hardestBug,
    architectureDiagram:
      project.architectureDiagram ?? extras.architectureDiagram ?? fallback.architectureDiagram,
    retrospectiveSteps:
      project.retrospectiveSteps ?? extras.retrospectiveSteps ?? fallback.retrospectiveSteps,
    descriptionTech: project.descriptionTech ?? extras.descriptionTech ?? fallback.descriptionTech,
    liveDemoUrl: project.liveDemoUrl ?? extras.liveDemoUrl,
    githubUrl: project.githubUrl ?? extras.githubUrl ?? fallback.githubUrl,
  };
}

export function enrichProjects(projects: Project[]): EnrichedProject[] {
  return projects.map(withProjectDefaults);
}

export function groupByCategory(projects: EnrichedProject[]) {
  return CATEGORY_ORDER.map((category) => ({
    category,
    ...CATEGORY_META[category],
    items: projects.filter((project) => project.challengeCategory === category),
  })).filter((group) => group.items.length > 0);
}

export function matchesQuery(project: EnrichedProject, query: string) {
  const haystack = [
    project.title,
    project.subtitle,
    project.org,
    project.tag,
    project.problem,
    project.solution,
    project.outcome,
    project.descriptionTech,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.trim().toLowerCase());
}
