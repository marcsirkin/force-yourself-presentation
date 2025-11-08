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

The default slides live in [`lib/slides.tsx`](./lib/slides.tsx). Update the `demoSlides` array or add new entries there—each object maps directly to a rendered `Section`.

Because the file is a `.tsx` module you can use JSX for richer formatting. For example, to add a hyperlink:

```tsx
{
  title: "Resources",
  body: (
    <p>
      Dive deeper in the
      {" "}
      <a href="https://example.com" target="_blank" rel="noreferrer">
        full case study
      </a>
      .
    </p>
  ),
}
```

Any anchors inherit presentation-friendly styling automatically, so you only need to supply the URL.

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
