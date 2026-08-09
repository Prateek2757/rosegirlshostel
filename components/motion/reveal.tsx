"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds to wait before the animation starts. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right" | "none";
  className?: string;
};

/**
 * Fades content in as it scrolls into view. Falls back to a plain fade when
 * the visitor prefers reduced motion.
 */
export function Reveal({ children, delay = 0, from = "bottom", className }: RevealProps) {
  const reduced = useReducedMotion();
  const offset = reduced || from === "none" ? {} : from === "bottom" ? { y: 32 } : from === "left" ? { x: -32 } : { x: 32 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.65, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

/** Parent wrapper that staggers its <StaggerItem> children into view. */
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.65, 0.36, 1] } },
  };
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
