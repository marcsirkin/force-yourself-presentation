"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section";
import NextArrow from "./NextArrow";
import type { Slide } from "@/lib/slides";
import { useLenis } from "@/lib/lenis-context";

interface PresentationProps {
  slides: Slide[];
}

export default function Presentation({ slides }: PresentationProps) {
  const lenis = useLenis();
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, slides.length);
    setActiveIndex((previous) => Math.min(previous, Math.max(slides.length - 1, 0)));

    const sections = sectionRefs.current.filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-slide-index");
            if (indexAttr) {
              const parsed = Number(indexAttr);
              if (!Number.isNaN(parsed)) {
                setActiveIndex(parsed);
              }
            }
          }
        });
      },
      { threshold: 0.55 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [slides.length]);

  const handleAdvance = useCallback(() => {
    const sections = sectionRefs.current.filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) {
      return;
    }

    const nextIndex = Math.min(activeIndex + 1, sections.length - 1);
    if (nextIndex === activeIndex) {
      return;
    }

    const target = sections[nextIndex];

    if (lenis) {
      lenis.scrollTo(target);
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeIndex, lenis]);

  const isLastSlide = activeIndex >= slides.length - 1;

  const nextLabel = useMemo(() => {
    if (isLastSlide) {
      return "You are on the final section";
    }

    const upcoming = slides[activeIndex + 1];
    if (!upcoming) {
      return "Go to next section";
    }

    return `Next: ${upcoming.title}`;
  }, [activeIndex, isLastSlide, slides]);

  return (
    <main className="relative bg-black">
      {slides.map(({ title, body, media, hideTitle }, index) => {
        const hasMedia = Boolean(media);
        const content =
          !hasMedia && (typeof body === "string" || typeof body === "number"
            ? <p>{body}</p>
            : body ?? null);

        return (
          <Section
            key={`${index}-${title}`}
            title={title}
            index={index}
            media={media}
            hideTitle={hideTitle}
            ref={(element) => {
              sectionRefs.current[index] = element;
            }}
          >
            {content}
          </Section>
        );
      })}
      {slides.length > 1 ? (
        <NextArrow onClick={handleAdvance} disabled={isLastSlide} label={nextLabel} />
      ) : null}
    </main>
  );
}
