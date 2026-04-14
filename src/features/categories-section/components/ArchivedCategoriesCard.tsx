"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { ListRow } from "@/components/admin-ui/list-item";

export interface Category {
  id: string;
  label: string;
  image: string;
  href: string;
  archived: boolean;
}

interface ArchivedCategoriesCardProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onRestore: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ArchivedCategoriesCard({
  categories,
  onEdit,
  onRestore,
  onDelete,
}: ArchivedCategoriesCardProps) {
  if (categories.length === 0) {
    return null;
  }

  return (
    <SectionCard
      title="Archived Categories"
      subtitle="Hidden from the website"
      collapsible
      defaultOpen={false}
    >
      <div className="space-y-2">
        {categories.map((cat) => (
          <ListRow
            key={cat.id}
            label={cat.label}
            sublabel={cat.href}
            image={cat.image}
            archived
            onEdit={() => onEdit({ ...cat })}
            onRestore={() => onRestore(cat.id)}
            onDelete={() => {
              if (confirm(`Permanently delete "${cat.label}"?`)) {
                onDelete(cat.id);
              }
            }}
          />
        ))}
      </div>
    </SectionCard>
  );
}
