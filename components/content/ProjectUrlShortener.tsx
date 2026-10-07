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

      <div className="project-visual" style={{ background: "linear-gradient(135deg, rgba(237, 233, 254, 0.9) 0%, rgba(224, 242, 254, 0.9) 50%, rgba(254, 215, 170, 0.7) 100%)", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", padding: "14px", borderRadius: "14px", background: "rgba(255, 255, 255, 0.95)", border: "1px solid rgba(124, 114, 171, 0.25)", boxShadow: "0 4px 14px -2px rgba(124, 114, 171, 0.15)", marginBottom: "8px" }}>
            <FaLink size={32} className="text-watercolor-lavender" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--font-cambria)", fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--ink-primary)" }}>
            URL COMPRESSION &amp; ANALYTICS ENGINE
          </p>
        </div>
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
