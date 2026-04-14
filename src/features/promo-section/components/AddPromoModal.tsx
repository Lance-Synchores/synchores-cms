"use client";

import { Modal } from "@/components/admin-ui/modal";
import { PromoForm, type PromoFormData } from "./PromoForm";

interface AddPromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (promo: PromoFormData) => void;
  onChange: (promo: PromoFormData) => void;
  draft: PromoFormData;
}

const EMPTY_PROMO: PromoFormData = {
  badge: "",
  badgeColor: "#bf262f",
  headline: "",
  sub: "",
  discount: "",
  condition: "",
  cta: "Shop Now",
  image: "",
  tag: "",
  href: "",
};

export function AddPromoModal({
  isOpen,
  onClose,
  onSave,
  onChange,
  draft,
}: AddPromoModalProps) {
  if (!isOpen) return null;

  return (
    <Modal
      title="Add Promotion"
      onClose={onClose}
      onSave={() => {
        onSave(draft);
        onChange(EMPTY_PROMO);
      }}
      saveLabel="Add Promotion"
    >
      <PromoForm data={draft} onChange={onChange} />
    </Modal>
  );
}
