import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

interface BrandIdentityCardProps {
  siteName: string;
  shopUrl: string;
  tagline: string;
  onUpdate: (data: { siteName?: string; shopUrl?: string; tagline?: string }) => void;
}

export function BrandIdentityCard({
  siteName,
  shopUrl,
  tagline,
  onUpdate,
}: BrandIdentityCardProps) {
  return (
    <SectionCard
      title="Brand & Identity"
      icon={<GlobeHemisphereWest className="w-4 h-4" />}
      subtitle="Core brand information"
    >
      <Grid2>
        <Field label="Site Name">
          <TextInput
            value={siteName}
            onChange={(v) => onUpdate({ siteName: v })}
            placeholder="Omega Houseware"
          />
        </Field>
        <Field label="Shop URL" hint="Used for all buy/shop button links">
          <TextInput
            value={shopUrl}
            onChange={(v) => onUpdate({ shopUrl: v })}
            placeholder="https://omegahouseware.com"
          />
        </Field>
      </Grid2>
      <Field label="Brand Tagline">
        <TextInput
          value={tagline}
          onChange={(v) => onUpdate({ tagline: v })}
          placeholder="Premium kitchenware for Filipino families."
        />
      </Field>
    </SectionCard>
  );
}
