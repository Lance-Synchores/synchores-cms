"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { ListRow } from "@/components/admin-ui/list-item";
import { type WhyFeature } from "./ActiveFeaturesCard";

interface ArchivedFeaturesCardProps {
  features: WhyFeature[];
  onEdit: (feature: WhyFeature) => void;
  onRestore: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ArchivedFeaturesCard({
  features,
  onEdit,
  onRestore,
  onDelete,
}: ArchivedFeaturesCardProps) {
  if (features.length === 0) return null;

  return (
    <SectionCard title="Archived Features" collapsible defaultOpen={false}>
      <div className="space-y-2">
        {features.map((f) => (
          <ListRow
            key={f.id}
            label={f.title}
            sublabel={f.desc}
            archived
            onEdit={() => onEdit({ ...f })}
            onRestore={() => onRestore(f.id)}
            onDelete={() => {
              if (confirm(`Permanently delete "${f.title}"?`)) {
                onDelete(f.id);
              }
            }}
          />
        ))}
      </div>
    </SectionCard>
  );
}
