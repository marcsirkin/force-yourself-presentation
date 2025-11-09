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
    title: "FORCE YOURSELF",
    body: {
      type: "text",
      text: "Force yourself to experiment because your playbook is broken.",
    },
  },
  {
    title: "Welcome to the Thing",
    body: "Introduce the big idea here. Everything below is just plain text you can edit.",
  },
  {
    title: "OMG, It Works",
    body: {
      type: "html",
      html: "Use this section to highlight your first reveal. Duplicate items in <code>demoSlides</code> for more slides, or <a href=\"https://nextjs.org/learn\" target=\"_blank\" rel=\"noreferrer\">link out to supporting material</a> when you need to.",
    },
  },
  {
    title: "Image Interlude",
    media: {
      kind: "image",
      src: "https://yavuzceliker.github.io/sample-images/image-1021.jpg",
      alt: "Glowing neon skyline reflected in calm water",
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
