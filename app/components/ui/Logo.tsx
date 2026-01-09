"use client";

import Image from "next/image";

interface LogoProps {
  size?: number;
  priority?: boolean;
  className?: string;
}

export default function Logo({ 
  size = 48, 
  priority = false, 
  className = "" 
}: Readonly<LogoProps>) {
  return (
    <div 
      className={`relative flex-shrink-0 ${className}`} 
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src="/images/logo.png"
        alt="App Logo"
        fill
        sizes="48px" 
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}