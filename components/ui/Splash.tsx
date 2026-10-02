"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

const slashes = [
  { angle: -18, delay: 0.2, origin: "left center" },
  { angle: 24, delay: 0.45, origin: "right center" },
  { angle: -48, delay: 0.7, origin: "left center" },
];

export default function Splash({ onDismiss }: { onDismiss?: () => void }) {
  const reduce = useReducedMotion();
  const fast = reduce ? 0.01 : undefined;

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
      title="Click or tap anywhere to skip intro"
      initial={{ clipPath: "inset(0 0 0% 0)" }}
      animate={{ clipPath: ["inset(0 0 0% 0)", "inset(0 0 0% 0)", "inset(0 0 100% 0)"] }}
      transition={{ duration: fast ?? 1.5, times: [0, 0.8, 1], ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="splash-grid" />

      {/* Skip Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDismiss?.();
        }}
        className="absolute top-4 right-4 z-50 px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-ink/80 text-paper border border-ink shadow-md hover:bg-red hover:text-white transition-all pointer-events-auto"
        style={{ fontFamily: "var(--pixel)" }}
      >
        SKIP INTRO ⏭
      </button>

      <motion.div
        className="cinematic-samurai"
        initial={reduce ? undefined : { opacity: 0, x: -80 }}
        animate={{ opacity: [0, 1, 1, 0], x: [-80, 0, 0, -20] }}
        transition={{ duration: fast ?? 0.6, times: [0, 0.45, 0.75, 1] }}
      >
        <Image
          src="/samurai-strike-pixel.png"
          alt=""
          fill
          priority
          sizes="(max-width: 700px) 90vw, 620px"
        />
      </motion.div>

      <motion.div
        className="impact-blackout"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.8, 0] }}
        transition={{ duration: fast ?? 0.6, times: [0, 0.4, 0.5, 1] }}
      />

      {slashes.map((slash) => (
        <div
          className="blade-path"
          key={slash.angle}
          style={{ transform: `translate(-50%, -50%) rotate(${slash.angle}deg)` }}
        >
          <motion.i
            className="blade-flash"
            style={{ transformOrigin: slash.origin }}
            initial={reduce ? undefined : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 1, 0], scaleX: [0, 0.54, 1, 1] }}
            transition={{
              delay: reduce ? 0 : slash.delay,
              duration: fast ?? 0.4,
              times: [0, 0.48, 0.84, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      ))}

      <motion.div
        className="impact-white-frame"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.8, 0] }}
        transition={{ duration: fast ?? 0.9, times: [0, 0.7, 0.75, 1] }}
      />

      <div className="blood-splash-origin" aria-hidden="true">
        <motion.div
          className="blood-splash-cinematic"
          initial={reduce ? undefined : { opacity: 0, scale: 0.1, filter: "blur(4px)" }}
          animate={{
            opacity: [0, 0, 0.9, 0],
            scale: [0.1, 0.1, 1, 1.2],
            filter: ["blur(4px)", "blur(4px)", "blur(0px)", "blur(0px)"],
          }}
          transition={{ duration: fast ?? 1.3, times: [0, 0.4, 0.75, 1], ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/blood-splash-cinematic.png" alt="" fill priority sizes="100vmax" />
        </motion.div>
      </div>
    </motion.div>
  );
}
