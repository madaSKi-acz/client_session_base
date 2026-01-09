"use client";

import { LogOut } from "lucide-react";

interface SidebarFooterProps {
  isExpanded: boolean;
  onLogout: () => void;
}

export default function SidebarFooter({
  isExpanded,
  onLogout,
}: Readonly<SidebarFooterProps>) {
  return (
    <div className="border-t p-3">
      <button
        onClick={onLogout}
        className={`
          group relative w-full flex items-center gap-3 rounded-md px-3 py-2
          text-sm font-medium transition-all hover:text-red-300
          text-gray-700 cursor-pointer hover:bg-gray-100/70
          ${isExpanded ? "" : "justify-center"}
        `}
        title={isExpanded ? undefined : "Logout"}
      >
        <LogOut className={isExpanded ? "text-lg" : "text-xl"} />

        {isExpanded && <span>Logout</span>}

        {/* Tooltip when collapsed */}
        {!isExpanded && (
          <span className="absolute left-full ml-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
            Logout
          </span>
        )}
      </button>
    </div>
  );
}
