import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput, TextArea } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

export interface SectionHeaderData {
  headline1: string;
  headline2: string;
  subtitle: string;
}

interface SectionHeaderCardProps {
  data: SectionHeaderData;
  onChange: (data: SectionHeaderData) => void;
}

export function SectionHeaderCard({ data, onChange }: SectionHeaderCardProps) {
  return (
    <SectionCard title="Section Header" icon="PhoneCall" subtitle="Headlines and subtitle">
      <Grid2>
        <Field label="Headline Line 1">
          <TextInput value={data.headline1} onChange={(v) => onChange({ ...data, headline1: v })} placeholder="Visit us. Reach out." />
        </Field>
        <Field label="Headline Line 2 (accent)">
          <TextInput value={data.headline2} onChange={(v) => onChange({ ...data, headline2: v })} placeholder="We'd love to help." />
        </Field>
      </Grid2>
      <Field label="Subtitle">
        <TextArea value={data.subtitle} onChange={(v) => onChange({ ...data, subtitle: v })} rows={2} placeholder="We operate on a pick-up and pack basis..." />
      </Field>
    </SectionCard>
  );
}
