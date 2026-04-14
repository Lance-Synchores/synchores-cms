import { SectionCard } from "@/components/admin-ui/section-card";
import { StoreInfoItem, StoreInfoFormData, StoreInfoForm } from "./StoreInfoForm";

interface StoreInfoCardsCardProps {
  items: StoreInfoItem[];
  onUpdate: (id: string, data: Omit<StoreInfoItem, "id">) => void;
}

export function StoreInfoCardsCard({ items, onUpdate }: StoreInfoCardsCardProps) {
  return (
    <SectionCard title="Store Info Cards" subtitle="Four info cards shown on the left column">
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={item.id} className="p-4 bg-white/3 border border-white/8 rounded-xl space-y-3">
            <div className="text-xs font-semibold text-white/40 uppercase tracking-widest">Card {i + 1} · {item.label}</div>
            <StoreInfoForm
              data={{ label: item.label, sub: item.sub, value: item.value }}
              onChange={(data) => onUpdate(item.id, data)}
            />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
