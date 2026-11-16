import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCapIcon, AwardIcon, ExternalLinkIcon } from "./Icons";

export function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            05 / Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education &amp; Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-xl">
            Strong academic foundations in computer science and industry-recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Degrees (8 cols) */}
          <div className="lg:col-span-8 space-y-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-2 mb-2">
              <GraduationCapIcon className="w-4 h-4" />
              <span>Academic Degrees</span>
            </h3>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bento-card p-6 sm:p-7 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div>
                  <div className="inline-block text-xs font-mono px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-semibold mb-2">
                    {edu.year}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block text-xs sm:text-sm font-mono font-semibold px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                    {edu.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-semibold flex items-center gap-2 mb-2">
              <AwardIcon className="w-4 h-4" />
              <span>Professional Credentials</span>
            </h3>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bento-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between h-[calc(100%-2.25rem)] group"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-4">
                    <AwardIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    Issued by {cert.issuer}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-white/5">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
