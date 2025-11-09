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
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/martech-map-marketing-technology-landscape-1456.jpg",
      alt: "Scott Brinkers 2025 Marketing Map",
    },
    hideTitle: true,
  },
  {
    title: "STOP USING 2015 PLAYBOOKS",
    body: "The funnel is a Choose Your Own Adventure book now.",
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
