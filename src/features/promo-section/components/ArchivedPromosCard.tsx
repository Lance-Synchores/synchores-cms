"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { ListRow } from "@/components/admin-ui/list-item";
import { type Promo } from "./ActivePromosCard";

interface ArchivedPromosCardProps {
  promos: Promo[];
  onEdit: (promo: Promo) => void;
  onRestore: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ArchivedPromosCard({
  promos,
  onEdit,
  onRestore,
  onDelete,
}: ArchivedPromosCardProps) {
  if (promos.length === 0) return null;

  return (
    <SectionCard title="Archived Promotions" collapsible defaultOpen={false}>
      <div className="space-y-2">
        {promos.map((promo) => (
          <ListRow
            key={promo.id}
            label={promo.headline}
            sublabel={promo.discount}
            image={promo.image}
            archived
            onEdit={() => onEdit({ ...promo })}
            onRestore={() => onRestore(promo.id)}
            onDelete={() => {
              if (confirm(`Permanently delete "${promo.headline}"?`)) {
                onDelete(promo.id);
              }
            }}
          />
        ))}
      </div>
    </SectionCard>
  );
}
