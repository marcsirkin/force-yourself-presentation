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
  title: "MY PERSONAL EXPERIMENT FACTORY",
  body: {
    type: "html",
    html: "Five custom GPTs. Each built in 2-4 hours. Each running in production.",
  },
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

  
  // Slide 12: CopyLine Crafter title
  {
    title: "COPYLINE CRAFTER IN ACTION",
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
    title: "THE SECRET!",
    body: {
      type: "html",
      html: "Key files that make outputs 10x better.",
    },
  },
  
        // Slide 11: Secret sauce image (teaser, no explanation yet)
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "/images/secretsauce.png",
      alt: "Knowledge base preview",
    },
    hideTitle: true,
  },
  

{
  title: "START HERE!",
  body: {
    type: "html",
    html: "Build these once. Use them everywhere.<br><br><strong>1. ICP Definition</strong> – Who you serve, what they need<br><strong>2. Company Description</strong> – Your positioning, voice, offers<br><strong>3. Process Docs</strong> – How you do the thing, with examples",
  },
},
  
  // Slide 19: Mic drop
  {
    title: "PLAYBOOKS END.",
    body: {
      type: "html",
      html: "Experiments Compound.",
    },
  },
  
  // Slide 20: Thank you
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
