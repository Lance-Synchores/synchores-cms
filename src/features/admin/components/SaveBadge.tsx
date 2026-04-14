"use client";

interface SaveBadgeProps {
  lastSaved?: Date | null;
}

export function SaveBadge({ lastSaved }: SaveBadgeProps) {
  const formatTime = (date: Date | null | undefined) => {
    if (!date) return "Not saved";
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="flex items-center gap-1.5 text-xs text-white/30 px-3 py-2 rounded-xl bg-white/3 border border-white/6">
      <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
      Saved {formatTime(lastSaved)}
    </div>
  );
}
