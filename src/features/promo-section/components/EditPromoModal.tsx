"use client";

import { Modal } from "@/components/admin-ui/modal";
import { PromoForm, type PromoFormData } from "./PromoForm";
import { type Promo } from "./ActivePromosCard";

interface EditPromoModalProps {
  promo: Promo | null;
  onClose: () => void;
  onSave: (promo: Promo) => void;
  onChange: (promo: Promo) => void;
}

export function EditPromoModal({
  promo,
  onClose,
  onSave,
  onChange,
}: EditPromoModalProps) {
  if (!promo) return null;

  return (
    <Modal
      title={`Edit: ${promo.headline}`}
      onClose={onClose}
      onSave={() => onSave(promo)}
    >
      <PromoForm
        data={promo}
        onChange={(data) => onChange({ ...promo, ...data })}
      />
    </Modal>
  );
}
