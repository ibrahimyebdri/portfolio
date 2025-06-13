"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaInstagram, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/votre-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:votre@email.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/ibrahimyebdri" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ibrahim-yebdri-96b198291/" },
    { icon: <MdEmail />, href: "mailto:ib.yebdri@gmail.com" },
    { icon: <FaInstagram />, href: "https://instagram.com/ibrahim_yebdri" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 px-8 flex flex-col justify-center items-center ${
        scrolled ? "py-2 bg-background/90 backdrop-blur-md shadow-lg" : "py-5 bg-background"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#home" className="text-2xl font-bold text-text-primary">
            Ibrahim<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Items */}
          <div className="hidden md:flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="text-text-secondary hover:text-primary transition-colors text-lg"
              >
                {social.icon}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-secondary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-text-secondary hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex space-x-6 pt-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-text-secondary hover:text-primary transition-colors text-lg"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <ContactSection />
    </header>
  );
};

export default Navbar;
