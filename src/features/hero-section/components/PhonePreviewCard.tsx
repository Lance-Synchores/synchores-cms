import { Layout } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput, ImageField } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

interface PhonePreviewCardProps {
  heroImage: string;
  videoCaption: string;
  videoViews: string;
  videoHandle: string;
  onUpdate: (data: {
    heroImage?: string;
    videoCaption?: string;
    videoViews?: string;
    videoHandle?: string;
  }) => void;
}

export function PhonePreviewCard({
  heroImage,
  videoCaption,
  videoViews,
  videoHandle,
  onUpdate,
}: PhonePreviewCardProps) {
  return (
    <SectionCard
      title="Phone Preview"
      icon={<Layout className="w-4 h-4" />}
      subtitle="The TikTok-style phone mockup in the hero"
    >
      <ImageField
        label="Hero Video Thumbnail"
        value={heroImage}
        onChange={(v) => onUpdate({ heroImage: v })}
        hint="Image shown inside the phone mockup"
      />
      <Grid2>
        <Field label="Video Caption">
          <TextInput
            value={videoCaption}
            onChange={(v) => onUpdate({ videoCaption: v })}
            placeholder="No oil needed?..."
          />
        </Field>
        <Field label="Views Label">
          <TextInput
            value={videoViews}
            onChange={(v) => onUpdate({ videoViews: v })}
            placeholder="2.1M views"
          />
        </Field>
      </Grid2>
      <Field label="Creator Handle">
        <TextInput
          value={videoHandle}
          onChange={(v) => onUpdate({ videoHandle: v })}
          placeholder="@omegahouseware"
        />
      </Field>
    </SectionCard>
  );
}
