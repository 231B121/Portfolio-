import {
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiOpenai,
  SiVercel,
} from "react-icons/si";
import { FaDatabase, FaNetworkWired, FaRobot, FaShieldHalved } from "react-icons/fa6";

const items = [
  { label: "MongoDB", category: "NoSQL Database", Icon: SiMongodb, color: "#16a34a" },
  { label: "MySQL / SQL", category: "Relational DB", Icon: SiMysql, color: "#0d9488" },
  { label: "Redis", category: "Cache & Queues", Icon: SiRedis, color: "#dc2626" },
  { label: "Docker", category: "Sandboxes & Containers", Icon: SiDocker, color: "#0284c7" },
  { label: "Git", category: "Version Control", Icon: SiGit, color: "#ea580c" },
  { label: "GitHub & Actions", category: "CI/CD & Octokit", Icon: SiGithub, color: "#1e293b" },
  { label: "Postman", category: "API Testing", Icon: SiPostman, color: "#f97316" },
  { label: "LLM Gateways & RAG", category: "AI Systems", Icon: SiOpenai, color: "#0d9488" },
  { label: "Scapy Packet Sniffing", category: "Network Telemetry", Icon: FaNetworkWired, color: "#3b82a6" },
  { label: "OSV.dev & Security", category: "Audit & Fixers", Icon: FaShieldHalved, color: "#7c72ab" },
  { label: "Linux", category: "Environment & Bash", Icon: SiLinux, color: "#ca8a04" },
  { label: "Vercel", category: "Deployments", Icon: SiVercel, color: "#0f172a" },
];

export default function TechTechnologies() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">TECH STACK</span>
          <h1>Tools, Databases &amp; DevOps</h1>
        </div>
        <span className="ink-stamp blue">DEVOPS</span>
      </header>
      <p className="lead">
        Database systems, container sandboxes, queuing engines, CI/CD tools, and security auditing mechanisms utilized across production and personal projects.
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