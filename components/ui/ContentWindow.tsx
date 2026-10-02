import { AnimatePresence, motion } from "framer-motion";
import type { ComponentType } from "react";
import { FaFolderOpen } from "react-icons/fa6";

export default function ContentWindow({
  component,
  fileName,
  onOpenFiles,
}: {
  component: ComponentType | null;
  fileName: string;
  onOpenFiles?: () => void;
}) {
  const Cmp = component;
  return (
    <section className="content-window">
      <div className="content-tabs">
        <div className="active-tab">
          <span>●</span>
          {fileName}
          <i>×</i>
        </div>
        <div className="tab-fill" />
        {onOpenFiles && (
          <button
            type="button"
            onClick={onOpenFiles}
            className="mobile-tab-browse md:hidden"
            title="Browse all files"
          >
            <FaFolderOpen size={12} />
            <span>Files</span>
          </button>
        )}
      </div>
      <div className="content-scroll scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={Cmp ? (Cmp as any).name : "empty"}
            initial={{ opacity: 0, x: 18, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -14, filter: "blur(3px)" }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {Cmp ? (
              <Cmp />
            ) : (
              <div className="flex h-[460px] items-center justify-center text-sm text-muted">
                Select a file to view its contents.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
