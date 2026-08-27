"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Profile", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/ibrahimyebdri", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ibrahim-yebdri-96b198291/", label: "LinkedIn" },
  { icon: <MdEmail />, href: "mailto:ib.yebdri@gmail.com", label: "Email" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed z-50 w-full border-b border-transparent transition-all duration-200 ${scrolled ? "border-border bg-background/95 py-2 shadow-lg backdrop-blur-md" : "bg-background/90 py-4 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link href="#home" className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
            Ibrahim<span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center space-x-6 lg:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center space-x-3 md:flex">
            <ThemeToggle />
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} aria-label={social.label} className="text-lg text-text-secondary transition-colors hover:text-primary">
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button type="button" className="rounded-md p-2 text-text-secondary transition-colors hover:bg-muted hover:text-primary" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="mt-3 border-t border-border pt-3 lg:hidden" aria-label="Mobile navigation">
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-muted hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex gap-5 border-t border-border pt-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} aria-label={social.label} className="text-lg text-text-secondary hover:text-primary">
                  {social.icon}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
