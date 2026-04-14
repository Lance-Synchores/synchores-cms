"use client";

import { useState } from "react";
import { List, Link } from "@phosphor-icons/react";
import { SECTION_TITLES } from "../admin-config";
import { getSectionComponent } from "../admin-registry";
import { AdminSidebar } from "./AdminSidebar";
import { SaveBadge } from "./SaveBadge";

// TODO: Import CMSContext from your CMS implementation
// import { useCMS } from "@/path/to/CMSContext";

interface AdminShellProps {
  onLogout: () => void;
  cms?: any; // Replace with actual CMS type
  lastSaved?: Date | null;
}

export function AdminShell({ onLogout, cms, lastSaved }: AdminShellProps) {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SectionComponent = getSectionComponent(activeSection);
  const sectionTitle = SECTION_TITLES[activeSection] || "Section";
  const siteName = cms?.siteSettings?.siteName || "Site";

  return (
    <div className="min-h-screen bg-[#0d1117] flex" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 bg-[#161b22] border-r border-white/6 fixed inset-y-0 left-0 z-30">
        <AdminSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={onLogout}
          lastSaved={lastSaved}
        />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-64 bg-[#161b22] border-r border-white/6 flex flex-col">
            <AdminSidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              onLogout={onLogout}
              lastSaved={lastSaved}
              onCloseMobile={() => setSidebarOpen(false)}
            />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-60 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-[#0d1117]/95 backdrop-blur-xl border-b border-white/6 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:text-white transition-colors"
            >
              <List className="w-4 h-4" />
            </button>
            <div>
              <h1 className="text-sm font-semibold text-white">{sectionTitle}</h1>
              <p className="text-[11px] text-white/30 hidden sm:block">
                {siteName} · Content Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <SaveBadge lastSaved={lastSaved} />
            </div>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-white/8 hover:bg-white/12 text-white/70 hover:text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all"
            >
              <Link className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Site</span>
            </a>
          </div>
        </header>

        {/* Section Content */}
        <main className="flex-1 px-4 sm:px-6 py-6 max-w-4xl mx-auto w-full">
          {SectionComponent ? <SectionComponent /> : <div>Section not found</div>}
        </main>
      </div>
    </div>
  );
}
