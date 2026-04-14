import { ArrowSquareOut } from "@phosphor-icons/react";

interface WelcomeCardProps {
  siteName: string;
}

export function WelcomeCard({ siteName }: WelcomeCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#bf262f]/20 to-[#7a1219]/10 border border-[#bf262f]/20 rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white mb-1">Welcome back!</h2>
          <p className="text-white/50 text-sm">
            You're managing <span className="text-[#e8959b] font-semibold">{siteName}</span> — all content changes are saved automatically to your browser.
          </p>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 shrink-0 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all"
        >
          <ArrowSquareOut className="w-3.5 h-3.5" />
          View Site
        </a>
      </div>
    </div>
  );
}
