"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { ChevronDown } from "lucide-react";
import MenuItemComponent from "./MenuItem";
import { MenuItem } from "@/types/menu";

interface MenuGroupProps {
  item: MenuItem;
  isExpanded: boolean;
  isReady?: boolean;   // ← NEW
}

export default function MenuGroup({ 
  item, 
  isExpanded, 
  isReady = true   // ← default
}: MenuGroupProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isExpanded) {
    return (
      <>
        {item.children?.map((child) => (
          <MenuItemComponent 
            key={child.label} 
            item={child} 
            isExpanded={false} 
            isReady={isReady}
          />
        ))}
      </>
    );
  }

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-colors"
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
          {item.children?.map((child) => (
            <MenuItemComponent 
              key={child.label} 
              item={child} 
              isExpanded={true} 
              isReady={isReady}
            />
          ))}
        </div>
      )}
    </div>
  );
}