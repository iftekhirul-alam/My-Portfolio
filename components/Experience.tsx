import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BriefcaseIcon } from "./Icons";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            04 / Career Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-xl">
            A demonstrated track record of managing enterprise IT infrastructure, high-availability networks, and CDBL operations.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bento-card p-6 sm:p-8 rounded-3xl group relative overflow-hidden"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-600 opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-slate-400 dark:text-zinc-500 font-medium">@</span>
                    <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-mono mt-1">
                    <BriefcaseIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-cyan-700 dark:text-cyan-300 self-start">
                  {exp.duration}
                </span>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
