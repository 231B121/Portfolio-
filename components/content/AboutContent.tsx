import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaFilePdf, FaGithub } from "react-icons/fa6";

export default function AboutContent() {
  return (
    <article className="document welcome-document">
      <div className="welcome-copy">
        <span className="doc-kicker">AI/ML & FULL STACK DEVELOPER</span>
        <h1>Gourav<br /><em>Ojha.</em></h1>
        <div className="typed-line">
          <TypeAnimation
            sequence={[
              "AI/ML Intern & Engineer.",
              1300,
              "Full Stack Developer.",
              1300,
              "LLMs & Generative AI Builder.",
              1300,
              "Anomaly Detection Specialist.",
              1300,
              "300+ LeetCode Solved.",
              1300,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </div>
        <p>
          Computer Science undergraduate (B.Tech, 2027) seeking an AI/ML Internship. Built an unsupervised ML system for network anomaly detection and an LLM-powered AI agent that automates code analysis, fixes, and pull requests. Skilled in Python, NumPy, Scikit-learn, RAG, and full-stack development (React.js, Node.js, MongoDB).
        </p>

        <div className="welcome-stats">
          <div>
            <strong>300+</strong>
            <span>LeetCode</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Internships</span>
          </div>
          <div>
            <strong>12+</strong>
            <span>Repositories</span>
          </div>
        </div>

        <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a
            href="/resume.pdf"
            download="Gourav_Ojha_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="doc-link"
            style={{ marginTop: 0, display: "inline-flex", alignItems: "center", gap: "8px" }}
            title="Download Résumé"
          >
            <FaFilePdf size={14} /> Download Résumé
          </a>
          <a
            href="https://github.com/231B121"
            target="_blank"
            rel="noreferrer"
            className="doc-link"
            style={{ marginTop: 0, background: "var(--indigo)", display: "inline-flex", alignItems: "center", gap: "8px" }}
            title="GitHub Profile"
          >
            <FaGithub size={14} /> GitHub Profile
          </a>
        </div>
      </div>
      <div className="welcome-art">
        <div className="mini-sun" />
        <Image src="/samurai-engineer-pixel.png" alt="Cyber samurai" fill priority sizes="400px" />
      </div>
    </article>
  );
}
