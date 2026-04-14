import { useCMS } from "@/features/admin/context/cms-context";
import { SectionHeaderCard } from "./components/SectionHeaderCard";
import { StoreInfoCardsCard } from "./components/StoreInfoCardsCard";
import { PickupNoteCard } from "./components/PickupNoteCard";

export function ContactSection() {
  const { cms, updateContactUs, updateStoreInfoItem } = useCMS();
  const c = cms.contactUs;

  return (
    <div className="space-y-5">
      <SectionHeaderCard
        data={{
          headline1: c.headline1,
          headline2: c.headline2,
          subtitle: c.subtitle,
        }}
        onChange={(data) => updateContactUs(data)}
      />
      <StoreInfoCardsCard items={c.storeInfo} onUpdate={updateStoreInfoItem} />
      <PickupNoteCard pickupNote={c.pickupNote} onChange={(v) => updateContactUs({ pickupNote: v })} />
    </div>
  );
}
