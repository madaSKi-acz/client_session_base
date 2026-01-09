"use client";

import Logo from "@/app/components/ui/Logo";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface SidebarHeaderProps {
  isExpanded: boolean;
  isPinned: boolean;
  onTogglePin: () => void;
}

export default function SidebarHeader({
  isExpanded,
  isPinned,
  onTogglePin,
}: Readonly<SidebarHeaderProps>) {
  return (
    <div className="relative flex items-center h-16 px-4 overflow-hidden">
      {/* Logo Container */}
      <Link
        href="/dashboard"
        className="flex items-center group transition-all duration-300"
      >
        <Logo 
          size={36} 
          priority={true} 
          className="transition-transform duration-300"
        />
      </Link>

      {/* Toggle Button - Slides in from the right when expanded */}
      <div 
        className={`absolute right-2 transition-all duration-300 ease-in-out ${
          isExpanded 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 translate-x-10 pointer-events-none"
        }`}
      >
        <button
          onClick={onTogglePin}
          className="p-2 rounded-full transition-colors cursor-pointer text-primary hover:bg-secondary"
          title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
        >
          <Icon 
            icon={isPinned ? "hugeicons:sidebar-left" : "hugeicons:sidebar-right"} 
            className="text-2xl" 
          />
        </button>
      </div>
    </div>
  );
}