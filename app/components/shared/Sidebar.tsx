"use client";

import { useState } from "react";
import { useMenu } from "@/hook/useMenu";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { MenuItemType } from "@/types/menu";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const menu = useMenu();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        h-screen
        border-r
        bg-white
        text-black
        flex flex-col
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={collapsed ? 32 : 48}
            height={collapsed ? 32 : 48}
            className="transition-all"
          />
          {!collapsed && (
            <span className="text-lg font-semibold">MyApp</span>
          )}
        </div>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-100"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-1 p-2">
        {menu.map((item) => (
          <MenuItem
            key={item.label}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </nav>
    </aside>
  );
}
