"use client";

import { Icon } from "@iconify/react";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="h-16 border-b bg-white flex items-center px-4">
      {/* Mobile sidebar button */}
      <button
        onClick={onMenuClick}
        className="md:hidden cursor-ew-resize p-2 rounded-md hover:bg-gray-100 hover:text-green-300 text-gray-400"
        aria-label="Open sidebar"
      >
        <Icon
          icon="hugeicons:sidebar-right"
          className="text-2xl"
        />
      </button>
    </header>
  );
}
