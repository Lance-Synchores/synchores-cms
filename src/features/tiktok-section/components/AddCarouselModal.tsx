"use client";

import { useState } from "react";
import { Modal } from "@/components/admin-ui/modal";
import { Field, TextInput } from "@/components/admin-ui/field";
import { VideoEntryList, type VideoEntry, emptyEntry } from "./VideoEntryList";

interface AddCarouselModalProps {
  onClose: () => void;
  onSave: (title: string, sub: string, entries: VideoEntry[]) => void;
}

export function AddCarouselModal({ onClose, onSave }: AddCarouselModalProps) {
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [entries, setEntries] = useState<VideoEntry[]>([emptyEntry()]);

  const validEntries = entries.filter((e) => e.tiktokUrl.trim() !== "");
  const canSave = title.trim() !== "";

  return (
    <Modal
      title="Add New Carousel"
      onClose={onClose}
      onSave={() => onSave(title.trim(), sub.trim(), entries)}
      saveLabel={`Create Carousel${
        validEntries.length > 0
          ? ` + ${validEntries.length} Video${
              validEntries.length !== 1 ? "s" : ""
            }`
          : ""
      }`}
    >
      {/* Step 1 — Carousel info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-[#bf262f] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
            1
          </div>
          <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
            Carousel Info
          </span>
        </div>
        <Field
          label="Category Name"
          hint='e.g. "Cookware", "Glassware", "Bakeware"'
        >
          <TextInput
            value={title}
            onChange={setTitle}
            placeholder="Cookware"
          />
        </Field>
        <Field
          label="Subtitle"
          hint="Short description shown below the carousel title"
        >
          <TextInput
            value={sub}
            onChange={setSub}
            placeholder="Pans, woks & skillets."
          />
        </Field>
      </div>

      <div className="border-t border-white/8 my-1" />

      {/* Step 2 — TikTok links */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded-full bg-[#bf262f] flex items-center justify-center text-white text-[10px] font-bold shrink-0">
            2
          </div>
          <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
            TikTok Links
          </span>
          <span className="text-[10px] text-white/25 ml-auto">
            optional — add later too
          </span>
        </div>
        <p className="text-[11px] text-white/35 leading-relaxed -mt-1">
          Paste the TikTok post URLs you want displayed as cards in this
          carousel. Each link = one card on the site.
        </p>
        <VideoEntryList entries={entries} onChange={setEntries} />
      </div>
    </Modal>
  );
}
