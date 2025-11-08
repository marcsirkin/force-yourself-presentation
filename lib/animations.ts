export const fadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const maskReveal = {
  hidden: { y: "120%", opacity: 0, skewY: 6 },
  show: {
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, filter: "blur(18px)", scale: 0.98 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: [0.11, 0.72, 0.25, 1], when: "beforeChildren" },
  },
};

export const staggerChildren = {
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};
