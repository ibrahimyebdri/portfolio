import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, CheckCircle2, Cloud, Database, FileCheck2 } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const cvHref = `${basePath}/documents/Ibrahim-Yebdri-CV.pdf`;
const portraitHref = `${basePath}/moi.png`;

const focusAreas = [
  { icon: Database, label: "Data quality" },
  { icon: Cloud, label: "Cloud foundations" },
  { icon: FileCheck2, label: "Reliable systems" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-5 pb-18 pt-32 sm:px-8 lg:pb-24 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,transparent_0%,rgba(53,163,148,0.07)_45%,transparent_75%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            OPEN TO INTERNATIONAL OPPORTUNITIES
          </div>
          <p className="mb-4 text-sm font-medium tracking-[0.22em] text-text-secondary">IBRAHIM YEBDRI · ORAN, ALGERIA</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Data systems should be <span className="text-primary">measurable,</span> reliable and ready to scale.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
            Master 2 student in Information Systems and Data, building practical work across data quality, ETL, cloud foundations and distributed systems. Seeking a junior role or apprenticeship abroad from 2027.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={cvHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#4ab8aa] active:scale-[0.98]">
              <ArrowDownToLine className="h-4 w-4" /> Download CV
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-primary/60 hover:bg-muted">
              Review projects <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {focusAreas.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-lg border border-border/80 bg-muted/60 px-3 py-2 text-xs font-medium text-text-secondary">
                <Icon className="h-3.5 w-3.5 text-primary" /> {label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[28rem] lg:max-w-none">
          <div className="absolute -inset-7 -z-10 rounded-[2.5rem] bg-primary/12 blur-3xl" />
          <figure className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#132320] p-2 shadow-2xl shadow-black/30">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem]">
              <Image
                src={portraitHref}
                alt="Ibrahim Yebdri in Oran, Algeria"
                fill
                priority
                className="object-cover object-[center_34%] saturate-[.92] contrast-[1.03]"
                sizes="(max-width: 1024px) 90vw, 460px"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#071210]/95 via-[#071210]/60 to-transparent p-5 pt-20">
                <div>
                  <p className="text-sm font-semibold text-white">Ibrahim Yebdri</p>
                  <p className="mt-0.5 text-xs text-white/70">Oran, Algeria</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/35 bg-[#0d1a18]/70 px-2.5 py-1 text-[0.68rem] font-medium text-primary backdrop-blur-sm">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Data &amp; Cloud
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
