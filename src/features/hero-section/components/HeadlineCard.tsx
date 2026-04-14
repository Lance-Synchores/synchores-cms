import { Layout } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput, TextArea } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

interface HeadlineCardProps {
  badge: string;
  headline1: string;
  headline2: string;
  subtitle: string;
  onUpdate: (data: {
    badge?: string;
    headline1?: string;
    headline2?: string;
    subtitle?: string;
  }) => void;
}

export function HeadlineCard({
  badge,
  headline1,
  headline2,
  subtitle,
  onUpdate,
}: HeadlineCardProps) {
  return (
    <SectionCard
      title="Headline & Badge"
      icon={<Layout className="w-4 h-4" />}
      subtitle="Top of the landing page"
    >
      <Field label="Top Badge Text">
        <TextInput
          value={badge}
          onChange={(v) => onUpdate({ badge: v })}
          placeholder="Premium Kitchenware · Est. Philippines"
        />
      </Field>
      <Grid2>
        <Field label="Headline Line 1" hint="The black text">
          <TextInput
            value={headline1}
            onChange={(v) => onUpdate({ headline1: v })}
            placeholder="Master"
          />
        </Field>
        <Field label="Headline Line 2" hint="The rose accent text (italic)">
          <TextInput
            value={headline2}
            onChange={(v) => onUpdate({ headline2: v })}
            placeholder="Your Kitchen."
          />
        </Field>
      </Grid2>
      <Field label="Subtitle / Subheading">
        <TextArea
          value={subtitle}
          onChange={(v) => onUpdate({ subtitle: v })}
          placeholder="Built for Filipino homes..."
          rows={2}
        />
      </Field>
    </SectionCard>
  );
}
