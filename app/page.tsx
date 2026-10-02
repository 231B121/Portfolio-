"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFilePdf, FaTerminal, FaFolderOpen, FaCode } from "react-icons/fa6";
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
    experience: true,
    projects: true,
    "projects-ai": true,
    "projects-ml": true,
    "projects-web": true,
  });

  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const samuraiX = useSpring(mouseX, { stiffness: 45, damping: 18 });
  const samuraiY = useSpring(mouseY, { stiffness: 45, damping: 18 });

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("portfolio_splash_seen")) {
      setReady(true);
      return;
    }
    const timer = setTimeout(() => {
      setReady(true);
      if (typeof window !== "undefined") sessionStorage.setItem("portfolio_splash_seen", "1");
    }, 1500);
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

  const handlePointer = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion) return;
    mouseX.set((event.clientX / window.innerWidth - 0.5) * 18);
    mouseY.set((event.clientY / window.innerHeight - 0.5) * 12);
  };

  const handleSelectFile = (id: string) => {
    setActive(id);
    setMobileTab("editor");
  };

  return (
    <main className="archive-world" onPointerMove={handlePointer}>
      {!ready && <Splash onDismiss={handleDismiss} />}
      <div className="world-sun" aria-hidden="true" />
      <div className="ink-cloud cloud-one" aria-hidden="true" />
      <div className="ink-cloud cloud-two" aria-hidden="true" />
      <div className="world-mountains" aria-hidden="true"><i /><i /><i /></div>
      <motion.img
        className="world-samurai"
        src="/samurai-engineer-pixel.png"
        alt=""
        aria-hidden="true"
        style={{ x: samuraiX, y: samuraiY }}
      />

      <section className="archive-shell">
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
          </div>
          <div className="archive-actions">
            <a href="https://github.com/231B121" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/gourav-ojha-aiml/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn /></a>
            <a href="mailto:gourav231b121@gmail.com" aria-label="Email" title="Email"><FaEnvelope /></a>
            <a href="/resume.pdf" download="Gourav_Ojha_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Download Resume" title="Download Resume"><FaFilePdf /></a>
          </div>
        </header>

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
              <FaFolderOpen size={10} /> Files
            </button>
            <button
              type="button"
              onClick={() => setMobileTab("editor")}
              className={`mobile-tab-btn ${mobileTab === "editor" ? "active" : ""}`}
            >
              <FaCode size={10} /> Editor
            </button>
          </div>
        </div>

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
      </section>
    </main>
  );
}
