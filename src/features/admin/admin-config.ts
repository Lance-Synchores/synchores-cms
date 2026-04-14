import {
  ChartBar,
  Gear,
  List,
  Columns,
  GridFour,
  Package,
  Tag,
  Users,
  Star,
  ChatTeardrop,
  Megaphone,
  Video,
} from "@phosphor-icons/react";

export const ADMIN_PASSWORD = "omega2024";

export interface NavItem {
  id: string;
  label: string;
  icon: any; // Icon component type
  group: string | null;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: ChartBar, group: null },
  { id: "site-settings", label: "Site Settings", icon: Gear, group: "Configuration" },
  { id: "navbar", label: "Navigation", icon: List, group: "Configuration" },
  { id: "hero", label: "Hero", icon: Columns, group: "Page Sections" },
  { id: "categories", label: "Categories", icon: GridFour, group: "Page Sections" },
  { id: "products", label: "Products", icon: Package, group: "Page Sections" },
  { id: "who-we-are", label: "Who We Are", icon: Users, group: "Page Sections" },
  { id: "promos", label: "Promos", icon: Tag, group: "Page Sections" },
  { id: "tiktok", label: "TikTok Videos", icon: Video, group: "Page Sections" },
  { id: "why-choose-us", label: "Why Choose Us", icon: Star, group: "Page Sections" },
  { id: "contact", label: "Contact Us", icon: ChatTeardrop, group: "Page Sections" },
  { id: "final-cta", label: "Final CTA & Footer", icon: Megaphone, group: "Page Sections" },
];

export const SECTION_TITLES: Record<string, string> = {
  dashboard: "Dashboard",
  "site-settings": "Site Settings",
  navbar: "Navigation",
  hero: "Hero Section",
  categories: "Category Grid",
  products: "Featured Products",
  "who-we-are": "Who We Are",
  promos: "Promotions",
  tiktok: "TikTok Videos",
  "why-choose-us": "Why Choose Us",
  contact: "Contact Us",
  "final-cta": "Final CTA & Footer",
};

export function getGroupedNavItems(items: NavItem[]): Map<string | null, NavItem[]> {
  const grouped = new Map<string | null, NavItem[]>();
  items.forEach((item) => {
    const group = item.group;
    if (!grouped.has(group)) {
      grouped.set(group, []);
    }
    grouped.get(group)!.push(item);
  });
  return grouped;
}
