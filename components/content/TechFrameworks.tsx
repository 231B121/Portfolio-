import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiScikitlearn,
  SiNumpy,
} from "react-icons/si";

const items = [
  { label: "React.js", Icon: SiReact, color: "#0284c7" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#16a34a" },
  { label: "Express.js", Icon: SiExpress, color: "#475569" },
  { label: "Flask", Icon: SiFlask, color: "#0d9488" },
  { label: "Scikit-Learn", Icon: SiScikitlearn, color: "#ea580c" },
  { label: "NumPy", Icon: SiNumpy, color: "#2563eb" },
];

export default function TechFrameworks() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">TECH STACK</span>
          <h1>Frameworks &amp; Libraries</h1>
        </div>
      </header>
      <p className="lead">
        Libraries and frameworks powering Machine Learning models, microservices, REST APIs, and full stack web applications.
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
