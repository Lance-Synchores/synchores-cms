"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { ListRow } from "@/components/admin-ui/list-item";
import { AddButton } from "@/components/admin-ui/add-butt";
import { Tag } from "@phosphor-icons/react";

export interface Promo {
  id: string;
  badge: string;
  badgeColor: string;
  headline: string;
  sub: string;
  discount: string;
  condition: string;
  cta: string;
  image: string;
  tag: string;
  href: string;
  archived: boolean;
}

interface ActivePromosCardProps {
  promos: Promo[];
  onEdit: (promo: Promo) => void;
  onArchive: (id: string) => void;
  onAdd: () => void;
}

export function ActivePromosCard({
  promos,
  onEdit,
  onArchive,
  onAdd,
}: ActivePromosCardProps) {
  return (
    <SectionCard
      title="Active Promotions"
      icon={<Tag className="w-4 h-4" />}
      subtitle="Cards shown in the Promos section"
      badge={`${promos.length} active`}
    >
      <div className="space-y-2">
        {promos.map((promo) => (
          <ListRow
            key={promo.id}
            label={promo.headline}
            sublabel={`${promo.discount} · ${promo.condition}`}
            image={promo.image}
            badge={promo.badge}
            onEdit={() => onEdit({ ...promo })}
            onArchive={() => onArchive(promo.id)}
          />
        ))}
        <AddButton label="Add Promotion" onClick={onAdd} />
      </div>
    </SectionCard>
  );
}
