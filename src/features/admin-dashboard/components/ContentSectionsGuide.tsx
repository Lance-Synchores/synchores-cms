export function ContentSectionsGuide() {
  const sections = [
    ["Site Settings", "Shop URL, contact details, store hours"],
    ["Navbar", "Navigation links and shop button"],
    ["Hero", "Main headline, CTA buttons, hero image, hotspots"],
    ["Trust Bar", "Stats shown below the hero"],
    ["Categories", "Shop category cards — add, edit, archive"],
    ["Products", "Featured product cards — full CRUD"],
    ["Who We Are", "Brand story, stats, pillars, images"],
    ["Promos", "Promotion cards — add, edit, archive"],
    ["Why Choose Us", "Feature cards on dark section"],
    ["Contact Us", "Store address, phone, email, hours"],
    ["Final CTA", "Bottom call-to-action banner"],
    ["Footer", "Footer links and tagline"],
  ];

  return (
    <div className="bg-[#1c2333] border border-white/6 rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-white mb-4">Content Sections</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {sections.map(([name, desc]) => (
          <div key={name} className="flex gap-3 p-3 bg-white/3 rounded-xl">
            <div className="w-1.5 h-1.5 rounded-full bg-[#bf262f] mt-2 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">{name}</p>
              <p className="text-[11px] text-white/35 mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
