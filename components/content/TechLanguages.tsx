import { SiPython, SiTypescript, SiJavascript, SiCplusplus, SiMysql } from "react-icons/si";

const items = [
  { label: "Python", Icon: SiPython, color: "#3b82a6" },
  { label: "TypeScript", Icon: SiTypescript, color: "#2563eb" },
  { label: "JavaScript", Icon: SiJavascript, color: "#ca8a04" },
  { label: "C++", Icon: SiCplusplus, color: "#0284c7" },
  { label: "SQL", Icon: SiMysql, color: "#0d9488" },
];

export default function TechLanguages() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">TECH STACK</span>
          <h1>Programming Languages</h1>
        </div>
      </header>
      <p className="lead">
        Core languages utilized for Machine Learning models, backend APIs, data structures, and responsive user interfaces.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map(({ label, Icon, color }) => (
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
            <span className="font-cambria font-semibold text-base text-ink-primary">
              {label}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
