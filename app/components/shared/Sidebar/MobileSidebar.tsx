"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { MenuItem } from "@/types/menu";
import "./Sidebar.css"

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  menu: MenuItem[];
  isReady: boolean;
}

export default function MobileSidebar({
  open,
  onClose,
  menu,
  isReady,
}: MobileSidebarProps) {

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-4 h-16 border-b">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={36}
              height={36}
              className="flex-shrink-0"
            />
          </Link>

          <button
            onClick={onClose}
            className="p-2 rounded-md text-red-300 cursor-pointer hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <SidebarMenu
          menu={menu}
          isExpanded={true}
          isReady={isReady}
        />

        <SidebarFooter
          isExpanded={true}
          onLogout={() => {
            onClose();
          }}
        />
      </aside>
    </div>
  );
}
