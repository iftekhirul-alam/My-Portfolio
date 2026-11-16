"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "./Icons";

export function Contact() {
  const { hero } = portfolioData;
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2200);
    } catch {
      // ignore
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please try again or email directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/5 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-indigo-500/10 dark:from-indigo-600/15 via-cyan-500/10 to-transparent blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            06 / Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-xl">
            Whether you have an IT infrastructure role, front-end web project, or consultation inquiry, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Direct Email Card */}
            <div className="bento-card p-6 sm:p-7 rounded-3xl">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-4">
                <MailIcon className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Direct Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-5">
                Reach me directly via email, phone, or download my comprehensive resume.
              </p>

              <div className="space-y-3">
                {/* Email row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 text-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <MailIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <a
                      href={`mailto:${hero.email}`}
                      className="text-slate-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-white truncate font-mono"
                    >
                      {hero.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(hero.email, "email")}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white transition-colors ml-2 shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <CopyIcon className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Phone row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 text-xs">
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <a
                      href={`tel:${hero.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-slate-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-white font-mono"
                    >
                      {hero.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(hero.phone, "phone")}
                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white transition-colors ml-2 shrink-0 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <CheckIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <CopyIcon className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Location row */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/5 text-xs text-slate-700 dark:text-zinc-300">
                  <MapPinIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>{hero.location}</span>
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 dark:border-white/5">
                <a
                  href={hero.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-200 px-4 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span>Download / View Resume</span>
                </a>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="bento-card p-6 sm:p-7 rounded-3xl">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Online Profiles
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mb-4">
                Connect with me on LinkedIn and view my latest repositories on GitHub.
              </p>

              <div className="space-y-2">
                <a
                  href={hero.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] hover:bg-slate-200/80 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href={hero.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-white/[0.02] hover:bg-slate-200/80 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-all group"
                >
                  <span className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>GitHub Repositories</span>
                  </span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 dark:text-zinc-500 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="md:col-span-7">
            <div className="bento-card p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6">
                  Have a question or proposal? Drop your message below and it will be delivered directly to my inbox.
                </p>

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm flex items-start gap-2.5">
                    <span className="font-bold">Error:</span>
                    <span>{errorMessage}</span>
                  </div>
                )}

                {submitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                      <CheckIcon className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-sm mb-6">
                      Thank you for reaching out! Your message was sent via Resend and delivered to my inbox. I will reply to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMessage(null);
                      }}
                      className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-zinc-300 mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          disabled={isSubmitting}
                          className="w-full text-xs sm:text-sm bg-slate-100 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-700 dark:text-zinc-300 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          disabled={isSubmitting}
                          className="w-full text-xs sm:text-sm bg-slate-100 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-zinc-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Inquiry / IT or Web Development Opportunity"
                        disabled={isSubmitting}
                        className="w-full text-xs sm:text-sm bg-slate-100 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 dark:text-zinc-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your message here..."
                        disabled={isSubmitting}
                        className="w-full text-xs sm:text-sm bg-slate-100 dark:bg-white/[0.03] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all resize-none disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 text-white py-3 rounded-xl transition-all shadow-md shadow-indigo-500/25 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                          </svg>
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <SparklesIcon className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
