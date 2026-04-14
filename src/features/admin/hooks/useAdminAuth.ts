"use client";

import { useState, useEffect } from "react";

export function useAdminAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from sessionStorage on client side only
  useEffect(() => {
    const stored = sessionStorage.getItem("omega_admin_auth") === "true";
    setIsLoggedIn(stored);
    setIsHydrated(true);
  }, []);

  const login = () => {
    sessionStorage.setItem("omega_admin_auth", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.removeItem("omega_admin_auth");
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    isHydrated,
    login,
    logout,
    lastSaved: null,
  };
}
