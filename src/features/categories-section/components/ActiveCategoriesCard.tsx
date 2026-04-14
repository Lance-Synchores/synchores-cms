"use client";

import { useState } from "react";
import { Square } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput, ImageField } from "@/components/admin-ui/field";
import { ListRow } from "@/components/admin-ui/list-item";
import { Modal } from "@/components/admin-ui/modal";
import { AddButton } from "@/components/admin-ui/add-butt";

export interface Category {
  id: string;
  label: string;
  image: string;
  href: string;
  archived: boolean;
}

interface ActiveCategoriesCardProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onArchive: (id: string) => void;
  onAdd: () => void;
}

export function ActiveCategoriesCard({
  categories,
  onEdit,
  onArchive,
  onAdd,
}: ActiveCategoriesCardProps) {
  return (
    <SectionCard
      title="Active Categories"
      icon={<Square className="w-4 h-4" />}
      subtitle="Shown in the Our Collections grid"
      badge={`${categories.length} active`}
    >
      <div className="space-y-2">
        {categories.map((cat) => (
          <ListRow
            key={cat.id}
            label={cat.label}
            sublabel={cat.href}
            image={cat.image}
            onEdit={() => onEdit({ ...cat })}
            onArchive={() => onArchive(cat.id)}
          />
        ))}
        <AddButton label="Add Category" onClick={onAdd} />
      </div>
    </SectionCard>
  );
}
