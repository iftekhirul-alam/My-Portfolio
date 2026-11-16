"use client";

import React, { useSyncExternalStore } from "react";
import { useTheme } from "./ThemeContext";
import { SunIcon, MoonIcon } from "./Icons";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center justify-center gap-2 p-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
        isDark
          ? "bg-white/[0.05] hover:bg-white/[0.1] text-amber-300 border border-white/10 hover:border-amber-400/40 shadow-sm shadow-black/20"
          : "bg-slate-100 hover:bg-slate-200 text-indigo-600 border border-slate-300/80 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <SunIcon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-300" />
        ) : (
          <MoonIcon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12 text-indigo-600" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium text-slate-700 dark:text-zinc-300">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
