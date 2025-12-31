"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import MenuItem from "./MenuItem";
import { useMenu } from "@/hook/useMenu";

export default function Sidebar() {
  const menu = useMenu();
  const [isPinned, setIsPinned] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const isExpanded = isPinned || (!isPinned && isHovered);

  return (
    <aside
      onMouseEnter={() => !isPinned && setIsHovered(true)}
      onMouseLeave={() => !isPinned && setIsHovered(false)}
      className={`
        h-screen border-r bg-white flex flex-col
        transition-all duration-300 ease-in-out relative
        ${isExpanded ? "w-64" : "w-20"}
      `}
    >
      {/* Logo & Small Hamburger Toggle */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3 overflow-hidden">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={isExpanded ? 48 : 36}
            height={isExpanded ? 48 : 36}
            className="flex-shrink-0 transition-all duration-300"
          />
          {isExpanded && (
            <span className="text-lg font-semibold truncate transition-opacity duration-200">
              MyApp
            </span>
          )}
        </div>

        {/* Smaller Hamburger Toggle Button */}
        {isExpanded && (
          <button
            onClick={() => setIsPinned(!isPinned)}
            className={`
              p-2 rounded-full transition-all duration-200 group cursor-pointer
              ${isPinned 
                ? "bg-green-500 text-white shadow-sm" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
            title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
            aria-label="Toggle sidebar pin"
          >
            <Menu 
              size={16} 
              className="transition-transform group-hover:scale-110"
            />
          </button>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto p-3">
        <div className="space-y-4">
          {menu
            .filter((item) => item && typeof item === "object")
            .map((item) => (
              <MenuItem
                key={item.label}
                item={item}
                collapsed={!isExpanded}
              />
            ))}
        </div>
      </nav>
    </aside>
  );
}