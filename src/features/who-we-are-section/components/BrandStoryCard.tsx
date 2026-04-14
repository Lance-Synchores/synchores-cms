"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextArea } from "@/components/admin-ui/field";

interface BrandStoryCardProps {
  story1: string;
  story2: string;
  onChangeStory1: (value: string) => void;
  onChangeStory2: (value: string) => void;
}

export function BrandStoryCard({
  story1,
  story2,
  onChangeStory1,
  onChangeStory2,
}: BrandStoryCardProps) {
  return (
    <SectionCard
      title="Brand Story"
      subtitle="Two paragraphs of brand narrative"
      collapsible
    >
      <Field label="Paragraph 1">
        <TextArea
          value={story1}
          onChange={onChangeStory1}
          rows={4}
          placeholder="Omega Houseware was founded..."
        />
      </Field>
      <Field label="Paragraph 2">
        <TextArea
          value={story2}
          onChange={onChangeStory2}
          rows={3}
          placeholder="From our humble beginnings..."
        />
      </Field>
    </SectionCard>
  );
}
