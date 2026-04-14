"use client";

import { Field, TextInput, ImageField } from "@/components/admin-ui/field";
import { Modal } from "@/components/admin-ui/modal";

export interface Category {
  id: string;
  label: string;
  image: string;
  href: string;
  archived: boolean;
}

interface EditCategoryModalProps {
  category: Category | null;
  onClose: () => void;
  onSave: (category: Category) => void;
  onChange: (category: Category) => void;
}

export function EditCategoryModal({
  category,
  onClose,
  onSave,
  onChange,
}: EditCategoryModalProps) {
  if (!category) return null;

  return (
    <Modal
      title={`Edit: ${category.label}`}
      onClose={onClose}
      onSave={() => onSave(category)}
    >
      <Field label="Category Label">
        <TextInput
          value={category.label}
          onChange={(v) => onChange({ ...category, label: v })}
          placeholder="Cookware"
        />
      </Field>
      <ImageField
        label="Category Image"
        value={category.image}
        onChange={(v) => onChange({ ...category, image: v })}
      />
      <Field label="Link">
        <TextInput
          value={category.href}
          onChange={(v) => onChange({ ...category, href: v })}
          placeholder="https://omegahouseware.com"
        />
      </Field>
    </Modal>
  );
}
