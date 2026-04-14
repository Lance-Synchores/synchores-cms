"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";

interface PromoStripCardProps {
  text: string;
  href: string;
  onChangeText: (value: string) => void;
  onChangeHref: (value: string) => void;
}

export function PromoStripCard({
  text,
  href,
  onChangeText,
  onChangeHref,
}: PromoStripCardProps) {
  return (
    <SectionCard
      title="Bottom Promo Strip"
      subtitle="The pickup-discount banner at the bottom of the promos section"
      collapsible
    >
      <Field label="Strip Message">
        <TextInput
          value={text}
          onChange={onChangeText}
          placeholder="Visit our store and mention..."
        />
      </Field>
      <Field label="Strip Button Link">
        <TextInput
          value={href}
          onChange={onChangeHref}
          placeholder="https://omegahouseware.com"
        />
      </Field>
    </SectionCard>
  );
}
