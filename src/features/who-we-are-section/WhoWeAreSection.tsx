"use client";

import { useCMS } from "@/features/admin/context/cms-context";
import { SectionHeaderCard } from "./components/SectionHeaderCard";
import { BrandStoryCard } from "./components/BrandStoryCard";
import { StatsCard } from "./components/StatsCard";
import { BrandPillarsCard } from "./components/BrandPillarsCard";
import { SectionImagesCard } from "./components/SectionImagesCard";

export function WhoWeAreSection() {
  const {
    cms,
    updateWhoWeAre,
    updateWhoWeAreStat,
    updateWhoWeArePillar,
  } = useCMS();

  const w = cms.whoWeAre;

  return (
    <div className="space-y-5">
      <SectionHeaderCard
        badge={w.badge}
        estYear={w.estYear}
        headline1={w.headline1}
        headline2={w.headline2}
        onChangeBadge={(v) => updateWhoWeAre({ badge: v })}
        onChangeEstYear={(v) => updateWhoWeAre({ estYear: v })}
        onChangeHeadline1={(v) => updateWhoWeAre({ headline1: v })}
        onChangeHeadline2={(v) => updateWhoWeAre({ headline2: v })}
      />

      <BrandStoryCard
        story1={w.story1}
        story2={w.story2}
        onChangeStory1={(v) => updateWhoWeAre({ story1: v })}
        onChangeStory2={(v) => updateWhoWeAre({ story2: v })}
      />

      <StatsCard
        stats={w.stats}
        onChangeValue={(id, v) => updateWhoWeAreStat(id, { value: v })}
        onChangeLabel={(id, v) => updateWhoWeAreStat(id, { label: v })}
      />

      <BrandPillarsCard
        pillars={w.pillars}
        onChangeTitle={(id, v) => updateWhoWeArePillar(id, { title: v })}
        onChangeIcon={(id, v) => updateWhoWeArePillar(id, { icon: v })}
        onChangeDesc={(id, v) => updateWhoWeArePillar(id, { desc: v })}
      />

      <SectionImagesCard
        imageTall={w.imageTall}
        imageTopRight={w.imageTopRight}
        imageBottomRight={w.imageBottomRight}
        onChangeImageTall={(v) => updateWhoWeAre({ imageTall: v })}
        onChangeImageTopRight={(v) => updateWhoWeAre({ imageTopRight: v })}
        onChangeImageBottomRight={(v) => updateWhoWeAre({ imageBottomRight: v })}
      />
    </div>
  );
}
