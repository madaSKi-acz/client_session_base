"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

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
    api
      .get("/api/users")
      .then((res) => {
        const userData = Array.isArray(res.data) ? res.data : res.data.data;
        setUsers(userData || []);
        setLoading(false);
      })
      .catch(() => {
        router.replace("/login");
      });
  }, [router]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="w-full py-6">
      <h1 className="text-xl font-bold mb-6 text-black">Team Members</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.length > 0 ? (
          users.map((user, index) => (
            /* Individual User Card */
            <div 
              key={user.id ?? `user-${index}`} 
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-4 shadow-sm hover:border-blue-300 transition-colors"
            >
              {/* Avatar Circle */}
              <div className="h-12 w-12 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-semibold">
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
        ) : (
          <p className="text-sm text-gray-500 italic">No members found.</p>
        )}
      </div>
    </div>
  );
}