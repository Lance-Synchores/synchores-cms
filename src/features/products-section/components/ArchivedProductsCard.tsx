"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { ListRow } from "@/components/admin-ui/list-item";
import { type Product } from "./EditProductModal";

interface ArchivedProductsCardProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onRestore: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ArchivedProductsCard({
  products,
  onEdit,
  onRestore,
  onDelete,
}: ArchivedProductsCardProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <SectionCard
      title="Archived Products"
      subtitle="Hidden from the website"
      collapsible
      defaultOpen={false}
    >
      <div className="space-y-2">
        {products.map((prod) => (
          <ListRow
            key={prod.id}
            label={prod.name}
            sublabel={prod.price}
            image={prod.image}
            archived
            onEdit={() => onEdit({ ...prod })}
            onRestore={() => onRestore(prod.id)}
            onDelete={() => {
              if (confirm(`Permanently delete "${prod.name}"?`)) {
                onDelete(prod.id);
              }
            }}
          />
        ))}
      </div>
    </SectionCard>
  );
}
