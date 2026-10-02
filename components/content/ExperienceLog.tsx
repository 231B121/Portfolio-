const roles = [
  {
    company: "Brahmion Spacetech Pvt. Ltd. (IIT Kanpur)",
    role: "Full Stack Developer",
    date: "Dec 2025 — Feb 2026",
    bullets: [
      "Developed the company's official website using React and TypeScript.",
      "Worked on backend integration and configured middleware to handle and process requests.",
      "Managed and maintained the live website and worked with the team on deployments as a team member, coordinating with the founders on accurate product and team content.",
    ],
  },
  {
    company: "Unified Mentor Pvt. Ltd.",
    role: "Full Stack Web Development Intern",
    date: "June 2025 — July 2025",
    bullets: [
      "Built responsive web applications with React.js, Node.js, Express.js, and MongoDB; designed and integrated REST APIs and used Git/GitHub for collaboration.",
      "Built a MERN-based chat application with anonymous rooms, where users can join a room and chat without revealing their identity.",
      "Learned the MERN stack hands-on in a project-based internship, covering frontend-backend integration, MongoDB data handling, and structuring a full stack project.",
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
