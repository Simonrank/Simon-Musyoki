import {
  siDocker,
  siDrizzle,
  siGithub,
  siGooglegemini,
  siJavascript,
  siMongodb,
  siMongoose,
  siNextdotjs,
  siNumpy,
  siPandas,
  siPlotly,
  siPostgresql,
  siPython,
  siReact,
  siScikitlearn,
  siSupabase,
  siTanstack,
  siTensorflow,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

type StackLogo = {
  name: string;
  icon?: SimpleIcon;
  color?: string;
  mark?: "powerbi" | "tableau" | "excel";
};

const logos: StackLogo[] = [
  { name: "Python", icon: siPython },
  { name: "TypeScript", icon: siTypescript },
  { name: "JavaScript", icon: siJavascript },
  { name: "SQL", color: "#1A1916" },
  { name: "scikit-learn", icon: siScikitlearn },
  { name: "pandas", icon: siPandas },
  { name: "NumPy", icon: siNumpy },
  { name: "TensorFlow", icon: siTensorflow },
  { name: "Power BI", mark: "powerbi" },
  { name: "Tableau", mark: "tableau" },
  { name: "Excel", mark: "excel" },
  { name: "Plotly", icon: siPlotly },
  { name: "Next.js", icon: siNextdotjs },
  { name: "React", icon: siReact },
  { name: "TanStack", icon: siTanstack },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "Supabase", icon: siSupabase },
  { name: "Drizzle", icon: siDrizzle },
  { name: "Mongoose", icon: siMongoose },
  { name: "Gemini", icon: siGooglegemini },
  { name: "Wialon", color: "#0E7A66" },
  { name: "Auth.js", color: "#1A1916" },
  { name: "Docker", icon: siDocker },
  { name: "GitHub", icon: siGithub },
  { name: "Vercel", icon: siVercel },
];

function BrandMark({ logo }: { logo: StackLogo }) {
  if (logo.icon) {
    return (
      <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden>
        <path fill={`#${logo.icon.hex}`} d={logo.icon.path} />
      </svg>
    );
  }

  if (logo.mark === "powerbi") {
    return (
      <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden>
        <rect x="3" y="13" width="4.5" height="8" rx="1" fill="#F2C811" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="1" fill="#E6B800" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="1" fill="#F2C811" />
      </svg>
    );
  }

  if (logo.mark === "tableau") {
    return (
      <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden>
        <rect x="10" y="2" width="4" height="4" fill="#E97627" />
        <rect x="10" y="18" width="4" height="4" fill="#E97627" />
        <rect x="2" y="10" width="4" height="4" fill="#E97627" />
        <rect x="18" y="10" width="4" height="4" fill="#E97627" />
        <rect x="10" y="8" width="4" height="8" fill="#E97627" />
        <rect x="6" y="10" width="12" height="4" fill="#E97627" />
      </svg>
    );
  }

  if (logo.mark === "excel") {
    return (
      <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden>
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#217346" />
        <path
          d="M8.2 8.2 12 12l-3.8 3.8M15.8 8.2 12 12l3.8 3.8"
          fill="none"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <span
      className="font-display text-[1.7rem] font-semibold tracking-tight"
      style={{ color: logo.color }}
    >
      {logo.name}
    </span>
  );
}

function LogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="stack-marquee-set" aria-hidden={duplicate || undefined}>
      {logos.map((logo) => (
        <li key={logo.name} className="flex h-[5.5rem] min-w-[8.5rem] flex-col items-center justify-center gap-2">
          <BrandMark logo={logo} />
          {logo.icon || logo.mark ? (
            <span className="text-[0.72rem] font-semibold tracking-wide text-foreground/80">
              {logo.name}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="section border-t border-border bg-card !py-12 sm:!py-14">
      <h2 className="sr-only">Stack</h2>
      <div className="stack-marquee">
        <div className="stack-marquee-track">
          <LogoSet />
          <LogoSet duplicate />
        </div>
      </div>
    </section>
  );
}
