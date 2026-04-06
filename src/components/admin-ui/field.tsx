import { ImageWithFallback } from "../imageWithFallBack";
import {Eye, EyeSlash} from "@phosphor-icons/react";
import { ReactNode, useState } from "react";

interface FieldProps {
  label: string;
  hint?: string;
  children: ReactNode;
}

export function Field({ label, hint, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold text-white/50 uppercase tracking-widest">{label}</label>
      {hint && <p className="text-[11px] text-white/30 -mt-1">{hint}</p>}
      {children}
    </div>
  );
}

interface TextInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}

export function TextInput({ value, onChange, placeholder, className = "" }: TextInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full bg-white/5 border border-white/10 focus:border-[#bf262f]/60 focus:ring-2 focus:ring-[#bf262f]/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all ${className}`}
    />
  );
}

interface TextAreaProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}

export function TextArea({ value, onChange, placeholder, rows = 3 }: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-white/5 border border-white/10 focus:border-[#bf262f]/60 focus:ring-2 focus:ring-[#bf262f]/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition-all resize-none"
    />
  );
}

interface ImageFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}

export function ImageField({ label, value, onChange, hint }: ImageFieldProps) {
  const [showPreview, setShowPreview] = useState(false);
  return (
    <Field label={label} hint={hint}>
      <div className="space-y-2">
        <div className="flex gap-2">
          <TextInput value={value} onChange={onChange} placeholder="https://..." />
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="shrink-0 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
            title="Preview image"
          >
            {showPreview ? <EyeSlash className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {showPreview && value && (
          <div className="rounded-xl overflow-hidden aspect-video bg-white/5 border border-white/10">
            <ImageWithFallback src={value} alt="Preview" className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </Field>
  );
}