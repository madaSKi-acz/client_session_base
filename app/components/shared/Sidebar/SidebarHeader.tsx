import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface SidebarHeaderProps {
  isExpanded: boolean;
  isPinned: boolean;
  onTogglePin: () => void;
}

export default function SidebarHeader({
  isExpanded,
  isPinned,
  onTogglePin,
}: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <Link
        href="/dashboard"
        className="flex items-center gap-3 overflow-hidden group"
      >
        <div
          className="relative transition-all duration-300"
          style={{
            width: isExpanded ? "48px" : "36px",
            height: isExpanded ? "48px" : "36px",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            sizes="48px"
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {isExpanded && (
        <button
          onClick={onTogglePin}
          className={`p-2 rounded-full transition-all cursor-pointer text-green-300`}
          title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
        >
          <Icon icon="hugeicons:sidebar-right" className="text-2xl" />
        </button>
      )}
    </div>
  );
}