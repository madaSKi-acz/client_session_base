"use client";

import  api  from "@/lib/api";

export default function Navbar() {
  async function logout() {
    await api.post("/logout");
    window.location.href = "/login";
  }

  return (
    <header className="flex justify-between border-b bg-white p-4">
      <span className="font-semibold">Dashboard</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
