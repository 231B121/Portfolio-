interface Role {
  company: string;
  role: string;
  date: string;
  location?: string;
  skills?: string[];
  bullets: string[];
}

const roles: Role[] = [
  {
    company: "World Trade Factory (SKXYWTF)",
    role: "AI Agent Engineer",
    date: "September 2026 – Present",
    location: "Remote / Hybrid",
    skills: ["Node.js", "LLM Gateway", "Octokit", "MongoDB", "BullMQ", "Redis", "OSV.dev"],
    bullets: [
      "Built Repository Health Agent for 15+ repos: security audits, OSV.dev dependency tracking, branch compliance.",
      "Decoupled scoring from LLM reasoning for 100% deterministic health grading, with an LLM explainer for guidance.",
      "Implemented guardrails with fingerprint masking to prevent tokens and keys leaking to external LLM providers.",
      "Built Safe Fixer: allow-listed auto-fixes (dependencies, CI, .gitignore) via draft PRs with human review.",
    ],
  },
  {
    company: "Indux Technology",
    role: "Full Stack Developer Intern",
    date: "September 2026 – November 2026",
    location: "Remote / On-site",
    skills: ["Next.js 14/15", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    bullets: [
      "Developed PicoTech ERP (EV battery manufacturing) with Next.js 14/15, Tailwind CSS, Node.js/Express, MongoDB.",
      "Built a quotation & invoicing engine with 18% GST/HSN automation, payment tracking and PDF generation.",
      "Built secure REST APIs with MongoDB aggregation, indexing and validation, handling thousands of SKUs.",
      "Collaborated via Git/GitHub: branch management, merge-conflict resolution and production builds via Turbopack.",
    ],
  },
  {
    company: "Brahmion Spacetech Pvt. Ltd. (IIT Kanpur)",
    role: "Full Stack Developer Intern",
    date: "December 2025 – February 2026",
    location: "IIT Kanpur Incubated",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    bullets: [
      "Built a cinematic single-page website using React, TypeScript, Vite and Tailwind CSS, deployed on Vercel.",
      "Managed the live website and handled deployments, coordinating with founders on product and team content.",
    ],
  },
];

export default function ExperienceLog() {
  return (
    <article className="document experience-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">WORK HISTORY</span>
          <h1>Experience</h1>
        </div>
        <span className="ink-stamp blue">3 INTERNSHIPS</span>
      </header>

      <p className="lead">
        Engineering experience spanning autonomous AI coding agents, enterprise ERP web applications, and high-performance production interfaces.
      </p>

      <div className="experience-list">
        {roles.map((item, index) => (
          <section className="experience-entry" key={item.company}>
            <div className="entry-index">0{index + 1}</div>
            <div className="entry-body">
              <div className="entry-top">
                <div>
                  <span className="entry-role-tag">{item.role}</span>
                  <h2>{item.company}</h2>
                  {item.location && <span className="entry-loc">{item.location}</span>}
                </div>
                <time>{item.date}</time>
              </div>

              {item.skills && (
                <div className="entry-tech-pills">
                  {item.skills.map((s) => (
                    <span key={s} className="tech-pill">{s}</span>
                  ))}
                </div>
              )}

              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}