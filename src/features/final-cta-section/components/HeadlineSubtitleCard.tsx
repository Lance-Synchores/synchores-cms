"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput, TextArea } from "@/components/admin-ui/field";

export interface HeadlineSubtitleData {
  headline: string;
  subtitle: string;
}

interface HeadlineSubtitleCardProps {
  data: HeadlineSubtitleData;
  onChange: (data: HeadlineSubtitleData) => void;
}

export function HeadlineSubtitleCard({ data, onChange }: HeadlineSubtitleCardProps) {
  return (
    <SectionCard title="Headline & Subtitle" subtitle="Main heading and supporting text">
      <Field label="Headline">
        <TextInput value={data.headline} onChange={(v) => onChange({ ...data, headline: v })} placeholder="Ready to elevate your kitchen?" />
      </Field>
      <Field label="Subtitle">
        <TextArea value={data.subtitle} onChange={(v) => onChange({ ...data, subtitle: v })} rows={2} placeholder="Shop premium cookware..." />
      </Field>
    </SectionCard>
  );
}
