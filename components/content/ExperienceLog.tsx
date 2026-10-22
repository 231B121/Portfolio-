const roles = [
  {
    company: "Indux Technology",
    role: "Full Stack Developer Intern",
    date: "Oct 2026 — Present",
    bullets: [
      "Engaged as a Full Stack Developer Intern at Indux Technology, focusing on web development projects.",
      "Collaborated with team members to learn new technologies and enhance coding skills.",
      "Contributed to the development of innovative solutions, gaining practical experience in the tech industry.",
      "Embraced the startup culture, fostering creativity and adaptability in a fast-paced environment.",
    ],
  },
  {
    company: "SKXYWTF (World Trade Factory)",
    role: "AI Agent Engineer",
    date: "Sept 2026 — Oct 2026",
    bullets: [
      "Built an AI Repository Health Agent (Node.js/Python, GitHub REST API, PostgreSQL) scanning 15+ private repos nightly.",
      "Implemented deterministic health scoring with an LLM explainer giving plain-language findings with file/line references.",
      "Built a safe auto-fix pipeline (allow-listed fixes) that tests patches in a sandbox and opens draft PRs for human review.",
    ],
  },
  {
    company: "Brahmion Spacetech Pvt. Ltd. (IIT Kanpur)",
    role: "Full Stack Developer Intern",
    date: "Dec 2025 — Feb 2026",
    bullets: [
      "Built a frontend-only cinematic single-page website using React, TypeScript, Vite and Tailwind CSS, deployed on Vercel.",
      "Managed and maintained the live website and worked with the team on deployments as a team member, coordinating with the founders on accurate product and team content.",
      "Organized site content in typed data files, using only verified public content from the company's reference site.",
    ],
  },
];

export default function ExperienceLog() {
  return (
    <article className="document experience-document">
      <header className="document-header">
        <div><span className="doc-kicker">WORK HISTORY</span><h1>Experience</h1></div>
      </header>
      <div className="experience-list">
        {roles.map((item, index) => (
          <section className="experience-entry" key={item.company}>
            <div className="entry-index">0{index + 1}</div>
            <div className="entry-body">
              <div className="entry-top"><div><span>{item.role}</span><h2>{item.company}</h2></div><time>{item.date}</time></div>
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
