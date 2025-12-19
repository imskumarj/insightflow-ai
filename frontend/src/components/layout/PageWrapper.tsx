import React from "react";
import Navbar from "./Navbar";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
