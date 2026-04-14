"use client";

import { CMSProvider } from "@/features/admin/context/cms-context";
import { useAdminAuth } from "@/features/admin/hooks/useAdminAuth";
import { LoginScreen } from "@/features/admin/components/LoginScreen";
import { AdminShell } from "@/features/admin/components/AdminShell";
import { ReactNode } from "react";

interface CMSAdminLayoutProps {
  children: ReactNode;
}

function CMSAdminLayoutContent({ logout, lastSaved }: { logout: () => void; lastSaved: Date | null }) {
  return (
    <CMSProvider>
      <AdminShell onLogout={logout} lastSaved={lastSaved} />
    </CMSProvider>
  );
}

export default function CMSAdminLayout({ children }: CMSAdminLayoutProps) {
  const { isLoggedIn, isHydrated, login, logout, lastSaved } = useAdminAuth();

  // Wait for hydration to avoid mismatch
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-white/40">Loading...</div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginScreen onLogin={login} />;
  }

  return <CMSAdminLayoutContent logout={logout} lastSaved={lastSaved} />;
}

