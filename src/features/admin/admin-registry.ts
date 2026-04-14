// Import sections from features/admin-dashboard, features/site-settings, features/navigation, features/hero-section, and features/categories-section
// Create these section components as needed
import React, { ComponentType } from "react";
import { DashboardSection } from "../admin-dashboard";
import { SiteSettingsSection } from "../site-settings";
import { NavbarSection } from "../navigation";
import { HeroSection } from "../hero-section";
import { CategoriesSection } from "../categories-section";
import { ProductsSection } from "../products-section";
import { WhoWeAreSection } from "../who-we-are-section";
import { PromosSection } from "../promo-section";
import { TikTokSection } from "../tiktok-section";
import { WhyChooseUsSection } from "../why-us-section";
import { ContactSection } from "../contact-section";
import { FinalCTASection } from "../final-cta-section";

export type SectionComponentType = ComponentType<{}>;

// TODO: Create section components and uncomment imports as they are implemented
// import { ProductsSection } from "../sections/ProductsSection";
// import { WhoWeAreSection } from "../sections/WhoWeAreSection";
// import { PromosSection } from "../sections/PromosSection";
// import { WhyChooseUsSection } from "../sections/WhyChooseUsSection";
// import { ContactSection } from "../sections/ContactSection";
// import { FinalCTASection } from "../sections/FinalCTASection";
// import { TikTokSection } from "../sections/TikTokSection";

// TODO: Lazy load section components to reduce bundle size (implement after components are created)
// const sectionComponents = {
//   ProductsSection: () => import("../sections/ProductsSection").then(m => m.ProductsSection),
//   WhoWeAreSection: () => import("../sections/WhoWeAreSection").then(m => m.WhoWeAreSection),
//   PromosSection: () => import("../sections/PromosSection").then(m => m.PromosSection),
//   WhyChooseUsSection: () => import("../sections/WhyChooseUsSection").then(m => m.WhyChooseUsSection),
//   ContactSection: () => import("../sections/ContactSection").then(m => m.ContactSection),
//   FinalCTASection: () => import("../sections/FinalCTASection").then(m => m.FinalCTASection),
//   TikTokSection: () => import("../sections/TikTokSection").then(m => m.TikTokSection),
// };

// For now, map to placeholder components until sections are created
const PLACEHOLDER: SectionComponentType = () => React.createElement("div", null, "Section not implemented");

export const SECTION_REGISTRY: Record<string, SectionComponentType> = {
  dashboard: DashboardSection,
  "site-settings": SiteSettingsSection,
  navbar: NavbarSection,
  hero: HeroSection,
  categories: CategoriesSection,
  products: ProductsSection,
  "who-we-are": WhoWeAreSection,
  promos: PromosSection,
  tiktok: TikTokSection,
  "why-choose-us": WhyChooseUsSection,
  contact: ContactSection,
  "final-cta": FinalCTASection,
};

/**
 * Get a section component by ID
 * Returns null if section not found
 */
export function getSectionComponent(sectionId: string): SectionComponentType | null {
  return SECTION_REGISTRY[sectionId] || null;
}
