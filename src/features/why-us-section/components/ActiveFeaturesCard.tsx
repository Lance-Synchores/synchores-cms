"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { ListRow } from "@/components/admin-ui/list-item";
import { AddButton } from "@/components/admin-ui/add-butt";
import { Star } from "@phosphor-icons/react";

export interface WhyFeature {
  id: string;
  icon: string;
  title: string;
  desc: string;
  archived: boolean;
}

interface ActiveFeaturesCardProps {
  features: WhyFeature[];
  onEdit: (feature: WhyFeature) => void;
  onArchive: (id: string) => void;
  onAdd: () => void;
}

export function ActiveFeaturesCard({
  features,
  onEdit,
  onArchive,
  onAdd,
}: ActiveFeaturesCardProps) {
  return (
    <SectionCard
      title="Feature Cards"
      icon={<Star className="w-4 h-4" />}
      subtitle="Cards shown in the Why Choose Us dark section"
      badge={`${features.length} active`}
    >
      <div className="space-y-2">
        {features.map((f) => (
          <ListRow
            key={f.id}
            label={f.title}
            sublabel={`Icon: ${f.icon} · ${f.desc}`}
            onEdit={() => onEdit({ ...f })}
            onArchive={() => onArchive(f.id)}
          />
        ))}
        <AddButton label="Add Feature" onClick={onAdd} />
      </div>
    </SectionCard>
  );
}
