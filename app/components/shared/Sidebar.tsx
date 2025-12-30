import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 p-4 text-white">
      <h2 className="mb-6 text-lg font-bold">System</h2>
      <Link href="/dashboard">Dashboard</Link>
    </aside>
  );
}
