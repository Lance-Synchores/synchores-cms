"use client";

import { useState } from "react";
import { List } from "@phosphor-icons/react";
import { SectionCard } from "@/components/admin-ui/section-card";
import { Field, TextInput } from "@/components/admin-ui/field";
import { ListRow } from "@/components/admin-ui/list-item";
import { Modal } from "@/components/admin-ui/modal";
import { AddButton } from "@/components/admin-ui/add-butt";

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

interface NavLinksCardProps {
  links: NavLink[];
  onAddLink: (link: Omit<NavLink, "id">) => void;
  onUpdateLink: (id: string, data: { label: string; href: string }) => void;
  onDeleteLink: (id: string) => void;
}

export function NavLinksCard({
  links,
  onAddLink,
  onUpdateLink,
  onDeleteLink,
}: NavLinksCardProps) {
  const [editLink, setEditLink] = useState<NavLink | null>(null);
  const [addMode, setAddMode] = useState(false);
  const [newLink, setNewLink] = useState({ label: "", href: "" });

  const handleSaveEdit = () => {
    if (!editLink || !editLink.label || !editLink.href) return;
    onUpdateLink(editLink.id, { label: editLink.label, href: editLink.href });
    setEditLink(null);
  };

  const handleAdd = () => {
    if (!newLink.label || !newLink.href) return;
    onAddLink(newLink);
    setNewLink({ label: "", href: "" });
    setAddMode(false);
  };

  return (
    <>
      <SectionCard
        title="Navigation Links"
        icon={<List className="w-4 h-4" />}
        subtitle="Shown in the top navbar"
      >
        <div className="space-y-2">
          {links.map((link) => (
            <ListRow
              key={link.id}
              label={link.label}
              sublabel={link.href}
              onEdit={() => setEditLink({ ...link })}
              onDelete={() => {
                if (confirm(`Delete "${link.label}"?`)) onDeleteLink(link.id);
              }}
            />
          ))}
          <AddButton label="Add Nav Link" onClick={() => setAddMode(true)} />
        </div>
      </SectionCard>

      {/* Edit Modal */}
      {editLink && (
        <Modal
          title="Edit Nav Link"
          onClose={() => setEditLink(null)}
          onSave={handleSaveEdit}
        >
          <Field label="Label">
            <TextInput
              value={editLink.label}
              onChange={(v) => setEditLink({ ...editLink, label: v })}
              placeholder="About"
            />
          </Field>
          <Field label="Link / Anchor">
            <TextInput
              value={editLink.href}
              onChange={(v) => setEditLink({ ...editLink, href: v })}
              placeholder="#about or https://..."
            />
          </Field>
        </Modal>
      )}

      {/* Add Modal */}
      {addMode && (
        <Modal
          title="Add Nav Link"
          onClose={() => setAddMode(false)}
          onSave={handleAdd}
          saveLabel="Add Link"
        >
          <Field label="Label">
            <TextInput
              value={newLink.label}
              onChange={(v) => setNewLink({ ...newLink, label: v })}
              placeholder="About"
            />
          </Field>
          <Field label="Link / Anchor">
            <TextInput
              value={newLink.href}
              onChange={(v) => setNewLink({ ...newLink, href: v })}
              placeholder="#about or https://..."
            />
          </Field>
        </Modal>
      )}
    </>
  );
}
