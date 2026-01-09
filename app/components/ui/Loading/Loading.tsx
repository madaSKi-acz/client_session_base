"use client";

import "./loading.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex -m-6 absolute inset-0 bg-green-100/10 backdrop-blur-xs z-10 h-screen flex-col items-center justify-center">
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

        <div
          className="relative z-10 h-12 w-12 rounded-full flex items-center justify-center animate-pulse"
          style={{
            width: "28px",
            height: "28px"
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Loading"
            fill
            sizes="28px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>

      <p className="mt-4 text-sm font-semibold text-gray-500 animate-pulse italic">
        Loading…
      </p>
    </div>
  );
}
