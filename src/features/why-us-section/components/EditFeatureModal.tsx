"use client";

import { Modal } from "@/components/admin-ui/modal";
import { FeatureForm, type FeatureFormData } from "./FeatureForm";
import { type WhyFeature } from "./ActiveFeaturesCard";

interface EditFeatureModalProps {
  feature: WhyFeature | null;
  onClose: () => void;
  onSave: (feature: WhyFeature) => void;
  onChange: (feature: WhyFeature) => void;
}

export function EditFeatureModal({
  feature,
  onClose,
  onSave,
  onChange,
}: EditFeatureModalProps) {
  if (!feature) return null;

  return (
    <Modal
      title={`Edit: ${feature.title}`}
      onClose={onClose}
      onSave={() => onSave(feature)}
    >
      <FeatureForm
        data={feature}
        onChange={(data) => onChange({ ...feature, ...data })}
      />
    </Modal>
  );
}
