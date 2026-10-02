import Link from "next/link";
import { FaCode, FaAward, FaGraduationCap } from "react-icons/fa6";

export function EducationFile() {
  return (
    <article className="document credential-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">ACADEMIC JOURNEY</span>
          <h1>Education</h1>
        </div>
        <span className="ink-stamp">2027</span>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div className="credential-block">
          <span>2023 — 2027 · CURRENT</span>
          <h2>B.Tech in Computer Science and Engineering</h2>
          <p>Jaypee University of Engineering and Technology</p>
          <small>Guna, Madhya Pradesh</small>
        </div>

        <div className="credential-block" style={{ boxShadow: "8px 8px 0 var(--indigo)" }}>
          <span>2022 · SENIOR SECONDARY (CLASS XII)</span>
          <h2>Class XII — MP Board (80.2%)</h2>
          <p>Excellence Hr. Sec. School, Madhya Pradesh</p>
          <small>Top 10 rank in school</small>
        </div>

        <div className="credential-block" style={{ boxShadow: "8px 8px 0 var(--ochre)" }}>
          <span>2020 · SECONDARY (CLASS X)</span>
          <h2>Class X — MP Board (94.5%)</h2>
          <p>Excellence Hr. Sec. School, Madhya Pradesh</p>
          <small>Top 10 rank in school</small>
        </div>
      </div>
    </article>
  );
}

export function CertificationFile() {
  return (
    <article className="document credential-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">HONORS & MILESTONES</span>
          <h1>Achievements</h1>
        </div>
        <span className="ink-stamp gold">300+</span>
      </header>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <a
          className="certificate-card"
          href="https://leetcode.com/u/231B121/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="certificate-mark">
            <FaCode />
          </div>
          <div>
            <span>Competitive Programming</span>
            <h2>LeetCode: 300+ Problems Solved</h2>
            <p>Consistent problem solver across Data Structures, Algorithms, Arrays, Graphs, Trees, and Dynamic Programming.</p>
            <strong className="certificate-link">View LeetCode Profile ↗</strong>
          </div>
        </a>

        <div className="certificate-card" style={{ boxShadow: "9px 9px 0 var(--red)" }}>
          <div className="certificate-mark" style={{ background: "var(--red)", color: "white" }}>
            <FaAward />
          </div>
          <div>
            <span>National Cadet Corps</span>
            <h2>NCC &quot;A&quot; Certificate</h2>
            <p>Certified NCC Cadet exhibiting leadership, discipline, physical endurance, and team coordination.</p>
            <strong className="certificate-link" style={{ color: "var(--ink)" }}>Verified Credential</strong>
          </div>
        </div>

        <div className="certificate-card" style={{ boxShadow: "9px 9px 0 var(--indigo)" }}>
          <div className="certificate-mark" style={{ background: "var(--indigo)", color: "white" }}>
            <FaGraduationCap />
          </div>
          <div>
            <span>Academic Merit</span>
            <h2>Top 10 Student — Class X &amp; XII</h2>
            <p>Scored 94.5% in Class X and 80.2% in Class XII with meritorious academic standing in school.</p>
            <strong className="certificate-link" style={{ color: "var(--ink)" }}>Academic Excellence</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
