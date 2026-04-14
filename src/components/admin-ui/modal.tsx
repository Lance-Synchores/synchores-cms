import { ReactNode } from "react";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  onSave?: () => void;
  saveLabel?: string;
  disabled?: boolean;
}

export function Modal({ title, onClose, children, onSave, saveLabel = "Save Changes", disabled = false }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-[#1c2333] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 sticky top-0 bg-[#1c2333] z-10">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-white/40 hover:text-white text-xl leading-none transition-colors">×</button>
        </div>
        <div className="p-6 space-y-5">{children}</div>
        {onSave && (
          <div className="px-6 py-4 border-t border-white/8 flex gap-3 sticky bottom-0 bg-[#1c2333]">
            <button
              onClick={disabled ? undefined : onSave}
              disabled={disabled}
              className="flex-1 bg-[#bf262f] hover:bg-[#9e1f27] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-2.5 rounded-xl transition-all text-sm"
            >
              {saveLabel}
            </button>
            <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/12 text-white/70 text-sm transition-all">Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
}