import Sidebar from "@/app/components/shared/Sidebar";
import Navbar from "@/app/components/shared/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-gray-100/90">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
