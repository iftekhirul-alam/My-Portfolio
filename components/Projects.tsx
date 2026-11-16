"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { GithubIcon, ExternalLinkIcon, SparklesIcon, LayersIcon } from "./Icons";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/5 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[300px] bg-cyan-500/10 dark:bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            03 / Web Development
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Frontend Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 mt-2 max-w-xl">
            Responsive web applications designed and developed using React, Tailwind CSS, and modern JavaScript.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bento-card rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-zinc-950 border-b border-slate-200 dark:border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 dark:from-[#090d16] via-transparent to-transparent opacity-80" />

                  {/* Floating Action Buttons over Image */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {project.githubClient && (
                      <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/90 dark:bg-[#090d16]/80 hover:bg-white dark:hover:bg-[#090d16] backdrop-blur-md border border-slate-200 dark:border-white/15 text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white transition-all shadow-lg"
                        title="View GitHub Repository"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-all"
                        title="Open Live Website"
                        aria-label={`Open live deployment for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Challenge & Future Scope Bento Cards */}
                  <div className="space-y-3 mb-6">
                    {project.challenges && (
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold mb-1">
                          <SparklesIcon className="w-3.5 h-3.5" />
                          <span>Key Challenge Solved</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                          {project.challenges}
                        </p>
                      </div>
                    )}

                    {project.futurePlans && (
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5">
                        <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                          <LayersIcon className="w-3.5 h-3.5" />
                          <span>Future Scope &amp; Enhancements</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                          {project.futurePlans}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tech Stack Tags & Actions */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-slate-200/80 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <span>Launch App</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
