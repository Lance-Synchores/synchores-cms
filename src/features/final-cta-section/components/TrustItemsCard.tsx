"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { X } from "@phosphor-icons/react";
import { useState } from "react";

interface TrustItemsCardProps {
  items: string[];
  onUpdate: (items: string[]) => void;
}

export function TrustItemsCard({ items, onUpdate }: TrustItemsCardProps) {
  const [newTrustItem, setNewTrustItem] = useState("");

  const addTrustItem = () => {
    if (!newTrustItem.trim()) return;
    onUpdate([...items, newTrustItem.trim()]);
    setNewTrustItem("");
  };

  const removeTrustItem = (idx: number) => {
    onUpdate(items.filter((_, i) => i !== idx));
  };

  return (
    <SectionCard title="Trust Items" subtitle="Bullet points shown below the CTA buttons">
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-white/3 border border-white/8 rounded-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#bf262f] shrink-0" />
            <span className="flex-1 text-sm text-white">{item}</span>
            <button
              onClick={() => removeTrustItem(i)}
              className="w-6 h-6 rounded-lg hover:bg-red-500/20 text-white/30 hover:text-red-400 flex items-center justify-center transition-all"
            >
              <X size={14} weight="bold" />
            </button>
          </div>
        ))}
        <div className="flex gap-2">
          <input
            type="text"
            value={newTrustItem}
            onChange={(e) => setNewTrustItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTrustItem()}
            placeholder="Add trust item..."
            className="flex-1 bg-white/5 border border-white/10 focus:border-[#bf262f]/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all"
          />
          <button
            onClick={addTrustItem}
            className="px-4 py-2.5 bg-[#bf262f]/20 hover:bg-[#bf262f]/30 text-[#e8959b] text-sm font-semibold rounded-xl transition-all"
          >
            Add
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
