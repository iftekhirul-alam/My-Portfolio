import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { TerminalIcon, SparklesIcon, ArrowUpRightIcon } from "./Icons";

export function About() {
  const { about, hero } = portfolioData;

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            01 / Background &amp; Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me &amp; My Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-xl">
            Where enterprise IT infrastructure reliability meets clean, responsive front-end engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Main Bio Card (7 cols) */}
          <div className="md:col-span-7 bento-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-xs text-indigo-700 dark:text-cyan-300 font-mono mb-6">
                <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
                <span>Professional Profile</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                Building stable systems and practical, human-centered web solutions.
              </h3>

              <div className="space-y-4 text-slate-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                <p>{about.bio}</p>
                <p>{about.programmingJourney}</p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
                Location: {hero.location} • Status: Available
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 transition-colors"
              >
                <span>View Recent Web Projects</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Side Bento Column: Work Enjoyed & Hobbies (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* What I Enjoy Building */}
            <div className="bento-card p-6 rounded-3xl flex-1 flex flex-col justify-between group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform text-cyan-600 dark:text-cyan-400">
                  <TerminalIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    What I Enjoy Working On
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-2 leading-relaxed">
                    {about.workEnjoyed}
                  </p>
                </div>
              </div>
            </div>

            {/* Hobbies & Activities */}
            <div className="bento-card p-6 rounded-3xl flex-1 flex flex-col justify-between group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform text-indigo-600 dark:text-indigo-400">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    Interests &amp; Community
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-2 leading-relaxed">
                    {about.hobbies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
