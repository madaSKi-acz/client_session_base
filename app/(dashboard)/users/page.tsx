"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Loading from "@/app/components/ui/Loading/Loading";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();

    api
      .get("/api/users", { signal: controller.signal })
      .then((res) => {
        const userData = Array.isArray(res.data) ? res.data : res.data.data;
        setUsers(userData || []);
      })
      .catch((err) => {
        // Check if error was due to abort (duplicate mount in dev)
        if (err.name === "CanceledError" || err.name === "AbortError") {
          console.log("Request canceled (normal in dev)");
          return;
        }
        // Real error → redirect
        router.replace("/login");
      })
      .finally(() => {
        setLoading(false);
      });

    // Cleanup: cancel request on unmount or second mount (Strict Mode)
    return () => {
      controller.abort();
    };
  }, [router]);

  return (
    <div className="w-full relative">

      <h1 className="text-xl font-bold mb-6 text-black">Team Members</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.length > 0 && !loading ? (
          users.map((user, index) => (
            <div
              key={user.id ?? `user-${index}`}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-4 shadow-sm hover:border-blue-300 transition-colors"
            >
              <div className="h-12 w-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-green-300 font-semibold">
                {user.name?.charAt(0).toUpperCase() ?? "?"}
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {user.name}
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  {user.email}
                </p>
              </div>
            </div>
          ))
        ) : <Loading />}
      </div>
    </div>
  );
}