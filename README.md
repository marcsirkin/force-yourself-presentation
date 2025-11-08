# Force Yourself Presentation Scaffold

This project is a scrollytelling presentation built with Next.js, Tailwind CSS, Lenis, and Framer Motion.

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

## GitHub Workflow

1. Commit your changes locally.
2. Push to the GitHub repository (`main` or a feature branch).
3. Open a Pull Request if you want code review or a deployment preview.

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
