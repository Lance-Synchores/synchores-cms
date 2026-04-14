"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";
import { Users } from "@phosphor-icons/react";

interface SectionHeaderCardProps {
  badge: string;
  estYear: string;
  headline1: string;
  headline2: string;
  onChangeBadge: (value: string) => void;
  onChangeEstYear: (value: string) => void;
  onChangeHeadline1: (value: string) => void;
  onChangeHeadline2: (value: string) => void;
}

export function SectionHeaderCard({
  badge,
  estYear,
  headline1,
  headline2,
  onChangeBadge,
  onChangeEstYear,
  onChangeHeadline1,
  onChangeHeadline2,
}: SectionHeaderCardProps) {
  return (
    <SectionCard
      title="Section Header"
      icon={<Users className="w-4 h-4" />}
      subtitle="Badge and headlines"
    >
      <Grid2>
        <Field label="Badge Label">
          <TextInput
            value={badge}
            onChange={onChangeBadge}
            placeholder="Our Story"
          />
        </Field>
        <Field label="Est. Year">
          <TextInput
            value={estYear}
            onChange={onChangeEstYear}
            placeholder="2013"
          />
        </Field>
      </Grid2>
      <Grid2>
        <Field label="Headline Line 1">
          <TextInput
            value={headline1}
            onChange={onChangeHeadline1}
            placeholder="More than houseware."
          />
        </Field>
        <Field label="Headline Line 2 (accent)">
          <TextInput
            value={headline2}
            onChange={onChangeHeadline2}
            placeholder="A Filipino staple."
          />
        </Field>
      </Grid2>
    </SectionCard>
  );
}
