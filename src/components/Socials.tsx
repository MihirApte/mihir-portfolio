import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Github, Instagram, Linkedin } from "./BrandIcons";

const items = [
  { label: "Email", href: profile.emailCompose, Icon: Mail, hover: "hover:border-brand hover:text-brand" },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, hover: "hover:border-[#0a66c2] hover:text-[#4aa3ff]" },
  { label: "Instagram", href: profile.instagram, Icon: Instagram, hover: "hover:border-[#e1306c] hover:text-[#ff6fa5]" },
  { label: "GitHub", href: profile.github, Icon: Github, hover: "hover:border-fg" },
];

export function Socials({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {items.map(({ label, href, Icon, hover }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm text-muted transition hover:-translate-y-0.5 hover:text-fg ${hover}`}
        >
          <Icon size={16} /> {label}
        </a>
      ))}
    </div>
  );
}
