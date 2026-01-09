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
    <div className="border-t border-border p-3">
      <button
        onClick={onLogout}
        className={`
          group relative w-full flex items-center gap-3 rounded-md px-3 py-2
          text-sm font-medium transition-all cursor-pointer
          
          /* Using app-fg and card tokens for theme consistency */
          text-app-fg/70 hover:bg-card hover:text-red-400
          
          ${isExpanded ? "" : "justify-center"}
        `}
        title={isExpanded ? undefined : "Logout"}
      >
        <LogOut size={isExpanded ? 18 : 20} className="shrink-0" />

        {isExpanded && <span>Logout</span>}

        {/* Tooltip when collapsed - High contrast theme colors */}
        {!isExpanded && (
          <span className="absolute left-full ml-2 px-2 py-1 text-xs font-medium 
            text-app-bg bg-app-fg rounded-md 
            opacity-0 group-hover:opacity-100 transition-opacity 
            whitespace-nowrap pointer-events-none z-10 shadow-sm"
          >
            Logout
          </span>
        )}
      </button>
    </div>
  );
}