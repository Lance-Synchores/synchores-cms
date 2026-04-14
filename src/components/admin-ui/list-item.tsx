import { Archive, Download, Trash } from "@phosphor-icons/react";
import { ImageWithFallback } from "../imageWithFallBack";

interface ListRowProps {
  label: string;
  sublabel?: string;
  image?: string;
  archived?: boolean;
  onEdit: () => void;
  onArchive?: () => void;
  onRestore?: () => void;
  onDelete?: () => void;
  badge?: string;
  badgeColor?: string;
}

export function ListRow({ label, sublabel, image, archived, onEdit, onArchive, onRestore, onDelete, badge, badgeColor }: ListRowProps) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${archived ? "border-white/5 bg-white/2 opacity-50" : "border-white/8 bg-white/3 hover:bg-white/6"}`}>
      {image && (
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/5 shrink-0">
          <ImageWithFallback src={image} alt={label} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white truncate">{label}</span>
          {archived && <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/40 shrink-0">Archived</span>}
          {badge && !archived && <span className="text-[10px] px-2 py-0.5 rounded-full shrink-0" style={{ backgroundColor: (badgeColor || "#bf262f") + "33", color: badgeColor || "#e8959b" }}>{badge}</span>}
        </div>
        {sublabel && <p className="text-xs text-white/30 truncate mt-0.5">{sublabel}</p>}
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button onClick={onEdit} className="text-xs px-3 py-1.5 rounded-lg bg-white/8 hover:bg-white/15 text-white/70 hover:text-white transition-all font-medium">Edit</button>
        {!archived && onArchive && (
          <button onClick={onArchive} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-amber-500/20 text-white/30 hover:text-amber-400 transition-all flex items-center justify-center" title="Archive">
            <Archive className="w-3.5 h-3.5" />
          </button>
        )}
        {archived && onRestore && (
          <button onClick={onRestore} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-green-500/20 text-white/30 hover:text-green-400 transition-all flex items-center justify-center" title="Restore">
            <Download className="w-3.5 h-3.5" />
          </button>
        )}
        {onDelete && (
          <button onClick={onDelete} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/30 hover:text-red-400 transition-all flex items-center justify-center" title="Delete">
            <Trash className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
