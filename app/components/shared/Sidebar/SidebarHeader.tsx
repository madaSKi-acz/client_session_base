import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

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
      {/* Logo → Dashboard */}
      <Link
        href="/dashboard"
        className="flex items-center gap-3 overflow-hidden group"
      >
        <div 
          className="relative transition-all duration-300" 
          style={{ 
            width: isExpanded ? "48px" : "36px", 
            height: isExpanded ? "48px" : "36px" 
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

        {isExpanded && (
          <span className="font-semibold text-lg truncate group-hover:underline">
            My App
          </span>
        )}
      </Link>

      {isExpanded && (
        <button
          onClick={onTogglePin}
          className={`p-2 rounded-full transition-all group cursor-pointer ${
            isPinned
              ? "text-green-300 shadow-sm"
              : "text-black hover:bg-gray-200"
          }`}
          title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
        >
          <Menu
            size={18}
            className="transition-transform group-hover:scale-110"
          />
        </button>
      )}
    </div>
  );
}
