import FileTree from "@/components/ui/FileTree";
import type { TreeItem } from "@/lib/portfolio-data";

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
