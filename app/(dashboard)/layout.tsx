"use client";

import { useState } from "react";
import Sidebar from "@/app/components/shared/Sidebar/Sidebar";
import MobileSidebar from "@/app/components/shared/Sidebar/MobileSidebar";
import Navbar from "@/app/components/shared/Navbar";
import { useMenu } from "@/hook/useMenu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = useMenu();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        menu={menu}
        isReady={true}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col bg-gray-100/90">
        <Navbar onMenuClick={() => setMobileOpen(true)} />

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
