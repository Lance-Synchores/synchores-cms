"use client";

import { Field, TextInput, ImageField } from "@/components/admin-ui/field";
import { Grid2, Divider } from "@/components/admin-ui/grid-and-divider";
import { Link, Warning, ArrowSquareOut } from "@phosphor-icons/react";
import { type TikTokVideo } from "@/features/admin/context/cms-context";

interface VideoEditFormProps {
  data: TikTokVideo;
  onChange: (data: TikTokVideo) => void;
}

export function VideoEditForm({ data, onChange }: VideoEditFormProps) {
  return (
    <>
      {/* TikTok URL — prominent */}
      <div className="p-3 rounded-xl bg-[#bf262f]/8 border border-[#bf262f]/20 space-y-2">
        <label className="text-xs font-semibold text-[#e8959b] uppercase tracking-widest flex items-center gap-1.5">
          <Link className="w-3 h-3" />
          TikTok Video Link
        </label>
        <div className="relative">
          <input
            type="url"
            value={data.tiktokUrl}
            onChange={(e) => onChange({ ...data, tiktokUrl: e.target.value })}
            placeholder="https://www.tiktok.com/@handle/video/..."
            className="w-full bg-white/5 border border-[#bf262f]/40 focus:border-[#bf262f]/80 focus:ring-2 focus:ring-[#bf262f]/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all"
          />
        </div>
        {data.tiktokUrl ? (
          <a
            href={data.tiktokUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#e8959b] hover:text-white transition-colors"
          >
            <ArrowSquareOut className="w-3 h-3" />
            Open TikTok post
          </a>
        ) : (
          <p className="text-xs text-amber-400/70 flex items-center gap-1.5">
            <Warning className="w-3 h-3" />
            No TikTok link — card play button won't work
          </p>
        )}
      </div>

      <Field label="Video Caption / Title">
        <TextInput
          value={data.title}
          onChange={(v) => onChange({ ...data, title: v })}
          placeholder="No oil needed?! Testing the Omega Non-Stick 😱🍳"
        />
      </Field>

      <Grid2>
        <Field label="Creator Handle" hint="Without @">
          <TextInput
            value={data.author}
            onChange={(v) => onChange({ ...data, author: v })}
            placeholder="chef.leo"
          />
        </Field>
        <Field label="Views">
          <TextInput
            value={data.views}
            onChange={(v) => onChange({ ...data, views: v })}
            placeholder="2.1M"
          />
        </Field>
      </Grid2>

      <Grid2>
        <Field label="Likes">
          <TextInput
            value={data.likes}
            onChange={(v) => onChange({ ...data, likes: v })}
            placeholder="145K"
          />
        </Field>
        <Field label="Comments">
          <TextInput
            value={data.comments}
            onChange={(v) => onChange({ ...data, comments: v })}
            placeholder="1.2K"
          />
        </Field>
      </Grid2>

      <Divider />

      <ImageField
        label="Thumbnail Image URL"
        value={data.thumbnail}
        onChange={(v) => onChange({ ...data, thumbnail: v })}
        hint="Card background — paste any image URL"
      />

      <Field label="Buy Now Link" hint="Where the Buy Now button on the card points">
        <TextInput
          value={data.buyLink}
          onChange={(v) => onChange({ ...data, buyLink: v })}
          placeholder="https://omegahouseware.com/product/..."
        />
      </Field>
    </>
  );
}
