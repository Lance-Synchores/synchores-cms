"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput, TextArea } from "@/components/admin-ui/field";

export interface FooterStripData {
  promoStrip: string;
  description: string;
  newsletterText: string;
}

interface FooterStripCardProps {
  data: FooterStripData;
  onChange: (data: FooterStripData) => void;
}

export function FooterStripCard({ data, onChange }: FooterStripCardProps) {
  return (
    <SectionCard title="Footer Strip & Content" subtitle="Footer promo strip and description text" collapsible>
      <Field label="Promo Strip Text">
        <TextInput value={data.promoStrip} onChange={(v) => onChange({ ...data, promoStrip: v })} placeholder="🛡 Lifetime warranty..." />
      </Field>
      <Field label="Brand Description">
        <TextArea value={data.description} onChange={(v) => onChange({ ...data, description: v })} rows={2} placeholder="Premium kitchenware for Filipino families." />
      </Field>
      <Field label="Newsletter Tagline">
        <TextInput value={data.newsletterText} onChange={(v) => onChange({ ...data, newsletterText: v })} placeholder="Exclusive deals, recipes..." />
      </Field>
    </SectionCard>
  );
}
