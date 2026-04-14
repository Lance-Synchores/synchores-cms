"use client";

import { Modal } from "@/components/admin-ui/modal";
import { FeatureForm, type FeatureFormData } from "./FeatureForm";

interface AddFeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (feature: FeatureFormData) => void;
  onChange: (feature: FeatureFormData) => void;
  draft: FeatureFormData;
}

const EMPTY_FEATURE: FeatureFormData = {
  icon: "Star",
  title: "",
  desc: "",
};

export function AddFeatureModal({
  isOpen,
  onClose,
  onSave,
  onChange,
  draft,
}: AddFeatureModalProps) {
  if (!isOpen) return null;

  return (
    <Modal
      title="Add Feature"
      onClose={onClose}
      onSave={() => {
        onSave(draft);
        onChange(EMPTY_FEATURE);
      }}
      saveLabel="Add Feature"
    >
      <FeatureForm data={draft} onChange={onChange} />
    </Modal>
  );
}
