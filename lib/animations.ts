export const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.4, ease: [0.25, 1, 0.3, 1] },
  },
};

export const maskReveal = {
  hidden: { y: "115%", opacity: 0, skewY: 4 },
  show: {
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
};

export const sectionReveal = {
  hidden: { opacity: 0, filter: "blur(6px)", scale: 0.99 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: [0.2, 1, 0.24, 1], when: "beforeChildren" },
  },
};

export const staggerChildren = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};
