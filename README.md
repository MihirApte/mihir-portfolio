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
- `personal`: "Beyond the résumé" cards (hobbies, likes, fun facts). If empty, "coming soon" placeholders show instead.
- `gallery`: photos for the Life section. Put images in `public/gallery/` and list them.
- `profile.photo`: hero photo, e.g. `"/me.jpg"` after adding `public/me.jpg`.
- `projects[].links`: add `demo` (HuggingFace Space) and `repo` (GitHub) URLs. Buttons switch from "coming soon" to real links automatically.
- CV download: replace `public/Mihir-Apte-CV.pdf`.

## Contact form (Formspree)
1. Create a free form at https://formspree.io and copy its ID (the part after `/f/`).
2. Locally: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID`.
3. On Vercel: Project → Settings → Environment Variables → add the same key.
Until it is set, the form opens the visitor's email app as a fallback.

## Deploy to Vercel
**Via GitHub (recommended):**
1. Create a GitHub repo and push this folder (`node_modules` and `.next` are git-ignored).
2. Go to https://vercel.com/new, import the repo, keep the defaults (Framework: Next.js), add the env variable above, click Deploy.
3. Every `git push` redeploys automatically.

