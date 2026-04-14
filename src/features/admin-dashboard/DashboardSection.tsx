"use client";

import { useCMS } from "../admin/context/cms-context";
import { SiteInfoCard } from "./components/SiteInfoCard";
import { ContentSectionsGuide } from "./components/ContentSectionsGuide";
import { WelcomeCard } from "./components/WelcomeCard";
import { StatsGrid } from "./components/StatsGrid";

export function DashboardSection() {
  const { cms } = useCMS();

  const activeProducts = cms.products.filter((p) => !p.archived).length;
  const archivedProducts = cms.products.filter((p) => p.archived).length;
  const activePromos = cms.promos.filter((p) => !p.archived).length;
  const archivedPromos = cms.promos.filter((p) => p.archived).length;
  const activeCategories = cms.categories.filter((c) => !c.archived).length;
  const archivedCategories = cms.categories.filter((c) => c.archived).length;

  return (
    <div className="space-y-6">
      <WelcomeCard siteName={cms.siteSettings.siteName} />
      
      <StatsGrid
        activeProducts={activeProducts}
        archivedProducts={archivedProducts}
        activePromos={activePromos}
        archivedPromos={archivedPromos}
        activeCategories={activeCategories}
        archivedCategories={archivedCategories}
        navLinksCount={cms.navbar.links.length}
      />

      <SiteInfoCard
        shopUrl={cms.siteSettings.shopUrl}
        phone={cms.siteSettings.phone}
        email={cms.siteSettings.email}
      />

      <ContentSectionsGuide />
    </div>
  );
}
