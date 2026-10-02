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
  { label: "LLMs & GenAI", Icon: SiOpenai },
  { label: "AI Agents & RAG", Icon: FaRobot },
  { label: "Anomaly Detection", Icon: FaBrain },
  { label: "Scapy & Packets", Icon: FaNetworkWired },
  { label: "Docker", Icon: SiDocker },
  { label: "Redis", Icon: SiRedis },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "MySQL", Icon: SiMysql },
  { label: "REST APIs & Middleware", Icon: FaServer },
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithub },
  { label: "Postman", Icon: SiPostman },
  { label: "Vercel", Icon: SiVercel },
  { label: "Linux", Icon: SiLinux },
];

export default function TechTechnologies() {
  return (
    <div className="prose prose-invert max-w-none">
      <h3 className="text-accent font-retroSans font-extrabold text-4xl md:text-5xl">
        AI/ML, Tools &amp; Databases
      </h3>
      <p className="text-muted text-sm mt-2">
        Infrastructure, databases, container sandboxes, AI concepts, and developer tooling used across projects.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg bg-panel/70 px-3 py-2 md:px-4 md:py-3 ring-1 ring-ring/60"
          >
            <Icon className="text-accent" size={26} />
            <span className="font-retroSans font-extrabold text-lg">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
