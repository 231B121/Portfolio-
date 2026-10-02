import Link from "next/link";
import { FaGithub, FaNetworkWired, FaBrain } from "react-icons/fa6";

export default function ProjectPacketSniffer() {
  return (
    <article className="document project-document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">MACHINE LEARNING &amp; CYBERSECURITY</span>
          <h1>Packet Sniffer &amp; ML Anomaly Detection</h1>
        </div>
        <span className="ink-stamp blue">REALTIME</span>
      </header>

      <p className="lead">
        A real-time network traffic monitor and unsupervised anomaly detection engine built with Python, Scapy, and Scikit-learn, featuring LLM-powered incident summaries.
      </p>

      <div className="project-visual" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)", display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          <div style={{ display: "inline-flex", padding: "16px", borderRadius: "50%", background: "var(--indigo)", marginBottom: "8px" }}>
            <FaNetworkWired size={36} color="white" />
          </div>
          <p style={{ margin: 0, fontFamily: "var(--pixel)", fontSize: "11px", letterSpacing: "1px" }}>SCAPY PACKET SNIFFER + ISOLATION FOREST</p>
        </div>
        <div className="scan-line" />
      </div>

      <div className="doc-grid">
        <section>
          <h3>Architecture &amp; Features</h3>
          <ul>
            <li>
              <strong>Live Packet Inspection:</strong> Captures Ethernet, IPv4, TCP, UDP, and ICMP packets in real time using Python Scapy.
            </li>
            <li>
              <strong>Feature Extraction:</strong> Extracts network telemetry including source/destination IP/MAC, ports, packet sizes, protocol distribution, and TCP flags.
            </li>
            <li>
              <strong>Unsupervised Anomaly Model:</strong> Employs an Isolation Forest machine learning model to flag malicious behaviors without needing pre-labeled attack datasets.
            </li>
            <li>
              <strong>Natural Language Alerts:</strong> Integrates an LLM API to interpret cryptic raw telemetry anomalies into actionable, plain-English security incident reports.
            </li>
          </ul>
        </section>

        <aside>
          <h3>Tech Stack</h3>
          <div className="doc-tags">
            <span>Python</span>
            <span>Scapy</span>
            <span>Scikit-learn</span>
            <span>NumPy</span>
            <span>Isolation Forest</span>
            <span>LLM API</span>
            <span>Network Analysis</span>
          </div>

          <Link
            className="doc-link"
            href="https://github.com/231B121/Network-Packet-Sniffer-and-Monitoring-System-"
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
