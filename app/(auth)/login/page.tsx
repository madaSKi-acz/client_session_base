"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import  api  from "@/lib/api";
import Button from "@/app/components/ui/Button";
import Input from "@/app/components/ui/Input";
import { registerWebAuthn } from '@/utils/webauthn';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("123");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    try {
      await api.get("/api/sanctum/csrf-cookie");

      await api.post("/api/login", { email, password });

      await registerWebAuthn();
      
      router.replace("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-black">Login</h2>

      <Input
        value={email}
        className="bg-white text-black"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <Input
        value={password}
        type="password"
        className="bg-white text-black"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <Button disabled={loading} onClick={handleLogin}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </div>
  );
}
