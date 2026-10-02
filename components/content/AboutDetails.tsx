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

      <div style={{ marginTop: "24px", padding: "16px", background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: "12px", boxShadow: "4px 4px 0 var(--ink)" }}>
        <h4 style={{ fontFamily: "var(--pixel)", fontSize: "12px", marginBottom: "8px", color: "var(--red)" }}>QUICK CONTACT</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "14px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><FaLocationDot /> Guna, Madhya Pradesh, India</span>
          <a href="mailto:gourav231b121@gmail.com" style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--ink)", fontWeight: 700 }}><FaEnvelope /> gourav231b121@gmail.com</a>
          <a href="/resume.pdf" download="Gourav_Ojha_Resume.pdf" target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--red)", fontWeight: 700 }}><FaFilePdf /> Download Official Resume (PDF)</a>
        </div>
      </div>
    </article>
  );
}
