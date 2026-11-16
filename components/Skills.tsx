import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ServerIcon, CodeIcon, LayersIcon, TerminalIcon } from "./Icons";

export function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "IT & Infrastructure":
        return <ServerIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case "Web Development":
        return <CodeIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case "Programming & Databases":
        return <TerminalIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case "Tools & Deployment":
        return <LayersIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <CodeIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
            02 / Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills &amp; Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-xl">
            A comprehensive overview of my networking, system administration, and modern front-end web development toolkit.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="bento-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 hover:text-slate-950 dark:hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
