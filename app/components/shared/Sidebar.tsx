"use client";

import { useState, useEffect } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import { useMenu } from "@/hook/useMenu";

const SIDEBAR_PINNED_KEY = "sidebarPinned";

export default function Sidebar() {
  const menu = useMenu();

  // Server and first client render: always expanded → perfect hydration match
  const [isPinned, setIsPinned] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Load real pinned state from localStorage AFTER mount (no warning + no hydration error)
  useEffect(() => {
    // Defer everything to the next tick to avoid direct setState in effect
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem(SIDEBAR_PINNED_KEY);
        if (saved !== null) {
          setIsPinned(JSON.parse(saved));
        }
      } catch (e) {
        console.warn("Failed to load sidebar pinned state", e);
      }

      // Also mark icons as ready
      setIsReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Save whenever isPinned changes
  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_PINNED_KEY, JSON.stringify(isPinned));
    } catch (e) {
      console.warn("Failed to save sidebar pinned state", e);
    }
  }, [isPinned]);

  const isExpanded = isPinned || (!isPinned && isHovered);

  return (
    <aside
      onMouseEnter={() => !isPinned && setIsHovered(true)}
      onMouseLeave={() => !isPinned && setIsHovered(false)}
      className={`
        h-screen border-r bg-white flex flex-col 
        transition-all duration-300 ease-in-out
        ${isExpanded ? "w-64" : "w-20"}
      `}
    >
      <SidebarHeader
        isExpanded={isExpanded}
        isPinned={isPinned}
        onTogglePin={() => setIsPinned(prev => !prev)}
      />

      <SidebarMenu 
        menu={menu} 
        isExpanded={isExpanded}
        isReady={isReady}
      />
    </aside>
  );
}