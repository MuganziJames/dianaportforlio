import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

interface FooterProps {
  ctaText?: string;
  ctaHref?: string;
}

export default function Footer({ ctaText, ctaHref }: FooterProps) {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/diana-imoli-67829812a/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative z-10 px-8 pb-12 md:px-16 lg:px-24">
      {/* CTA Link */}
      {ctaText && ctaHref && (
        <div className="mb-8">
          <Link href={ctaHref} className="arrow-link">
            {ctaText}
            <span className="text-xl">→</span>
          </Link>
        </div>
      )}

      {/* Social Links */}
      <div className="flex items-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg transition-opacity hover:opacity-60"
            aria-label={social.label}
          >
            <social.icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
