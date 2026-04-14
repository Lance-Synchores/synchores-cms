"use client";

import { useState } from "react";
import { useCMS } from "@/features/admin/context/cms-context";
import { Modal } from "@/components/admin-ui/modal";
import { Field, TextInput } from "@/components/admin-ui/field";
import { AddButton } from "@/components/admin-ui/add-butt";
import { Video, CaretDown, CaretUp, Archive, Trash, Warning, ArrowSquareOut } from "@phosphor-icons/react";
import { VideoEntryList, type VideoEntry, emptyEntry } from "./VideoEntryList";
import { VideoEditForm } from "./VideoEditForm";
import { type TikTokVideo, type VideoCarouselGroup } from "@/features/admin/context/cms-context";

interface CarouselPanelProps {
  group: VideoCarouselGroup;
}

export function CarouselPanel({ group }: CarouselPanelProps) {
  const {
    updateVideoCarouselGroup,
    archiveVideoCarouselGroup,
    restoreVideoCarouselGroup,
    deleteVideoCarouselGroup,
    addVideoToCarousel,
    updateTikTokVideo,
    archiveTikTokVideo,
    restoreTikTokVideo,
    deleteTikTokVideo,
  } = useCMS();

  const [expanded, setExpanded] = useState(false);
  const [editVideo, setEditVideo] = useState<TikTokVideo | null>(null);
  const [addMode, setAddMode] = useState(false);
  const [addEntries, setAddEntries] = useState<VideoEntry[]>([emptyEntry()]);
  const [editGroupMode, setEditGroupMode] = useState(false);
  const [groupDraft, setGroupDraft] = useState({ title: group.title, sub: group.sub });

  const activeVideos = group.videos.filter((v) => !v.archived);
  const archivedVideos = group.videos.filter((v) => v.archived);
  const missingLink = activeVideos.filter((v) => !v.tiktokUrl).length;

  const handleSaveVideo = () => {
    if (!editVideo) return;
    updateTikTokVideo(editVideo.id, editVideo);
    setEditVideo(null);
  };

  const handleSaveGroup = () => {
    updateVideoCarouselGroup(group.id, {
      title: groupDraft.title,
      sub: groupDraft.sub,
    });
    setEditGroupMode(false);
  };

  const handleAddVideos = () => {
    const valid = addEntries.filter((e) => e.tiktokUrl.trim() !== "");
    if (valid.length === 0) return;
    valid.forEach((e) => {
      addVideoToCarousel(group.id, {
        tiktokUrl: e.tiktokUrl.trim(),
        title: e.title.trim(),
        buyLink: e.buyLink.trim(),
        thumbnail: "",
        author: "",
        views: "",
        likes: "",
        comments: "",
      });
    });
    setAddEntries([emptyEntry()]);
    setAddMode(false);
  };

  return (
    <div
      className={`rounded-2xl border transition-all ${
        group.archived
          ? "border-white/5 opacity-40"
          : "border-white/10 bg-white/2"
      }`}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 p-4">
        <button
          onClick={() => setExpanded((x) => !x)}
          className="flex items-center gap-3 flex-1 text-left min-w-0"
        >
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
              group.archived ? "bg-white/5" : "bg-[#bf262f]/15"
            }`}
          >
            <Video
              className={`w-4 h-4 ${group.archived ? "text-white/30" : "text-[#e8959b]"}`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-semibold text-white truncate">
                {group.title}
              </span>
              {group.archived && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/40 shrink-0">
                  Archived
                </span>
              )}
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 text-white/40 shrink-0">
                {activeVideos.length} video{activeVideos.length !== 1 ? "s" : ""}
              </span>
              {missingLink > 0 && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 shrink-0">
                  {missingLink} missing link
                </span>
              )}
            </div>
            <p className="text-xs text-white/30 truncate mt-0.5">{group.sub}</p>
          </div>
          {expanded ? (
            <CaretUp className="w-4 h-4 text-white/30 shrink-0" />
          ) : (
            <CaretDown className="w-4 h-4 text-white/30 shrink-0" />
          )}
        </button>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => {
              setGroupDraft({ title: group.title, sub: group.sub });
              setEditGroupMode(true);
            }}
            className="text-xs px-3 py-1.5 rounded-lg bg-white/8 hover:bg-white/15 text-white/70 hover:text-white transition-all font-medium"
          >
            Rename
          </button>
          {!group.archived ? (
            <button
              onClick={() => archiveVideoCarouselGroup(group.id)}
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-amber-500/20 text-white/30 hover:text-amber-400 transition-all flex items-center justify-center"
              title="Archive"
            >
              <Archive className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={() => restoreVideoCarouselGroup(group.id)}
              className="w-7 h-7 rounded-lg bg-white/5 hover:bg-green-500/20 text-white/30 hover:text-green-400 transition-all flex items-center justify-center"
              title="Restore"
            >
              <Archive className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={() => {
              if (
                confirm(
                  `Delete the entire "${group.title}" carousel and all ${activeVideos.length} of its videos?`
                )
              )
                deleteVideoCarouselGroup(group.id);
            }}
            className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/30 hover:text-red-400 transition-all flex items-center justify-center"
            title="Delete"
          >
            <Trash className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 pb-4 border-t border-white/6 pt-4 space-y-2">
          {/* Active videos */}
          {activeVideos.length === 0 && (
            <p className="text-xs text-white/25 text-center py-3">
              No videos yet. Add TikTok links below.
            </p>
          )}
          {activeVideos.map((video) => (
            <div
              key={video.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/8 hover:bg-white/5 transition-all group"
            >
              {/* Thumbnail preview */}
              {video.thumbnail ? (
                <div className="w-9 h-14 rounded-lg overflow-hidden bg-white/5 shrink-0">
                  <img
                    src={video.thumbnail}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-9 h-14 rounded-lg bg-white/5 shrink-0 flex items-center justify-center">
                  <Video className="w-3.5 h-3.5 text-white/20" />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white truncate">
                  {video.title || (
                    <span className="text-white/30 italic">No caption</span>
                  )}
                </p>
                {video.author && (
                  <span className="text-[10px] text-white/30">@{video.author}</span>
                )}
                {/* TikTok URL */}
                {video.tiktokUrl ? (
                  <a
                    href={video.tiktokUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] text-[#e8959b] hover:text-white mt-0.5 transition-colors truncate"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowSquareOut className="w-2.5 h-2.5 shrink-0" />
                    <span className="truncate">{video.tiktokUrl}</span>
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] text-amber-400/80 mt-0.5">
                    <Warning className="w-2.5 h-2.5" />
                    No TikTok link — click Edit to add
                  </span>
                )}
              </div>

              {/* Row actions */}
              <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setEditVideo({ ...video })}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/8 hover:bg-white/15 text-white/70 hover:text-white transition-all font-medium"
                >
                  Edit
                </button>
                <button
                  onClick={() => archiveTikTokVideo(video.id)}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-amber-500/20 text-white/30 hover:text-amber-400 transition-all flex items-center justify-center"
                  title="Archive"
                >
                  <Archive className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => {
                    if (confirm("Delete this video card permanently?"))
                      deleteTikTokVideo(video.id);
                  }}
                  className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/30 hover:text-red-400 transition-all flex items-center justify-center"
                  title="Delete"
                >
                  <Trash className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* Archived videos */}
          {archivedVideos.length > 0 && (
            <div className="pt-2 border-t border-white/6 space-y-2">
              <p className="text-[10px] text-white/25 uppercase tracking-widest">
                Archived
              </p>
              {archivedVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/2 border border-white/5 opacity-50"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/50 truncate">
                      {video.title || "(No caption)"}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => restoreTikTokVideo(video.id)}
                      className="w-7 h-7 rounded-lg bg-white/5 hover:bg-green-500/20 text-white/30 hover:text-green-400 transition-all flex items-center justify-center"
                    >
                      <Archive className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm("Delete permanently?"))
                          deleteTikTokVideo(video.id);
                      }}
                      className="w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/30 hover:text-red-400 transition-all flex items-center justify-center"
                    >
                      <Trash className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add TikTok links */}
          <AddButton
            label="Add TikTok link(s) to this carousel"
            onClick={() => {
              setAddEntries([emptyEntry()]);
              setAddMode(true);
            }}
          />
        </div>
      )}

      {/* Rename group modal */}
      {editGroupMode && (
        <Modal
          title={`Rename: ${group.title}`}
          onClose={() => setEditGroupMode(false)}
          onSave={handleSaveGroup}
        >
          <Field label="Carousel Name">
            <TextInput
              value={groupDraft.title}
              onChange={(v) => setGroupDraft({ ...groupDraft, title: v })}
              placeholder="Cookware"
            />
          </Field>
          <Field label="Subtitle">
            <TextInput
              value={groupDraft.sub}
              onChange={(v) => setGroupDraft({ ...groupDraft, sub: v })}
              placeholder="Pans, woks & skillets."
            />
          </Field>
        </Modal>
      )}

      {/* Add videos modal */}
      {addMode && (
        <Modal
          title={`Add TikTok videos → ${group.title}`}
          onClose={() => setAddMode(false)}
          onSave={handleAddVideos}
          saveLabel={`Add ${
            addEntries.filter((e) => e.tiktokUrl).length || ""
          } Video${
            addEntries.filter((e) => e.tiktokUrl).length !== 1 ? "s" : ""
          }`}
        >
          <p className="text-xs text-white/40 leading-relaxed">
            Paste one or more TikTok post URLs. Each link becomes a card in the{" "}
            <span className="text-white/70 font-semibold">{group.title}</span>{" "}
            carousel. Caption and Buy Now link are optional — you can fill them in
            later.
          </p>
          <VideoEntryList entries={addEntries} onChange={setAddEntries} />
        </Modal>
      )}

      {/* Edit video modal */}
      {editVideo && (
        <Modal
          title="Edit Video Card"
          onClose={() => setEditVideo(null)}
          onSave={handleSaveVideo}
        >
          <VideoEditForm data={editVideo} onChange={setEditVideo} />
        </Modal>
      )}
    </div>
  );
}
