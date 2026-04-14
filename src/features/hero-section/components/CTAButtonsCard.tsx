import { Layout } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

interface CTAButtonsCardProps {
  ctaPrimaryText: string;
  ctaPrimaryHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
  onUpdate: (data: {
    ctaPrimaryText?: string;
    ctaPrimaryHref?: string;
    ctaSecondaryText?: string;
    ctaSecondaryHref?: string;
  }) => void;
}

export function CTAButtonsCard({
  ctaPrimaryText,
  ctaPrimaryHref,
  ctaSecondaryText,
  ctaSecondaryHref,
  onUpdate,
}: CTAButtonsCardProps) {
  return (
    <SectionCard
      title="CTA Buttons"
      icon={<Layout className="w-4 h-4" />}
      subtitle="Primary and secondary calls-to-action"
    >
      <Grid2>
        <Field label="Primary Button Text">
          <TextInput
            value={ctaPrimaryText}
            onChange={(v) => onUpdate({ ctaPrimaryText: v })}
            placeholder="Shop Collection"
          />
        </Field>
        <Field label="Primary Button Link">
          <TextInput
            value={ctaPrimaryHref}
            onChange={(v) => onUpdate({ ctaPrimaryHref: v })}
            placeholder="https://omegahouseware.com"
          />
        </Field>
      </Grid2>
      <Grid2>
        <Field label="Secondary Button Text">
          <TextInput
            value={ctaSecondaryText}
            onChange={(v) => onUpdate({ ctaSecondaryText: v })}
            placeholder="Watch Community"
          />
        </Field>
        <Field label="Secondary Button Link">
          <TextInput
            value={ctaSecondaryHref}
            onChange={(v) => onUpdate({ ctaSecondaryHref: v })}
            placeholder="#community"
          />
        </Field>
      </Grid2>
    </SectionCard>
  );
}
