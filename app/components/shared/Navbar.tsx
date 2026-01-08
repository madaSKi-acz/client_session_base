"use client";

import { Icon } from "@iconify/react";

interface NavbarProps {
  onMenuClick: () => void;
  isPinned: boolean;
}

export default function Navbar({ onMenuClick, isPinned }: NavbarProps) {
  return (
    <header className="h-16 border-b bg-white flex items-center px-4 relative">
      <button
        onClick={onMenuClick}
        style={{
          // Custom slide animation using CSS keyframes
          animation: isPinned
            ? "slideOut 300ms ease-out forwards"
            : "slideIn 300ms ease-out forwards",
        }}
        className={`
          absolute left-4 z-10 p-2 rounded-md
          hover:bg-gray-100 hover:text-green-300 text-gray-500
          transition-colors cursor-pointer
          ${isPinned ? "md:hidden" : "md:block"}
        `}
        aria-label="Open sidebar"
      >
        <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
      </button>

      {/* Optional: App title - shifts left when button slides out */}
      <div className="ml-16 md:ml-0 font-semibold text-lg transition-margin duration-300">
        My App
      </div>

      {/* Inline CSS keyframes - works in Tailwind v4 without config */}
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

        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(64px);
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
}