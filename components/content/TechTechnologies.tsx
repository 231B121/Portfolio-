import {
  SiDocker,
  SiRedis,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiLinux,
  SiOpenai,
} from "react-icons/si";
import { FaBrain, FaNetworkWired, FaRobot, FaServer } from "react-icons/fa6";

const items = [
  { label: "LLMs & GenAI", Icon: SiOpenai, color: "#0d9488" },
  { label: "AI Agents & RAG", Icon: FaRobot, color: "#3b82a6" },
  { label: "Anomaly Detection", Icon: FaBrain, color: "#7c72ab" },
  { label: "Scapy & Packets", Icon: FaNetworkWired, color: "#0284c7" },
  { label: "Docker", Icon: SiDocker, color: "#0284c7" },
  { label: "Redis", Icon: SiRedis, color: "#dc2626" },
  { label: "MongoDB", Icon: SiMongodb, color: "#16a34a" },
  { label: "MySQL", Icon: SiMysql, color: "#0d9488" },
  { label: "REST APIs & Middleware", Icon: FaServer, color: "#475569" },
  { label: "Git", Icon: SiGit, color: "#ea580c" },
  { label: "GitHub", Icon: SiGithub, color: "#1e293b" },
  { label: "Postman", Icon: SiPostman, color: "#f97316" },
  { label: "Vercel", Icon: SiVercel, color: "#0f172a" },
  { label: "Linux", Icon: SiLinux, color: "#ca8a04" },
];

export default function TechTechnologies() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">TECH STACK</span>
          <h1>AI/ML, Tools &amp; Databases</h1>
        </div>
      </header>
      <p className="lead">
        Infrastructure, databases, container sandboxes, AI concepts, and developer tooling used across projects.
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
