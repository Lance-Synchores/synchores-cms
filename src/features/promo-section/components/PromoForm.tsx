"use client";

import { Field, TextInput, TextArea, ImageField } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";
import { type Promo } from "./ActivePromosCard";

export type PromoFormData = Omit<Promo, "id" | "archived">;

interface PromoFormProps {
  data: PromoFormData;
  onChange: (data: PromoFormData) => void;
}

export function PromoForm({ data, onChange }: PromoFormProps) {
  return (
    <>
      <Grid2>
        <Field label="Headline">
          <TextInput
            value={data.headline}
            onChange={(v) => onChange({ ...data, headline: v })}
            placeholder="Starter Kitchen Bundle"
          />
        </Field>
        <Field label="Discount Label">
          <TextInput
            value={data.discount}
            onChange={(v) => onChange({ ...data, discount: v })}
            placeholder="25% OFF"
          />
        </Field>
      </Grid2>
      <Field label="Description">
        <TextArea
          value={data.sub}
          onChange={(v) => onChange({ ...data, sub: v })}
          rows={2}
          placeholder="Everything you need..."
        />
      </Field>
      <Grid2>
        <Field label="Badge Text">
          <TextInput
            value={data.badge}
            onChange={(v) => onChange({ ...data, badge: v })}
            placeholder="Bundle Deal"
          />
        </Field>
        <Field label="Badge Color">
          <div className="flex gap-2 items-center">
            <input
              type="color"
              value={data.badgeColor}
              onChange={(e) => onChange({ ...data, badgeColor: e.target.value })}
              className="w-10 h-10 rounded-lg border border-white/10 bg-transparent cursor-pointer"
            />
            <TextInput
              value={data.badgeColor}
              onChange={(v) => onChange({ ...data, badgeColor: v })}
              placeholder="#bf262f"
            />
          </div>
        </Field>
      </Grid2>
      <Grid2>
        <Field label="Condition Text">
          <TextInput
            value={data.condition}
            onChange={(v) => onChange({ ...data, condition: v })}
            placeholder="Min. purchase ₱2,499"
          />
        </Field>
        <Field label="Tag / Time Label">
          <TextInput
            value={data.tag}
            onChange={(v) => onChange({ ...data, tag: v })}
            placeholder="Most Popular"
          />
        </Field>
      </Grid2>
      <Grid2>
        <Field label="CTA Button Text">
          <TextInput
            value={data.cta}
            onChange={(v) => onChange({ ...data, cta: v })}
            placeholder="Get the Bundle"
          />
        </Field>
        <Field label="CTA Link">
          <TextInput
            value={data.href}
            onChange={(v) => onChange({ ...data, href: v })}
            placeholder="https://omegahouseware.com"
          />
        </Field>
      </Grid2>
      <ImageField
        label="Promo Image"
        value={data.image}
        onChange={(v) => onChange({ ...data, image: v })}
      />
    </>
  );
}
