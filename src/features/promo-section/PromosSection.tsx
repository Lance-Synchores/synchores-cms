"use client";

import { useState } from "react";
import { useCMS } from "@/features/admin/context/cms-context";
import { ActivePromosCard, type Promo } from "./components/ActivePromosCard";
import { ArchivedPromosCard } from "./components/ArchivedPromosCard";
import { PromoForm, type PromoFormData } from "./components/PromoForm";
import { EditPromoModal } from "./components/EditPromoModal";
import { AddPromoModal } from "./components/AddPromoModal";
import { PromoStripCard } from "./components/PromoStripCard";

const EMPTY_PROMO: PromoFormData = {
  badge: "",
  badgeColor: "#bf262f",
  headline: "",
  sub: "",
  discount: "",
  condition: "",
  cta: "Shop Now",
  image: "",
  tag: "",
  href: "",
};

export function PromosSection() {
  const {
    cms,
    addPromo,
    updatePromo,
    archivePromo,
    restorePromo,
    deletePromo,
    updatePromoStrip,
  } = useCMS();

  const [editPromo, setEditPromo] = useState<Promo | null>(null);
  const [addMode, setAddMode] = useState(false);
  const [draft, setDraft] = useState<PromoFormData>(EMPTY_PROMO);

  const promos = (cms.promos || []) as Promo[];
  const active = promos.filter((p: Promo) => !p.archived);
  const archived = promos.filter((p: Promo) => p.archived);

  const handleSaveEdit = (promo: Promo) => {
    updatePromo(promo.id, promo);
    setEditPromo(null);
  };

  const handleAdd = (promo: PromoFormData) => {
    addPromo(promo);
    setAddMode(false);
    setDraft(EMPTY_PROMO);
  };

  return (
    <div className="space-y-5">
      <ActivePromosCard
        promos={active}
        onEdit={setEditPromo}
        onArchive={archivePromo}
        onAdd={() => {
          setDraft(EMPTY_PROMO);
          setAddMode(true);
        }}
      />

      <PromoStripCard
        text={cms.promoStrip.text}
        href={cms.promoStrip.href}
        onChangeText={(v) => updatePromoStrip({ text: v })}
        onChangeHref={(v) => updatePromoStrip({ href: v })}
      />

      <ArchivedPromosCard
        promos={archived}
        onEdit={setEditPromo}
        onRestore={restorePromo}
        onDelete={deletePromo}
      />

      <EditPromoModal
        promo={editPromo}
        onClose={() => setEditPromo(null)}
        onSave={handleSaveEdit}
        onChange={setEditPromo}
      />

      <AddPromoModal
        isOpen={addMode}
        onClose={() => {
          setAddMode(false);
          setDraft(EMPTY_PROMO);
        }}
        onSave={handleAdd}
        onChange={setDraft}
        draft={draft}
      />
    </div>
  );
}
