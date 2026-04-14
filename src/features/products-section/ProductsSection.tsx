"use client";

import { useState } from "react";
import { useCMS } from "@/features/admin/context/cms-context";
import { ActiveProductsCard } from "./components/ActiveProductsCard";
import { ArchivedProductsCard } from "./components/ArchivedProductsCard";
import { EditProductModal, type Product } from "./components/EditProductModal";
import { AddProductModal } from "./components/AddProductModal";
import { type ProductFormData } from "./components/ProductForm";

const EMPTY_PRODUCT: ProductFormData = {
  name: "",
  price: "",
  original: "",
  badge: "",
  link: "",
  image: "",
};

export function ProductsSection() {
  const {
    cms,
    addProduct,
    updateProduct,
    archiveProduct,
    restoreProduct,
    deleteProduct,
  } = useCMS();
  const [editProd, setEditProd] = useState<Product | null>(null);
  const [addMode, setAddMode] = useState(false);
  const [draft, setDraft] = useState<ProductFormData>(EMPTY_PRODUCT);

  const products = (cms.products || []) as Product[];
  const active = products.filter((p: Product) => !p.archived);
  const archived = products.filter((p: Product) => p.archived);

  const handleSaveEdit = async (product: Product) => {
    updateProduct(product.id, product);
    setEditProd(null);
  };

  const handleAdd = async (product: ProductFormData) => {
    addProduct(product);
    setAddMode(false);
    setDraft(EMPTY_PRODUCT);
  };

  const handleArchive = async (productId: string) => {
    const product = products.find((p: Product) => p.id === productId);
    if (product) {
      archiveProduct(productId);
    }
  };

  const handleRestore = async (productId: string) => {
    const product = products.find((p: Product) => p.id === productId);
    if (product) {
      restoreProduct(productId);
    }
  };

  const handleDelete = async (productId: string) => {
    if (confirm("Permanently delete this product?")) {
      deleteProduct(productId);
    }
  };

  return (
    <div className="space-y-5">
      <ActiveProductsCard
        products={active}
        onEdit={setEditProd}
        onArchive={handleArchive}
        onAdd={() => setAddMode(true)}
      />
      {archived.length > 0 && (
        <ArchivedProductsCard
          products={archived}
          onEdit={setEditProd}
          onRestore={handleRestore}
          onDelete={handleDelete}
        />
      )}

      <EditProductModal
        product={editProd}
        onClose={() => setEditProd(null)}
        onSave={handleSaveEdit}
        onChange={setEditProd}
      />

      <AddProductModal
        isOpen={addMode}
        onClose={() => {
          setAddMode(false);
          setDraft(EMPTY_PRODUCT);
        }}
        onSave={handleAdd}
        onChange={setDraft}
        draft={draft}
      />
    </div>
  );
}
