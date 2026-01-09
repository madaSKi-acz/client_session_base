"use client";

import { Icon } from "@iconify/react";

interface NavbarProps {
  onMenuClick: () => void;
  isPinned: boolean;
  isLoaded: boolean;
}

export default function Navbar({ onMenuClick, isPinned, isLoaded }: Readonly<NavbarProps>) {
  const showDesktopButton = isLoaded && !isPinned;

  return (
    <header className="h-16 border-b border-border bg-app-bg flex items-center px-4 relative transition-colors duration-300">
      
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-md hover:text-primary text-app-fg/60 transition-colors md:hidden cursor-pointer"
        aria-label="Open mobile menu"
      >
        <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
      </button>

      {/* Desktop hamburger */}
      {showDesktopButton && (
        <button
          onClick={onMenuClick}
          style={{
            animation: "slideIn 300ms ease-out forwards",
          }}
          className={`
            absolute left-4 z-10 p-2 rounded-md
            hover:text-primary text-app-fg/60
            transition-colors cursor-pointer
          `}
          aria-label="Expand sidebar"
        >
          <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
        </button>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(64px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}