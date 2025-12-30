"use client";

import Link from "next/link";
import { MenuItemType } from "@/types/menu";

type Props = {
  item: MenuItemType;
  collapsed: boolean;
};

export default function MenuItem({ item, collapsed }: Props) {
  const content = (
    <>
      {"icon" in item && item.icon && (
        <span className="text-xl">{item.icon}</span>
      )}
      {!collapsed && (
        <span className="text-sm font-medium">
          {item.label}
        </span>
      )}
    </>
  );

  if ("href" in item) {
    return (
      <Link
        href={item.href}
        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 transition"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-500">
      {content}
    </div>
  );
}
