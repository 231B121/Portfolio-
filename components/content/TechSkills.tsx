"use client";

import { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiDocker,
  SiRedis,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
} from "react-icons/si";
import { FaServer, FaCode, FaBrain, FaDatabase, FaWrench, FaNetworkWired } from "react-icons/fa6";

interface SkillItem {
  name: string;
  category: "languages" | "python-api" | "mern" | "databases" | "tools" | "core-cs";
  level?: string;
  icon?: any;
  color?: string;
  badge?: string;
}

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "python-api", label: "Python & APIs" },
  { id: "mern", label: "MERN Stack" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & DevOps" },
  { id: "core-cs", label: "Core CS" },
];

const skillsData: SkillItem[] = [
  // Languages
  { name: "Python", category: "languages", icon: SiPython, color: "#3776ab", badge: "Primary" },
  { name: "JavaScript (ES6+)", category: "languages", icon: SiJavascript, color: "#f7df1e", badge: "Primary" },
  { name: "TypeScript", category: "languages", icon: SiTypescript, color: "#3178c6", badge: "Strong" },
  { name: "SQL", category: "languages", icon: SiMysql, color: "#00758f", badge: "Strong" },
  { name: "C++", category: "languages", icon: SiCplusplus, color: "#00599c", badge: "DSA" },

  // Python & APIs
  { name: "FastAPI", category: "python-api", icon: SiFastapi, color: "#009688", badge: "High Perf" },
  { name: "Flask", category: "python-api", icon: SiFlask, color: "#000000", badge: "Microservices" },
  { name: "REST API Development", category: "python-api", icon: FaServer, color: "#e11d48", badge: "Backend" },
  { name: "Pandas", category: "python-api", icon: SiPandas, color: "#150458", badge: "Data" },
  { name: "NumPy", category: "python-api", icon: SiNumpy, color: "#013243", badge: "Computation" },
  { name: "Scikit-learn", category: "python-api", icon: SiScikitlearn, color: "#f7931e", badge: "ML & Anomaly" },

  // MERN Stack
  { name: "React.js", category: "mern", icon: SiReact, color: "#61dafb", badge: "Frontend" },
  { name: "Next.js 14/15", category: "mern", icon: SiNextdotjs, color: "#000000", badge: "Full Stack" },
  { name: "Node.js", category: "mern", icon: SiNodedotjs, color: "#339933", badge: "Runtime" },
  { name: "Express.js", category: "mern", icon: SiExpress, color: "#475569", badge: "Backend" },
  { name: "MongoDB", category: "mern", icon: SiMongodb, color: "#47a248", badge: "NoSQL" },
  { name: "Tailwind CSS", category: "mern", icon: SiTailwindcss, color: "#38bdf8", badge: "UI Styling" },

  // Databases
  { name: "MongoDB (Aggregation & Indexing)", category: "databases", icon: SiMongodb, color: "#47a248", badge: "NoSQL" },
  { name: "MySQL", category: "databases", icon: SiMysql, color: "#00758f", badge: "Relational" },
  { name: "SQL & Schema Design", category: "databases", icon: FaDatabase, color: "#0284c7", badge: "RDBMS" },
  { name: "Redis (Cache & Queues)", category: "databases", icon: SiRedis, color: "#dc2626", badge: "In-Memory" },

  // Tools & DevOps
  { name: "Git", category: "tools", icon: SiGit, color: "#f05032", badge: "VCS" },
  { name: "GitHub (Actions & Octokit)", category: "tools", icon: SiGithub, color: "#24292e", badge: "Collaboration" },
  { name: "Docker (Sandboxing)", category: "tools", icon: SiDocker, color: "#2496ed", badge: "Containers" },
  { name: "Postman", category: "tools", icon: SiPostman, color: "#ff6c37", badge: "API Testing" },
  { name: "Linux / Shell", category: "tools", icon: SiLinux, color: "#fcc624", badge: "OS" },

  // Core CS
  { name: "Data Structures & Algorithms", category: "core-cs", icon: FaCode, color: "#7c3aed", badge: "300+ LeetCode" },
  { name: "Object-Oriented Programming (OOPs)", category: "core-cs", icon: FaBrain, color: "#2563eb", badge: "Design" },
  { name: "DBMS & Indexing", category: "core-cs", icon: FaDatabase, color: "#059669", badge: "Database" },
  { name: "Operating Systems (OS)", category: "core-cs", icon: FaWrench, color: "#ea580c", badge: "Fundamentals" },
];

export default function TechSkills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills = filter === "all" 
    ? skillsData 
    : skillsData.filter((s) => s.category === filter);

  return (
    <article className="document skills-overview-doc">
      <header className="document-header">
        <div>
          <span className="doc-kicker">TECHNICAL CAPABILITIES</span>
          <h1>Skills &amp; Expertise</h1>
        </div>
        <span className="ink-stamp blue">VERIFIED</span>
      </header>

      <p className="lead">
        Comprehensive technical skill set extracted from active engineering experience across Python APIs, AI Agents, MERN full stack applications, and algorithmic problem solving.
      </p>

      {/* Category Pills Filter */}
      <div className="skills-filter-bar">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id)}
            className={`skills-filter-pill ${filter === cat.id ? "active" : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-card-grid">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon || FaCode;
          return (
            <div key={skill.name} className="skill-card-item">
              <div
                className="skill-icon-bubble"
                style={{
                  backgroundColor: skill.color ? `${skill.color}15` : "rgba(59, 130, 166, 0.1)",
                  color: skill.color || "var(--wc-blue)",
                  borderColor: skill.color ? `${skill.color}30` : "transparent",
                }}
              >
                <Icon size={22} />
              </div>
              <div className="skill-info">
                <span className="skill-title">{skill.name}</span>
                {skill.badge && (
                  <span className="skill-badge-tag">{skill.badge}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Highlights Summary Box */}
      <div className="skills-summary-box">
        <div className="summary-col">
          <h3>⚡ Core Strengths</h3>
          <ul>
            <li><strong>Python &amp; REST APIs:</strong> FastAPI, Flask, background queues, token guardrails &amp; security audits.</li>
            <li><strong>Full-Stack MERN:</strong> Next.js 14/15, React, Node.js/Express, MongoDB aggregation pipelines.</li>
            <li><strong>AI &amp; Coding Agents:</strong> LLM reasoning decoupled from deterministic scoring, safe PR automation.</li>
          </ul>
        </div>
        <div className="summary-col">
          <h3>🏆 Problem Solving</h3>
          <ul>
            <li><strong>LeetCode:</strong> 300+ problems solved across Trees, Graphs, DP &amp; Arrays.</li>
            <li><strong>Hackathons:</strong> Smart India Hackathon (SIH) Participant.</li>
            <li><strong>CS Core:</strong> Strong grasp of OOPs, DBMS query optimization &amp; OS internals.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}