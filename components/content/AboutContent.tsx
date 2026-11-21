import { TypeAnimation } from "react-type-animation";
import {
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaLocationDot,
  FaCode,
  FaBriefcase,
  FaPhone,
} from "react-icons/fa6";

export default function AboutContent() {
  return (
    <article className="document welcome-document">
      <div className="welcome-square-card">
        {/* Dossier Header Strip */}
        <div className="welcome-card-header">
          <div className="welcome-status-badge">
            <span className="live-dot" />
            <span>OPEN FOR PYTHON DEVELOPER &amp; SDE INTERNSHIPS</span>
          </div>
          <div className="welcome-location-badge">
            <FaLocationDot size={12} />
            <span>Guna, Madhya Pradesh, India</span>
          </div>
        </div>

        {/* Hero Identity Block */}
        <div className="welcome-hero">
          <span className="doc-kicker">PYTHON DEVELOPER INTERN • FASTAPI • FLASK • REST APIS • MERN STACK</span>
          <h1 className="welcome-name">
            Gourav <em>Ojha.</em>
          </h1>
          <div className="typed-line">
            <TypeAnimation
              sequence={[
                "Python Developer Intern.",
                1300,
                "FastAPI & Flask REST APIs.",
                1300,
                "AI Agent Engineer @ WTF.",
                1300,
                "MERN & Next.js Full Stack.",
                1300,
                "ML Network Anomaly Detection.",
                1300,
                "300+ LeetCode DSA Solved.",
                1300,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Bio Description from Resume */}
        <div className="welcome-bio">
          <p>
            Computer Science undergraduate (B.Tech, 2027 at <strong>Jaypee University of Engineering and Technology, JUET Guna</strong>)
            seeking a <strong>Python Developer Internship</strong> and SDE roles. Strong in <strong>Python, FastAPI, Flask</strong>, and
            <strong>REST APIs</strong>, with hands-on production experience building AI-driven systems.
          </p>
          <p>
            Engineered an <strong>AI Repository Health Agent</strong> at <strong>World Trade Factory (SKXYWTF)</strong> with automated OSV.dev dependency tracking and guardrails,
            developed an ERP manufacturing system with Next.js/MERN at <strong>Indux Technology</strong>,
            and trained an unsupervised ML anomaly detection engine with Scapy and Isolation Forest.
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
              <strong>3</strong>
              <span>Internships</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon-wrap">
              <FaGithub />
            </div>
            <div className="stat-details">
              <strong>15+</strong>
              <span>Audited Repos</span>
            </div>
          </div>
        </div>

        {/* Skills & Focus Pills */}
        <div className="welcome-skills-bar">
          <span className="skills-label">CORE TECH:</span>
          <div className="skills-chips">
            <span>Python</span>
            <span>FastAPI</span>
            <span>Flask</span>
            <span>REST APIs</span>
            <span>React.js</span>
            <span>Next.js 14/15</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>Docker</span>
            <span>Redis</span>
            <span>DSA (300+)</span>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="welcome-actions">
          <a
            href="/Gourav_Ojh.pdf"
            download="Gourav_Ojh.pdf"
            target="_blank"
            rel="noreferrer"
            className="welcome-btn btn-primary"
            title="Download Gourav_Ojh.pdf"
          >
            <FaFilePdf size={14} /> Download Résumé (PDF)
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
            href="tel:+918269726425"
            className="welcome-btn btn-phone"
            title="Call +91 8269726425"
          >
            <FaPhone size={14} /> +91 8269726425
          </a>
          <a
            href="mailto:gourav231b121@gmail.com"
            className="welcome-btn btn-email"
            title="Send Email"
          >
            <FaEnvelope size={14} /> Contact Me
          </a>
        </div>
      </div>
    </article>
  );
}