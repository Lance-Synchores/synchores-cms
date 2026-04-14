"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

export interface CTAButtonsData {
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
}

interface CTAButtonsCardProps {
  data: CTAButtonsData;
  onChange: (data: CTAButtonsData) => void;
}

export function CTAButtonsCard({ data, onChange }: CTAButtonsCardProps) {
  return (
    <SectionCard title="CTA Buttons">
      <Grid2>
        <Field label="Primary Button Text">
          <TextInput value={data.ctaPrimaryText} onChange={(v) => onChange({ ...data, ctaPrimaryText: v })} placeholder="Shop the Collection" />
        </Field>
        <Field label="Primary Button Link">
          <TextInput value={data.ctaPrimaryHref} onChange={(v) => onChange({ ...data, ctaPrimaryHref: v })} placeholder="https://omegahouseware.com" />
        </Field>
      </Grid2>
      <Grid2>
        <Field label="Secondary Button Text">
          <TextInput value={data.ctaSecondaryText} onChange={(v) => onChange({ ...data, ctaSecondaryText: v })} placeholder="View Best Sellers" />
        </Field>
        <Field label="Secondary Button Link">
          <TextInput value={data.ctaSecondaryHref} onChange={(v) => onChange({ ...data, ctaSecondaryHref: v })} placeholder="https://omegahouseware.com" />
        </Field>
      </Grid2>
    </SectionCard>
  );
}
