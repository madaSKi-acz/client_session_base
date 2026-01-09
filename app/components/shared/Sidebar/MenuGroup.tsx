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
}: Readonly<MenuGroupProps>) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const children = item.children ?? [];
  const hasChildren = children.length > 0;

  const hasActiveChild = children.some(
    (child) => child.path && pathname === child.path
  );

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

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider
          transition-colors rounded-md cursor-pointer
          ${hasActiveChild
            ? "text-primary" 
            : "text-app-fg/60 hover:text-app-fg hover:bg-secondary"
          }
        `}
      >
        <div className="flex items-center gap-2">
          {!isReady && (
            <div className="w-4 h-4 bg-secondary animate-pulse rounded" />
          )}

          {isReady && item.icon && (
            <Icon icon={item.icon} className="text-base" />
          )}

          {!isReady && (
            <div className="h-3 w-20 bg-secondary animate-pulse rounded" />
          )}

          {isReady && <span>{item.label}</span>}
        </div>

        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        /* Using border-border (mapped to your secondary color) instead of gray-200 */
        <div className="ml-4 space-y-1 border-l-2 border-border pl-4">
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