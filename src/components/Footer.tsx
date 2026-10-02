import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 text-center text-sm text-muted">
      <p>© {new Date().getFullYear()} {profile.name} · Built with Next.js, Tailwind &amp; Motion · Dublin, Ireland</p>
    </footer>
  );
}
