"use client";

import { FormEvent, useState } from "react";
import { Download, FileText, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const cvHref = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/documents/Ibrahim-Yebdri-CV.pdf`;

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("https://formspree.io/f/mblyovep", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-border/70 bg-muted/35 px-5 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary">CONTACT</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">Let&apos;s discuss a data or cloud opportunity.</h2>
          <p className="mt-5 max-w-md leading-7 text-text-secondary">For a role, apprenticeship or project conversation, email is the most direct channel. The CV includes a concise academic and project overview.</p>
          <div className="mt-8 space-y-4 text-sm">
            <a href="mailto:ib.yebdri@gmail.com" className="flex items-center gap-3 text-text-secondary hover:text-primary"><Mail className="h-4 w-4 text-primary" /> ib.yebdri@gmail.com</a>
            <span className="flex items-center gap-3 text-text-secondary"><Phone className="h-4 w-4 text-primary" /> +213 778 653 633</span>
            <span className="flex items-center gap-3 text-text-secondary"><MapPin className="h-4 w-4 text-primary" /> Oran, Algeria</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/ibrahimyebdri" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-text-primary hover:border-primary/60"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/ibrahim-yebdri-96b198291/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-text-primary hover:border-primary/60"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
          <a href={cvHref} target="_blank" rel="noreferrer" className="mt-8 flex max-w-md items-center justify-between rounded-2xl border border-primary/30 bg-primary/10 p-5 transition-colors hover:bg-primary/15">
            <span className="flex items-center gap-3"><span className="rounded-lg bg-primary/15 p-2"><FileText className="h-5 w-5 text-primary" /></span><span><span className="block text-sm font-semibold text-text-primary">Professional CV</span><span className="mt-0.5 block text-xs text-text-secondary">PDF · English · 1 page</span></span></span>
            <Download className="h-5 w-5 text-primary" />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-background p-6 shadow-xl shadow-black/10 sm:p-8">
          <h3 className="text-xl font-semibold text-text-primary">Send a message</h3>
          <p className="mt-2 text-sm text-text-secondary">Your message is sent through the contact form and I will reply by email.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-text-primary">First name<input required name="firstName" autoComplete="given-name" className="rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-text-primary" /></label>
            <label className="grid gap-2 text-sm font-medium text-text-primary">Last name<input required name="lastName" autoComplete="family-name" className="rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-text-primary" /></label>
            <label className="grid gap-2 text-sm font-medium text-text-primary">Email<input required name="email" type="email" autoComplete="email" className="rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-text-primary" /></label>
            <label className="grid gap-2 text-sm font-medium text-text-primary">Subject<input name="subject" className="rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-text-primary" /></label>
            <label className="grid gap-2 text-sm font-medium text-text-primary sm:col-span-2">Message<textarea required name="message" rows={5} className="rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-text-primary" /></label>
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          </div>
          <button type="submit" disabled={status === "sending"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#4ab8aa] disabled:cursor-not-allowed disabled:opacity-70"><Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Send message"}</button>
          {status === "success" && <p className="mt-4 text-center text-sm text-[#70e0b5]">Message sent successfully.</p>}
          {status === "error" && <p className="mt-4 text-center text-sm text-[#ff8b8b]">The message could not be sent. Please email me directly.</p>}
        </form>
      </div>
    </section>
  );
}
