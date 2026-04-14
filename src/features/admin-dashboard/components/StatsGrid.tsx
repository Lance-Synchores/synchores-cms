import { Package, Tag, Square, ShoppingBag } from "@phosphor-icons/react";
import type { IconProps } from "@phosphor-icons/react";
import React from "react";

interface Stat {
  icon: React.ComponentType<IconProps>;
  label: string;
  value: number;
  sub: string;
  color: string;
  bg: string;
}

interface StatsGridProps {
  activeProducts: number;
  archivedProducts: number;
  activePromos: number;
  archivedPromos: number;
  activeCategories: number;
  archivedCategories: number;
  navLinksCount: number;
}

export function StatsGrid({
  activeProducts,
  archivedProducts,
  activePromos,
  archivedPromos,
  activeCategories,
  archivedCategories,
  navLinksCount,
}: StatsGridProps) {
  const stats: Stat[] = [
    {
      icon: Package,
      label: "Active Products",
      value: activeProducts,
      sub: `${archivedProducts} archived`,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: Tag,
      label: "Active Promos",
      value: activePromos,
      sub: `${archivedPromos} archived`,
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      icon: Square,
      label: "Categories",
      value: activeCategories,
      sub: `${archivedCategories} archived`,
      color: "text-green-400",
      bg: "bg-green-400/10",
    },
    {
      icon: ShoppingBag,
      label: "Nav Links",
      value: navLinksCount,
      sub: "Navbar items",
      color: "text-[#e8959b]",
      bg: "bg-[#bf262f]/10",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="bg-[#1c2333] border border-white/6 rounded-2xl p-5">
            <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
              <Icon className={`w-5 h-5 ${s.color}`} />
            </div>
            <div className={`text-2xl font-serif font-bold ${s.color}`}>{s.value}</div>
            <div className="text-white/70 text-sm font-medium mt-0.5">{s.label}</div>
            <div className="text-white/25 text-xs mt-1">{s.sub}</div>
          </div>
        );
      })}
    </div>
  );
}
