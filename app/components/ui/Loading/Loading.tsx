"use client";

import "./loading.css";
import Logo from "@/app/components/ui/Logo"

export default function Loading() {
  return (
    <div className="flex -m-6 absolute inset-0 bg-primary/10 backdrop-blur-xs z-10 h-screen flex-col items-center justify-center">
      {/* Logo + rings */}
      <div className="relative h-16 w-16 flex items-center justify-center">
        {/* Static ring */}
        <span className="logo-ring animate-pulse" />

        {/* Continuous waves */}
        <span className="wave-ring" />
        <span
          className="wave-ring"
          style={{ animationDelay: "-1.3s" }}
        />

        <Logo />
      </div>

      <p className="mt-4 text-sm font-semibold text-gray-500 animate-pulse italic">
        Loading…
      </p>
    </div>
  );
}
