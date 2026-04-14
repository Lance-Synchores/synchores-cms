import { ReactNode } from "react";

export function Grid2({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>;
}

export function Divider() {
  return <div className="border-t border-white/6" />;
}