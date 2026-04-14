export function SaveBadge({ lastSaved }: { lastSaved: Date | null }) {
  if (!lastSaved) return null;
  return (
    <div className="flex items-center gap-2 text-xs text-green-400/80">
      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
      Saved {lastSaved.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}