"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { ImageField } from "@/components/admin-ui/field";

interface SectionImagesCardProps {
  imageTall: string;
  imageTopRight: string;
  imageBottomRight: string;
  onChangeImageTall: (value: string) => void;
  onChangeImageTopRight: (value: string) => void;
  onChangeImageBottomRight: (value: string) => void;
}

export function SectionImagesCard({
  imageTall,
  imageTopRight,
  imageBottomRight,
  onChangeImageTall,
  onChangeImageTopRight,
  onChangeImageBottomRight,
}: SectionImagesCardProps) {
  return (
    <SectionCard
      title="Section Images"
      subtitle="Three photos in the image collage"
      collapsible
    >
      <ImageField
        label="Tall Left Image"
        value={imageTall}
        onChange={onChangeImageTall}
        hint="Spans two rows on the left"
      />
      <ImageField
        label="Top Right Image"
        value={imageTopRight}
        onChange={onChangeImageTopRight}
      />
      <ImageField
        label="Bottom Right Image"
        value={imageBottomRight}
        onChange={onChangeImageBottomRight}
      />
    </SectionCard>
  );
}
