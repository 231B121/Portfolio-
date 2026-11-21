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
      "Repository Health Agent: Built and deployed an automated health scanner for 15+ private repositories, executing automated security audits, OSV.dev dependency vulnerability tracking, and branch compliance enforcement.",
      "Deterministic Scoring: Decoupled scoring algorithms from LLM reasoning for 100% deterministic, reproducible health grading, backed by an LLM guidance explainer for remediation.",
      "Token & Key Guardrails: Implemented security guardrails with fingerprint masking to prevent tokens, API keys, and sensitive secrets leaking to external LLM providers.",
      "Safe Fixer Pipeline: Built an allow-listed auto-fix engine that tests generated patches in an isolated sandbox and submits draft PRs for human review.",
    ],
  },
  {
    company: "Indux Technology",
    role: "Full Stack Developer Intern",
    date: "September 2026 – November 2026",
    location: "Remote / On-site",
    skills: ["Next.js 14/15", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    bullets: [
      "PicoTech ERP System: Developed the core ERP platform for EV battery manufacturing leveraging Next.js 14/15, Tailwind CSS, Node.js/Express, and MongoDB.",
      "Quotation & Invoicing Automation: Built an automated quotation and invoicing engine featuring 18% GST/HSN code computation, payment lifecycle tracking, and dynamic PDF invoice generation.",
      "High-Volume REST APIs: Architected performant REST endpoints using MongoDB aggregation pipelines, indexing, and strict schema validation, efficiently managing thousands of component SKUs.",
      "Git & Turbopack Collaboration: Maintained team branch workflows, resolved merge conflicts, and optimized production builds utilizing Turbopack.",
    ],
  },
  {
    company: "Brahmion Spacetech Pvt. Ltd. (IIT Kanpur)",
    role: "Full Stack Developer Intern",
    date: "December 2025 – February 2026",
    location: "IIT Kanpur Incubated",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel"],
    bullets: [
      "Cinematic Single-Page Application: Built and deployed a high-performance single-page showcase website utilizing React, TypeScript, Vite, and Tailwind CSS on Vercel.",
      "Live Deployments & Founder Coordination: Managed live production deployments and collaborated closely with founders to integrate authentic product specifications and team information.",
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
                  <div className="flex items-center gap-2 mb-1">
                    <span className="entry-index-pill md:hidden">#{index + 1}</span>
                    <span className="entry-role-tag">{item.role}</span>
                  </div>
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

              <div className="experience-paragraphs">
                {item.bullets.map((bullet, bIdx) => {
                  const colonIndex = bullet.indexOf(":");
                  const hasColon = colonIndex !== -1;
                  const heading = hasColon ? bullet.substring(0, colonIndex).trim() : null;
                  const description = hasColon ? bullet.substring(colonIndex + 1).trim() : bullet;

                  return (
                    <div key={bIdx} className="exp-para-item">
                      <span className="exp-bullet-dot">✦</span>
                      <p className="exp-para-text">
                        {heading ? (
                          <>
                            <strong className="exp-para-bold">{heading}:</strong> {description}
                          </>
                        ) : (
                          description
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}