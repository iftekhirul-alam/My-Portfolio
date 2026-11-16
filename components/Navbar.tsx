"use client";

import React, { useState, useEffect } from "react";
import { MenuIcon, CloseIcon, DownloadIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "@/data/portfolioData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { hero } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#090d16]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 py-3 shadow-md shadow-black/5 dark:shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-slate-900 dark:text-zinc-100 font-semibold tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 p-[1px] flex items-center justify-center shadow-sm shadow-indigo-500/30">
            <div className="w-full h-full bg-slate-100 dark:bg-[#0b101e] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-indigo-600 dark:text-cyan-300">
              IA
            </div>
          </div>
          <span className="text-base font-semibold tracking-tight">
            {hero.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-600 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-slate-200/60 dark:hover:bg-white/[0.08]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Toggle & Resume CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href={hero.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <DownloadIcon className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 py-6 transition-all duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between px-3 py-1">
                <span className="text-xs font-medium text-slate-500 dark:text-zinc-400">Appearance</span>
                <ThemeToggle showLabel />
              </div>

              <a
                href={hero.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-sm font-medium bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-2.5 rounded-full shadow-sm"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download / View Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
