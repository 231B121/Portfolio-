"use client";

import { useEffect, useMemo, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaFilePdf,
  FaTerminal,
  FaFolderOpen,
  FaCode,
  FaBolt,
  FaBriefcase,
  FaRocket,
  FaUser,
  FaGraduationCap,
  FaTrophy,
  FaHouse,
} from "react-icons/fa6";
import Sidebar from "@/components/ui/Sidebar";
import ContentWindow from "@/components/ui/ContentWindow";
import Splash from "@/components/ui/Splash";
import { fileTree, type TreeItem } from "@/lib/portfolio-data";

function findItem(items: TreeItem[], id: string): TreeItem | null {
  for (const item of items) {
    if (item.id === id) return item;
    if (item.children) {
      const match = findItem(item.children, id);
      if (match) return match;
    }
  }
  return null;
}

function findPath(items: TreeItem[], id: string, path: string[] = []): string[] {
  for (const item of items) {
    const next = [...path, item.name];
    if (item.id === id) return next;
    if (item.children) {
      const match = findPath(item.children, id, next);
      if (match.length) return match;
    }
  }
  return [];
}

export default function HomePage() {
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState("about-home");
  const [mobileTab, setMobileTab] = useState<"editor" | "files">("editor");
  const [open, setOpen] = useState<Record<string, boolean>>({
    portfolio: true,
    about: true,
    "skills-folder": true,
    experience: true,
    projects: true,
    "projects-ai": true,
    "projects-ml": true,
    "projects-web": true,
    credentials: true,
    "connect-folder": true,
  });

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio_splash_seen")) {
      setReady(true);
      return;
    }
    const timer = setTimeout(() => {
      setReady(true);
      if (typeof window !== "undefined") sessionStorage.setItem("portfolio_splash_seen", "1");
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setReady(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("portfolio_splash_seen", "1");
    }
  };

  const activeItem = useMemo(() => findItem(fileTree, active), [active]);
  const activePath = useMemo(() => findPath(fileTree, active), [active]);
  const ActiveComponent = activeItem?.component ?? null;

  const handleSelectFile = (id: string) => {
    setActive(id);
    setMobileTab("editor");
  };

  // Quick navigation destinations
  const quickNavItems = [
    { id: "skills-overview", label: "Skills", icon: FaBolt, color: "text-amber-500" },
    { id: "experience-log", label: "Experience", icon: FaBriefcase, color: "text-sky-600" },
    { id: "project-repox", label: "Projects", icon: FaRocket, color: "text-rose-500" },
    { id: "about-home", label: "About", icon: FaUser, color: "text-indigo-600" },
    { id: "education", label: "Education", icon: FaGraduationCap, color: "text-emerald-600" },
    { id: "certification", label: "Wins", icon: FaTrophy, color: "text-amber-600" },
  ];

  return (
    <main className="archive-world">
      {!ready && <Splash onDismiss={handleDismiss} />}
      <div className="watercolor-blobs" aria-hidden="true">
        <div className="wc-blob wc-blob-1" />
        <div className="wc-blob wc-blob-2" />
        <div className="wc-blob wc-blob-3" />
        <div className="wc-blob wc-blob-4" />
      </div>

      <section className="archive-shell">
        {/* Titlebar */}
        <header className="archive-titlebar">
          <div className="window-dots" aria-hidden="true"><span /><span /><span /></div>
          <div className="archive-brand">
            <button
              type="button"
              onClick={() => setMobileTab(mobileTab === "files" ? "editor" : "files")}
              className="mobile-tree-toggle md:hidden"
              aria-label="Toggle file explorer"
              title={mobileTab === "files" ? "View Active File" : "Browse All Files"}
            >
              {mobileTab === "files" ? <FaCode size={13} /> : <FaFolderOpen size={13} />}
            </button>
            <strong>GOURAV OJHA</strong>
            <span className="brand-badge hidden sm:inline-block">Python &amp; Full Stack</span>
          </div>
          <div className="archive-actions">
            <a href="https://github.com/231B121" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gourav-ojha-aiml/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn /></a>
            <a href="mailto:gourav231b121@gmail.com" aria-label="Email" title="Email"><FaEnvelope /></a>
            <a href="/Gourav_Ojh.pdf" download="Gourav_Ojh.pdf" target="_blank" rel="noreferrer" aria-label="Download Gourav_Ojh.pdf" title="Download Resume"><FaFilePdf /></a>
          </div>
        </header>

        {/* Toolbar with Breadcrumbs & Mobile File/Editor Switcher */}
        <div className="archive-toolbar">
          <div className="breadcrumb">
            <button
              type="button"
              onClick={() => setMobileTab(mobileTab === "files" ? "editor" : "files")}
              className="mobile-crumb-btn md:hidden"
            >
              {mobileTab === "files" ? "📄 View File" : "📁 Files"}
            </button>
            <FaTerminal className="hidden sm:inline" />
            <span className="truncate">{activePath.join(" / ")}</span>
          </div>
          <div className="mobile-nav-toggle md:hidden">
            <button
              type="button"
              onClick={() => setMobileTab("files")}
              className={`mobile-tab-btn ${mobileTab === "files" ? "active" : ""}`}
            >
              <FaFolderOpen size={11} /> Files
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("editor")}
              className={`mobile-tab-btn ${mobileTab === "editor" ? "active" : ""}`}
            >
              <FaCode size={11} /> Editor
            </button>
          </div>
        </div>

        {/* Mobile Quick Keys Header Bar (Always visible on mobile to switch to Skills, Experience, Projects) */}
        <div className="mobile-quick-nav md:hidden">
          <div className="mobile-quick-nav-track">
            {quickNavItems.map((item) => {
              const Icon = item.icon;
              const isCurrent = active === item.id || (item.id === "skills-overview" && active.startsWith("tech-"));
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectFile(item.id)}
                  className={`quick-nav-key ${isCurrent ? "active-key" : ""}`}
                >
                  <Icon size={12} className={item.color} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setMobileTab(mobileTab === "files" ? "editor" : "files")}
              className={`quick-nav-key ${mobileTab === "files" ? "active-key" : ""}`}
            >
              <FaFolderOpen size={12} className="text-slate-600" />
              <span>{mobileTab === "files" ? "Close Files" : "All Files"}</span>
            </button>
          </div>
        </div>

        {/* Workspace Layout */}
        <div className="archive-grid">
          <div className={`archive-sidebar-wrapper ${mobileTab === "files" ? "mobile-show" : "mobile-hide"}`}>
            <Sidebar
              items={fileTree}
              open={open}
              onToggle={(id) => setOpen((state) => ({ ...state, [id]: !state[id] }))}
              activeId={active}
              onSelect={handleSelectFile}
              onClose={() => setMobileTab("editor")}
            />
          </div>
          <div className={`content-window-wrapper ${mobileTab === "editor" ? "mobile-show" : "mobile-hide"}`}>
            <ContentWindow
              component={ActiveComponent}
              fileName={activeItem?.name ?? "welcome.md"}
              onOpenFiles={() => setMobileTab("files")}
            />
          </div>
        </div>

        {/* Modern Mobile Floating Bottom Dock (Accessible at thumb level) */}
        <nav className="mobile-bottom-dock md:hidden" aria-label="Mobile Navigation">
          <button
            type="button"
            onClick={() => handleSelectFile("about-home")}
            className={`dock-btn ${active === "about-home" || active === "about-details" ? "dock-active" : ""}`}
          >
            <FaHouse size={16} />
            <span>Home</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectFile("skills-overview")}
            className={`dock-btn ${active === "skills-overview" || active.startsWith("tech-") ? "dock-active" : ""}`}
          >
            <FaBolt size={16} className="text-amber-500" />
            <span>Skills</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectFile("experience-log")}
            className={`dock-btn ${active === "experience-log" ? "dock-active" : ""}`}
          >
            <FaBriefcase size={16} className="text-sky-500" />
            <span>Internships</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectFile("project-repox")}
            className={`dock-btn ${active.startsWith("project-") ? "dock-active" : ""}`}
          >
            <FaRocket size={16} className="text-rose-500" />
            <span>Projects</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileTab(mobileTab === "files" ? "editor" : "files")}
            className={`dock-btn ${mobileTab === "files" ? "dock-active" : ""}`}
          >
            <FaFolderOpen size={16} className="text-indigo-500" />
            <span>Files</span>
          </button>
        </nav>
      </section>
    </main>
  );
}