import { FaFilePdf, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function AboutDetails() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">PROFILE</span>
          <h1>About me</h1>
        </div>
      </header>
      <p className="lead">
        I&apos;m Gourav Ojha, a Computer Science undergraduate at Jaypee University of Engineering and Technology (JUET, Guna, Batch 2023–2027) seeking a Software Developer (SDE) Internship, currently working as a Full Stack Developer Intern at Indux Technology. I have hands-on experience building full-stack applications, autonomous AI coding agents, and machine learning anomaly detection systems.
      </p>
      <div className="doc-grid">
        <section>
          <h3>What I do</h3>
          <p>
            I build responsive, end-to-end web applications and robust backend services — designing RESTful APIs with Node.js, Express.js, and Flask, developing LLM-powered coding agents with automated sandbox testing, architecting performant MongoDB, MySQL, and PostgreSQL databases, and crafting clean, interactive frontends using React.js and TypeScript.
          </p>
        </section>
        <section>
          <h3>Key Focus Areas</h3>
          <p>
            • SDE &amp; Full-Stack Development (React.js, TypeScript, Next.js, Node.js, Express.js, MERN)<br />
            • AI Agents &amp; Generative AI (LLMs, Prompt Engineering, GitHub REST API, Sandbox Auto-fix Pipelines)<br />
            • ML &amp; Security (Isolation Forest, Network Packet Sniffing with Scapy, Pandas, NumPy, Scikit-learn)<br />
            • Databases &amp; Cloud Infrastructure (MongoDB, PostgreSQL, MySQL, Redis, Docker Sandboxes)<br />
            • Core CS &amp; Problem Solving: 300+ DSA problems solved on LeetCode, OOP, DBMS, OS
          </p>
        </section>
      </div>

      <div className="mt-6 p-5 rounded-xl border border-wc-border bg-gradient-to-br from-white to-sky-50/40 shadow-card">
        <h4 className="font-cambria text-xs font-bold uppercase tracking-wider mb-3 text-watercolor-blue">
          Quick Contact
        </h4>
        <div className="flex flex-wrap items-center gap-4 text-sm text-ink-secondary">
          <span className="flex items-center gap-2 text-ink-muted">
            <FaLocationDot className="text-watercolor-blue" /> Guna, Madhya Pradesh, India
          </span>
          <a
            href="mailto:gourav231b121@gmail.com"
            className="flex items-center gap-2 font-medium text-ink-primary hover:text-watercolor-blue transition-colors"
          >
            <FaEnvelope className="text-watercolor-blue" /> gourav231b121@gmail.com
          </a>
          <a
            href="/resume.pdf"
            download="Gourav_Ojha_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-semibold text-watercolor-blue hover:underline"
          >
            <FaFilePdf /> Download Official Resume (PDF)
          </a>
        </div>
      </div>
    </article>
  );
}
