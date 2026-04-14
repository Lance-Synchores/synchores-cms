"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";

interface SectionHeaderCardProps {
  headline: string;
  subtitle: string;
  onChangeHeadline: (value: string) => void;
  onChangeSubtitle: (value: string) => void;
}

export function SectionHeaderCard({
  headline,
  subtitle,
  onChangeHeadline,
  onChangeSubtitle,
}: SectionHeaderCardProps) {
  return (
    <SectionCard
      title="Section Header"
      subtitle="Headline and subtitle for the Why Choose Us section"
    >
      <Field label="Headline">
        <TextInput
          value={headline}
          onChange={onChangeHeadline}
          placeholder="Why Omega?"
        />
      </Field>
      <Field label="Subtitle">
        <TextInput
          value={subtitle}
          onChange={onChangeSubtitle}
          placeholder="Premium quality, purposely built for the Filipino kitchen."
        />
      </Field>
    </SectionCard>
  );
}
