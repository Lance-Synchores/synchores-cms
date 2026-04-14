
'use client';

import { LoginScreen, AdminShell, useAdminAuth } from "../features/admin";
import { useCMS } from "../features/admin/context/cms-context";

export function AdminPage() {
  const { isLoggedIn, isHydrated, login, logout } = useAdminAuth();
  const { cms, lastSaved } = useCMS();

  // Wait for hydration to avoid mismatch
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="text-white/40">Loading...</div>
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!isLoggedIn) {
    return <LoginScreen onLogin={login} />;
  }

  // Show admin dashboard if authenticated
  return <AdminShell onLogout={logout} cms={cms} lastSaved={lastSaved} />;
}

export default AdminPage;
