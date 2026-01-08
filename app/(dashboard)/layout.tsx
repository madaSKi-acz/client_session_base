"use client";

import { useState } from "react";
import Sidebar from "@/app/components/shared/Sidebar/Sidebar";
import MobileSidebar from "@/app/components/shared/Sidebar/MobileSidebar";
import Navbar from "@/app/components/shared/Navbar";
import { useMenu } from "@/hook/useMenu";
import { useSidebarPinned } from "@/hook/useSidebarPinned";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = useMenu();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isPinned, togglePinned, isLoaded } = useSidebarPinned();

  const handleMenuClick = () => {
    setMobileOpen(true);
    togglePinned();
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          isPinned={isPinned}
          onTogglePin={togglePinned}
          isReady={isLoaded}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        menu={menu}
        isReady={true}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-gray-100/90">
        <Navbar
          onMenuClick={handleMenuClick}
          isPinned={isPinned}
          isLoaded={isLoaded}
        />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}