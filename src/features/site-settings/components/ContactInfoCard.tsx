import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field } from "@/components/admin-ui/field";
import { Grid2 } from "@/components/admin-ui/grid-and-divider";

interface ContactInfoCardProps {
  phone: string;
  email: string;
  address: string;
  onUpdate: (data: { phone?: string; email?: string; address?: string }) => void;
}

export function ContactInfoCard({
  phone,
  email,
  address,
  onUpdate,
}: ContactInfoCardProps) {
  return (
    <SectionCard
      title="Contact Information"
      icon={<Phone className="w-4 h-4" />}
      subtitle="Shown in contact section and footer"
    >
      <Grid2>
        <Field label="Phone / Viber">
          <div className="flex gap-2 items-center bg-white/5 border border-white/10 focus-within:border-[#bf262f]/60 rounded-xl px-4 py-2.5">
            <Phone className="w-3.5 h-3.5 text-white/30 shrink-0" />
            <input
              type="text"
              value={phone}
              onChange={(e) => onUpdate({ phone: e.target.value })}
              placeholder="+63 917 123 4567"
              className="flex-1 bg-transparent text-sm text-white placeholder-white/20 outline-none"
            />
          </div>
        </Field>
        <Field label="Email Address">
          <div className="flex gap-2 items-center bg-white/5 border border-white/10 focus-within:border-[#bf262f]/60 rounded-xl px-4 py-2.5">
            <EnvelopeSimple className="w-3.5 h-3.5 text-white/30 shrink-0" />
            <input
              type="email"
              value={email}
              onChange={(e) => onUpdate({ email: e.target.value })}
              placeholder="hello@omegahouseware.com"
              className="flex-1 bg-transparent text-sm text-white placeholder-white/20 outline-none"
            />
          </div>
        </Field>
      </Grid2>
      <Field label="Store Address">
        <div className="flex gap-2 items-start bg-white/5 border border-white/10 focus-within:border-[#bf262f]/60 rounded-xl px-4 py-2.5">
          <MapPin className="w-3.5 h-3.5 text-white/30 shrink-0 mt-0.5" />
          <textarea
            rows={2}
            value={address}
            onChange={(e) => onUpdate({ address: e.target.value })}
            placeholder="123 Houseware Ave..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/20 outline-none resize-none"
          />
        </div>
      </Field>
    </SectionCard>
  );
}
