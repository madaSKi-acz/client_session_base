import Image from "next/image";
import { Menu } from "lucide-react";

interface SidebarHeaderProps {
  isExpanded: boolean;
  isPinned: boolean;
  onTogglePin: () => void;
}

export default function SidebarHeader({ isExpanded, isPinned, onTogglePin }: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center  gap-3 overflow-hidden">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={isExpanded ? 48 : 36}
          height={isExpanded ? 48 : 36}
          className="flex-shrink-0 transition-all duration-300"
        />
      </div>

      {isExpanded && (
        <button
          onClick={onTogglePin}
          className={`
            p-2 rounded-full transition-all group cursor-pointer
            ${isPinned ? "bg-green-500 text-white shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
          `}
          title={isPinned ? "Unpin sidebar" : "Pin sidebar"}
        >
          <Menu size={16} className="transition-transform group-hover:scale-110" />
        </button>
      )}
    </div>
  );
}