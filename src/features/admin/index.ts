// Main exports from features/admin
export { LoginScreen } from "./components/LoginScreen";
export { AdminShell } from "./components/AdminShell";
export { AdminSidebar } from "./components/AdminSidebar";
export { AdminNavItem } from "./components/AdminNavItem";
export { SaveBadge } from "./components/SaveBadge";

export { useAdminAuth } from "./hooks/useAdminAuth";

export { ADMIN_PASSWORD, NAV_ITEMS, SECTION_TITLES, getGroupedNavItems } from "./admin-config";
export type { NavItem } from "./admin-config";

export { SECTION_REGISTRY, getSectionComponent } from "./admin-registry";
export type { SectionComponentType } from "./admin-registry";
