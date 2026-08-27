"use client";

import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mblyovep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, _replyto: email, subject, message }),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setFirstName(""); setLastName(""); setEmail(""); setSubject(""); setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">Let&apos;s discuss a data or <span className="text-primary">cloud opportunity</span>.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">For a role, apprenticeship or project conversation, email is the most direct channel.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-7">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-text-primary">Professional contact</h3>
              <div className="mt-6 space-y-5">
                <a href="mailto:ib.yebdri@gmail.com" className="flex items-start gap-4 text-text-secondary transition-colors hover:text-primary"><span className="rounded-full bg-primary/10 p-3 text-primary"><MdEmail /></span><span><strong className="block text-sm text-text-primary">Email</strong><span className="text-sm">ib.yebdri@gmail.com</span></span></a>
                <a href="tel:+213778653633" className="flex items-start gap-4 text-text-secondary transition-colors hover:text-primary"><span className="rounded-full bg-primary/10 p-3 text-primary"><FaPhoneAlt /></span><span><strong className="block text-sm text-text-primary">Phone</strong><span className="text-sm">+213 778 653 633</span></span></a>
                <div className="flex items-start gap-4 text-text-secondary"><span className="rounded-full bg-primary/10 p-3 text-primary"><FaMapMarkerAlt /></span><span><strong className="block text-sm text-text-primary">Location</strong><span className="text-sm">Oran, Algeria</span></span></div>
              </div>
            </div>

            <a href={`${basePath}/documents/Ibrahim-Yebdri-CV.pdf`} target="_blank" rel="noreferrer" className="block rounded-xl border border-primary/30 bg-primary/10 p-6 transition-colors hover:bg-primary/15">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">CV</p>
              <p className="mt-2 font-semibold text-text-primary">Professional CV PDF · English · 1 page</p>
              <p className="mt-1 text-sm text-text-secondary">Academic results, certifications and selected projects.</p>
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/ibrahimyebdri" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-border bg-card p-3 text-text-primary transition-colors hover:border-primary hover:text-primary"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ibrahim-yebdri-96b198291/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-border bg-card p-3 text-text-primary transition-colors hover:border-primary hover:text-primary"><FaLinkedin /></a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-semibold text-text-primary">Send a message</h3>
            <p className="mt-2 text-sm text-text-secondary">The form sends your message directly by email.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium text-text-primary">First name<input required value={firstName} onChange={(event) => setFirstName(event.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary" /></label>
                <label className="text-sm font-medium text-text-primary">Last name<input required value={lastName} onChange={(event) => setLastName(event.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary" /></label>
              </div>
              <label className="block text-sm font-medium text-text-primary">Email<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary" /></label>
              <label className="block text-sm font-medium text-text-primary">Subject<input value={subject} onChange={(event) => setSubject(event.target.value)} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary" /></label>
              <label className="block text-sm font-medium text-text-primary">Message<textarea required value={message} onChange={(event) => setMessage(event.target.value)} className="mt-2 min-h-32 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary" /></label>
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:brightness-110 active:scale-[0.98] disabled:opacity-60"><FaPaperPlane />{status === "sending" ? "Sending…" : "Send message"}</button>
              {status === "success" && <p className="text-center text-sm font-medium text-primary">Message sent successfully.</p>}
              {status === "error" && <p className="text-center text-sm font-medium text-red-600">The message could not be sent. Please try again or email directly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
