import Link from "next/link";
import { FaGithub, FaRocket } from "react-icons/fa6";

export default function ProjectBrahmion() {
  return (
    <article className="document project-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">AEROSPACE TECH &amp; PRODUCTION WEB</span>
          <h1>Brahmion Spacetech</h1>
        </div>
        <span className="ink-stamp gold">PROD</span>
      </header>

      <p className="lead">
        Official corporate web platform for Brahmion Spacetech Pvt. Ltd. (IIT Kanpur incubated startup), engineered with React, TypeScript, and modern middleware integrations.
      </p>

      <div className="project-visual" style={{ background: "linear-gradient(135deg, #090d16, #1c2541)", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          <div style={{ display: "inline-flex", padding: "16px", borderRadius: "50%", background: "var(--ochre)", marginBottom: "8px" }}>
            <FaRocket size={36} color="black" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--pixel)", fontSize: "11px", letterSpacing: "1px" }}>BRAHMION SPACETECH · IIT KANPUR</p>
        </div>
        <div className="scan-line" />
      </div>

      <div className="doc-grid">
        <section>
          <h3>Engineering Scope</h3>
          <ul>
            <li>
              <strong>Modern Web Interface:</strong> Built the official front-facing platform utilizing React and TypeScript for strong typing and maintainable component hierarchy.
            </li>
            <li>
              <strong>Backend &amp; Middleware:</strong> Configured middleware pipelines to safely process incoming communications, queries, and team content.
            </li>
            <li>
              <strong>Founders Collaboration:</strong> Collaborated closely with startup founders at IIT Kanpur to present space-tech offerings, payload specifications, and company roadmap.
            </li>
            <li>
              <strong>Live Site Operations:</strong> Managed deployments, CDN performance, asset optimization, and responsiveness across all form factors.
            </li>
          </ul>
        </section>

        <aside>
          <h3>Tech Stack</h3>
          <div className="doc-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>REST API</span>
            <span>Tailwind CSS</span>
            <span>Production Deploy</span>
          </div>

          <Link
            className="doc-link"
            href="https://github.com/231B121/-brahmion-spacetech-Website-"
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
