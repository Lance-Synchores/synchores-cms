"use client";

import { Package } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { ListRow } from "@/components/admin-ui/list-item";
import { AddButton } from "@/components/admin-ui/add-butt";
import { type Product } from "./EditProductModal";

interface ActiveProductsCardProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onArchive: (id: string) => void;
  onAdd: () => void;
}

export function ActiveProductsCard({
  products,
  onEdit,
  onArchive,
  onAdd,
}: ActiveProductsCardProps) {
  return (
    <SectionCard
      title="Featured Products"
      icon={<Package className="w-4 h-4" />}
      subtitle="Shown in the Best Sellers grid"
      badge={`${products.length} active`}
    >
      <div className="space-y-2">
        {products.map((prod) => (
          <ListRow
            key={prod.id}
            label={prod.name}
            sublabel={`${prod.price}${prod.original ? ` · was ${prod.original}` : ""}`}
            image={prod.image}
            badge={prod.badge}
            onEdit={() => onEdit({ ...prod })}
            onArchive={() => onArchive(prod.id)}
          />
        ))}
        <AddButton label="Add Product" onClick={onAdd} />
      </div>
    </SectionCard>
  );
}
