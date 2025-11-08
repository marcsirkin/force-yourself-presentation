"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import { fadeUp, maskReveal, sectionReveal, staggerChildren } from "@/lib/animations";

interface SectionProps {
  title: string;
  children?: ReactNode;
  dark?: boolean;
}

export default function Section({ title, children, dark = true }: SectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55 }}
      className={`relative flex h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-16 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
      variants={sectionReveal}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_45%)]" />
        <div className="absolute inset-0 mix-blend-screen" style={{
          background: dark
            ? "linear-gradient(120deg, rgba(255,0,106,0.12) 0%, rgba(0,240,255,0.08) 40%, rgba(255,255,255,0.06) 100%)"
            : "linear-gradient(120deg, rgba(17,24,39,0.2) 0%, rgba(79,70,229,0.15) 40%, rgba(17,24,39,0.1) 100%)",
        }} />
      </div>
      <motion.div
        className="relative z-10 max-w-5xl text-center"
        variants={staggerChildren}
      >
        <div className="overflow-hidden">
          <motion.h2
            className="font-black uppercase tracking-[0.16em] text-[clamp(3.75rem,10vw,9rem)] leading-[0.9] drop-shadow-[0_28px_55px_rgba(0,0,0,0.45)]"
            variants={maskReveal}
          >
            <GlitchText>{title}</GlitchText>
          </motion.h2>
        </div>
        {children ? (
          <motion.div
            className={`mx-auto mt-12 max-w-3xl text-sm font-semibold uppercase tracking-[0.38em] sm:text-base sm:tracking-[0.42em] md:text-lg md:tracking-[0.5em] ${
              dark ? "text-white/75" : "text-black/70"
            }`}
            variants={fadeUp}
          >
            {children}
          </motion.div>
        ) : null}
      </motion.div>
    </motion.section>
  );
}
