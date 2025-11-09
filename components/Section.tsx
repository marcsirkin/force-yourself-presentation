"use client";

import Image from "next/image";
import { ReactNode, forwardRef } from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import { fadeUp, maskReveal, sectionReveal, staggerChildren } from "@/lib/animations";
import type { SlideMedia } from "@/lib/slides";

interface SectionProps {
  title: string;
  children?: ReactNode;
  dark?: boolean;
  index?: number;
  media?: SlideMedia;
  hideTitle?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { title, children, dark = true, index, media, hideTitle = false }: SectionProps,
  ref,
) {
  const hasMedia = Boolean(media);
  const showHeading = !hideTitle;

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
      <motion.div
        className={`relative z-10 w-full ${hasMedia ? "max-w-6xl" : "max-w-5xl text-center"}`}
        variants={staggerChildren}
      >
        {showHeading ? (
          <div className="overflow-hidden text-center">
            <motion.h2
              className="font-black uppercase tracking-[0.14em] text-[clamp(3.5rem,9vw,8rem)] leading-[0.95] drop-shadow-[0_16px_32px_rgba(0,0,0,0.38)]"
              variants={maskReveal}
            >
              <GlitchText>{title}</GlitchText>
            </motion.h2>
          </div>
        ) : (
          <h2 className="sr-only">{title}</h2>
        )}
        {hasMedia ? (
          <motion.div
            className="mx-auto mt-16 w-full max-w-5xl"
            variants={fadeUp}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[min(3vw,2.5rem)] border border-white/15 bg-white/5 shadow-[0_45px_120px_rgba(0,0,0,0.45)]">
              {media?.kind === "image" ? (
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  className="h-full w-full object-cover"
                  sizes="(min-width: 1280px) 896px, (min-width: 768px) 80vw, 92vw"
                />
              ) : null}
              {media?.kind === "video" ? (
                <iframe
                  src={media.src}
                  title={media.title || title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              ) : null}
            </div>
          </motion.div>
        ) : children ? (
          <motion.div
            className={`mx-auto mt-10 max-w-3xl text-center text-xs font-semibold uppercase tracking-[0.26em] sm:text-sm sm:tracking-[0.3em] md:text-base md:tracking-[0.34em] ${
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
            } [&_a]:underline [&_a]:underline-offset-[0.45em] [&_a]:decoration-2 [&_a]:transition-colors ${
              dark
                ? "[&_a]:text-white [&_a]:decoration-white/50 [&_a:hover]:decoration-white [&_a:hover]:text-white"
                : "[&_a]:text-black [&_a]:decoration-black/50 [&_a:hover]:decoration-black [&_a:hover]:text-black"
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
