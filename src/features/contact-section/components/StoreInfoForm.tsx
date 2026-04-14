import { Field, TextInput } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

export interface StoreInfoItem {
  id: string;
  label: string;
  sub: string;
  value: string;
}

export interface StoreInfoFormData extends Omit<StoreInfoItem, "id"> {}

interface StoreInfoFormProps {
  data: StoreInfoFormData;
  onChange: (data: StoreInfoFormData) => void;
}

export function StoreInfoForm({ data, onChange }: StoreInfoFormProps) {
  return (
    <>
      <Grid2>
        <Field label="Label">
          <TextInput value={data.label} onChange={(v) => onChange({ ...data, label: v })} placeholder="Store Address" />
        </Field>
        <Field label="Sub-label">
          <TextInput value={data.sub} onChange={(v) => onChange({ ...data, sub: v })} placeholder="Walk-in & Pick-up available" />
        </Field>
      </Grid2>
      <Field label="Value">
        <TextInput value={data.value} onChange={(v) => onChange({ ...data, value: v })} placeholder="123 Houseware Ave..." />
      </Field>
    </>
  );
}
