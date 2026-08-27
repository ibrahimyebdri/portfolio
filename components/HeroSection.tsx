"use client";

import { BsDatabaseCheck, BsDiagram3, BsHexagon } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { SiAmazonwebservices, SiDatabricks, SiPandas, SiPython } from "react-icons/si";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const roles = ["Data Engineering student", "ETL & data-quality builder", "Cloud foundations learner", "Information systems graduate"];

export default function HeroSection() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    const node = textRef.current;
    if (!node) return;

    let roleIndex = 0;
    let characterIndex = 0;
    let removing = false;
    let timer = 0;

    const writeRole = () => {
      const role = roles[roleIndex];
      characterIndex += removing ? -1 : 1;
      node.textContent = role.slice(0, characterIndex);

      if (!removing && characterIndex === role.length) {
        removing = true;
        timer = window.setTimeout(writeRole, 1300);
        return;
      }
      if (removing && characterIndex === 0) {
        removing = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      timer = window.setTimeout(writeRole, removing ? 35 : 58);
    };

    timer = window.setTimeout(writeRole, 400);
    return () => window.clearTimeout(timer);
  }, []);

  const techStack = [
    { icon: <SiPython className="h-5 w-5 text-[#4B8BBE]" />, label: "Python" },
    { icon: <SiPandas className="h-5 w-5 text-primary" />, label: "Pandas" },
    { icon: <SiDatabricks className="h-5 w-5 text-[#ff3621]" />, label: "Databricks" },
    { icon: <SiAmazonwebservices className="h-5 w-5 text-[#ff9900]" />, label: "AWS" },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-background px-4 pb-12 pt-28 sm:px-6 md:pt-20 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,color-mix(in_srgb,var(--primary)_14%,transparent),transparent_33%),radial-gradient(circle_at_82%_78%,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_33%)]" />
      <div className="container mx-auto grid items-center gap-10 md:grid-cols-2 md:gap-8">
        <div data-aos="fade-up" className="order-2 space-y-5 text-center md:order-1 md:text-left">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">Ibrahim Yebdri · Oran, Algeria</p>
            <h1 className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
              Building <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">reliable data systems</span> with a practical foundation.
            </h1>
            <h2 className="mt-3 text-xl font-semibold text-text-secondary sm:text-2xl">
              I&apos;m a <span ref={textRef} className="text-text-primary" aria-live="polite" />
            </h2>
          </div>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg md:mx-0">
            Master 2 student in Information Systems and Data, developing projects in data quality, ETL pipelines, cloud foundations and distributed systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
            <Link href="#projects" className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]">
              Explore projects
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-primary hover:text-primary active:scale-[0.98]">
              Contact me
            </Link>
          </div>

          <div className="pt-3">
            <p className="mb-2 text-xs text-text-secondary">Current toolkit</p>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {techStack.map((tech) => (
                <span key={tech.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-text-secondary shadow-sm">
                  {tech.icon}{tech.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative order-1 flex justify-center md:order-2">
          <div data-aos="zoom-in" className="relative group">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-80" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-card shadow-xl shadow-primary/10 transition-transform duration-300 group-hover:scale-[1.02] sm:h-64 sm:w-64 md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]">
              <Image src={`${basePath}/moi.png`} alt="Ibrahim Yebdri" fill priority className="object-cover" sizes="(max-width: 640px) 12rem, (max-width: 1024px) 16rem, 25rem" />
            </div>
            <div className="absolute top-16 right-0 hidden rounded-full border border-primary/25 bg-card p-3 text-primary shadow-lg md:block"><BsDatabaseCheck className="h-5 w-5" /></div>
            <div className="absolute top-1/2 -left-6 hidden rounded-full border border-primary/25 bg-card p-3 text-primary shadow-lg md:block"><BsHexagon className="h-5 w-5" /></div>
            <div className="absolute -bottom-4 right-1/4 hidden rounded-full border border-primary/25 bg-card p-3 text-primary shadow-lg md:block"><BsDiagram3 className="h-5 w-5" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
