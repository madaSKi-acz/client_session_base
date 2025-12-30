"use client";

import Link from "next/link";
import { MenuItem as Item } from "@/types/menu";

export default function MenuItem({ item }: { item: Item }) {
  if (item.children?.length) {
    return (
      <div className="space-y-1">
        <p className="px-3 text-sm font-semibold text-gray-500">
          {item.label}
        </p>
        <div className="ml-3 space-y-1">
          {item.children.map((child) => (
            <MenuItem key={child.label} item={child} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link
      href={item.path!}
      className="block rounded px-3 py-2 text-sm text-black hover:bg-gray-100"
    >
      {item.label}
    </Link>
  );
}
