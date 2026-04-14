"use client";

import { useCMS } from "@/features/admin/context/cms-context";
import { NavLinksCard } from "./components/NavLinksCard";
import { ShopButtonCard } from "./components/ShopButtonCard";

export function NavbarSection() {
  const { cms, updateNavbar, addNavLink, updateNavLink, deleteNavLink } =
    useCMS();

  return (
    <div className="space-y-5">
      <NavLinksCard
        links={cms.navbar.links}
        onAddLink={(link) => addNavLink(link)}
        onUpdateLink={(id, data) => updateNavLink(id, data)}
        onDeleteLink={(id) => deleteNavLink(id)}
      />

      <ShopButtonCard
        shopLinkText={cms.navbar.shopLinkText}
        shopUrl={cms.siteSettings.shopUrl}
        onUpdate={updateNavbar}
      />
    </div>
  );
}
