"use client";

import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { type WhoWeAreStat } from "@/features/admin/context/cms-context";

interface StatsCardProps {
  stats: WhoWeAreStat[];
  onChangeValue: (id: string, value: string) => void;
  onChangeLabel: (id: string, label: string) => void;
}

export function StatsCard({
  stats,
  onChangeValue,
  onChangeLabel,
}: StatsCardProps) {
  return (
    <SectionCard
      title="Stats Row"
      subtitle="3 numbers shown below the story text"
    >
      <div className="space-y-3">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className="flex gap-3 items-center p-3 bg-white/3 border border-white/8 rounded-xl"
          >
            <span className="text-xs text-white/30 w-4 shrink-0">{i + 1}</span>
            <div className="flex gap-3 flex-1">
              <div className="flex-1">
                <p className="text-[10px] text-white/30 mb-1">Value</p>
                <TextInput
                  value={stat.value}
                  onChange={(v) => onChangeValue(stat.id, v)}
                  placeholder="200K+"
                />
              </div>
              <div className="flex-1">
                <p className="text-[10px] text-white/30 mb-1">Label</p>
                <TextInput
                  value={stat.label}
                  onChange={(v) => onChangeLabel(stat.id, v)}
                  placeholder="Happy Families"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
