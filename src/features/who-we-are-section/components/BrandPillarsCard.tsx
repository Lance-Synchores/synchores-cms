"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput, TextArea } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";
import { type WhoWeArePillar } from "@/features/admin/context/cms-context";

interface BrandPillarsCardProps {
  pillars: WhoWeArePillar[];
  onChangeTitle: (id: string, title: string) => void;
  onChangeIcon: (id: string, icon: string) => void;
  onChangeDesc: (id: string, desc: string) => void;
}

export function BrandPillarsCard({
  pillars,
  onChangeTitle,
  onChangeIcon,
  onChangeDesc,
}: BrandPillarsCardProps) {
  return (
    <SectionCard
      title="Brand Pillars"
      subtitle="Three feature cards at the bottom of the section"
    >
      <div className="space-y-4">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.id}
            className="p-4 bg-white/3 border border-white/8 rounded-xl space-y-3"
          >
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest">
              Pillar {i + 1}
            </div>
            <Grid2>
              <Field label="Title">
                <TextInput
                  value={pillar.title}
                  onChange={(v) => onChangeTitle(pillar.id, v)}
                  placeholder="Born Filipino"
                />
              </Field>
              <Field
                label="Icon Name"
                hint="Phosphor icon: Heart, Award, Users, Star..."
              >
                <TextInput
                  value={pillar.icon}
                  onChange={(v) => onChangeIcon(pillar.id, v)}
                  placeholder="Heart"
                />
              </Field>
            </Grid2>
            <Field label="Description">
              <TextArea
                value={pillar.desc}
                onChange={(v) => onChangeDesc(pillar.id, v)}
                rows={2}
              />
            </Field>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
