"use client";

import React, { useSyncExternalStore } from "react";
import { portfolioData } from "@/data/portfolioData";
import { ChevronUpIcon, GithubIcon, LinkedinIcon, MailIcon, DownloadIcon } from "./Icons";

const emptySubscribe = () => () => {};

export function Footer() {
  const { hero } = portfolioData;

  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-white/5 py-12 relative overflow-hidden bg-slate-100 dark:bg-[#070a12] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80 dark:border-white/5">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#top"
              className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
              <span>{hero.name}</span>
            </a>
            <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1">
              {hero.designations.join(" • ")} • {hero.location}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={hero.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-white/[0.03] hover:bg-slate-300 dark:hover:bg-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white border border-slate-300/80 dark:border-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={hero.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-white/[0.03] hover:bg-slate-300 dark:hover:bg-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white border border-slate-300/80 dark:border-white/5 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${hero.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-white/[0.03] hover:bg-slate-300 dark:hover:bg-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white border border-slate-300/80 dark:border-white/5 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
            </a>

            <a
              href={hero.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-white/[0.03] hover:bg-slate-300 dark:hover:bg-white/[0.08] text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white border border-slate-300/80 dark:border-white/5 transition-colors"
              title="Resume"
            >
              <DownloadIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white p-2 sm:px-3 sm:py-2 rounded-lg bg-slate-200/80 dark:bg-white/[0.03] hover:bg-slate-300 dark:hover:bg-white/[0.08] border border-slate-300/80 dark:border-white/5 transition-colors ml-2 cursor-pointer"
              title="Back to top"
            >
              <ChevronUpIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500 dark:text-zinc-500 font-mono">
          <p>© {currentYear} {hero.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with Next.js 16, React 19 &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
