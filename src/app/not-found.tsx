import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <p className="gradient-text font-display text-8xl font-bold">404</p>
        <p className="mt-3 text-muted">This page wandered off. Let&apos;s get you back.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-fg px-6 py-3 font-medium text-bg">Back home</Link>
      </div>
    </main>
  );
}
