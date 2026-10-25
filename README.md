# Mihir Apte Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · deployed on Vercel.

Live site: https://mihirapte-portfolio.vercel.app

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Editing content
Everything lives in **`src/data/profile.ts`**:
- `profile.video`: intro video. Put the file in `public/` (for example `public/intro.mp4`) and set `video: "/intro.mp4"`. A "Watch intro" button then appears in the hero.
- `profile.photo`: hero photo.
- `personal`: the swipeable "Beyond the résumé" cards. Each card has a `title`, `text` and `photo`.
- `projects`: project cards and pages, in the order they appear. Each has `links.demo` (live app), `links.preview` (walkthrough page), `links.repo` (GitHub) and optional `images` (screenshots in `public/projects/`).
- `timeline`, `skills`, `certifications`: journey, skills and certifications.
- CV download: replace `public/Mihir-Apte-CV.pdf`.

## Contact form (Formspree)
1. Create a free form at https://formspree.io and copy its ID (the part after `/f/`).
2. Locally: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID`.
3. On Vercel: Project, Settings, Environment Variables, add the same key.
Until it is set, the form opens the visitor's email app as a fallback.

## Deploy to Vercel
1. Push this folder to GitHub (`node_modules` and `.next` are git-ignored).
2. Import the repo at https://vercel.com/new and add the environment variable above.
3. Every `git push` to `main` redeploys automatically.
