"use client";

import { useState } from "react";
import { Shield, Lock, Eye } from "@phosphor-icons/react";
import { ADMIN_PASSWORD } from "../admin-config";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#bf262f] opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-full sm:max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#bf262f]/20 border border-[#bf262f]/30 flex items-center justify-center mb-3">
              <Shield className="w-6 h-6 text-[#e8959b]" />
            </div>
            <div className="font-serif font-bold text-[#e8959b] text-2xl tracking-tight leading-none">Omega</div>
            <div className="text-[9px] font-medium text-white/20 tracking-[0.2em] uppercase mt-0.5">Admin Panel</div>
          </div>
          <p className="text-white/40 text-sm">Sign in to manage your website content</p>
        </div>

        {/* Form */}
        <div className="bg-[#161b22] border border-white/8 rounded-2xl p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                <input
                  type={showPw ? "text" : "password"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="Enter admin password"
                  className={`w-full bg-white/5 border ${error ? "border-red-500/60" : "border-white/10 focus:border-[#bf262f]/60"} rounded-xl pl-10 pr-10 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-2 focus:ring-[#bf262f]/10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              {error && <p className="text-red-400 text-xs mt-1.5">Incorrect password. Please try again.</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#bf262f] hover:bg-[#9e1f27] text-white font-semibold py-3 rounded-xl transition-all active:scale-[0.98] text-sm"
            >
              Sign In
            </button>
          </form>

          {/* Demo hint */}
          <div className="mt-5 p-3 bg-white/3 border border-white/6 rounded-xl">
            <p className="text-xs text-white/30 text-center">
              Demo password: <span className="font-mono text-white/50 select-all">{ADMIN_PASSWORD}</span>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-white/20 mt-6">
          <a href="/" className="hover:text-white/40 transition-colors">← Back to site</a>
        </p>
      </div>
    </div>
  );
}
