"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import MenuItem from "./MenuItem";
import { useMenu } from "@/hook/useMenu";

const SIDEBAR_PINNED_KEY = "sidebarPinned";

export default function Sidebar() {
  const menu = useMenu();

  const [isPinned, setIsPinned] = useState(true); // Default: pinned (matches server render)
  const [isHovered, setIsHovered] = useState(false);

  // Load from localStorage AFTER mount (client-only, no warning)
  useEffect(() => {
    const loadPinnedState = () => {
      try {
        const saved = localStorage.getItem(SIDEBAR_PINNED_KEY);
        if (saved !== null) {
          const parsed = JSON.parse(saved);
          if (typeof parsed === "boolean") {
            setIsPinned(parsed);
          }
        }
      } catch (error) {
        console.warn("Failed to load sidebar pin state:", error);
      }
    };

    loadPinnedState();
  }, []);

  // Save to localStorage when isPinned changes
  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_PINNED_KEY, JSON.stringify(isPinned));
    } catch (error) {
      console.warn("Failed to save sidebar pin state:", error);
    }
  }, [isPinned]);

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

        {isExpanded && (
          <button
            onClick={() => setIsPinned(prev => !prev)}
            className={`
              p-2 rounded-full transition-all duration-200 group
              ${isPinned
                ? "bg-green-500 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }
            `}
            title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
            aria-label="Toggle sidebar pin"
          >
            <Menu size={16} className="transition-transform group-hover:scale-110" />
          </button>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-3">
        <div className="space-y-4">
          {menu
            .filter((item): item is NonNullable<typeof item> => Boolean(item))
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