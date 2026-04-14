"use client";

import { useState } from "react";
import { useCMS } from "@/features/admin/context/cms-context";
import { ActiveCategoriesCard, type Category } from "./components/ActiveCategoriesCard";
import { ArchivedCategoriesCard } from "./components/ArchivedCategoriesCard";
import { EditCategoryModal } from "./components/EditCategoryModal";
import { AddCategoryModal, type CategoryDraft } from "./components/AddCategoryModal";

const emptyDraft: CategoryDraft = { label: "", image: "", href: "" };

export function CategoriesSection() {
  const {
    cms,
    addCategory,
    updateCategory,
    archiveCategory,
    restoreCategory,
    deleteCategory,
  } = useCMS();

  const [editCat, setEditCat] = useState<Category | null>(null);
  const [addMode, setAddMode] = useState(false);
  const [draft, setDraft] = useState<CategoryDraft>(emptyDraft);

  const active = cms.categories.filter((c) => !c.archived);
  const archived = cms.categories.filter((c) => c.archived);

  const handleSaveEdit = () => {
    if (!editCat) return;
    updateCategory(editCat.id, {
      label: editCat.label,
      image: editCat.image,
      href: editCat.href,
    });
    setEditCat(null);
  };

  const handleAdd = () => {
    if (!draft.label || !draft.image) return;
    addCategory(draft);
    setDraft(emptyDraft);
    setAddMode(false);
  };

  return (
    <div className="space-y-5">
      <ActiveCategoriesCard
        categories={active}
        onEdit={setEditCat}
        onArchive={archiveCategory}
        onAdd={() => {
          setDraft(emptyDraft);
          setAddMode(true);
        }}
      />

      <ArchivedCategoriesCard
        categories={archived}
        onEdit={setEditCat}
        onRestore={restoreCategory}
        onDelete={deleteCategory}
      />

      <EditCategoryModal
        category={editCat}
        onClose={() => setEditCat(null)}
        onSave={handleSaveEdit}
        onChange={setEditCat}
      />

      <AddCategoryModal
        isOpen={addMode}
        draft={draft}
        onClose={() => setAddMode(false)}
        onSave={handleAdd}
        onChange={setDraft}
      />
    </div>
  );
}
