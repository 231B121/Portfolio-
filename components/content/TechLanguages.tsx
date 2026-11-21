import { SiPython, SiTypescript, SiJavascript, SiCplusplus, SiMysql } from "react-icons/si";

const items = [
  { label: "Python", desc: "Core language for FastAPI, Flask, Scapy & ML pipelines", Icon: SiPython, color: "#3776ab" },
  { label: "JavaScript (ES6+)", desc: "Modern syntax, async/await, event loops, DOM & Node APIs", Icon: SiJavascript, color: "#ca8a04" },
  { label: "TypeScript", desc: "Type-safe engineering across React, Next.js & enterprise apps", Icon: SiTypescript, color: "#2563eb" },
  { label: "SQL", desc: "Complex joins, indexing, query optimization & relational schemas", Icon: SiMysql, color: "#0d9488" },
  { label: "C++", desc: "Algorithmic problem solving & 300+ LeetCode DSA implementations", Icon: SiCplusplus, color: "#0284c7" },
];

export default function TechLanguages() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">TECH STACK</span>
          <h1>Programming Languages</h1>
        </div>
        <span className="ink-stamp blue">CORE</span>
      </header>
      <p className="lead">
        Languages utilized for high-performance Python backends, machine learning anomaly detection, MERN full-stack architectures, and algorithmic problem solving.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {items.map(({ label, desc, Icon, color }) => (
          <div
            key={label}
            className="flex flex-col gap-2 rounded-xl bg-white/95 p-4 border border-wc-border shadow-card hover:border-watercolor-blue/40 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center gap-3">
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
            <p className="text-xs text-ink-muted font-sans leading-relaxed m-0">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}