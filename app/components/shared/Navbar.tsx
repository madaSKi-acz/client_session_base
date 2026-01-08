"use client";

import { Icon } from "@iconify/react";

interface NavbarProps {
  onMenuClick: () => void;
  isPinned: boolean; // Now comes from parent
}

export default function Navbar({ onMenuClick, isPinned }: NavbarProps) {
  return (
    <header className="h-16 border-b bg-white flex items-center px-4">
      <button
        onClick={onMenuClick}
        className={`
          p-2 rounded-md hover:bg-gray-100 hover:text-green-600 text-gray-600 
          transition-colors
          md:${isPinned ? "hidden" : "block"}  // On desktop: show only if collapsed
        `}
        aria-label="Open sidebar"
      >
        <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
      </button>

      <div className="ml-4 font-semibold text-lg hidden md:block">
        My App
      </div>
    </header>
  );
}