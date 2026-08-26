"use client";

import { useEffect, useState } from "react";
import { FileText, Github, Linkedin, Menu, X } from "lucide-react";

const cvHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/documents/Ibrahim-Yebdri-CV.pdf`;

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Profile", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
        scrolled ? "border-border/80 bg-background/95 py-3 backdrop-blur-xl" : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-tight text-text-primary">
          Ibrahim<span className="text-primary">.y</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-medium text-text-secondary transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href="https://github.com/ibrahimyebdri" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-text-secondary transition-colors hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-yebdri-96b198291/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-text-secondary transition-colors hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={cvHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            <FileText className="h-3.5 w-3.5" /> CV
          </a>
        </div>

        <button className="text-text-primary sm:hidden" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-4 mt-3 rounded-2xl border border-border bg-muted/95 p-4 shadow-2xl sm:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-background hover:text-primary">
                {link.name}
              </a>
            ))}
            <a href={cvHref} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
              <FileText className="h-4 w-4" /> Open CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
