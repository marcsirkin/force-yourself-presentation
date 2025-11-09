export type SlideMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
    }
  | {
      kind: "video";
      src: string;
      title: string;
    };

export type Slide = {
  title: string;
  // simplified: body is now a plain string (can contain HTML)
  body?: string;
  media?: SlideMedia;
  hideTitle?: boolean;
};

export const demoSlides: Slide[] = [
  {
    title: "FORCE YOURSELF",
    body: "Force yourself to experiment because your playbook is broken.",
  },
  {
    title: "MARC SIRKIN ",
    body: "Former CEO, Third Door Media (MarTech, Search Engine Land) Founder, Marc Sirkin Consulting",
  },
  {
    title: "OMG, It Works",
    body: "Use this section to highlight your first reveal. Duplicate items in <code>demoSlides</code> for more slides, or <a href=\"https://nextjs.org/learn\" target=\"_blank\" rel=\"noreferrer\">link out to supporting material</a> when you need to.",
  },
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/martech-map-marketing-technology-landscape-1456.jpg",
      alt: "Scott Brinkers 2025 Marketing Map",
    },
    hideTitle: true,
  },
  {
    title: "Cinematic Break",
    media: {
      kind: "video",
      src: "https://www.youtube.com/embed/8Fey680pHCk?rel=0&modestbranding=1",
      title: "Synthwave Journey",
    },
    hideTitle: true,
  },
];
