import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-face" });

export const metadata: Metadata = {
  title: "Mihir Apte | Data Scientist & AI/ML Engineer",
  description:
    "Portfolio of Mihir Apte: data science, NLP, generative AI and physics-informed ML projects, plus a bit about the person behind them.",
  openGraph: {
    title: "Mihir Apte",
    description: "Data Scientist & AI/ML Engineer based in Dublin.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0a0a12" };

const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
