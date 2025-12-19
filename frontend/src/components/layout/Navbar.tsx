import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass glow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold gradient-text tracking-wide">
            InsightFlow AI
          </h1>
          <p className="text-xs text-slate-400">
            Intelligent Data Analytics Platform
          </p>
        </div>

        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <span>EDA</span>
          <span>Insights</span>
          <span>Visuals</span>
        </div>
      </div>
    </nav>
  );
}
