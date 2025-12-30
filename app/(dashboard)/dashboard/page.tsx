"use client";

import { useAuth } from "@/hook/useAuth";

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return <h1 className="text-2xl font-bold">Welcome {user?.email}</h1>;
}
