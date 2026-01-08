"use client";

import { Icon } from "@iconify/react";

interface NavbarProps {
  onMenuClick: () => void;
  isPinned: boolean;
  isLoaded: boolean; // From hook – tells us localStorage has been read
}

export default function Navbar({ onMenuClick, isPinned, isLoaded }: NavbarProps) {
  // Determine if desktop button should be visible AT ALL
  const showDesktopButton = isLoaded && !isPinned;

  return (
    <header className="h-16 border-b bg-white flex items-center px-4 relative">
      {/* Mobile hamburger - always visible on mobile */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-md hover:bg-gray-100 hover:text-green-300 text-gray-500 transition-colors md:hidden"
        aria-label="Open mobile menu"
      >
        <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
      </button>

      {/* Desktop hamburger - ONLY renders when it should be visible */}
      {showDesktopButton && (
        <button
          onClick={onMenuClick}
          style={{
            // Slide in only on first appearance after load
            animation: "slideIn 300ms ease-out forwards",
          }}
          className={`
            absolute left-4 z-10 p-2 rounded-md
            hover:bg-gray-100 hover:text-green-300 text-gray-500
            transition-colors cursor-pointer
          `}
          aria-label="Expand sidebar"
        >
          <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
        </button>
      )}

      {/* App title - smooth margin transition */}
      <div className={`font-semibold text-lg transition-all duration-300 ${showDesktopButton ? "ml-12" : "ml-12 md:ml-0"}`}>
        My App
      </div>

      {/* Keyframes - only needed for slideIn */}
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