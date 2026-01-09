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
    <div className="flex items-center justify-between p-4">
      <Link
        href="/dashboard"
        className="flex items-center gap-3 overflow-hidden group"
      >
        <Logo priority={true}/>
      </Link>

      {isExpanded && (
        <button
          onClick={onTogglePin}
          className={`p-2 rounded-full transition-all cursor-pointer text-primary`}
          title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
        >
          <Icon 
            icon={isPinned ? "hugeicons:sidebar-left" : "hugeicons:sidebar-right"} 
            className="text-2xl" 
          />
        </button>
      )}
    </div>
  );
}