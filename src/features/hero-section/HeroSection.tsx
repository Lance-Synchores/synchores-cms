"use client";

import { useCMS } from "@/features/admin/context/cms-context";
import { HeadlineCard } from "./components/HeadlineCard";
import { CTAButtonsCard } from "./components/CTAButtonsCard";
import { PhonePreviewCard } from "./components/PhonePreviewCard";
import { HotspotCard } from "./components/HotspotCard";

export function HeroSection() {
  const { cms, updateHero, updateHotspot } = useCMS();
  const h = cms.hero;

  return (
    <div className="space-y-5">
      <HeadlineCard
        badge={h.badge}
        headline1={h.headline1}
        headline2={h.headline2}
        subtitle={h.subtitle}
        onUpdate={updateHero}
      />

      <CTAButtonsCard
        ctaPrimaryText={h.ctaPrimaryText}
        ctaPrimaryHref={h.ctaPrimaryHref}
        ctaSecondaryText={h.ctaSecondaryText}
        ctaSecondaryHref={h.ctaSecondaryHref}
        onUpdate={updateHero}
      />

      <PhonePreviewCard
        heroImage={h.heroImage}
        videoCaption={h.videoCaption}
        videoViews={h.videoViews}
        videoHandle={h.videoHandle}
        onUpdate={updateHero}
      />

      <HotspotCard
        hotspots={h.hotspots}
        onUpdateHotspot={updateHotspot}
      />
    </div>
  );
}
