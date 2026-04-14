"use client";

import { useCMS } from "@/features/admin/context/cms-context";
import { BrandIdentityCard } from "./components/BrandIdentityCard";
import { ContactInfoCard } from "./components/ContactInfoCard";
import { StoreHoursCard } from "./components/StoreHoursCard";
import { DangerZoneCard } from "./components/DangerZoneCard";

export function SiteSettingsSection() {
  const { cms, updateSiteSettings, resetToDefaults } = useCMS();
  const s = cms.siteSettings;

  return (
    <div className="space-y-5">
      <BrandIdentityCard
        siteName={s.siteName}
        shopUrl={s.shopUrl}
        tagline={s.tagline}
        onUpdate={updateSiteSettings}
      />

      <ContactInfoCard
        phone={s.phone}
        email={s.email}
        address={s.address}
        onUpdate={updateSiteSettings}
      />

      <StoreHoursCard
        weekdayHours={s.storeHoursWeekday}
        sundayHours={s.storeHoursSunday}
        onUpdate={updateSiteSettings}
      />

      <DangerZoneCard onReset={resetToDefaults} />
    </div>
  );
}
