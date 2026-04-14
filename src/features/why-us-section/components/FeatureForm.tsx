"use client";

import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";
import { type WhyFeature } from "./ActiveFeaturesCard";

export type FeatureFormData = Omit<WhyFeature, "id" | "archived">;

const AVAILABLE_ICONS = [
  "Shield",
  "FlameKindling",
  "Lightning",
  "Store",
  "Star",
  "Trophy",
  "Heart",
  "Users",
  "Globe",
  "Package",
  "CheckCircle",
  "Sparkles",
  "Leaf",
  "Lock",
  "Award",
];

interface FeatureFormProps {
  data: FeatureFormData;
  onChange: (data: FeatureFormData) => void;
}

export function FeatureForm({ data, onChange }: FeatureFormProps) {
  return (
    <>
      <Grid2>
        <Field label="Title">
          <TextInput
            value={data.title}
            onChange={(v) => onChange({ ...data, title: v })}
            placeholder="Lifetime Warranty"
          />
        </Field>
        <Field label="Icon" hint="Phosphor icon name">
          <select
            value={data.icon}
            onChange={(e) => onChange({ ...data, icon: e.target.value })}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none appearance-none"
          >
            {AVAILABLE_ICONS.map((icon) => (
              <option key={icon} value={icon} className="bg-[#1c2333]">
                {icon}
              </option>
            ))}
          </select>
        </Field>
      </Grid2>
      <Field label="Description">
        <TextInput
          value={data.desc}
          onChange={(v) => onChange({ ...data, desc: v })}
          placeholder="Every product, backed forever."
        />
      </Field>
    </>
  );
}
