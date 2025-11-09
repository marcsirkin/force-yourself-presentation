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
    title: "AI BEAT ME",
    body: {
      type: "html",
      html: "I wasn't mad. I was thrilled.",
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
      src: "/images/spot-process.png",
      alt: "SPOT BUILD TEST SCALE DIAGRAM",
    },
    hideTitle: true,
  },
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/ai-factory.png",
      alt: "AI Factory",
    },
    hideTitle: true,
  },

    // Slide 10: Secret sauce image (teaser, no explanation yet)
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/secretsauce.png",
      alt: "Knowledge base preview",
    },
    hideTitle: true,
  },
  // NEW SLIDE 11: Teaser frame
  {
    title: "THE SECRET? IT'S NOT THE TOOLS.",
    body: {
      type: "html",
      html: "Watch what happens when you see it in action.",
    },
  },
  
  
  // Slide 12: CopyCrafter title
  {
    title: "COPYCRAFTER: SEE IT WORK",
    body: {
      type: "html",
      html: "From frameworks and briefs to variants in 30 seconds.",
    },
  },
  
  // Slides 13-17: CopyCrafter walkthrough
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/1-copyline.jpg",
      alt: "Copyline Crafter 01",
    },
    hideTitle: true,
  },
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/2-copyline.jpg",
      alt: "Copyline Crafter 02",
    },
    hideTitle: true,
  },
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/3-copyline.jpg",
      alt: "Copyline Crafter 03",
    },
    hideTitle: true,
  },
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/4-copyline.jpg",
      alt: "Copyline Crafter 04",
    },
    hideTitle: true,
  },
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/5-copyline.jpg",
      alt: "Copyline Crafter 05",
    },
    hideTitle: true,
  },
  
  // Slide 18: Now reveal the secret
  {
    title: "THE SECRET: KNOWLEDGE BASE, NOT JUST PROMPTS",
    body: {
      type: "html",
      html: "These files make every GPT 10x smarter.",
    },
  },
  
  // Slide 19: Checklist
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/checklist.png",
      alt: "Three files you need: ICP, Company Description, Process Docs",
    },
    hideTitle: true,
  },
  
  // Slide 20: Mic drop
  {
    title: "PLAYBOOKS END.",
    body: {
      type: "html",
      html: "Experiments Compound.",
    },
  },
  
  // Slide 21: Thank you
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/qr-thanks.png",
      alt: "QR Code - Thank you",
    },
    hideTitle: true,
  },
];
