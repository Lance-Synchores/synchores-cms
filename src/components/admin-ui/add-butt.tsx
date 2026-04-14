import { Plus } from "@phosphor-icons/react";

export function AddButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 w-full px-4 py-3 rounded-xl border border-dashed border-white/15 hover:border-[#bf262f]/50 text-white/40 hover:text-[#e8959b] transition-all text-sm font-medium"
    >
      <Plus className="w-4 h-4" />
      {label}
    </button>
  );
}
