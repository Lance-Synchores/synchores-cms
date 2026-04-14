"use client";

import { X, Link, ArrowSquareOut, Plus } from "@phosphor-icons/react";

export interface VideoEntry {
  _key: string;
  tiktokUrl: string;
  title: string;
  buyLink: string;
}

export function emptyEntry(): VideoEntry {
  return {
    _key: Math.random().toString(36).slice(2),
    tiktokUrl: "",
    title: "",
    buyLink: "",
  };
}

interface VideoEntryListProps {
  entries: VideoEntry[];
  onChange: (entries: VideoEntry[]) => void;
}

export function VideoEntryList({ entries, onChange }: VideoEntryListProps) {
  const update = (key: string, patch: Partial<VideoEntry>) =>
    onChange(entries.map((e) => (e._key === key ? { ...e, ...patch } : e)));
  const remove = (key: string) => onChange(entries.filter((e) => e._key !== key));
  const add = () => onChange([...entries, emptyEntry()]);

  return (
    <div className="space-y-3">
      {entries.map((entry, idx) => (
        <div
          key={entry._key}
          className="rounded-xl border border-white/10 bg-white/3 p-3.5 space-y-2.5"
        >
          {/* Entry header */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold text-white/30 uppercase tracking-widest">
              Video #{idx + 1}
            </span>
            {entries.length > 1 && (
              <button
                onClick={() => remove(entry._key)}
                className="w-6 h-6 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/30 hover:text-red-400 flex items-center justify-center transition-all"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* TikTok URL */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/50 uppercase tracking-widest flex items-center gap-1.5">
              <Link className="w-3 h-3 text-[#e8959b]" />
              TikTok Link
              <span className="text-[#bf262f] ml-0.5">*</span>
            </label>
            <div className="relative">
              <input
                type="url"
                value={entry.tiktokUrl}
                onChange={(e) => update(entry._key, { tiktokUrl: e.target.value })}
                placeholder="https://www.tiktok.com/@handle/video/..."
                className="w-full bg-white/5 border border-[#bf262f]/40 focus:border-[#bf262f]/80 focus:ring-2 focus:ring-[#bf262f]/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all"
              />
            </div>
            {entry.tiktokUrl && (
              <a
                href={entry.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#e8959b] hover:text-white transition-colors"
              >
                <ArrowSquareOut className="w-3 h-3" />
                Preview link
              </a>
            )}
          </div>

          {/* Optional fields */}
          <div className="grid grid-cols-1 gap-2">
            <input
              type="text"
              value={entry.title}
              onChange={(e) => update(entry._key, { title: e.target.value })}
              placeholder="Caption / title (optional)"
              className="w-full bg-white/5 border border-white/8 focus:border-white/25 rounded-xl px-4 py-2 text-sm text-white placeholder-white/20 outline-none transition-all"
            />
            <input
              type="url"
              value={entry.buyLink}
              onChange={(e) => update(entry._key, { buyLink: e.target.value })}
              placeholder="Buy Now link (optional)"
              className="w-full bg-white/5 border border-white/8 focus:border-white/25 rounded-xl px-4 py-2 text-sm text-white placeholder-white/20 outline-none transition-all"
            />
          </div>
        </div>
      ))}

      {/* Add another video */}
      <button
        onClick={add}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-dashed border-white/15 hover:border-[#bf262f]/40 text-white/30 hover:text-[#e8959b] text-sm font-medium transition-all"
      >
        <Plus className="w-4 h-4" />
        Add another TikTok link
      </button>
    </div>
  );
}
