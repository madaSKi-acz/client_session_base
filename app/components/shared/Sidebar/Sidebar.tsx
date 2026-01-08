"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { useMenu } from "@/hook/useMenu";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { useConfirm } from "@/app/components/ui/confirm/ConfirmContext";

interface SidebarProps {
  isPinned: boolean;
  onTogglePin: () => void;
  isReady?: boolean; // Made optional – safe default behavior if not provided
}

export default function Sidebar({
  isPinned,
  onTogglePin,
  isReady = true, // Default to true so it works even if parent doesn't pass it
}: SidebarProps) {
  const menu = useMenu();
  const router = useRouter();
  const confirm = useConfirm();

  const handleLogout = async () => {
    const ok = await confirm({
      title: "Logout",
      description: "You will be logged out of your account.",
      confirmText: "Logout",
      cancelText: "Cancel",
      danger: true,
    });

    if (!ok) return;

    try {
      await api.post("/api/logout");
      router.push("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

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
        onLogout={handleLogout}
      />
    </aside>
  );
}