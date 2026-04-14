"use client";

import { CaretRight } from "@phosphor-icons/react";
import { NavItem } from "../admin-config";

interface AdminNavItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}

export function AdminNavItem({ item, isActive, onClick }: AdminNavItemProps) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
        isActive
          ? "bg-[#bf262f]/20 text-[#e8959b] border border-[#bf262f]/25"
          : "text-white/50 hover:text-white hover:bg-white/5"
      }`}
    >
      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#e8959b]" : ""}`} />
      {item.label}
      {isActive && <CaretRight className="w-3.5 h-3.5 ml-auto" />}
    </button>
  );
}
