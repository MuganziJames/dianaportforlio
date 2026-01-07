"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Research" },
    { href: "/contact", label: "Contact" },
  ];

  // Filter out current page from nav
  const filteredLinks = navLinks.filter((link) => link.href !== pathname);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="flex items-center justify-between px-8 py-6 md:px-16 lg:px-24 relative z-50">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold" aria-label="Home">
          ✻
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <HiX /> : <HiMenuAlt4 />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-3xl font-[family-name:var(--font-playfair)] font-bold transition-opacity hover:opacity-60 ${
                  pathname === link.href ? "opacity-40" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
