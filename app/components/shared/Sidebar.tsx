"use client";

import { useMenu } from "@/hook/useMenu";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  const menu = useMenu();

  return (
    <aside className="w-64 border-r bg-white p-4">
      <nav className="space-y-4">
        {menu.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </nav>
    </aside>
  );
}
