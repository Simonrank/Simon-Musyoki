export const siteConfig = {
  name: "Simon Musyoki",
  title: "Simon Musyoki — Senior Data Scientist | AI & Analytics Engineer",
  description:
    "Data Scientist at Controltech Limited designing and deploying production-grade AI, analytics, and fleet intelligence systems across East Africa.",
  role: "Data Scientist | Statistician | AI & Analytics Engineer",
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
    value: "6+",
    detail: "Production systems",
  },
  {
    label: "Industries",
    value: "Fleet · AI · HR",
    detail: "Analytics & operations",
  },
] as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  label: "About",
  title: "I design decision systems, not demos.",
  paragraphs: [
    "I am a Data Scientist at Controltech Limited, where I design and ship production analytics platforms for telematics and fleet operations across East Africa. My work sits at the intersection of statistics, machine learning, AI, and software engineering — turning live operational data into systems leaders can run the business on.",
    "I build end-to-end products: data pipelines, models and retrieval systems, secure multi-role applications, and dashboards that replace fragmented spreadsheets and telematics screens. The goal is always the same — reduce ambiguity, surface risk early, and make high-stakes operational decisions faster and more defensible.",
    "Whether the problem is fuel-theft detection, fleet health escalation, SOP-aware AI assistance, or multi-tenant workforce platforms, I own the path from problem framing to production deployment.",
  ],
} as const;

export const experience = [
  {
    title: "Data Scientist",
    company: "Controltech Limited",
    period: "Present",
    location: "Kenya & East Africa",
    current: true,
    summary:
      "Leading provider of Telematics & Fleet Management solutions in Kenya and East Africa. I design and deploy production-ready analytics solutions that combine statistical methods, machine learning, artificial intelligence, and software engineering.",
    highlights: [
      "Ship full-stack fleet intelligence platforms that unify telematics, fuel analytics, camera health, and escalation workflows for 400+ tracked units.",
      "Build AI systems grounded in company knowledge — including an Odoo SOP helpdesk using RAG over internal documentation.",
      "Partner with operations, support, and leadership to convert noisy operational data into decision-ready portals, alerts, and audit-friendly reporting.",
      "Own production concerns end to end: auth, role-based access, sync pipelines, database migrations, Vercel deploys, and reliable release hygiene.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Salama Youth Hub",
    period: "October 2024 – Present",
    location: "Kenya",
    current: false,
    summary:
      "Analytics and quality-systems support for youth and standards-aligned programs.",
    highlights: [
      "Developed interactive dashboards in Power BI and Tableau, reducing reporting time by 25% and enabling faster data-driven decisions for stakeholders.",
      "Coordinated logistics and managed the National Quality Institute (NQI) Integrated Management Systems (IMS), ensuring 100% compliance with quality standards.",
      "Collaborated on module development, conferences, and stakeholder engagement activities.",
    ],
  },
  {
    title: "Survey Analyst",
    company: "Reuben Centre",
    period: "September 2024",
    location: "Kenya",
    current: false,
    summary:
      "Led a research engagement that informed organizational rebranding and program strategy.",
    highlights: [
      "Led a comprehensive survey with 300+ participants to identify organizational strengths and community needs.",
      "Analyzed complex survey data and provided insights that guided the Centre's rebranding and strategic decisions.",
      "Designed structured survey tools ensuring alignment with business objectives.",
      "Presented findings to leadership, influencing upcoming program strategies.",
    ],
  },
  {
    title: "Enumerator",
    company: "Ministry of Labour and Social Protection",
    period: "October 2024",
    location: "Kenya",
    current: false,
    summary:
      "Field data collection for welfare and social protection programs with emphasis on completeness and accuracy.",
    highlights: [
      "Conducted household surveys and interviews ensuring 100% data completeness and accuracy for welfare and social protection programs.",
      "Improved response clarity and reduced survey errors by 15% through effective communication.",
      "Worked with field teams to streamline data collection and ensure timely submissions.",
    ],
  },
  {
    title: "Attachment — NQI Department",
    company: "Kenya Bureau of Standards",
    period: "April – July 2024",
    location: "Kenya",
    current: false,
    summary:
      "Program analytics and youth engagement support within the National Quality Institute department.",
    highlights: [
      "Analyzed beneficiary and program data to assess effectiveness and identify improvement areas.",
      "Prepared monthly analytical reports that informed program strategy and service delivery.",
      "Facilitated youth support groups, increasing participation in programs by 30%.",
      "Tracked key performance metrics and presented insights to the leadership team.",
    ],
  },
] as const;

export const education = [
  {
    institution: "Moringa School",
    detail: "Advanced Data Science Program",
    period: "Graduated November 14, 2025",
  },
  {
    institution: "Karatina University",
    detail: "BSc. Applied Statistics with Computing — Second Class Honors",
    period: "Degree",
  },
  {
    institution: "Allison",
    detail: "Google Analytics 4 Certification",
    period: "Certificate",
  },
  {
    institution: "Miccato America Share",
    detail: "Certificate in Computer Packages",
    period: "Certificate",
  },
  {
    institution: "Makindu Boys' School",
    detail: "Kenya Certificate of Secondary Education (KCSE)",
    period: "KCSE",
  },
] as const;

export type Project = {
  id: string;
  title: string;
  org: string;
  tag: string;
  problem: string;
  solution: string;
  impact: string[];
  features: string[];
  stack: string[];
  outcome: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "kasulu",
    title: "Rai Group Kasulu / Kabras Fleet Intelligence",
    org: "Controltech · Rai Group",
    tag: "Fleet Intelligence",
    problem:
      "Ops teams tracked vehicle health, fuel risk, and camera/tracker status across disconnected telematics screens and spreadsheets — too slow for daily control of a large sugar/fleet operation.",
    solution:
      "A secure full-stack operations portal that combines live Wialon telematics, fuel-theft analytics, Howen VSS camera matching, Google Sheets reporting windows, and a Connection Status Escalation Matrix in one decision-ready workspace.",
    impact: [
      "Production fleet of ~400+ Track3 units with daily ON / OFF / N/A status history",
      "Auto-created Tracker Offline escalations after three consecutive OFF days",
      "Unified portal replacing fragmented spreadsheets and telematics consoles",
      "Role-based access from Super Admin through CT Support, plus public incident reporting",
    ],
    features: [
      "Live GPS, utilization, and mobile status ingestion from Wialon",
      "Fuel-theft analytics over selectable analysis windows",
      "Tracker / Probe / Camera health visibility day by day",
      "Escalation Matrix tickets with notifications and Support status overrides",
      "Nightly sync / cron pipelines and audit history",
      "Consolidated Supabase Postgres auth + fleet data (migrated off Neon)",
    ],
    stack: [
      "Next.js",
      "NextAuth",
      "PostgreSQL",
      "Supabase",
      "Wialon",
      "Google Sheets",
      "Vercel",
    ],
    outcome:
      "A production operations system that gives controllers and leadership one secure place to monitor fleet health, fuel risk, and escalations — with hardening for live login and reliable deploys.",
    image: "/images/Aviation.jpeg",
  },
  {
    id: "menengai",
    title: "Menengai Oil Fleet Intelligence Platform",
    org: "Controltech · Menengai Oil & Sukari Industries",
    tag: "Multi-Org Analytics",
    problem:
      "Fuel loss, utilization, and driver behaviour insights were trapped in telematics exports and spreadsheet workflows across two business units — delaying audits and operational intervention.",
    solution:
      "A multi-organization fleet intelligence dashboard that turns telematics and spreadsheet data into actionable analytics for fuel theft, utilization, and driver risk — with secure org switching and export-ready reporting.",
    impact: [
      "Single source of truth for fleet risk and performance across Menengai and Sukari",
      "Near-live monitoring of fuel-loss patterns and high-risk vehicles",
      "Leadership visibility into peak loss periods, theft-type mix, and repeat offenders",
      "One-click CSV / Excel / PDF exports for audit, finance, and operations",
    ],
    features: [
      "Separate business-unit dashboards with shared authentication",
      "Fuel theft analytics (direct vs return-pipe) and weekly trends",
      "Repeat-offender watchlists, vehicle profiles, and ranked risk views",
      "Google Sheets + Excel import paths for existing operating rhythms",
      "Role-based access: Super Admin, Admin, Operator",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Google Sheets",
      "Analytics UI",
      "Role-based Auth",
      "Export Pipeline",
    ],
    outcome:
      "Operations and leadership teams can identify suspicious vehicles faster, act on utilization and theft patterns, and leave fragmented Excel consolidation behind.",
    image: "/images/yakwetu.jpeg",
  },
  {
    id: "odoo-ai",
    title: "Controltech Odoo Helpdesk — AI Knowledge Assistant",
    org: "Controltech Limited",
    tag: "Enterprise AI · RAG",
    problem:
      "Staff across Kenya, Tanzania, and Uganda were hunting through SOPs or interrupting managers for routine Odoo process questions — creating delays and inconsistent guidance.",
    solution:
      "An internal AI helpdesk grounded in company Standard Operating Procedures via a Retrieval-Augmented Generation pipeline — so answers are step-by-step, sourced, and controllable by managers.",
    impact: [
      "Production internal assistant for day-to-day Odoo process guidance",
      "Living SOP knowledge base searchable across onboarding, job cards, expenses, and more",
      "Paraphrase-tolerant retrieval reduces dependence on exact wording",
      "Managers refresh knowledge via UI without redeploying the product",
    ],
    features: [
      "RAG over SOPs and FAQs with Gemini for chat, embeddings, and document understanding",
      "Hybrid retrieval: vector + keyword + title matching with synonym handling",
      "Manager tools for PDF / DOCX / image upload, AI extraction, and reindexing",
      "Staff vs Manager roles, chat history, activity logging",
      "Rate limiting, safer no-match behaviour, and production API routes on Vercel",
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
      "Faster answers for staff, fewer interruptions for managers, and consistent, approved guidance from a shared source of truth across East African teams.",
    image: "/images/chatbot.jpeg",
  },
  {
    id: "rank-solutions",
    title: "Rank-Solutions — HR & Payroll SaaS",
    org: "Independent Product",
    tag: "Multi-Tenant SaaS",
    problem:
      "Growing SMEs still run leave, attendance, advances, and payslips through spreadsheets, WhatsApp, and email — creating delays, weak audit trails, and payroll confidentiality risk.",
    solution:
      "A multi-tenant HR platform where each company signs in with a company code into an isolated workspace, with role-aware portals for employees, managers, HR, and finance.",
    impact: [
      "Digitized leave and advance approvals with structured queues instead of chat chaos",
      "Employee self-service for leave, attendance, advances, and payslips",
      "Password-protected payslip email delivery with request audit logging",
      "SaaS-ready tenancy model for onboarding multiple companies",
    ],
    features: [
      "Tenant isolation via company code",
      "Leave types, balances, and multi-step approvals",
      "Attendance, org chart, and salary advance policies",
      "JWT / session auth with portal access by role and position",
      "Service-layer APIs on Next.js, TypeScript, Drizzle, PostgreSQL",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "Drizzle",
      "PostgreSQL",
      "Supabase",
      "Tailwind",
    ],
    outcome:
      "One secure, sellable HR/payroll system that replaces informal people-process tooling with auditable workflows and clear permissions.",
    image: "/images/sinema.jpeg",
  },
  {
    id: "libranest",
    title: "LibraNest — Enterprise Library Platform",
    org: "Independent Product",
    tag: "Operations Platform",
    problem:
      "Libraries still rely on manual registers and spreadsheets for cataloging, circulation, fines, and reporting — losing stock visibility and slowing front-desk operations.",
    solution:
      "A role-aware library management platform covering the full lifecycle: catalog, membership, issue/return/renew/reserve, fines, inventory audits, and usage analytics.",
    impact: [
      "End-to-end digital circulation with loan history and overdue tracking",
      "Fine and payment flows that improve revenue recovery",
      "Analytics for borrowing trends, category popularity, and member activity",
      "Permission model spanning admins, librarians, teachers, and students",
    ],
    features: [
      "Circulation workflows with limits, due dates, and overdue handling",
      "Books, categories, locations, cards, and digital resources",
      "Barcode / QR support, PDF/Excel exports, inventory auditing",
      "Operational dashboards with campus-aware filtering",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "TanStack Query",
      "Auth",
    ],
    outcome:
      "A production-style operations product that turns a traditionally manual library into a measurable digital service.",
    image: "/images/heartfailure.jpeg",
  },
  {
    id: "tata-equator",
    title: "TATA Fleet Insights & Equator Fleet Application",
    org: "Controltech Limited",
    tag: "Fleet Analytics",
    problem:
      "Enterprise fleet clients needed clearer utilization, exception monitoring, and operational reporting beyond raw telematics consoles.",
    solution:
      "Purpose-built fleet analytics applications that surface KPIs, exception patterns, and operational views tailored to each client’s control processes.",
    impact: [
      "Client-specific intelligence layers on top of telematics feeds",
      "Faster exception review for controllers and account teams",
      "Reporting surfaces aligned to commercial fleet operating models",
    ],
    features: [
      "Fleet KPI dashboards and exception-oriented views",
      "Secure access patterns for operational users",
      "Analytics workflows designed for daily fleet control",
    ],
    stack: ["Next.js", "Telematics APIs", "PostgreSQL", "BI / Analytics UI"],
    outcome:
      "Expanded Controltech’s delivery of client-ready fleet intelligence products beyond a one-size-fits-all telematics screen.",
    image: "/images/Background.jpeg",
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
    category: "Visualization",
    items: ["Power BI", "Plotly", "Matplotlib", "Recharts"],
  },
  {
    category: "Backend & Data",
    items: ["Next.js", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    category: "AI Systems",
    items: ["RAG", "pgvector", "Gemini", "Embeddings"],
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
