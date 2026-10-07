import Link from "next/link";
import { FaGithub, FaBuildingColumns } from "react-icons/fa6";

export default function ProjectSchemeAdvisor() {
  return (
    <article className="document project-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">AI &amp; MACHINE LEARNING APPLICATION</span>
          <h1>AI Government Scheme Advisor</h1>
        </div>
        <span className="ink-stamp blue">ML</span>
      </header>

      <p className="lead">
        An AI-powered Flask web platform that classifies user queries and recommends eligible government schemes using Machine Learning algorithms and socio-economic eligibility filtering.
      </p>

      <div className="project-visual" style={{ background: "linear-gradient(135deg, rgba(224, 242, 254, 0.9) 0%, rgba(204, 251, 241, 0.9) 50%, rgba(237, 233, 254, 0.8) 100%)", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", padding: "14px", borderRadius: "14px", background: "rgba(255, 255, 255, 0.95)", border: "1px solid rgba(59, 130, 166, 0.25)", boxShadow: "0 4px 14px -2px rgba(59, 130, 166, 0.15)", marginBottom: "8px" }}>
            <FaBuildingColumns size={32} className="text-watercolor-blue" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--font-cambria)", fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--ink-primary)" }}>
            ML CLASSIFICATION + SCHEME MATCHING
          </p>
        </div>
      </div>

      <div className="doc-grid">
        <section>
          <h3>Core Highlights</h3>
          <ul>
            <li>
              <strong>NLP Query Classification:</strong> Uses machine learning text classification models to understand user requirements, occupation, income brackets, and needs.
            </li>
            <li>
              <strong>Eligibility Filter Engine:</strong> Matches users against federal and state welfare criteria to suggest high-impact schemes.
            </li>
            <li>
              <strong>Flask Backend Architecture:</strong> Clean RESTful endpoints and templating for interactive user evaluation.
            </li>
          </ul>
        </section>

        <aside>
          <h3>Tech Stack</h3>
          <div className="doc-tags">
            <span>Python</span>
            <span>Flask</span>
            <span>Machine Learning</span>
            <span>Scikit-learn</span>
            <span>NLP</span>
            <span>HTML/CSS</span>
          </div>

          <Link
            className="doc-link"
            href="https://github.com/231B121/AI-Government-Scheme-Advisor"
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <FaGithub size={14} /> View on GitHub ↗
          </Link>
        </aside>
      </div>
    </article>
  );
}
