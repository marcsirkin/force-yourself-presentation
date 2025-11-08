export const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const maskReveal = {
  hidden: { y: "110%", opacity: 0, skewY: 4 },
  show: {
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, filter: "blur(6px)", scale: 0.99 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.95, ease: [0.19, 1, 0.22, 1], when: "beforeChildren" },
  },
};

export const staggerChildren = {
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};
