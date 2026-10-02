import { TypeAnimation } from "react-type-animation";
import {
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaLocationDot,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa6";

export default function AboutContent() {
  return (
    <article className="document welcome-document">
      <div className="welcome-square-card">
        {/* Dossier Header Strip */}
        <div className="welcome-card-header">
          <div className="welcome-status-badge">
            <span className="live-dot" />
            <span>OPEN FOR AI/ML INTERNSHIPS</span>
          </div>
          <div className="welcome-location-badge">
            <FaLocationDot size={12} />
            <span>JUET / Guna, India</span>
          </div>
        </div>

        {/* Hero Identity Block */}
        <div className="welcome-hero">
          <span className="doc-kicker">AI/ML &amp; FULL STACK DEVELOPER • CSE &apos;27</span>
          <h1 className="welcome-name">
            Gourav <em>Ojha.</em>
          </h1>
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
        </div>

        {/* Bio Description */}
        <div className="welcome-bio">
          <p>
            Computer Science undergraduate at{" "}
            <strong>Jaypee University of Engineering and Technology (JUET, Guna, 2023–2027)</strong>.
            Passionate about engineering production-grade Artificial Intelligence systems, Machine
            Learning models, and scalable Full-Stack web architectures.
          </p>
          <p>
            Developed <strong>Packet Sniffer &amp; ML Anomaly Detection</strong> (unsupervised network
            flow inspection using Isolation Forest) and <strong>RepoX</strong> (an autonomous AI coding
            agent that analyzes GitHub repositories, detects vulnerabilities, and submits automated pull
            requests).
          </p>
        </div>

        {/* Highlighted Stats Grid */}
        <div className="welcome-stats-grid">
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <FaCode />
            </div>
            <div className="stat-details">
              <strong>300+</strong>
              <span>LeetCode Solved</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <FaBriefcase />
            </div>
            <div className="stat-details">
              <strong>2</strong>
              <span>Internships</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <FaGithub />
            </div>
            <div className="stat-details">
              <strong>12+</strong>
              <span>Repositories</span>
            </div>
          </div>
        </div>

        {/* Skills & Focus Pills */}
        <div className="welcome-skills-bar">
          <span className="skills-label">CORE FOCUS:</span>
          <div className="skills-chips">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Isolation Forest</span>
            <span>LLMs &amp; RAG</span>
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Docker</span>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="welcome-actions">
          <a
            href="/resume.pdf"
            download="Gourav_Ojha_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="welcome-btn btn-primary"
            title="Download Résumé"
          >
            <FaFilePdf size={14} /> Download Résumé
          </a>
          <a
            href="https://github.com/231B121"
            target="_blank"
            rel="noreferrer"
            className="welcome-btn btn-github"
            title="GitHub Profile"
          >
            <FaGithub size={14} /> GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/gourav-ojha-aiml/"
            target="_blank"
            rel="noreferrer"
            className="welcome-btn btn-linkedin"
            title="LinkedIn Profile"
          >
            <FaLinkedinIn size={14} /> LinkedIn
          </a>
          <a
            href="mailto:gourav231b121@gmail.com"
            className="welcome-btn btn-email"
            title="Send Email"
          >
            <FaEnvelope size={14} /> Contact
          </a>
        </div>
      </div>
    </article>
  );
}
