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
          p-2 rounded-md hover:bg-gray-100 hover:text-green-300 text-gray-300 
          transition-colors cursor-pointer
          md:${isPinned ? "hidden" : "block"}
        `}
        aria-label="Open sidebar"
      >
        <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
      </button>
    </header>
  );
}