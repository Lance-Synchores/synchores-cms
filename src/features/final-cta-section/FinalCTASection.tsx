"use client";

import { useCMS } from "@/features/admin/context/cms-context";
import { DiscountBadgeCard } from "./components/DiscountBadgeCard";
import { HeadlineSubtitleCard } from "./components/HeadlineSubtitleCard";
import { CTAButtonsCard } from "./components/CTAButtonsCard";
import { TrustItemsCard } from "./components/TrustItemsCard";
import { FooterStripCard } from "./components/FooterStripCard";

export function FinalCTASection() {
  const { cms, updateFinalCTA, updateFooter } = useCMS();
  const f = cms.finalCTA;

  return (
    <div className="space-y-5">
      <DiscountBadgeCard
        data={{
          discountValue: f.discountValue,
          discountLabel: f.discountLabel,
          discountCondition: f.discountCondition,
          discountConditionSub: f.discountConditionSub,
        }}
        onChange={(data) => updateFinalCTA(data)}
      />
      <HeadlineSubtitleCard
        data={{
          headline: f.headline,
          subtitle: f.subtitle,
        }}
        onChange={(data) => updateFinalCTA(data)}
      />
      <CTAButtonsCard
        data={{
          ctaPrimaryText: f.ctaPrimaryText,
          ctaPrimaryHref: f.ctaPrimaryHref,
          ctaSecondaryText: f.ctaSecondaryText,
          ctaSecondaryHref: f.ctaSecondaryHref,
        }}
        onChange={(data) => updateFinalCTA(data)}
      />
      <TrustItemsCard items={f.trustItems} onUpdate={(items) => updateFinalCTA({ trustItems: items })} />
      <FooterStripCard
        data={{
          promoStrip: cms.footer.promoStrip,
          description: cms.footer.description,
          newsletterText: cms.footer.newsletterText,
        }}
        onChange={(data) => updateFooter(data)}
      />
    </div>
  );
}
