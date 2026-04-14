import { Clock } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

interface StoreHoursCardProps {
  weekdayHours: string;
  sundayHours: string;
  onUpdate: (data: { storeHoursWeekday?: string; storeHoursSunday?: string }) => void;
}

export function StoreHoursCard({
  weekdayHours,
  sundayHours,
  onUpdate,
}: StoreHoursCardProps) {
  return (
    <SectionCard
      title="Store Hours"
      icon={<Clock className="w-4 h-4" />}
      subtitle="Shown in contact section"
    >
      <Grid2>
        <Field label="Weekday Hours">
          <TextInput
            value={weekdayHours}
            onChange={(v) => onUpdate({ storeHoursWeekday: v })}
            placeholder="Mon – Sat: 9:00 AM – 6:00 PM"
          />
        </Field>
        <Field label="Sunday Hours">
          <TextInput
            value={sundayHours}
            onChange={(v) => onUpdate({ storeHoursSunday: v })}
            placeholder="Sunday: 10:00 AM – 4:00 PM"
          />
        </Field>
      </Grid2>
    </SectionCard>
  );
}
