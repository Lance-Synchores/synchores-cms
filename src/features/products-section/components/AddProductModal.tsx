"use client";

import { Modal } from "@/components/admin-ui/modal";
import { ProductForm, type ProductFormData } from "./ProductForm";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: ProductFormData) => void;
  onChange: (product: ProductFormData) => void;
  draft: ProductFormData;
}

const EMPTY_PRODUCT: ProductFormData = {
  name: "",
  price: "",
  original: "",
  badge: "",
  link: "",
  image: "",
};

export function AddProductModal({
  isOpen,
  onClose,
  onSave,
  onChange,
  draft,
}: AddProductModalProps) {
  if (!isOpen) return null;

  return (
    <Modal
      title="Add New Product"
      onClose={onClose}
      onSave={() => {
        onSave(draft);
        onChange(EMPTY_PRODUCT);
      }}
    >
      <ProductForm data={draft} onChange={onChange} />
    </Modal>
  );
}
