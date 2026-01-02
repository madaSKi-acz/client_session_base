"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import  api  from "@/lib/api";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    api
      .get("/api/users") // Laravel endpoint
      .then((res) => {
        console.log(res, "user res")
        // Session exists
        router.replace("/dashboard");
      })
      .catch(() => {
        // No session
        router.replace("/login");
      });
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <span className="text-sm text-gray-500">Checking session...</span>
    </div>
  );
}
