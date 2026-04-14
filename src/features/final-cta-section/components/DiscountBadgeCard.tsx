"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

export interface DiscountBadgeData {
  discountValue: string;
  discountLabel: string;
  discountCondition: string;
  discountConditionSub: string;
}

interface DiscountBadgeCardProps {
  data: DiscountBadgeData;
  onChange: (data: DiscountBadgeData) => void;
}

export function DiscountBadgeCard({ data, onChange }: DiscountBadgeCardProps) {
  return (
    <SectionCard title="Discount Badge" icon="Megaphone" subtitle="The bold discount callout on the left">
      <Grid2>
        <Field label="Discount Value" hint="e.g. 30%">
          <TextInput value={data.discountValue} onChange={(v) => onChange({ ...data, discountValue: v })} placeholder="30%" />
        </Field>
        <Field label="Discount Label" hint="e.g. OFF TODAY">
          <TextInput value={data.discountLabel} onChange={(v) => onChange({ ...data, discountLabel: v })} placeholder="OFF TODAY" />
        </Field>
      </Grid2>
      <Grid2>
        <Field label="Condition">
          <TextInput value={data.discountCondition} onChange={(v) => onChange({ ...data, discountCondition: v })} placeholder="For all orders" />
        </Field>
        <Field label="Condition Sub-text">
          <TextInput value={data.discountConditionSub} onChange={(v) => onChange({ ...data, discountConditionSub: v })} placeholder="above ₱1,999" />
        </Field>
      </Grid2>
    </SectionCard>
  );
}
