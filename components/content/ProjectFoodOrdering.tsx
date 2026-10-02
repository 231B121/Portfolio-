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

      <div className="project-visual" style={{ background: "linear-gradient(135deg, #1f2937, #111827)", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          <div style={{ display: "inline-flex", padding: "16px", borderRadius: "50%", background: "var(--ochre)", marginBottom: "8px" }}>
            <FaUtensils size={36} color="black" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--pixel)", fontSize: "11px", letterSpacing: "1px" }}>MULTI-VENDOR CART &amp; STATUS PIPELINE</p>
        </div>
        <div className="scan-line" />
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
