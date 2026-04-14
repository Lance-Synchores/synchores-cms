import { ShoppingBag } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

interface ShopButtonCardProps {
  shopLinkText: string;
  shopUrl: string;
  onUpdate: (data: { shopLinkText: string }) => void;
}

export function ShopButtonCard({
  shopLinkText,
  shopUrl,
  onUpdate,
}: ShopButtonCardProps) {
  return (
    <SectionCard
      title="Shop Button"
      icon={<ShoppingBag className="w-4 h-4" />}
      subtitle="CTA button in the navbar"
    >
      <Grid2>
        <Field label="Button Text">
          <TextInput
            value={shopLinkText}
            onChange={(v) => onUpdate({ shopLinkText: v })}
            placeholder="Shop"
          />
        </Field>
        <Field label="Button Link" hint="Uses Shop URL from Site Settings by default">
          <TextInput
            value={shopUrl}
            onChange={() => {}}
            placeholder="https://omegahouseware.com"
            className="opacity-50 cursor-not-allowed"
          />
        </Field>
      </Grid2>
      <p className="text-xs text-white/30">
        The Shop button link is controlled by the Shop URL in Site Settings.
      </p>
    </SectionCard>
  );
}
