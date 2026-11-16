"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  DownloadIcon,
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  SparklesIcon,
} from "./Icons";
import { portfolioData } from "@/data/portfolioData";

export function Hero() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const { hero } = portfolioData;

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[650px] h-[340px] bg-gradient-to-tr from-indigo-500/10 dark:from-indigo-600/20 via-cyan-500/10 dark:via-cyan-500/15 to-transparent blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-64 right-10 w-[380px] h-[280px] bg-purple-500/10 dark:bg-purple-600/15 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left / Main Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-medium backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Opportunities</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 text-xs font-medium">
                <MapPinIcon className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                <span>{hero.location}</span>
              </div>
            </div>

            {/* Designations Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {hero.designations.map((role, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm font-mono tracking-wide uppercase px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-cyan-300 font-semibold"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5">
              Hi, I&apos;m{" "}
              <span className="accent-gradient-text">{hero.name}</span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-zinc-200 leading-snug mb-4">
              {hero.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
              Combining extensive professional IT administration, infrastructure maintenance, and networking with modern, responsive front-end engineering using React, JavaScript, and Tailwind CSS.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="flex items-center gap-2 text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-slate-800 dark:hover:bg-zinc-200 px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-black/10 dark:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href={hero.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold bg-indigo-50 dark:bg-indigo-600/20 hover:bg-indigo-100 dark:hover:bg-indigo-600/30 text-indigo-700 dark:text-cyan-300 px-6 py-3 rounded-full border border-indigo-200 dark:border-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 text-sm font-semibold bg-slate-100 dark:bg-zinc-900/80 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white px-5 py-3 rounded-full border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <SparklesIcon className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Contact & Socials Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200 dark:border-white/5">
              {/* Copy Email Button */}
              <button
                type="button"
                onClick={() => copyToClipboard(hero.email, "email")}
                className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-zinc-300 bg-slate-100/80 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 px-3.5 py-2 rounded-xl transition-all"
                title="Copy email address"
              >
                {copiedType === "email" ? (
                  <>
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <MailIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{hero.email}</span>
                    <CopyIcon className="w-3 h-3 text-slate-400 dark:text-zinc-500" />
                  </>
                )}
              </button>

              {/* Call Phone Button */}
              <a
                href={`tel:${hero.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-zinc-300 bg-slate-100/80 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 px-3.5 py-2 rounded-xl transition-all"
                title="Call phone number"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{hero.phone}</span>
              </a>

              {/* Socials */}
              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={hero.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={hero.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right / Photo Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer decorative gradient glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-cyan-500 to-purple-600 rounded-3xl blur-lg opacity-35 dark:opacity-40 group-hover:opacity-60 dark:group-hover:opacity-75 transition duration-500" />

              {/* Photo Card Container */}
              <div className="relative rounded-3xl bg-white/90 dark:bg-[#0e1424] border border-slate-200 dark:border-white/15 p-3.5 shadow-xl dark:shadow-2xl overflow-hidden max-w-[340px] sm:max-w-[380px]">
                {/* Photo */}
                <div className="relative aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-slate-200 dark:bg-zinc-900">
                  <Image
                    src={hero.photo}
                    alt={hero.name}
                    priority
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Subtle bottom shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 dark:from-[#090d16] via-transparent to-transparent opacity-80" />

                  {/* On-image caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 dark:bg-[#090d16]/80 backdrop-blur-md border border-slate-200 dark:border-white/10">
                    <p className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                      {hero.name}
                    </p>
                    <p className="text-[11px] text-indigo-600 dark:text-cyan-300 font-mono">
                      IT Ops &amp; Frontend Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bento-card p-5 rounded-2xl flex flex-col justify-between group">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
              5+ Years
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-2">
                IT Administration
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                Enterprise systems, networking &amp; support
              </p>
            </div>
          </div>

          <div className="bento-card p-5 rounded-2xl flex flex-col justify-between group">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
              M.Sc. &amp; B.Sc.
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-2">
                Computer Science
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                Graduated with CGPA 3.75 &amp; 3.58
              </p>
            </div>
          </div>

          <div className="bento-card p-5 rounded-2xl flex flex-col justify-between group">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
              Frontend Stack
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-2">
                Modern Web Apps
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                React, Tailwind CSS, JavaScript &amp; HTML5
              </p>
            </div>
          </div>

          <div className="bento-card p-5 rounded-2xl flex flex-col justify-between group">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors">
              100% Stable
            </span>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 mt-2">
                Operations &amp; Security
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                CDBL, LAN/WAN &amp; IT infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
