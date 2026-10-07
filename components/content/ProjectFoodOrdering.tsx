import Link from "next/link";
import { FaGithub, FaUtensils } from "react-icons/fa6";

export default function ProjectFoodOrdering() {
  return (
    <article className="document project-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">FULL STACK WEB APPLICATION</span>
          <h1>Multi-Stall Food Ordering</h1>
        </div>
        <span className="ink-stamp blue">MERN</span>
      </header>

      <p className="lead">
        A full-stack multi-vendor food court ordering system allowing customers to place unified orders across distinct food stalls with real-time order tracking and vendor dashboards.
      </p>

      <div className="project-visual" style={{ background: "linear-gradient(135deg, rgba(254, 243, 199, 0.9) 0%, rgba(240, 253, 250, 0.9) 50%, rgba(224, 242, 254, 0.8) 100%)", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", padding: "14px", borderRadius: "14px", background: "rgba(255, 255, 255, 0.95)", border: "1px solid rgba(192, 125, 50, 0.25)", boxShadow: "0 4px 14px -2px rgba(192, 125, 50, 0.15)", marginBottom: "8px" }}>
            <FaUtensils size={32} className="text-watercolor-amber" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--font-cambria)", fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "var(--ink-primary)" }}>
            MULTI-VENDOR CART &amp; STATUS PIPELINE
          </p>
        </div>
      </div>

      <div className="doc-grid">
        <section>
          <h3>System Design</h3>
          <ul>
            <li>
              <strong>Multi-Vendor Cart:</strong> Customers can select items from various campus or mall stalls in a single transaction with per-stall kitchen routing.
            </li>
            <li>
              <strong>Vendor Portal:</strong> Separate stall-owner interfaces to manage menus, update item availability, and dispatch order statuses.
            </li>
            <li>
              <strong>Database Modeling:</strong> MongoDB schemas designed for transactional integrity, status updates, and customer ordering history.
            </li>
          </ul>
        </section>

        <aside>
          <h3>Tech Stack</h3>
          <div className="doc-tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>REST API</span>
          </div>

          <Link
            className="doc-link"
            href="https://github.com/231B121/Multi-Stall-Food-Ordering-Platform"
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
