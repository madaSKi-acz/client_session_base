import Link from "next/link";
import { Icon } from "@iconify/react";
import { MenuItem } from "@/types/menu";

interface MenuItemProps {
  item: MenuItem;
  isExpanded: boolean;
}

export default function MenuItemComponent({ item, isExpanded }: MenuItemProps) {
  if (!item.path) return null;

  return (
    <Link
      href={item.path}
      className={`
        flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
        text-gray-700 hover:bg-gray-100 hover:text-black transition-all
        ${!isExpanded ? "justify-center px-2" : ""}
      `}
      title={!isExpanded ? item.label : undefined}
    >
      {item.icon && (
        <Icon
          icon={item.icon}
          className={`flex-shrink-0 ${isExpanded ? "text-lg" : "text-xl"}`}
        />
      )}
      {isExpanded && <span className="truncate">{item.label}</span>}
    </Link>
  );
}