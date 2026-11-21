import {
  SiFastapi,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { FaServer } from "react-icons/fa6";

const items = [
  { label: "FastAPI", category: "Python & APIs", Icon: SiFastapi, color: "#009688" },
  { label: "Flask", category: "Python & APIs", Icon: SiFlask, color: "#000000" },
  { label: "REST APIs", category: "Backend Architecture", Icon: FaServer, color: "#e11d48" },
  { label: "React.js", category: "MERN Stack", Icon: SiReact, color: "#0284c7" },
  { label: "Next.js 14/15", category: "Full Stack", Icon: SiNextdotjs, color: "#0f172a" },
  { label: "Node.js", category: "Backend Runtime", Icon: SiNodedotjs, color: "#16a34a" },
  { label: "Express.js", category: "MERN Stack", Icon: SiExpress, color: "#475569" },
  { label: "Tailwind CSS", category: "UI & Design", Icon: SiTailwindcss, color: "#0284c7" },
  { label: "Pandas", category: "Data Analysis", Icon: SiPandas, color: "#150458" },
  { label: "NumPy", category: "Numerical Computing", Icon: SiNumpy, color: "#2563eb" },
  { label: "Scikit-Learn", category: "Machine Learning", Icon: SiScikitlearn, color: "#ea580c" },
];

export default function TechFrameworks() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">TECH STACK</span>
          <h1>Frameworks &amp; APIs</h1>
        </div>
        <span className="ink-stamp blue">APIS &amp; WEB</span>
      </header>
      <p className="lead">
        Modern backend frameworks, REST API libraries, MERN stack tools, and machine learning packages powering scalable web systems and autonomous services.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map(({ label, category, Icon, color }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl bg-white/95 p-3 md:p-4 border border-wc-border shadow-card hover:border-watercolor-blue/40 hover:-translate-y-0.5 transition-all"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: `${color}15`, color: color }}
            >
              <Icon size={22} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-cambria font-semibold text-sm md:text-base text-ink-primary truncate">
                {label}
              </span>
              <span className="text-[11px] text-ink-muted truncate font-sans">
                {category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}