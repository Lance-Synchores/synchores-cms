import { Warning } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";

interface DangerZoneCardProps {
  onReset: () => void;
}

export function DangerZoneCard({ onReset }: DangerZoneCardProps) {
  const handleReset = () => {
    if (confirm("Are you sure? All content changes will be lost.")) {
      onReset();
    }
  };

  return (
    <SectionCard
      title="Danger Zone"
      icon={<Warning className="w-4 h-4 text-red-400" />}
      subtitle="Irreversible actions"
    >
      <div className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">Reset All Content to Defaults</p>
          <p className="text-xs text-white/40 mt-1">
            This will wipe all CMS changes and restore the original content. This action cannot be undone.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="shrink-0 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all border border-red-500/20"
        >
          Reset to Defaults
        </button>
      </div>
    </SectionCard>
  );
}
