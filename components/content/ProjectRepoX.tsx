import Link from "next/link";
import { FaGithub, FaRobot, FaDocker } from "react-icons/fa6";

export default function ProjectRepoX() {
  return (
    <article className="document project-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">AI &amp; AUTONOMOUS CODING AGENT</span>
          <h1>RepoX</h1>
        </div>
        <span className="ink-stamp blue">AGENT</span>
      </header>

      <p className="lead">
        An AI-powered GitHub repository analyzer and autonomous coding agent combining static code analysis with Large Language Model reasoning to detect bugs, verify security, and submit automated pull requests.
      </p>

      <div className="project-visual" style={{ background: "linear-gradient(135deg, #161b22, #0d1117)", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          <div style={{ display: "inline-flex", padding: "16px", borderRadius: "50%", background: "var(--red)", marginBottom: "8px" }}>
            <FaRobot size={36} color="white" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--pixel)", fontSize: "11px", letterSpacing: "1px" }}>STATIC ANALYSIS + LLM REASONING</p>
        </div>
        <div className="scan-line" />
      </div>

      <div className="doc-grid">
        <section>
          <h3>Key Capabilities</h3>
          <ul>
            <li>
              <strong>Repository Inspection:</strong> Scans repositories for dependency vulnerabilities, code smell, test coverage gaps, and missing documentation.
            </li>
            <li>
              <strong>Automated Fixes &amp; PR Workflow:</strong> Automatically generates remediated code and submits clean Pull Requests directly via the GitHub API.
            </li>
            <li>
              <strong>Docker Sandboxing:</strong> Safely executes generated code and run tests inside isolated Docker containers with Redis-backed background queues.
            </li>
            <li>
              <strong>Validation Checks:</strong> Ensures generated code passes linting, syntax, and regression checks before PR creation.
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
            <span>LLMs &amp; RAG</span>
            <span>GitHub API</span>
            <span>Docker</span>
            <span>Redis</span>
          </div>

          <Link
            className="doc-link"
            href="https://github.com/231B121/RepoX-AI-Powered-GitHub-Repository-Analyzer-Coding-Agent"
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
