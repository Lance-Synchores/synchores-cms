"use client";

import { useState } from "react";
import { useCMS } from "@/features/admin/context/cms-context";
import { SectionHeaderCard } from "./components/SectionHeaderCard";
import { ActiveFeaturesCard, type WhyFeature } from "./components/ActiveFeaturesCard";
import { ArchivedFeaturesCard } from "./components/ArchivedFeaturesCard";
import { EditFeatureModal } from "./components/EditFeatureModal";
import { AddFeatureModal } from "./components/AddFeatureModal";
import { type FeatureFormData } from "./components/FeatureForm";

const EMPTY_FEATURE: FeatureFormData = {
  icon: "Star",
  title: "",
  desc: "",
};

export function WhyChooseUsSection() {
  const {
    cms,
    updateWhyChooseUs,
    addWhyFeature,
    updateWhyFeature,
    archiveWhyFeature,
    restoreWhyFeature,
    deleteWhyFeature,
  } = useCMS();

  const [editFeature, setEditFeature] = useState<WhyFeature | null>(null);
  const [addMode, setAddMode] = useState(false);
  const [draft, setDraft] = useState<FeatureFormData>(EMPTY_FEATURE);

  const features = (cms.whyChooseUs.features || []) as WhyFeature[];
  const active = features.filter((f: WhyFeature) => !f.archived);
  const archived = features.filter((f: WhyFeature) => f.archived);

  const handleSaveEdit = (feature: WhyFeature) => {
    updateWhyFeature(feature.id, feature);
    setEditFeature(null);
  };

  const handleAdd = (feature: FeatureFormData) => {
    addWhyFeature(feature);
    setAddMode(false);
    setDraft(EMPTY_FEATURE);
  };

  return (
    <div className="space-y-5">
      <SectionHeaderCard
        headline={cms.whyChooseUs.headline}
        subtitle={cms.whyChooseUs.subtitle}
        onChangeHeadline={(v) => updateWhyChooseUs({ headline: v })}
        onChangeSubtitle={(v) => updateWhyChooseUs({ subtitle: v })}
      />

      <ActiveFeaturesCard
        features={active}
        onEdit={setEditFeature}
        onArchive={archiveWhyFeature}
        onAdd={() => {
          setDraft(EMPTY_FEATURE);
          setAddMode(true);
        }}
      />

      <ArchivedFeaturesCard
        features={archived}
        onEdit={setEditFeature}
        onRestore={restoreWhyFeature}
        onDelete={deleteWhyFeature}
      />

      <EditFeatureModal
        feature={editFeature}
        onClose={() => setEditFeature(null)}
        onSave={handleSaveEdit}
        onChange={setEditFeature}
      />

      <AddFeatureModal
        isOpen={addMode}
        onClose={() => {
          setAddMode(false);
          setDraft(EMPTY_FEATURE);
        }}
        onSave={handleAdd}
        onChange={setDraft}
        draft={draft}
      />
    </div>
  );
}
