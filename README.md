# Force Yourself to Experiment: Because Your Playbook Is Broken

A "scrollytelling" presentation designed for **[Digital Cut](https://digitalcut.co/)** virtual event planned for February 2026. This presentation/app/website is built with Next.js, Tailwind CSS, Lenis (smooth scrolling), and Framer Motion (animations). Optimized for live presentation delivery with keyboard navigation and full-screen media support.

Built November 8/9, 2025, using ChatGPT and Claude as an example of both **vibe coding** and **vibe marketing**.

**[→ View Live Presentation/App/Website](https://force-yourself-presentation-git-main-marc-sirkins-projects.vercel.app/)**

---

## The Meta Moment

This isn't just a presentation *about* AI experimentation—it's a **live demonstration**.

I built the technical aspects (vibe coding!) in about 5 hours using Codex and Claude to deliver a talk about replacing playbooks with experimentation factories. The app itself proves the thesis:

- **SPOT** friction (PowerPoint doesn't fit the message)
- **BUILD** fast (weekend build)
- **TEST** in production (you're looking at it)
- **SCALE** if it works

If you're watching the presentation, I reveal this at the end. If you're reading the repo first, now you know: the medium IS the message.

It's also accurate to say that I used the concept of vibe marketing to help me refine the talking points, hone in on concepts, and act like a coach and advisor. I hope you enjoy the talk!

I'm available for corporate workshops, keynotes, and advisory work. See my contact info below.

---

## The Factory: Custom GPTs Used in This Talk

The presentation references these custom GPTs—each built in 2-4 hours and running in production:

- **[CopyCrafter v2](https://chatgpt.com/g/g-xjqgObyMk-copyline-crafter-v2)** – Generates copy variants with frameworks in 30 seconds
- **[Company Analyzer](https://chatgpt.com/g/g-681ce1e585188191a1e6c15f80ddc6be-company-analyzer)** – Extracts ICP, positioning, and competitive intel from websites
- **[Sales Call Analyzer](https://chatgpt.com/g/g-68cb0d44c3488191a928f56551bd6984-sales-call-analyzer)** – Turns call transcripts into insights and follow-up actions
- **[TDM Image Builder](https://chatgpt.com/g/g-689ca3cbc84081918964144812318306-tdm-image-builder)** – Creates on-brand visuals using style guide constraints
- **[Down by the River](https://chatgpt.com/g/g-qonWiNcwy-down-by-the-river-motivation-v2)** – Motivational coaching and all the laughs
- **[World Builder](https://chatgpt.com/g/g-68d96de857e08191ba68807584b65619-writing-tools-ultimate-world-builder)** – Story development and world-building 
- **[Prompt Architect](https://chatgpt.com/g/g-68010c3edbe8819187e67c551621c756-prompt-architect)** – Designs and optimizes prompt structures

Each one follows the **SPOT → BUILD → TEST → SCALE** loop demonstrated in the talk.

---

## Who is Marc Sirkin?

- **[Playbook Broken Podcast](https://marcsirkin.substack.com/)** – Real conversations about AI and marketing, no corporate theater
- **[Marc Sirkin Consulting](https://www.sirkin.com/)** – Advisory and execution for AI-driven marketing and growth
- **[Marc on LinkedIn](https://www.linkedin.com/in/marcsirkin/)** – Connect for speaking, workshops, and collaboration
- **[Scott Brinker's Martech Map](https://chiefmartec.com/2025/05/2025-marketing-technology-landscape-supergraphic-100x-growth-since-2011-but-now-with-ai/)** – The landscape graphic used in Slide 3. Scott's devotion to tiny logos is legendary. I even made a [Sora2](https://sora.chatgpt.com/p/s_68e1631c7ec08191ab71e25c85b9876e) video about it: 

---

# AI Foundation Files  
A simple, structured set of markdown templates designed to make your GPTs, Gems, and Skills produce smarter, more consistent work.

This package contains three core files that should be attached to every custom GPT or used as grounding:  
1. ICP_DEFINITION.md  
2. COMPANY_DESCRIPTION.md  
3. PROCESS_LIBRARY.md  

Use these as templates and update them to represent your business.

---

# 1. ICP_DEFINITION.md

## Audience Overview
Who you serve in plain language.

## Jobs To Be Done
What they’re trying to accomplish.

## Pains & Frictions
Where they struggle.  
What slows them down.  
What they complain about.

## Buying Triggers
What causes them to look for solutions now.

## Objections
Why they hesitate or say “not now.”

## Decision Making
How they buy.  
Who else is involved.  
What criteria matter most.

## Language They Use
Important words, phrases, and concepts they care about.

## Value Map
What they consider a “win” or “good outcome.”

---

# 2. COMPANY_DESCRIPTION.md

## Mission
Why your business exists.

## Positioning Statement
Who you serve, what you offer, and why it’s valuable.

## Services / Offers
List each core offer with a short description.

## What You Are Not
Helpful for preventing incorrect assumptions.

## Voice & Tone
How you communicate.  
Provide examples if possible.

## Messaging Pillars
3–5 core themes you want reflected in all output.

## Differentiators
What makes you meaningfully different.

## Credibility Indicators
Experience, results, frameworks, logos (described in text), etc.

## Writing Examples
Paste 2–3 examples of your real writing to anchor style.

---

# 3. PROCESS_LIBRARY.md

## Frameworks
List frameworks you use with steps.  
Example:
- Framework Name  
  - Step 1  
  - Step 2  
  - Step 3  

## Templates
Structures for outputs such as:
- content briefs  
- outreach emails  
- reports  
- project setups  
- checklists

## Step-by-Step Processes
Document how you actually do your work.  
For example:
- How you onboard new clients  
- How you run analysis  
- How you write copy  
- How you build a strategy

## Rules of Thumb
Your “always” / “never” list.

## Example Outputs
Paste anonymized examples of your work.  
This dramatically improves output quality.

## Quality Rubric
Define what “good” looks like.  
Define what “bad” looks like.

---

# How To Use These Files
1. Fill these templates in with your own details.  
2. Attach them to your custom GPT (or equivalent tool).  
3. Reference them inside your instructions:  
   “Use the attached ICP, Company Description, and Process Library files when producing any output.”

This instantly improves:
- accuracy  
- tone alignment  
- ICP relevance  
- repeatable consistency  
- speed  
- quality  

These are your AI foundation files — the fastest way to build an AI Factory.

---

## Technical Details: Local Development

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
