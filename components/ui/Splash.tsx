"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

export default function Splash({ onDismiss }: { onDismiss?: () => void }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        onDismiss?.();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onDismiss]);

  return (
    <motion.div
      className="splash-screen cursor-pointer select-none"
      onClick={onDismiss}
      onTouchStart={onDismiss}
      title="Click anywhere to enter"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: reduce ? 0.01 : 1.2, times: [0, 0.75, 1], ease: "easeInOut" }}
      onAnimationComplete={onDismiss}
    >
      {/* Watercolor Diffusion Bloom */}
      <motion.div
        className="splash-bloom"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.15, 1.3], opacity: [0, 0.8, 0] }}
        transition={{ duration: reduce ? 0.01 : 1.2, times: [0, 0.5, 1], ease: "easeOut" }}
      />

      {/* Skip Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onDismiss?.();
        }}
        className="splash-skip"
        aria-label="Skip introduction"
      >
        Skip ↗
      </button>

      {/* Intro Typographic Text */}
      <motion.div
        className="splash-content"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -6] }}
        transition={{ duration: reduce ? 0.01 : 1.1, times: [0, 0.35, 0.75, 1], ease: "easeOut" }}
      >
        <h1 className="splash-title">Gourav Ojha</h1>
        <p className="splash-subtitle">AI/ML &amp; Full Stack Developer • Portfolio</p>
      </motion.div>
    </motion.div>
  );
}
