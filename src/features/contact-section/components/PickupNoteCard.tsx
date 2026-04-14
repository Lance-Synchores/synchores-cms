import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextArea } from "@/components/admin-ui/field";

export interface PickupNoteCardProps {
  pickupNote: string;
  onChange: (value: string) => void;
}

export function PickupNoteCard({ pickupNote, onChange }: PickupNoteCardProps) {
  return (
    <SectionCard title="Pick-up Note" subtitle="Dark card at the bottom of the store info column" collapsible>
      <Field label="Pick-up Note Text">
        <TextArea
          value={pickupNote}
          onChange={onChange}
          rows={3}
          placeholder="We currently operate as a pick-up and pack store..."
        />
      </Field>
    </SectionCard>
  );
}
