"use client";
/* eslint-disable react/no-unescaped-entities */
import { BsFileCode, BsHexagon, BsCodeSlash } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { SiReact, SiNextdotjs, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => { 
    const textElement = textRef.current;
    if (!textElement) return;

  const roles = [
  "Full-Stack Web Developer",
  "Next.js & React.js Specialist",
  "Mobile Developer with React Native",
  "Expo Expert for Cross-Platform Apps",
  "Tailwind CSS & UI Design Enthusiast",
  "Postgres & API Integration Specialist",
  "Performance Optimization Engineer",
  "Freelance Developer Available 🚀",
];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      textElement.textContent = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);

      charIndex += isDeleting ? -1 : 1;
      typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  const techStack = [
    { icon: <SiReact className="h-5 w-5 sm:h-6 sm:w-6 text-[#61DAFB]" />, label: "React" },
    { icon: <SiNextdotjs className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />, label: "Next.js" },
    { icon: <SiTailwindcss className="h-5 w-5 sm:h-6 sm:w-6 text-[#06B6D4]" />, label: "Tailwind CSS" },
    { icon: <SiPostgresql className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />, label: "Postgres" },
    { icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        width={24}
        height={24}
        className="h-5 w-5 sm:h-6 sm:w-6"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Expo"
      >
        <ellipse cx="12" cy="12" rx="12" ry="12" fill="#000020" />
        <path
          d="M7.5 16.5L12 7.5L16.5 16.5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ), label: "Expo" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-background pt-20 md:pt-0">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-foreground/5"></div>
      </div>

      {/* Floating gradient circles */}
      <div className="absolute top-20 left-4 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-r from-primary/20 to-primary-foreground/20 rounded-full blur-3xl opacity-70 animate-float"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-l from-primary/30 to-primary-foreground/20 rounded-full blur-3xl opacity-70 animate-float-delay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-t from-primary/10 to-primary-foreground/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div data-aos="zoom-in-down" className="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">
          <div>
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4 bg-muted text-foreground border border-primary/20 hover:bg-primary/10 transition-colors">
              Available for Freelance Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
                Ibrahim YEBDRI
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 text-text-secondary">
              I'm a <span ref={textRef} className="text-text-primary"></span>
            </h2>
          </div>

          <p className="text-base sm:text-lg max-w-xl text-text-secondary">
            I craft responsive web applications where technologies meet creativity. Building exceptional digital experiences with modern full stack frameworks.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-2">
            <Link
              href="#projects"
              aria-label="View My Work"
              className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-md border bg-primary text-text-primary border-primary hover:bg-primary/90 hover:scale-105 transition-transform"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              aria-label="Contact Me"
              className="inline-flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium rounded-md border bg-background text-foreground border-border hover:bg-muted hover:scale-105 transition-transform"
            >
              Contact Me
            </Link>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-3 pt-3">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-xs sm:text-sm text-text-secondary">Tech I work with:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 bg-muted px-3 py-1 rounded-full border border-border hover:bg-background transition-colors group" title={tech.label}>
                    {tech.icon}
                    <span className="text-xs sm:text-sm text-text-secondary group-hover:text-foreground">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div data-aos="zoom-in" className="relative group">
            <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-primary-foreground/20 to-primary/30 blur-2xl group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full overflow-hidden shadow-xl border-4 border-muted hover:border-primary/50 transition-all duration-300">
              <Image
                src={`${basePath}/moi.png`}
                alt="Ibrahim's profile photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            {/* Decorative Icons */}
            <div className="absolute top-12 -right-10 sm:top-16 sm:right-0 rounded-full p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsFileCode className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute top-1/2 -left-6 rounded-full p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsHexagon className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute -bottom-4 right-1/4 rounded-full p-3 shadow-lg bg-muted border border-primary/20 hover:scale-110 transform transition-transform">
              <BsCodeSlash className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
