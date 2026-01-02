"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { ChevronDown } from "lucide-react";
import MenuItemComponent from "./MenuItem";
import { MenuItem } from "@/types/menu";

interface MenuGroupProps {
  item: MenuItem;
  isExpanded: boolean;
}

export default function MenuGroup({ item, isExpanded }: MenuGroupProps) {
  const [isOpen, setIsOpen] = useState(true);

  // In collapsed mode: don't show header at all
  if (!isExpanded) {
    return (
      <>
        {item.children?.map((child) => (
          <MenuItemComponent key={child.label} item={child} isExpanded={false} />
        ))}
      </>
    );
  }

  return (
    <div className="space-y-1">
      {/* Group Header with Chevron */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-colors"
      >
        <div className="flex items-center gap-2">
          {item.icon && <Icon icon={item.icon} className="text-base" />}
          <span>{item.label}</span>
        </div>
        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Collapsible Children */}
      {isOpen && (
        <div className="ml-4 space-y-1 border-l-2 border-gray-200 pl-4">
          {item.children?.map((child) => (
            <MenuItemComponent key={child.label} item={child} isExpanded={true} />
          ))}
        </div>
      )}
    </div>
  );
}