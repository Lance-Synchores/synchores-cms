"use client";

import { useRouter } from "next/navigation";
import { LoginScreen } from "@/features/admin/components/LoginScreen";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/admin");
  };

  return <LoginScreen onLogin={handleLogin} />;
}
