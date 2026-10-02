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
      download: false,
    },
    {
      label: "LinkedIn",
      detail: "Gourav Ojha | AI/ML & Full Stack",
      href: "https://www.linkedin.com/in/gourav-ojha-aiml/",
      Icon: FaLinkedin,
      download: false,
    },
    {
      label: "LeetCode Profile",
      detail: "300+ Problems Solved",
      href: "https://leetcode.com/u/231B121/",
      Icon: FaCode,
      download: false,
    },
    {
      label: "Email",
      detail: "gourav231b121@gmail.com",
      href: "mailto:gourav231b121@gmail.com",
      Icon: FaEnvelope,
      download: false,
    },
    {
      label: "Phone / WhatsApp",
      detail: "+91 8269726425",
      href: "tel:+918269726425",
      Icon: FaPhone,
      download: false,
    },
    {
      label: "Download Official Résumé (PDF)",
      detail: "Gourav_Ojha_AIML.pdf",
      href: "/resume.pdf",
      Icon: FaFilePdf,
      download: true,
    },
  ];

  return (
    <div className="grid gap-3">
      {items.map(({ label, detail, href, Icon, download }) => (
        <a
          key={label}
          href={href}
          download={download ? "Gourav_Ojha_Resume.pdf" : undefined}
          target={href.startsWith("mailto:") || href.startsWith("tel:") ? undefined : "_blank"}
          rel="noreferrer noopener"
          className="flex items-center justify-between rounded-lg bg-panel/70 p-3 md:p-4 ring-1 ring-ring/50 hover:bg-panel/90 hover:ring-ring/80 active:bg-panel/80 transition-all"
        >
          <div className="flex items-center gap-4">
            <Icon className="text-accent" size={24} />
            <div>
              <span className="font-retroSans font-extrabold text-lg block text-ink">
                {label}
              </span>
              <span className="text-xs text-muted font-mono">{detail}</span>
            </div>
          </div>
          <span className="text-xs font-mono text-accent">↗</span>
        </a>
      ))}
    </div>
  );
}
