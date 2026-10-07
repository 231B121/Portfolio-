import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFilePdf,
  FaCode,
} from "react-icons/fa6";

export default function ConnectLinks() {
  const items = [
    {
      label: "GitHub (231B121)",
      detail: "github.com/231B121",
      href: "https://github.com/231B121",
      Icon: FaGithub,
      color: "#1e293b",
      download: false,
    },
    {
      label: "LinkedIn Profile",
      detail: "linkedin.com/in/gourav-ojha-aiml",
      href: "https://www.linkedin.com/in/gourav-ojha-aiml/",
      Icon: FaLinkedin,
      color: "#0284c7",
      download: false,
    },
    {
      label: "LeetCode Profile",
      detail: "300+ Problems Solved",
      href: "https://leetcode.com/u/231B121/",
      Icon: FaCode,
      color: "#ea580c",
      download: false,
    },
    {
      label: "Email",
      detail: "gourav231b121@gmail.com",
      href: "mailto:gourav231b121@gmail.com",
      Icon: FaEnvelope,
      color: "#339989",
      download: false,
    },
    {
      label: "Phone / WhatsApp",
      detail: "+91 8269726425",
      href: "tel:+918269726425",
      Icon: FaPhone,
      color: "#16a34a",
      download: false,
    },
    {
      label: "Download Official Résumé (PDF)",
      detail: "Gourav_Ojha_Resume.pdf",
      href: "/resume.pdf",
      Icon: FaFilePdf,
      color: "#3b82a6",
      download: true,
    },
  ];

  return (
    <article className="document">
      <header className="document-header">
        <div>
          <span className="doc-kicker">CONNECT</span>
          <h1>Get In Touch</h1>
        </div>
      </header>
      <p className="lead">
        Feel free to reach out for AI/ML internship opportunities, research collaborations, or software projects.
      </p>
      <div className="grid gap-3.5 mt-6">
        {items.map(({ label, detail, href, Icon, color, download }) => (
          <a
            key={label}
            href={href}
            download={download ? "Gourav_Ojha_Resume.pdf" : undefined}
            target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
            rel="noreferrer noopener"
            className="flex items-center justify-between rounded-xl bg-white/95 p-4 border border-wc-border shadow-card hover:border-watercolor-blue/40 hover:-translate-y-0.5 hover:shadow-watercolor transition-all group"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                style={{ background: `${color}15`, color: color }}
              >
                <Icon size={22} />
              </div>
              <div>
                <span className="font-cambria font-semibold text-base block text-ink-primary group-hover:text-watercolor-blue transition-colors">
                  {label}
                </span>
                <span className="text-xs text-ink-muted">{detail}</span>
              </div>
            </div>
            <span className="text-sm font-cambria font-semibold text-watercolor-blue">
              ↗
            </span>
          </a>
        ))}
      </div>
    </article>
  );
}
