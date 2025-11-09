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

export type SlideBody =
  | { type: "text"; text: string }
  | { type: "html"; html: string };

export type Slide = {
  title: string;
  body?: SlideBody;
  media?: SlideMedia;
  hideTitle?: boolean;
};

export const demoSlides: Slide[] = [
  {
    title: "FORCE YOURSELF...",
    body: {
      type: "text",
      text: "To Experiment Because Your Playbook Is Broken.",
    },
  },
  {
    title: "MARC SIRKIN",
    body: {
      type: "text",
      text: "Former CEO, Third Door Media (MarTech, Search Engine Land) Founder, Marc Sirkin Consulting.",
    },
  },
    {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/martech-map-marketing-technology-landscape-1456.jpg",
      alt: "Scott Brinker/Chiefmartec",
    },
    hideTitle: true,
  },
  {
    title: "STOP USING 2015 PLAYBOOKS",
    body: {
      type: "html",
      html: "The funnel is a Choose Your Own Adventure book now.",
    },
  },
   {
    title: "AI DIDN'T BREAK MARKETING",
    body: {
      type: "html",
      html: "It exposed how fragile it already was.",
    },
  },
   {
    title: "Cinematic Break",
    media: {
      kind: "video",
      src: "https://www.youtube.com/embed/8Fey680pHCk?rel=0&modestbranding=1",
      title: "Copyline Crafter video",
    },
    hideTitle: true,
  },
     {
    title: "AI BEAT ME",
    body: {
      type: "html",
      html: "I wasn't mad. I was thrilled.",
    },
  },
    {
    title: "AI ISN'T TAKING JOBS",
    body: {
      type: "html",
      html: "But it will force you to break bad habits.",
    },
  },
   {
    title: "REPLACE THE PLAYBOOK",
    body: {
      type: "html",
      html: "Build a factory: SPOT → BUILD → TEST → SCALE",
    },
  },
    {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/AI-process.png",
      alt: "SPOT BUILD TEST SCALE DIAGRAM",
    },
    hideTitle: true,
  },
    {
    title: "FEAR. EGO. APPROVAL.",
    body: {
      type: "html",
      html: "The only way to get good at this is to start.",
    },
  },
   {
    title: "PLAYBOOKS END",
    body: {
      type: "html",
      html: "Experiments Compound.",
    },
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
