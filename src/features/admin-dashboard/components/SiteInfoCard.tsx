import { GlobeHemisphereWest, EnvelopeSimple, Phone } from "@phosphor-icons/react";

interface SiteInfoCardProps {
  shopUrl: string;
  phone: string;
  email: string;
}

export function SiteInfoCard({ shopUrl, phone, email }: SiteInfoCardProps) {
  const items = [
    { icon: GlobeHemisphereWest, label: "Shop URL", value: shopUrl },
    { icon: Phone, label: "Phone", value: phone },
    { icon: EnvelopeSimple, label: "Email", value: email },
  ];

  return (
    <div className="bg-[#1c2333] border border-white/6 rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-white mb-4">Site Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex gap-3 p-3 bg-white/3 rounded-xl">
              <Icon className="w-4 h-4 text-[#e8959b] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">{item.label}</p>
                <p className="text-xs text-white/70 mt-0.5 break-all">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
