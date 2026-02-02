import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/eshan-shakrani", label: "GitHub" },
  { href: "https://linkedin.com/in/eshan-shakrani-563924191", label: "LinkedIn" },
  { href: "mailto:ekshakrani@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Eshan. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
