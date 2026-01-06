"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { ChevronDown } from "lucide-react";
import MenuItemComponent from "./MenuItem";
import { MenuItem } from "@/types/menu";
import { usePathname } from "next/navigation";

interface MenuGroupProps {
  item: MenuItem;
  isExpanded: boolean;
  isReady?: boolean;
}

export default function MenuGroup({
  item,
  isExpanded,
  isReady = true,
}: MenuGroupProps) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  // Safely check if there are children
  const children = item.children ?? []; // fallback to empty array
  const hasChildren = children.length > 0;

  // Check if any child is active
  const hasActiveChild = children.some(
    (child) => child.path && pathname === child.path
  );

  // If no children → treat as single menu item
  if (!hasChildren) {
    return (
      <MenuItemComponent
        item={item}
        isExpanded={isExpanded}
        isReady={isReady}
        isActive={item.path ? pathname === item.path : false}
      />
    );
  }

  // Collapsed sidebar: render children as icons
  if (!isExpanded) {
    return (
      <>
        {children.map((child) => (
          <MenuItemComponent
            key={child.label}
            item={child}
            isExpanded={false}
            isReady={isReady}
            isActive={child.path ? pathname === child.path : false}
          />
        ))}
      </>
    );
  }

  // Expanded with children → group header + submenu
  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider
          transition-colors rounded-md cursor-pointer
          ${hasActiveChild
            ? "text-green-300"
            : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }
        `}
      >
        <div className="flex items-center gap-2">
          {isReady && item.icon && <Icon icon={item.icon} className="text-base" />}
          {!isReady && <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />}
          <span>{item.label}</span>
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
          {children.map((child) => (
            <MenuItemComponent
              key={child.label}
              item={child}
              isExpanded={true}
              isReady={isReady}
              isActive={child.path ? pathname === child.path : false}
            />
          ))}
        </div>
      )}
    </div>
  );
}