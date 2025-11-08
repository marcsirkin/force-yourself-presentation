"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import { fadeUp, maskReveal } from "@/lib/animations";

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
      viewport={{ once: true, amount: 0.6 }}
      className={`relative flex h-screen items-center justify-center px-6 py-16 sm:px-12 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-3xl text-center">
        <div className="overflow-hidden">
          <motion.h2
            className="text-4xl font-semibold uppercase tracking-tight sm:text-5xl md:text-6xl"
            variants={maskReveal}
          >
            <GlitchText>{title}</GlitchText>
          </motion.h2>
        </div>
        {children ? (
          <motion.div
            className={`mt-6 text-lg leading-relaxed sm:text-xl ${
              dark ? "text-white/80" : "text-black/70"
            }`}
            variants={fadeUp}
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </motion.section>
  );
}
