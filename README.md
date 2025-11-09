# Force Yourself Presentation

This project is a scrollytelling presentation built with Next.js, Tailwind CSS, Lenis, and Framer Motion. It was built the weekend of November 8/9 using ChatGPT Codex and Claude as an example of both vibe coding and vibe marketing.

Live presentation site: https://force-yourself-presentation-git-main-marc-sirkins-projects.vercel.app/

## Custom GPTs (AI Factory floor)
1. Copyline Crafter v2 https://chatgpt.com/g/g-xjqgObyMk-copyline-crafter-v2
2. Company Analyzer https://chatgpt.com/g/g-681ce1e585188191a1e6c15f80ddc6be-company-analyzer
3. Sales Call Analyzer https://chatgpt.com/g/g-68cb0d44c3488191a928f56551bd6984-sales-call-analyzer
4. Third Door Media Image GPT https://chatgpt.com/g/g-689ca3cbc84081918964144812318306-tdm-image-builder
5. Down by the River motivation https://chatgpt.com/g/g-qonWiNcwy-down-by-the-river-motivation-v2
6. World-building https://chatgpt.com/g/g-68d96de857e08191ba68807584b65619-writing-tools-ultimate-world-builder
7. Prompt Architect https://chatgpt.com/g/g-68010c3edbe8819187e67c551621c756-prompt-architect

## About the creator
3. Playbook Broken podcast https://marcsirkin.substack.com/
4. Marc Sirkin Consulting https://www.sirkin.com/
5. Marc Sirkin LinkedIn https://www.linkedin.com/in/marcsirkin/
6. Scott Brinker's Martech Map https://chiefmartec.com/2025/05/2025-marketing-technology-landscape-supergraphic-100x-growth-since-2011-but-now-with-ai/

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to preview the presentation.

### Editing Slide Content

The default slides live in [`lib/slides.ts`](./lib/slides.ts). Update the `demoSlides` array or add new entries there—each object maps directly to a rendered `Section`.

> **Heads up:** the TypeScript path alias now pins `@/lib/slides` directly to this file. If you still see an old `lib/slides/index.ts` or similarly named file in your clone, delete it so you only have this single source of truth before editing.

The scaffold already includes the sample media you asked for: one slide embeds the YouTube clip at `https://www.youtube.com/watch?v=8Fey680pHCk` and another pulls in the image from `https://yavuzceliker.github.io/sample-images/image-1021.jpg`. Feel free to replace those URLs or duplicate the pattern for additional media-only beats.

Each slide body can be plain text or marked up HTML. Use `type: "text"` when you only need copy:

```ts
{
  title: "Hello, World",
  body: {
    type: "text",
    text: "This is your opening slide. Tweak the text to set the tone of your story.",
  },
}
```

Switch to `type: "html"` any time you want inline formatting such as hyperlinks:

```ts
{
  title: "Resources",
  body: {
    type: "html",
    html: "Dive deeper in the <a href=\"https://example.com\" target=\"_blank\" rel=\"noreferrer\">full case study</a> when you want supporting detail.",
  },
}
```

Any anchors inherit presentation-friendly styling automatically, so you only need to supply the URL and link text inside the HTML string.

### Adding imagery or video-only slides

Slides can now render a full-bleed asset instead of text. Provide a `media` object and (optionally) set `hideTitle: true` when you
want the slide to showcase only the image or video:

```tsx
{
  title: "Image Interlude",
  hideTitle: true,
  media: {
    kind: "image",
    src: "https://your-domain.com/path/to/image.jpg",
    alt: "Describe the frame for accessibility",
  },
},
{
  title: "Cinematic Break",
  hideTitle: true,
  media: {
    kind: "video",
    src: "https://www.youtube.com/embed/your-id?rel=0&modestbranding=1",
    title: "Video player title for screen readers",
  },
},
```

Media slides are responsive by default—the wrapper keeps a 16:9 ratio, rounds the corners, and scales smoothly on any viewport.

## GitHub Workflow

1. Commit your changes locally.
2. Push to the GitHub repository (`main` or a feature branch).
3. Open a Pull Request if you want code review or a deployment preview.

### If pushes fail or Vercel is missing updates

These quick checks help confirm that your local branch is connected to the correct GitHub repository:

1. Verify the remote is configured:
   ```bash
   git remote -v
   ```
   If nothing is listed, re-add your repository URL:
   ```bash
   git remote add origin https://github.com/your-user/your-repo.git
   ```
2. Ensure you are on the `main` branch (the project defaults to `main`):
   ```bash
   git branch -M main
   ```
3. Push the branch and set the upstream so future pushes just need `git push`:
   ```bash
   git push -u origin main
   ```
4. If you prefer working on feature branches, create one after step 3 and push normally:
   ```bash
   git checkout -b feature/my-update
   git push -u origin feature/my-update
   ```

Once the remote is restored, Vercel will pick up the next push automatically.

## Deploying to Vercel

1. Import the repository into Vercel.
2. Use the default build command `npm run build` and output directory `.next`.
3. Set the Node.js version to match the one in `package.json` (Vercel detects this automatically).
4. Deploy—Vercel will run `npm install`, build the Next.js app, and host it globally.

## GitHub Codespaces

You can run the project in GitHub Codespaces:

1. Open the repository in a new Codespace.
2. Run `npm install` to install dependencies inside the Codespace.
3. Start the dev server with `npm run dev`. Codespaces will expose the forwarded port so you can preview the presentation in your browser.
