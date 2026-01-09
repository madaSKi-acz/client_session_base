"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { MenuItem } from "@/types/menu";

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
}: Readonly<MobileSidebarProps>) {

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
      {/* Overlay: Using a standard semi-transparent black for focus */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      />

      {/* Sidebar Panel: Swapped bg-white for bg-app-bg */}
      <aside className="absolute left-0 top-0 h-full w-72 bg-app-bg shadow-xl flex flex-col animate-slide-in">
        
        {/* Header: Added theme-aware border color */}
        <div className="flex items-center justify-between px-4 h-16 border-b border-border">
          <Link
            href="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3"
          >
            <div
              className="relative transition-all duration-300"
              style={{
                width: "36px",
                height: "36px",
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                sizes="36px"
                className="object-contain"
                priority={true}
              />
            </div>
          </Link>

          {/* Close Button: Using secondary for hover state */}
          <button
            onClick={onClose}
            className="p-2 rounded-md text-app-fg/50 transition-colors cursor-pointer hover:bg-secondary hover:text-app-fg"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <SidebarMenu
            menu={menu}
            isExpanded={true}
            isReady={isReady}
          />
        </div>

        <SidebarFooter
          isExpanded={true}
          onLogout={() => {
            onClose();
          }}
        />
      </aside>

       <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slide-in 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
}