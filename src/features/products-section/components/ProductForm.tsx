"use client";

import { Field, TextInput, ImageField } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

export interface ProductFormData {
  name: string;
  price: string;
  original: string;
  image: string;
  badge: string;
  link: string;
}

interface ProductFormProps {
  data: ProductFormData;
  onChange: (data: ProductFormData) => void;
}

export function ProductForm({ data, onChange }: ProductFormProps) {
  return (
    <>
      <Field label="Product Name">
        <TextInput
          value={data.name}
          onChange={(v) => onChange({ ...data, name: v })}
          placeholder="Prestige Non-Stick Pan 28cm"
        />
      </Field>
      <Grid2>
        <Field label="Price" hint="e.g. ₱899">
          <TextInput
            value={data.price}
            onChange={(v) => onChange({ ...data, price: v })}
            placeholder="₱899"
          />
        </Field>
        <Field label="Original Price" hint="Leave blank for no strikethrough">
          <TextInput
            value={data.original}
            onChange={(v) => onChange({ ...data, original: v })}
            placeholder="₱1,299"
          />
        </Field>
      </Grid2>
      <Grid2>
        <Field label="Badge" hint="e.g. Best Seller, Trending (optional)">
          <TextInput
            value={data.badge}
            onChange={(v) => onChange({ ...data, badge: v })}
            placeholder="Best Seller"
          />
        </Field>
        <Field label="Buy Link">
          <TextInput
            value={data.link}
            onChange={(v) => onChange({ ...data, link: v })}
            placeholder="https://omegahouseware.com"
          />
        </Field>
      </Grid2>
      <ImageField
        label="Product Image"
        value={data.image}
        onChange={(v) => onChange({ ...data, image: v })}
      />
    </>
  );
}
