"use client";

import { Shield, Link, SignOut } from "@phosphor-icons/react";
import { NAV_ITEMS, getGroupedNavItems, NavItem } from "../admin-config";
import { AdminNavItem } from "./AdminNavItem";
import { SaveBadge } from "./SaveBadge";

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
  onLogout: () => void;
  lastSaved?: Date | null;
  onCloseMobile?: () => void;
}

export function AdminSidebar({
  activeSection,
  onSectionChange,
  onLogout,
  lastSaved,
  onCloseMobile,
}: AdminSidebarProps) {
  const grouped = getGroupedNavItems(NAV_ITEMS);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    onCloseMobile?.();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-4 py-5 border-b border-white/6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#bf262f]/20 border border-[#bf262f]/25 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4 text-[#e8959b]" />
          </div>
          <div>
            <div className="font-serif font-bold text-[#e8959b] text-sm leading-none">Omega</div>
            <div className="text-[9px] font-medium text-white/25 tracking-[0.15em] uppercase mt-0.5">Admin Panel</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        {Array.from(grouped.entries()).map(([group, items]) => (
          <div key={group || "dashboard"}>
            {group && (
              <p className="text-[9px] font-semibold text-white/20 uppercase tracking-[0.2em] px-3 mb-2">{group}</p>
            )}
            <div className={group ? "space-y-0.5" : ""}>
              {items.map((item) => (
                <AdminNavItem
                  key={item.id}
                  item={item}
                  isActive={activeSection === item.id}
                  onClick={() => handleNavClick(item.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-white/6 space-y-1">
        <SaveBadge lastSaved={lastSaved} />
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all"
        >
          <Link className="w-4 h-4" />
          View Live Site
        </a>
        <button
          onClick={onLogout}
          className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-sm text-white/40 hover:text-red-400 hover:bg-red-500/8 transition-all"
        >
          <SignOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
