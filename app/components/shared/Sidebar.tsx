"use client";

import { useState, useEffect } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import { useMenu } from "@/hook/useMenu";

const SIDEBAR_PINNED_KEY = "sidebarPinned";

export default function Sidebar() {
  const menu = useMenu();
  const [isPinned, setIsPinned] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Load pinned state from localStorage after mount
  // Replace this effect (the one causing the warning)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SIDEBAR_PINNED_KEY);
      if (saved !== null) {
        setTimeout(() => setIsPinned(JSON.parse(saved)), 0);
      }
    } catch {
      console.warn("Failed to load sidebar state");
    }
  }, []);

  // With this version (warning-free)
  useEffect(() => {
    const loadPinnedState = async () => {
      try {
        const saved = localStorage.getItem(SIDEBAR_PINNED_KEY);
        if (saved !== null) {
          const value = JSON.parse(saved);
          // Defer setState to next tick → no warning
          setTimeout(() => {
            setIsPinned(value);
          }, 0);
        }
      } catch (e) {
        console.warn("Failed to load sidebar state", e);
      }
    };

    loadPinnedState();
  }, []);

  const isExpanded = isPinned || (!isPinned && isHovered);

  return (
    <aside
      onMouseEnter={() => !isPinned && setIsHovered(true)}
      onMouseLeave={() => !isPinned && setIsHovered(false)}
      className={`
        h-screen w-${isExpanded ? "64" : "20"} border-r bg-white 
        flex flex-col transition-all duration-300 ease-in-out
      `}
    >
      <SidebarHeader
        isExpanded={isExpanded}
        isPinned={isPinned}
        onTogglePin={() => setIsPinned(!isPinned)}
      />
      <SidebarMenu menu={menu} isExpanded={isExpanded} />
    </aside>
  );
}
