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
        I&apos;m Gourav Ojha, a Computer Science & Engineering undergraduate at Jaypee University of Engineering and Technology (JUET, Guna, Batch 2023–2027) focused on Artificial Intelligence, Machine Learning, and Full Stack Engineering.
      </p>
      <div className="doc-grid">
        <section>
          <h3>What I do</h3>
          <p>
            I build end-to-end AI applications — from training unsupervised anomaly detection models (Isolation Forest) and integrating LLM APIs & RAG agents, to developing scalable web backends with Node.js/Express and responsive frontends in React.js and TypeScript.
          </p>
        </section>
        <section>
          <h3>Key Focus Areas</h3>
          <p>
            • Unsupervised Machine Learning & Packet Level Anomaly Detection<br />
            • LLM-Powered Coding Agents & Autonomous Repositories Analyzers<br />
            • Full-Stack Web Development (MERN, Next.js, REST APIs)<br />
            • Problem Solving: 300+ DSA problems solved on LeetCode
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
