import FileTree from "@/components/ui/FileTree";
import type { TreeItem } from "@/lib/portfolio-data";
import { FaBolt, FaBriefcase, FaRocket, FaUser, FaGraduationCap } from "react-icons/fa6";

export default function Sidebar({
  items,
  open,
  onToggle,
  activeId,
  onSelect,
  onClose,
}: {
  items: TreeItem[];
  open: Record<string, boolean>;
  onToggle: (id: string) => void;
  activeId: string | null;
  onSelect: (id: string) => void;
  onClose?: () => void;
}) {
  const quickJump = [
    { id: "skills-overview", label: "Skills", icon: FaBolt },
    { id: "experience-log", label: "Experience", icon: FaBriefcase },
    { id: "project-repox", label: "Projects", icon: FaRocket },
    { id: "about-home", label: "About", icon: FaUser },
    { id: "education", label: "Education", icon: FaGraduationCap },
  ];

  return (
    <aside className="archive-sidebar scrollbar">
      {onClose && (
        <div className="mobile-sidebar-header md:hidden">
          <span>PROJECT EXPLORER</span>
          <button
            type="button"
            onClick={onClose}
            className="mobile-close-btn"
            aria-label="Close Explorer"
          >
            ✕ Close
          </button>
        </div>
      )}

      {/* Quick shortcuts in sidebar */}
      <div className="sidebar-quick-shortcuts md:hidden">
        <span className="shortcuts-title">QUICK JUMP:</span>
        <div className="shortcuts-chips">
          {quickJump.map((q) => {
            const Icon = q.icon;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => onSelect(q.id)}
                className={`shortcut-chip ${activeId === q.id ? "active" : ""}`}
              >
                <Icon size={10} />
                <span>{q.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <FileTree
        items={items}
        open={open}
        onToggle={onToggle}
        activeId={activeId}
        onSelect={onSelect}
      />
    </aside>
  );
}