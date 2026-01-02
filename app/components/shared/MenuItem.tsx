import Link from "next/link";
import { Icon } from "@iconify/react";
import { MenuItem } from "@/types/menu";

interface MenuItemProps {
  item: MenuItem;
  isExpanded: boolean;
  isReady?: boolean;   // ← Optional, default true
}

export default function MenuItemComponent({ 
  item, 
  isExpanded, 
  isReady = true   // ← Default to true for safety
}: MenuItemProps) {
  if (!item.path) return null;

  // If not ready, show skeleton/placeholder
  if (!isReady) {
    return (
      <div className={`
        flex items-center gap-3 rounded-md px-3 py-2
        ${isExpanded ? "" : "justify-center"}
      `}>
        <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
        {isExpanded && <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />}
      </div>
    );
  }

  return (
    <Link
      href={item.path}
      className={`
        group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
        text-gray-700 hover:bg-gray-100 hover:text-black transition-all
        ${!isExpanded ? "justify-center" : ""}
      `}
      title={!isExpanded ? item.label : undefined}
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
        <span className="absolute left-full ml-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
          {item.label}
        </span>
      )}
    </Link>
  );
}