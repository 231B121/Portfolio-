import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

export default function ProjectUrlShortener() {
  return (
    <article className="document project-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">BACKEND REST SERVICE</span>
          <h1>URL Shortener Microservice</h1>
        </div>
        <span className="ink-stamp blue">API</span>
      </header>

      <p className="lead">
        A backend URL shortener and redirect analytics service engineered with Node.js, Express.js, and MongoDB, featuring fast Base62 ID hashing and click telemetry.
      </p>

      <div className="project-visual" style={{ background: "linear-gradient(135deg, #0e1726, #1b2e4b)", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          <div style={{ display: "inline-flex", padding: "16px", borderRadius: "50%", background: "var(--red)", marginBottom: "8px" }}>
            <FaLink size={36} color="white" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--pixel)", fontSize: "11px", letterSpacing: "1px" }}>URL COMPRESSION &amp; ANALYTICS ENGINE</p>
        </div>
        <div className="scan-line" />
      </div>

      <div className="doc-grid">
        <section>
          <h3>Core Features</h3>
          <ul>
            <li>
              <strong>Short ID Generation:</strong> Generates collisions-resistant short URL identifiers with custom alias support and URL validation.
            </li>
            <li>
              <strong>Efficient Redirection:</strong> Low-latency 302 redirects with automated error fallback handlers.
            </li>
            <li>
              <strong>Analytics &amp; Tracking:</strong> Records visit timestamps, total click counts, and basic client metadata.
            </li>
          </ul>
        </section>

        <aside>
          <h3>Tech Stack</h3>
          <div className="doc-tags">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST API</span>
            <span>Base62 Hashing</span>
          </div>

          <Link
            className="doc-link"
            href="https://github.com/231B121/URL-Shortener-Using-Node.js"
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
