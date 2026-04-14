"use client";

import { Field, TextInput, ImageField } from "@/components/admin-ui/field";
import { Modal } from "@/components/admin-ui/modal";

export interface CategoryDraft {
  label: string;
  image: string;
  href: string;
}

interface AddCategoryModalProps {
  isOpen: boolean;
  draft: CategoryDraft;
  onClose: () => void;
  onSave: () => void;
  onChange: (draft: CategoryDraft) => void;
}

export function AddCategoryModal({
  isOpen,
  draft,
  onClose,
  onSave,
  onChange,
}: AddCategoryModalProps) {
  if (!isOpen) return null;

  return (
    <Modal
      title="Add Category"
      onClose={onClose}
      onSave={onSave}
      saveLabel="Add Category"
    >
      <Field label="Category Label">
        <TextInput
          value={draft.label}
          onChange={(v) => onChange({ ...draft, label: v })}
          placeholder="Cookware"
        />
      </Field>
      <ImageField
        label="Category Image"
        value={draft.image}
        onChange={(v) => onChange({ ...draft, image: v })}
      />
      <Field label="Link">
        <TextInput
          value={draft.href}
          onChange={(v) => onChange({ ...draft, href: v })}
          placeholder="https://omegahouseware.com"
        />
      </Field>
    </Modal>
  );
}
