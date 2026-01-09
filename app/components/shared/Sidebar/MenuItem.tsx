"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { MenuItem } from "@/types/menu";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  item: MenuItem;
  isExpanded: boolean;
  isReady?: boolean;
  isActive?: boolean;
}

export default function MenuItemComponent({
  item,
  isExpanded,
  isReady = true,
  isActive = false,
}: Readonly<MenuItemProps>) {
  const pathname = usePathname();

  const active = isActive || (item.path ? pathname === item.path : false);

  if (!item.path) return null;

  // Loading State
  if (!isReady) {
    return (
      <div
        className={`
        flex items-center gap-3 rounded-md px-3 py-2
        ${isExpanded ? "" : "justify-center"}
      `}
      >
        <div className="w-5 h-5 bg-secondary rounded animate-pulse" />
        {isExpanded && (
          <div className="h-4 bg-secondary rounded w-32 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.path}
      prefetch={false}
      className={`
        group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
        transition-all
        ${active
          ? "bg-card text-primary" 
          : "text-app-fg/70 hover:bg-secondary hover:text-app-fg"}
        ${isExpanded ? "" : "justify-center"}
      `}
      title={isExpanded ? undefined : item.label}
    >
      {item.icon && (
        <Icon
          icon={item.icon}
          className={`flex-shrink-0 ${isExpanded ? "text-lg" : "text-xl"}`}
        />
      )}
      
      {isExpanded && <span className="truncate">{item.label}</span>}

      {/* Tooltip when collapsed */}
      {!isExpanded && (
        <span className="absolute left-full ml-2 px-2 py-1 text-xs font-medium 
          text-app-bg bg-app-fg rounded-md 
          opacity-0 group-hover:opacity-10 transition-opacity 
          whitespace-nowrap pointer-events-none z-10 shadow-sm"
        >
          {item.label}
        </span>
      )}
    </Link>
  );
}