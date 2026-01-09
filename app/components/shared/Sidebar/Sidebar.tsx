"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { useMenu } from "@/hook/useMenu";

interface SidebarProps {
  isPinned: boolean;
  onTogglePin: () => void;
  isReady?: boolean;
  onLogout: () => void
}

export default function Sidebar({
  isPinned,
  onTogglePin,
  isReady = true,
  onLogout
}: Readonly<SidebarProps>) {
  const menu = useMenu();

 
  const isExpanded = isPinned;

  return (
    <aside
      className={`
        h-screen border-r bg-white flex flex-col
        transition-all duration-300 ease-in-out overflow-hidden
        ${isExpanded ? "w-64" : "w-20"}
      `}
    >
      <SidebarHeader
        isExpanded={isExpanded}
        isPinned={isPinned}
        onTogglePin={onTogglePin}
      />

      <SidebarMenu
        menu={menu}
        isExpanded={isExpanded}
        isReady={isReady}
      />

      <SidebarFooter
        isExpanded={isExpanded}
        onLogout={onLogout}
      />
    </aside>
  );
}