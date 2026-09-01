export const siteConfig = {
  name: "Simon Musyoki",
  title: "Simon Musyoki — Data Scientist",
  description:
    "Data Scientist at Controltech Limited designing and deploying production-grade AI, analytics, and fleet intelligence systems across East Africa.",
  role: "Data Scientist",
  heroRoles: "Data Scientist",
  tagline: "I turn operational noise into systems leadership can run.",
  headline:
    "Building production-grade AI, analytics, and intelligent decision-support systems that transform complex data into measurable business value.",
  email: "simonmusyoki2019@gmail.com",
  phone: "+254 792 162 750",
  location: "Nairobi, Kenya",
  cvPath: "/images/Simon.pdf",
  cvFileName: "Simon_Musyoki_Data_Scientist_CV.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/simon-musyoki-64a52232a/",
    github: "https://github.com/Simonrank",
    whatsapp: "https://wa.me/254792162750",
  },
  employer: {
    title: "Data Scientist",
    company: "Controltech Limited",
    blurb:
      "Leading provider of Telematics & Fleet Management solutions in Kenya and East Africa",
  },
} as const;

export const heroMetrics = [
  {
    label: "Current Role",
    value: "Data Scientist",
    detail: "Controltech Limited",
  },
  {
    label: "Enterprise Solutions",
    value: "4+",
    detail: "Production systems",
  },
  {
    label: "Industries",
    value: "Fleet · AI · HR",
    detail: "Analytics & operations",
  },
] as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export const about = {
  label: "About",
  title: "About Me",
  paragraphs: [
    "I'm a **Data Scientist** at Controltech Limited. I build production systems that turn telematics, operations, and business data into decisions people can run.",
    "The work spans **fleet intelligence, RAG assistants, and operational products** — Next.js, Python, SQL, and the data layer underneath. I ship the dashboard, the pipeline, and the access model, not just the notebook.",
    "If it doesn't change what an operator, manager, or finance lead does on Monday, it isn't finished.",
  ],
  tagline: "I build. I analyze. I automate. I solve problems.",
} as const;

export const experience = [
  {
    title: "Data Scientist",
    company: "Controltech Limited",
    period: "Present",
    location: "Kenya & East Africa",
    current: true,
    summary:
      "I design and ship production analytics and AI systems for telematics and fleet operations — from ingest and models to the portals controllers, support, and leadership actually run.",
    highlights: [
      "Fleet intelligence for 400+ tracked units: utilization, fuel, exceptions, and analysis windows in one operational picture.",
      "Internal RAG helpdesk over ERP SOPs so staff get grounded, step-by-step answers instead of interrupting managers.",
      "Role-aware portals and audit-friendly reporting so operations stop reconciling spreadsheets against vendor consoles.",
      "Production ownership end to end: auth, RBAC, sync pipelines, migrations, and reliable Vercel releases.",
    ],
    focus: ["Python", "SQL", "Next.js", "Wialon API", "RAG", "PostgreSQL"],
  },
  {
    title: "Data Analyst Intern",
    company: "Salama Youth Hub",
    period: "Oct 2024 – Present",
    location: "Kenya",
    current: false,
    summary:
      "Dashboards and quality-systems support for youth and standards-aligned programs.",
    highlights: [
      "Power BI and Tableau dashboards that cut reporting time by 25%.",
      "NQI Integrated Management Systems coordination at 100% standards compliance.",
    ],
  },
  {
    title: "Survey Analyst",
    company: "Reuben Centre",
    period: "Sep 2024",
    location: "Kenya",
    current: false,
    summary:
      "Research engagement that informed organizational rebranding and program strategy.",
    highlights: [
      "Led a 300+ participant survey; analysis briefed leadership and shaped strategy.",
      "Designed survey instruments aligned to the Centre's actual decision questions.",
    ],
  },
  {
    title: "Enumerator",
    company: "Ministry of Labour and Social Protection",
    period: "Oct 2024",
    location: "Kenya",
    current: false,
    summary:
      "Field collection for welfare and social protection programs — completeness first.",
    highlights: [
      "Household surveys with 100% completeness on assigned welfare caseloads.",
      "Reduced survey errors by 15% through clearer field communication.",
    ],
  },
  {
    title: "Attachment — NQI Department",
    company: "Kenya Bureau of Standards",
    period: "Apr – Jul 2024",
    location: "Kenya",
    current: false,
    summary:
      "Program analytics and reporting inside the National Quality Institute.",
    highlights: [
      "Monthly analytical reports that informed program strategy and delivery.",
      "Tracked KPIs and briefed leadership; youth program participation up 30%.",
    ],
  },
] as const;

export const education = [
  {
    institution: "Moringa School",
    detail: "Advanced Data Science Program",
    period: "2025",
    kind: "program",
  },
  {
    institution: "Karatina University",
    detail: "BSc. Applied Statistics with Computing — Second Class Honors",
    period: "Degree",
    kind: "degree",
  },
  {
    institution: "Google Analytics 4",
    detail: "Allison",
    period: "Certificate",
    kind: "certificate",
  },
] as const;

export type ChallengeCategory = "Performance" | "Architecture" | "UI/UX" | "DevOps";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  org: string;
  tag: string;
  featured?: boolean;
  problem: string;
  solution: string;
  impact: string[];
  features: string[];
  stack: string[];
  outcome: string;
  image?: string;
  challengeCategory?: ChallengeCategory;
  metrics?: { label: string; value: string }[];
  hardestBug?: string;
  architectureDiagram?: string;
  retrospectiveSteps?: { day: number; title: string; description: string }[];
  descriptionTech?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  bookDemo?: boolean;
};

export const projects: Project[] = [
  {
    id: "fleet-intelligence",
    featured: true,
    title: "Fleet Management & Telematics Intelligence",
    subtitle: "Turning vehicle telemetry into decisions operators can act on",
    org: "Production work in telematics & fleet operations",
    tag: "Featured · Fleet Intelligence",
    image: "/images/projects/fleet-telematics-dashboard.png",
    problem:
      "Telematics platforms collect GPS, engine, fuel, and sensor data at scale — but operations teams still jump between tracking consoles, spreadsheets, and ERP screens. The data exists. The decision layer does not.",
    solution:
      "I design and ship web applications that ingest live telematics through the Wialon API, process it into operational metrics, and present it in one place: vehicles, utilization, fuel, driver events, and performance. Where it adds value, that same data is connected to business and ERP systems so fleet activity sits next to commercial operations.",
    impact: [
      "Live and historical fleet view from a single operational dashboard",
      "Fuel consumption, top-ups, efficiency, and theft events as first-class KPIs",
      "Selectable analysis windows so managers can investigate today, 7 days, or 30 days",
      "Faster operational decisions without reconciling disconnected telematics screens",
    ],
    features: [
      "Interactive dashboards for vehicles, mileage, engine hours, fuel, and utilization",
      "Wialon API integration for real-time vehicle and sensor telemetry",
      "Fuel-theft and incident views with filters by fleet and theft type",
      "ERP and business-system integration for a unified operational picture",
      "Historical analysis, performance monitoring, and automated reporting",
      "Role-aware access for operations, support, and administration",
    ],
    stack: [
      "Wialon API",
      "Python",
      "SQL",
      "Next.js",
      "TypeScript",
      "React",
      "Supabase",
      "Power BI",
      "REST APIs",
    ],
    outcome:
      "Fleet managers move from raw tracking data to a clear operational picture — what is happening across the fleet, where exceptions sit, and what to act on next.",
  },
  {
    id: "erp-ai-helpdesk",
    title: "Enterprise AI Knowledge Assistant",
    org: "Internal product · RAG",
    tag: "Enterprise AI",
    problem:
      "Staff across multiple countries were hunting through SOPs or interrupting managers for routine ERP process questions — creating delays and inconsistent guidance.",
    solution:
      "An internal AI helpdesk grounded in company Standard Operating Procedures via a Retrieval-Augmented Generation pipeline — so answers are step-by-step, sourced, and controllable by managers.",
    impact: [
      "Production assistant for day-to-day ERP process guidance",
      "Living SOP knowledge base that managers can update without redeploying",
      "Paraphrase-tolerant retrieval so staff do not need exact wording",
    ],
    features: [
      "RAG over SOPs and FAQs with embeddings and document understanding",
      "Hybrid retrieval: vector, keyword, and title matching",
      "Manager tools for PDF / DOCX / image upload and reindexing",
      "Staff vs Manager roles, chat history, and activity logging",
    ],
    stack: [
      "Next.js",
      "React",
      "Supabase",
      "pgvector",
      "Google Gemini",
      "RAG",
      "Vercel",
    ],
    outcome:
      "Faster answers for staff, fewer interruptions for managers, and consistent guidance from a shared source of truth.",
  },
  {
    id: "rank-solutions",
    title: "Rank Solutions — HR & Payroll",
    subtitle: "Workforce, leave, and attendance in one tenant-isolated product",
    org: "Independent product",
    tag: "Rank Solutions",
    image: "/images/projects/rank-solutions-dashboard.png",
    problem:
      "Growing companies still run leave, attendance, advances, and payslips through spreadsheets and chat — creating delays, weak audit trails, and payroll confidentiality risk.",
    solution:
      "A multi-tenant HR platform where each organization operates in an isolated workspace, with portals for employees, managers, HR, and finance.",
    impact: [
      "Structured leave and advance approvals instead of informal chat",
      "Employee self-service for common people-process requests",
      "Password-protected payslip delivery with request logging",
    ],
    features: [
      "Tenant isolation with role- and position-aware access",
      "Leave workflows, attendance, org chart, and salary advances",
      "Secure payslip retrieval by email with audit metadata",
      "Service-layer APIs on Next.js, TypeScript, and PostgreSQL",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Drizzle",
      "PostgreSQL",
      "Supabase",
    ],
    outcome:
      "One secure HR/payroll system that replaces informal people-process tooling with auditable workflows.",
    bookDemo: true,
  },
  {
    id: "libranest",
    title: "Library Management Platform",
    org: "Independent product",
    tag: "Operations Platform",
    problem:
      "Libraries still rely on manual registers and spreadsheets for cataloging, circulation, fines, and reporting — losing stock visibility and slowing front-desk operations.",
    solution:
      "A role-aware platform covering catalog, membership, issue/return/renew/reserve, fines, inventory audits, and usage analytics.",
    impact: [
      "Digital circulation with loan history and overdue tracking",
      "Fines and payment flows that improve revenue recovery",
      "Analytics for borrowing trends and member activity",
    ],
    features: [
      "Circulation workflows with limits, due dates, and overdues",
      "Barcode / QR support, exports, and inventory auditing",
      "Permission model for admins, librarians, teachers, and students",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "TanStack Query"],
    outcome:
      "A production-style operations product that turns a traditionally manual library into a measurable digital service.",
    bookDemo: true,
  },
];

export const expertise = [
  {
    title: "Statistical Analysis",
    detail:
      "Inferential thinking, survey design, KPI definition, and rigorous interpretation under messy operational data.",
  },
  {
    title: "Machine Learning",
    detail:
      "Supervised models, evaluation discipline, and applied prediction for risk, demand, and operational outcomes.",
  },
  {
    title: "Artificial Intelligence",
    detail:
      "RAG systems, embeddings, document understanding, and controlled enterprise assistants grounded in SOPs.",
  },
  {
    title: "Business Intelligence",
    detail:
      "Executive and operations dashboards that replace spreadsheet sprawl with decision-ready monitoring.",
  },
  {
    title: "Data Engineering",
    detail:
      "Ingestion, nightly syncs, enrichment from Sheets/telematics, and durable Postgres schemas for live systems.",
  },
  {
    title: "Analytics Engineering",
    detail:
      "Metric definitions, analysis windows, escalation rules, and audit-friendly status histories.",
  },
  {
    title: "Software Engineering",
    detail:
      "Full-stack product delivery with auth, RBAC, multi-tenancy, APIs, and maintainable service layers.",
  },
  {
    title: "Cloud Deployment",
    detail:
      "Production releases on Vercel with hardened auth, env discipline, rate limits, and reliable migrations.",
  },
] as const;

export const techStack = [
  {
    category: "Programming",
    items: ["Python", "TypeScript", "SQL", "JavaScript"],
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    category: "Visualization & BI",
    items: ["Power BI", "Tableau", "Excel", "Plotly", "Matplotlib", "Recharts"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TanStack Query"],
  },
  {
    category: "Backend & Data",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Drizzle", "Mongoose", "REST APIs"],
  },
  {
    category: "AI Systems",
    items: ["RAG", "pgvector", "Gemini", "Embeddings"],
  },
  {
    category: "Integrations & Auth",
    items: ["Wialon API", "Auth.js"],
  },
  {
    category: "Deployment",
    items: ["Docker", "GitHub", "Vercel", "CI-minded releases"],
  },
] as const;

export const businessImpact = [
  {
    title: "Operational Intelligence",
    detail:
      "Unite telematics, fuel analytics, and device health so controllers act on exceptions in hours — not after week-end spreadsheet reconciliations.",
  },
  {
    title: "Business Automation",
    detail:
      "Encode escalation matrices, approval workflows, and nightly sync jobs that remove manual chasing from fleet and people operations.",
  },
  {
    title: "Predictive & Risk Analytics",
    detail:
      "Surface theft patterns, offline trackers, repeat offenders, and utilization gaps before they become irreversible losses.",
  },
  {
    title: "AI Knowledge Systems",
    detail:
      "Ground assistants in approved SOPs so multi-country teams get consistent process guidance without blocking managers.",
  },
  {
    title: "Decision Support",
    detail:
      "Design role-aware portals where Support, Ops, Finance, and Leadership each see the slice of truth they need to decide.",
  },
  {
    title: "Reporting Automation",
    detail:
      "Replace ad-hoc exports with selectable analysis windows, ranked watchlists, and audit-ready CSV / Excel / PDF outputs.",
  },
] as const;

export const researchInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Statistical Learning",
  "Operational Research",
  "Transportation Analytics",
  "Fleet Intelligence",
  "Business Intelligence",
  "Predictive Analytics",
  "Explainable AI",
] as const;

export const researchBlurb =
  "I am particularly interested in applied AI and statistical systems for high-stakes operations — especially transportation, telematics, and enterprise knowledge work — where models must be interpretable, auditable, and deployed as reliable products.";

export const githubPinned = [
  {
    name: "Flight-Data-Analysis",
    description: "Aviation safety analysis and risk exploration from accident data.",
    language: "Python",
    href: "https://github.com/Simonrank/Flight-Data-Analysis",
  },
  {
    name: "Heart_Failure_Prediction",
    description: "Healthcare outcome modeling for earlier clinical intervention.",
    language: "Python",
    href: "https://github.com/Simonrank/Heart_Failure_Prediction",
  },
  {
    name: "Simon-Musyoki",
    description: "Personal portfolio — production AI & analytics systems.",
    language: "TypeScript",
    href: "https://github.com/Simonrank/Simon-Musyoki",
  },
] as const;
