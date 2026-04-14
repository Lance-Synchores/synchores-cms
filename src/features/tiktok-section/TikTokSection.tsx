"use client";

import { useState } from "react";
import { useCMS } from "@/features/admin/context/cms-context";
import { SectionCard } from "@/components/admin-ui/section-card";
import { AddButton } from "@/components/admin-ui/add-butt";
import { Video, Warning } from "@phosphor-icons/react";
import { CarouselPanel } from "./components/CarouselPanel";
import { AddCarouselModal } from "./components/AddCarouselModal";
import { type VideoEntry } from "./components/VideoEntryList";

export function TikTokSection() {
  const { cms, addVideoCarouselGroup, addVideoToCarousel } = useCMS();
  const [addCarouselOpen, setAddCarouselOpen] = useState(false);

  const activeCarousels = cms.tiktokSection.carousels.filter(
    (g) => !g.archived
  );
  const archivedCarousels = cms.tiktokSection.carousels.filter(
    (g) => g.archived
  );

  const totalVideos = cms.tiktokSection.carousels
    .flatMap((g) => g.videos)
    .filter((v) => !v.archived).length;

  const missingLinks = cms.tiktokSection.carousels
    .flatMap((g) => g.videos)
    .filter((v) => !v.archived && !v.tiktokUrl).length;

  const handleAddCarouselWithVideos = (
    title: string,
    sub: string,
    entries: VideoEntry[]
  ) => {
    const validEntries = entries.filter((e) => e.tiktokUrl.trim() !== "");
    const videos = validEntries.map((e) => ({
      id: Math.random().toString(36).slice(2),
      tiktokUrl: e.tiktokUrl.trim(),
      title: e.title.trim(),
      buyLink: e.buyLink.trim(),
      thumbnail: "",
      author: "",
      views: "",
      likes: "",
      comments: "",
      archived: false,
    }));

    addVideoCarouselGroup({ title, sub, videos });
    setAddCarouselOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Stats card */}
      <SectionCard
        title="As Seen on TikTok"
        icon={<Video className="w-4 h-4" />}
        subtitle="Manage categories and TikTok video links"
        badge={`${totalVideos} videos`}
      >
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Carousels",
              value: activeCarousels.length,
              color: "text-[#e8959b]",
            },
            {
              label: "Total Videos",
              value: totalVideos,
              color: "text-white",
            },
            {
              label: "Missing TikTok Link",
              value: missingLinks,
              color:
                missingLinks > 0 ? "text-amber-400" : "text-green-400",
            },
          ].map((s) => (
            <div key={s.label} className="p-3 bg-white/3 rounded-xl text-center">
              <div className={`text-2xl font-serif font-bold ${s.color}`}>
                {s.value}
              </div>
              <div className="text-[10px] text-white/30 mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {missingLinks > 0 && (
          <div className="flex items-start gap-3 p-3 bg-amber-500/8 border border-amber-500/20 rounded-xl">
            <Warning className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-300/80">
              <span className="font-semibold">
                {missingLinks} video card{missingLinks !== 1 ? "s" : ""}
              </span>{" "}
              {missingLinks !== 1 ? "are" : "is"} missing a TikTok link. Expand
              the carousel below and click{" "}
              <span className="font-semibold">Edit</span> on each flagged card.
            </p>
          </div>
        )}

        <div className="p-3 bg-white/3 rounded-xl">
          <p className="text-xs text-white/40 leading-relaxed">
            <span className="text-white/60 font-semibold">How it works:</span>{" "}
            Each carousel is one horizontally-scrollable row on the landing page
            (e.g. "Cookware", "Glassware"). Each card inside a carousel shows a
            TikTok video thumbnail — clicking the play button or the card opens
            the actual TikTok post.
          </p>
        </div>
      </SectionCard>

      {/* Carousels list */}
      <SectionCard
        title="Video Carousels"
        subtitle="Each carousel = one scrollable row on the site"
      >
        <div className="space-y-3">
          {activeCarousels.map((group) => (
            <CarouselPanel key={group.id} group={group} />
          ))}

          {activeCarousels.length === 0 && (
            <p className="text-sm text-white/25 text-center py-6">
              No carousels yet. Create one below.
            </p>
          )}

          <AddButton
            label="Add New Carousel"
            onClick={() => setAddCarouselOpen(true)}
          />
        </div>
      </SectionCard>

      {/* Archived carousels */}
      {archivedCarousels.length > 0 && (
        <SectionCard
          title="Archived Carousels"
          collapsible
          defaultOpen={false}
        >
          <div className="space-y-3">
            {archivedCarousels.map((group) => (
              <CarouselPanel key={group.id} group={group} />
            ))}
          </div>
        </SectionCard>
      )}

      {/* Add carousel modal */}
      {addCarouselOpen && (
        <AddCarouselModal
          onClose={() => setAddCarouselOpen(false)}
          onSave={handleAddCarouselWithVideos}
        />
      )}
    </div>
  );
}
