"use client";

import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import { fadeUp, maskReveal, sectionReveal, staggerChildren } from "@/lib/animations";

interface SectionProps {
  title: string;
  children?: ReactNode;
  dark?: boolean;
  index?: number;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { title, children, dark = true, index }: SectionProps,
  ref,
) {
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.55 }}
      className={`relative flex h-screen items-center justify-center overflow-hidden px-6 py-24 sm:px-16 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
      variants={sectionReveal}
      data-slide-index={typeof index === "number" ? index : undefined}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0)_58%,rgba(0,0,0,0.14)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_55%)]" />
        <div
          className="absolute inset-0 mix-blend-screen opacity-70"
          style={{
            background: dark
              ? "linear-gradient(130deg, rgba(255,0,106,0.068) 0%, rgba(0,240,255,0.051) 45%, rgba(255,255,255,0.034) 100%)"
              : "linear-gradient(130deg, rgba(17,24,39,0.14) 0%, rgba(79,70,229,0.1) 45%, rgba(17,24,39,0.068) 100%)",
          }}
        />
      </div>
      <motion.div className="relative z-10 max-w-5xl text-center" variants={staggerChildren}>
        <div className="overflow-hidden">
          <motion.h2
            className="font-black uppercase tracking-[0.14em] text-[clamp(3.5rem,9vw,8rem)] leading-[0.95] drop-shadow-[0_16px_32px_rgba(0,0,0,0.38)]"
            variants={maskReveal}
          >
            <GlitchText>{title}</GlitchText>
          </motion.h2>
        </div>
        {children ? (
          <motion.div
            className={`mx-auto mt-10 max-w-3xl text-xs font-semibold uppercase tracking-[0.26em] sm:text-sm sm:tracking-[0.3em] md:text-base md:tracking-[0.34em] ${
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
});

export default Section;
