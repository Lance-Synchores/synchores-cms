"use client";

import { Modal } from "@/components/admin-ui/modal";
import { ProductForm, type ProductFormData } from "./ProductForm";

export interface Product extends ProductFormData {
  id: string;
  archived: boolean;
}

interface EditProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
  onChange: (product: Product) => void;
}

export function EditProductModal({
  product,
  onClose,
  onSave,
  onChange,
}: EditProductModalProps) {
  if (!product) return null;

  return (
    <Modal
      title={`Edit: ${product.name}`}
      onClose={onClose}
      onSave={() => onSave(product)}
    >
      <ProductForm
        data={product}
        onChange={(data) => onChange({ ...product, ...data })}
      />
    </Modal>
  );
}
