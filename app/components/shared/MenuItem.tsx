"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { MenuItem as Item } from "@/types/menu";

interface MenuItemProps {
  item: Item;
  collapsed: boolean;
}

export default function MenuItem({ item, collapsed }: MenuItemProps) {
  // Safety guard
  if (!item) return null;

  // Group with children
  if (item.children && item.children.length > 0) {
    return (
      <div className="space-y-1">
        <p
          className={`
            px-3 text-xs font-semibold uppercase tracking-wider text-gray-500
            flex items-center gap-2 transition-all
            ${collapsed ? "justify-center px-0" : ""}
          `}
          title={collapsed ? item.label : undefined}
        >
          {item.icon && (
            <Icon
              icon={item.icon}
              className={`flex-shrink-0 ${collapsed ? "text-lg" : "text-base"}`}
            />
          )}
          {!collapsed && item.label}
        </p>

        {!collapsed && (
          <div className="space-y-1 pl-4">
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} collapsed={collapsed} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Single link item
  return (
    <Link
      href={item.path || "#"}
      className={`
        flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium
        text-gray-700 hover:bg-gray-100 hover:text-black
        transition-all duration-200
        ${collapsed ? "justify-center px-2" : ""}
      `}
      title={collapsed ? item.label : undefined}
    >
      {item.icon && (
        <Icon
          icon={item.icon}
          className={`flex-shrink-0 ${collapsed ? "text-xl" : "text-lg"}`}
        />
      )}
      {!collapsed && <span className="truncate">{item.label}</span>}
    </Link>
  );
}