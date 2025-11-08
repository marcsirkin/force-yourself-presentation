export type Slide = {
  title: string;
  body?: string;
};

export const demoSlides: Slide[] = [
  {
    title: "Hello, World",
    body: "This is your opening slide. Tweak the text to set the tone of your story.",
  },
  {
    title: "Welcome to the Thing",
    body: "Introduce the big idea here. Everything below is just plain text you can edit.",
  },
  {
    title: "OMG, It Works",
    body: "Use this section to highlight your first reveal. Duplicate items in demoSlides for more slides.",
  },
];
