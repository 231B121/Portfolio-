import { FaFilePdf, FaEnvelope, FaLocationDot, FaPhone, FaCode } from "react-icons/fa6";

export default function AboutDetails() {
  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">PROFILE</span>
          <h1>About Me</h1>
        </div>
        <span className="ink-stamp blue">B.TECH &apos;27</span>
      </header>
      <p className="lead">
        I&apos;m <strong>Gourav Ojha</strong>, a Computer Science undergraduate (B.Tech, 2023–2027) at Jaypee University of Engineering and Technology (JUET, Guna, MP) seeking a <strong>Python Developer Internship</strong> and SDE opportunities. Strong in Python, FastAPI, Flask, and REST APIs, with hands-on experience building AI-driven systems and production MERN stack web applications.
      </p>

      <div className="doc-grid">
        <section>
          <h3>Professional Summary</h3>
          <p>
            Experience building enterprise and AI systems: engineered an <strong>AI Repository Health Agent</strong> at World Trade Factory scanning 15+ repositories with deterministic scoring and guardrails; developed the <strong>PicoTech ERP</strong> manufacturing platform with Next.js 14/15, Node/Express, and MongoDB at Indux Technology; and constructed a real-time <strong>Network Packet Sniffer &amp; ML Anomaly Detection System</strong> in Python with Scapy and Scikit-learn.
          </p>
          <p>
            Solid foundation in Data Structures and Algorithms with <strong>300+ solved problems on LeetCode</strong>, Object-Oriented Programming (OOPs), SQL, Database Management Systems (DBMS), and Git/GitHub version control workflows.
          </p>
        </section>

        <section>
          <h3>Technical Expertise</h3>
          <ul style={{ paddingLeft: "1.1rem", margin: "0.5rem 0", lineHeight: "1.7" }}>
            <li><strong>Languages:</strong> Python, JavaScript (ES6+), SQL, C++, TypeScript</li>
            <li><strong>Python &amp; APIs:</strong> FastAPI, Flask, REST API Development, Pandas, NumPy, Scikit-learn</li>
            <li><strong>MERN Stack:</strong> MongoDB, Express.js, React.js, Node.js, Next.js, Tailwind CSS</li>
            <li><strong>Databases:</strong> MongoDB, MySQL, SQL, Redis</li>
            <li><strong>Tools &amp; DevOps:</strong> Git, GitHub, Docker, Redis, Postman, Linux</li>
            <li><strong>Core CS:</strong> 300+ LeetCode DSA, OOPs, DBMS, Operating Systems</li>
          </ul>
        </section>
      </div>

      <div className="mt-6 p-5 rounded-xl border border-wc-border bg-gradient-to-br from-white to-sky-50/40 shadow-card">
        <h4 className="font-cambria text-xs font-bold uppercase tracking-wider mb-3 text-watercolor-blue">
          Contact Information &amp; Official Resume
        </h4>
        <div className="flex flex-wrap items-center gap-4 text-sm text-ink-secondary">
          <span className="flex items-center gap-2 text-ink-muted">
            <FaLocationDot className="text-watercolor-blue" /> Guna, Madhya Pradesh, India
          </span>
          <a
            href="tel:+918269726425"
            className="flex items-center gap-2 font-medium text-ink-primary hover:text-watercolor-blue transition-colors"
          >
            <FaPhone className="text-watercolor-blue" /> +91 8269726425
          </a>
          <a
            href="mailto:gourav231b121@gmail.com"
            className="flex items-center gap-2 font-medium text-ink-primary hover:text-watercolor-blue transition-colors"
          >
            <FaEnvelope className="text-watercolor-blue" /> gourav231b121@gmail.com
          </a>
          <a
            href="https://leetcode.com/u/231B121/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-medium text-amber-700 hover:underline transition-colors"
          >
            <FaCode /> LeetCode (300+ Solved)
          </a>
          <a
            href="/Gourav_Ojh.pdf"
            download="Gourav_Ojh.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-semibold text-watercolor-blue hover:underline"
          >
            <FaFilePdf /> Download Resume (Gourav_Ojh.pdf)
          </a>
        </div>
      </div>
    </article>
  );
}