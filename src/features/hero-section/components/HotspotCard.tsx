"use client";

import { useState } from "react";
import { Crosshair } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { Modal } from "@/components/admin-ui/modal";

export interface Hotspot {
  id: string;
  title: string;
  desc: string;
  x: number;
  y: number;
}

interface HotspotCardProps {
  hotspots: Hotspot[];
  onUpdateHotspot: (id: string, data: { title: string; desc: string }) => void;
}

export function HotspotCard({ hotspots, onUpdateHotspot }: HotspotCardProps) {
  const [editHotspot, setEditHotspot] = useState<Hotspot | null>(null);

  const handleSaveHotspot = () => {
    if (!editHotspot) return;
    onUpdateHotspot(editHotspot.id, {
      title: editHotspot.title,
      desc: editHotspot.desc,
    });
    setEditHotspot(null);
  };

  return (
    <>
      <SectionCard
        title="Product Hotspots"
        icon={<Crosshair className="w-4 h-4" />}
        subtitle="Clickable feature annotations on the product"
        collapsible
        defaultOpen
      >
        <div className="space-y-2">
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="flex items-start gap-3 p-3 bg-white/3 border border-white/8 rounded-xl"
            >
              <div className="w-7 h-7 rounded-full bg-[#bf262f]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Crosshair className="w-3.5 h-3.5 text-[#e8959b]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">{spot.title}</p>
                <p className="text-xs text-white/40 mt-0.5 truncate">{spot.desc}</p>
                <p className="text-[10px] text-white/20 mt-1">
                  Position: {spot.x} / {spot.y}
                </p>
              </div>
              <button
                onClick={() => setEditHotspot({ ...spot })}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/8 hover:bg-white/15 text-white/70 hover:text-white transition-all font-medium"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </SectionCard>

      {editHotspot && (
        <Modal
          title={`Edit Hotspot: ${editHotspot.title}`}
          onClose={() => setEditHotspot(null)}
          onSave={handleSaveHotspot}
        >
          <Field label="Title">
            <TextInput
              value={editHotspot.title}
              onChange={(v) =>
                setEditHotspot({ ...editHotspot, title: v })
              }
            />
          </Field>
          <Field label="Description">
            <TextInput
              value={editHotspot.desc}
              onChange={(v) => setEditHotspot({ ...editHotspot, desc: v })}
            />
          </Field>
          <div className="p-3 bg-white/3 rounded-xl">
            <p className="text-xs text-white/40">
              Position (X: {editHotspot.x}, Y: {editHotspot.y}) — positions are
              fixed in the design.
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}
