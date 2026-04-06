import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  collapsible?: boolean;
  defaultOpen?: boolean;
  badge?: string;
}

export function SectionCard({ title, subtitle, icon, children, collapsible = false, defaultOpen = true, badge }: SectionCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-[#1c2333] rounded-2xl border border-white/6 overflow-hidden">
      <div
        className={`flex items-center justify-between px-6 py-4 border-b border-white/6 ${collapsible ? "cursor-pointer hover:bg-white/3 transition-colors" : ""}`}
        onClick={collapsible ? () => setOpen(!open) : undefined}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-[#e8959b]">{icon}</div>}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              {badge && <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#bf262f]/20 text-[#e8959b]">{badge}</span>}
            </div>
            {subtitle && <p className="text-xs text-white/30 mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {collapsible && (
          <div className="text-white/30">
            {open ? <CaretUp className="w-4 h-4" /> : <CaretDown className="w-4 h-4" />}
          </div>
        )}
      </div>
      {(!collapsible || open) && <div className="p-6 space-y-5">{children}</div>}
    </div>
  );
}