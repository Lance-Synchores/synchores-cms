import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Hotspot {
  id: string;
  x: string;
  y: string;
  title: string;
  desc: string;
}

export interface TrustItem {
  id: string;
  value: string;
  label: string;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  href: string;
  archived: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  original: string;
  image: string;
  badge: string;
  link: string;
  archived: boolean;
}

export interface WhoWeAreStat {
  id: string;
  value: string;
  label: string;
}

export interface WhoWeArePillar {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface Promo {
  id: string;
  badge: string;
  badgeColor: string;
  headline: string;
  sub: string;
  discount: string;
  condition: string;
  cta: string;
  image: string;
  tag: string;
  href: string;
  archived: boolean;
}

export interface WhyFeature {
  id: string;
  icon: string;
  title: string;
  desc: string;
  archived: boolean;
}

export interface StoreInfoItem {
  id: string;
  label: string;
  value: string;
  sub: string;
  icon: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

// ── TikTok ────────────────────────────────────────────────────────────────────

export interface TikTokVideo {
  id: string;
  thumbnail: string;
  tiktokUrl: string;
  buyLink: string;
  views: string;
  title: string;
  author: string;
  likes: string;
  comments: string;
  archived: boolean;
}

export interface VideoCarouselGroup {
  id: string;
  title: string;
  sub: string;
  archived: boolean;
  videos: TikTokVideo[];
}

export interface CMSData {
  siteSettings: {
    siteName: string;
    tagline: string;
    shopUrl: string;
    phone: string;
    email: string;
    address: string;
    storeHoursWeekday: string;
    storeHoursSunday: string;
  };
  navbar: {
    links: NavLink[];
    shopLinkText: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    subtitle: string;
    ctaPrimaryText: string;
    ctaPrimaryHref: string;
    ctaSecondaryText: string;
    ctaSecondaryHref: string;
    heroImage: string;
    videoCaption: string;
    videoViews: string;
    videoHandle: string;
    hotspots: Hotspot[];
  };
  trustBar: {
    items: TrustItem[];
  };
  categories: Category[];
  products: Product[];
  whoWeAre: {
    badge: string;
    headline1: string;
    headline2: string;
    story1: string;
    story2: string;
    stats: WhoWeAreStat[];
    pillars: WhoWeArePillar[];
    imageTall: string;
    imageTopRight: string;
    imageBottomRight: string;
    estYear: string;
  };
  promos: Promo[];
  promoStrip: {
    text: string;
    href: string;
  };
  whyChooseUs: {
    headline: string;
    subtitle: string;
    features: WhyFeature[];
  };
  contactUs: {
    headline1: string;
    headline2: string;
    subtitle: string;
    storeInfo: StoreInfoItem[];
    pickupNote: string;
  };
  finalCTA: {
    discountValue: string;
    discountLabel: string;
    discountCondition: string;
    discountConditionSub: string;
    headline: string;
    subtitle: string;
    ctaPrimaryText: string;
    ctaPrimaryHref: string;
    ctaSecondaryText: string;
    ctaSecondaryHref: string;
    trustItems: string[];
  };
  footer: {
    promoStrip: string;
    description: string;
    shopLinks: string[];
    supportLinks: string[];
    newsletterText: string;
  };
  tiktokSection: {
    headline: string;
    subtitle: string;
    carousels: VideoCarouselGroup[];
  };
}

// ─── Initial State ─────────────────────────────────────────────────────────────

const INITIAL_STATE: CMSData = {
  siteSettings: {
    siteName: "Omega Houseware",
    tagline: "Premium kitchenware for Filipino families.",
    shopUrl: "https://omegahouseware.com",
    phone: "+63 917 123 4567",
    email: "hello@omegahouseware.com",
    address: "123 Houseware Ave., Divisoria, Manila, Metro Manila",
    storeHoursWeekday: "Mon – Sat: 9:00 AM – 6:00 PM",
    storeHoursSunday: "Sunday: 10:00 AM – 4:00 PM",
  },
  navbar: {
    links: [
      { id: "n1", label: "About", href: "#about" },
      { id: "n2", label: "Collections", href: "#collections" },
      { id: "n3", label: "Promos", href: "#promos" },
      { id: "n4", label: "Community", href: "#community" },
      { id: "n5", label: "Contact", href: "#contact" },
    ],
    shopLinkText: "Shop",
  },
  hero: {
    badge: "Premium Kitchenware · Est. Philippines",
    headline1: "Master",
    headline2: "Your Kitchen.",
    subtitle: "Built for Filipino homes — where food is love and the kitchen is everything.",
    ctaPrimaryText: "Shop Collection",
    ctaPrimaryHref: "https://omegahouseware.com",
    ctaSecondaryText: "Watch Community",
    ctaSecondaryHref: "#community",
    heroImage: "https://images.unsplash.com/photo-1627662057514-f15bc58cc179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    videoCaption: "No oil needed? Testing Omega's Non-Stick! 🍳✨",
    videoViews: "2.1M views",
    videoHandle: "@omegahouseware",
    hotspots: [
      { id: "h1", x: "10%", y: "28%", title: "Cool-Touch Handle", desc: "Stays safe even at peak heat." },
      { id: "h2", x: "68%", y: "44%", title: "Ceramic Non-Stick", desc: "80% less oil. Healthier every meal." },
      { id: "h3", x: "34%", y: "80%", title: "Induction-Ready", desc: "Gas, electric, induction — all covered." },
    ],
  },
  trustBar: {
    items: [
      { id: "t1", value: "4.9★", label: "Avg. Rating" },
      { id: "t2", value: "200K+", label: "Orders Packed" },
      { id: "t3", value: "Lifetime", label: "Warranty" },
      { id: "t4", value: "Pick & Pack", label: "In-Store Service" },
    ],
  },
  categories: [
    { id: "cookware", label: "Cookware", image: "https://images.unsplash.com/photo-1591745952765-071aa8677b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", href: "https://omegahouseware.com", archived: false },
    { id: "glassware", label: "Glassware", image: "https://images.unsplash.com/photo-1745827213638-f06a8375a076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", href: "https://omegahouseware.com", archived: false },
    { id: "bakeware", label: "Bakeware", image: "https://images.unsplash.com/photo-1646940930570-35ffcaedfd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", href: "https://omegahouseware.com", archived: false },
    { id: "dinnerware", label: "Dinnerware", image: "https://images.unsplash.com/photo-1760594308930-06b631dd916b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", href: "https://omegahouseware.com", archived: false },
    { id: "flask", label: "Vacuum Flask", image: "https://images.unsplash.com/photo-1645633092556-368798e09857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", href: "https://omegahouseware.com", archived: false },
  ],
  products: [
    { id: "p1", name: "Prestige Non-Stick Pan 28cm", price: "₱899", original: "₱1,299", image: "https://images.unsplash.com/photo-1591745952765-071aa8677b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", badge: "Best Seller", link: "https://omegahouseware.com", archived: false },
    { id: "p2", name: "Double-Wall Glass Set (4 pcs)", price: "₱1,299", original: "₱1,699", image: "https://images.unsplash.com/photo-1745827213638-f06a8375a076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", badge: "Trending", link: "https://omegahouseware.com", archived: false },
    { id: "p3", name: "Pro Bakeware Set (3-piece)", price: "₱1,099", original: "₱1,499", image: "https://images.unsplash.com/photo-1646940930570-35ffcaedfd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", badge: "", link: "https://omegahouseware.com", archived: false },
    { id: "p4", name: "Classic Dinnerware Set 12 pcs", price: "₱2,499", original: "₱3,199", image: "https://images.unsplash.com/photo-1760594308930-06b631dd916b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", badge: "Best Value", link: "https://omegahouseware.com", archived: false },
    { id: "p5", name: "Insulated Vacuum Flask 1L", price: "₱699", original: "₱999", image: "https://images.unsplash.com/photo-1645633092556-368798e09857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", badge: "", link: "https://omegahouseware.com", archived: false },
    { id: "p6", name: "Stainless Wok 32cm", price: "₱1,199", original: "₱1,699", image: "https://images.unsplash.com/photo-1763218412758-1539a5cb9237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", badge: "Best Seller", link: "https://omegahouseware.com", archived: false },
  ],
  whoWeAre: {
    badge: "Our Story",
    headline1: "More than houseware.",
    headline2: "A Filipino staple.",
    story1: "Omega Houseware was founded on one simple belief: every Filipino kitchen deserves premium tools — not just those who can afford to import them. We source, test, and curate products that hold up through the busiest family kitchens, the fiercest ulam battles, and every holiday feast in between.",
    story2: "From our humble beginnings as a local houseware supplier to becoming one of the Philippines' most-loved kitchen brands, our mission has never changed: quality you can feel, at prices that make sense.",
    stats: [
      { id: "s1", value: "200K+", label: "Happy Families" },
      { id: "s2", value: "10+", label: "Years in Business" },
      { id: "s3", value: "500+", label: "Products" },
    ],
    pillars: [
      { id: "pi1", icon: "Heart", title: "Born Filipino", desc: "Crafted with the Filipino home in mind — from the daily lutong-bahay to weekend feasts." },
      { id: "pi2", icon: "Award", title: "Quality First", desc: "Every product passes rigorous food-grade certification and durability testing before it reaches your hands." },
      { id: "pi3", icon: "Users", title: "Community Driven", desc: "Over 200,000 Filipino families trust Omega. That community shapes every product we make." },
    ],
    imageTall: "https://images.unsplash.com/photo-1740727665746-cfe80ababc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    imageTopRight: "https://images.unsplash.com/photo-1756158452957-cb6807d37d27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    imageBottomRight: "https://images.unsplash.com/photo-1633536705119-bcc37bf6c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    estYear: "2013",
  },
  promos: [
    { id: "promo1", badge: "Bundle Deal", badgeColor: "#bf262f", headline: "Starter Kitchen Bundle", sub: "Everything you need to begin — one pan, one pot, one set.", discount: "25% OFF", condition: "Min. purchase ₱2,499", cta: "Get the Bundle", image: "https://images.unsplash.com/photo-1640246944356-91b0967a1711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", tag: "Most Popular", href: "https://omegahouseware.com", archived: false },
    { id: "promo2", badge: "Limited Offer", badgeColor: "#7a1219", headline: "Season's Best Picks", sub: "Curated selections updated every month — while stocks last.", discount: "Up to 30% OFF", condition: "Selected items only", cta: "See Picks", image: "https://images.unsplash.com/photo-1768839721483-c4501b5d6eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", tag: "This Month", href: "https://omegahouseware.com", archived: false },
    { id: "promo3", badge: "Loyalty Perk", badgeColor: "#111111", headline: "Refer a Friend & Save", sub: "Share your love of Omega — earn store credit on every referral.", discount: "₱200 Credit", condition: "Per successful referral", cta: "Learn More", image: "https://images.unsplash.com/photo-1633536705119-bcc37bf6c84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", tag: "Ongoing", href: "https://omegahouseware.com", archived: false },
  ],
  promoStrip: {
    text: "Visit our store and mention \"Online Promo\" for an additional 5% off at the counter.",
    href: "https://omegahouseware.com",
  },
  whyChooseUs: {
    headline: "Why Omega?",
    subtitle: "Premium quality, purposely built for the Filipino kitchen.",
    features: [
      { id: "wf1", icon: "Shield", title: "Lifetime Warranty", desc: "Every product, backed forever.", archived: false },
      { id: "wf2", icon: "FlameKindling", title: "All Stove Types", desc: "Induction, gas, electric — all covered.", archived: false },
      { id: "wf3", icon: "Zap", title: "Food-Grade Materials", desc: "Safe, certified, and built to endure.", archived: false },
      { id: "wf4", icon: "Store", title: "Pick & Pack Service", desc: "Order online or walk in — ready when you are.", archived: false },
    ],
  },
  contactUs: {
    headline1: "Visit us. Reach out.",
    headline2: "We'd love to help.",
    subtitle: "We operate on a pick-up and pack basis — no delivery. Swing by our store, browse the collection, and our team will prepare your order on the spot.",
    storeInfo: [
      { id: "si1", icon: "MapPin", label: "Store Address", value: "123 Houseware Ave., Divisoria, Manila, Metro Manila", sub: "Walk-in & Pick-up available" },
      { id: "si2", icon: "Phone", label: "Call / Viber", value: "+63 917 123 4567", sub: "Mon – Sat, 9AM – 6PM" },
      { id: "si3", icon: "Mail", label: "Email", value: "hello@omegahouseware.com", sub: "We reply within 24 hours" },
      { id: "si4", icon: "Clock", label: "Store Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM", sub: "Sunday: 10:00 AM – 4:00 PM" },
    ],
    pickupNote: "We currently operate as a pick-up and pack store. Place your order online or walk in — we'll have it ready for you.",
  },
  finalCTA: {
    discountValue: "30%",
    discountLabel: "OFF TODAY",
    discountCondition: "For all orders",
    discountConditionSub: "above ₱1,999",
    headline: "Ready to elevate your kitchen?",
    subtitle: "Shop premium cookware, glassware, and more — pick up in-store.",
    ctaPrimaryText: "Shop the Collection",
    ctaPrimaryHref: "https://omegahouseware.com",
    ctaSecondaryText: "View Best Sellers",
    ctaSecondaryHref: "https://omegahouseware.com",
    trustItems: ["Lifetime warranty", "Easy returns", "Pick & Pack in-store"],
  },
  footer: {
    promoStrip: "🛡 Lifetime warranty on all products · Pick & Pack in-store · Food-grade certified",
    description: "Premium kitchenware for Filipino families. Built to last, designed to impress.",
    shopLinks: ["Cookware", "Glassware", "Bakeware", "Dinnerware", "Vacuum Flask", "Best Sellers"],
    supportLinks: ["FAQ", "Warranty", "Promos & Deals", "Contact Us", "Pick-up Info"],
    newsletterText: "Exclusive deals, recipes, and trends — delivered to you.",
  },
  tiktokSection: {
    headline: "Watch & Shop",
    subtitle: "See our products in action — and get inspired!",
    carousels: [
      {
        id: "c1",
        title: "Cookware",
        sub: "Discover our premium cookware collection.",
        archived: false,
        videos: [
          {
            id: "v1",
            thumbnail: "https://images.unsplash.com/photo-1640246944356-91b0967a1711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
            tiktokUrl: "https://www.tiktok.com/@omegahouseware/video/7026490845840595457",
            buyLink: "https://omegahouseware.com",
            views: "2.1M views",
            title: "No oil needed? Testing Omega's Non-Stick! 🍳✨",
            author: "Omega Houseware",
            likes: "100K",
            comments: "500",
            archived: false,
          },
          {
            id: "v2",
            thumbnail: "https://images.unsplash.com/photo-1763218412758-1539a5cb9237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
            tiktokUrl: "https://www.tiktok.com/@omegahouseware/video/7026490845840595458",
            buyLink: "https://omegahouseware.com",
            views: "1.5M views",
            title: "Stainless Wok 32cm — Perfect for Stir-Fry! 🥘🔥",
            author: "Omega Houseware",
            likes: "80K",
            comments: "400",
            archived: false,
          },
        ],
      },
      {
        id: "c2",
        title: "Glassware",
        sub: "Enjoy your drinks in style with our glassware.",
        archived: false,
        videos: [
          {
            id: "v3",
            thumbnail: "https://images.unsplash.com/photo-1745827213638-f06a8375a076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
            tiktokUrl: "https://www.tiktok.com/@omegahouseware/video/7026490845840595459",
            buyLink: "https://omegahouseware.com",
            views: "1.8M views",
            title: "Double-Wall Glass Set (4 pcs) — Keep Your Drinks Cold! 🥤❄️",
            author: "Omega Houseware",
            likes: "90K",
            comments: "300",
            archived: false,
          },
        ],
      },
      {
        id: "c3",
        title: "Bakeware",
        sub: "Bake like a pro with our bakeware collection.",
        archived: false,
        videos: [
          {
            id: "v4",
            thumbnail: "https://images.unsplash.com/photo-1646940930570-35ffcaedfd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
            tiktokUrl: "https://www.tiktok.com/@omegahouseware/video/7026490845840595460",
            buyLink: "https://omegahouseware.com",
            views: "1.2M views",
            title: "Pro Bakeware Set (3-piece) — Perfect for Baking! 🍰oven",
            author: "Omega Houseware",
            likes: "70K",
            comments: "200",
            archived: false,
          },
        ],
      },
      {
        id: "c4",
        title: "Dinnerware",
        sub: "Dine in style with our dinnerware sets.",
        archived: false,
        videos: [
          {
            id: "v5",
            thumbnail: "https://images.unsplash.com/photo-1760594308930-06b631dd916b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
            tiktokUrl: "https://www.tiktok.com/@omegahouseware/video/7026490845840595461",
            buyLink: "https://omegahouseware.com",
            views: "1.3M views",
            title: "Classic Dinnerware Set 12 pcs — Perfect for Family Dinners! 🍽️",
            author: "Omega Houseware",
            likes: "60K",
            comments: "150",
            archived: false,
          },
        ],
      },
      {
        id: "c5",
        title: "Vacuum Flask",
        sub: "Stay hydrated with our vacuum flask collection.",
        archived: false,
        videos: [
          {
            id: "v6",
            thumbnail: "https://images.unsplash.com/photo-1645633092556-368798e09857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700",
            tiktokUrl: "https://www.tiktok.com/@omegahouseware/video/7026490845840595462",
            buyLink: "https://omegahouseware.com",
            views: "1.1M views",
            title: "Insulated Vacuum Flask 1L — Keep Your Drinks Hot! 🥤🔥",
            author: "Omega Houseware",
            likes: "50K",
            comments: "100",
            archived: false,
          },
        ],
      },
    ],
  },
};

// ─── Context ──────────────────────────────────────────────────────────────────

interface CMSContextValue {
  cms: CMSData;
  updateSiteSettings: (data: Partial<CMSData["siteSettings"]>) => void;
  updateNavbar: (data: Partial<CMSData["navbar"]>) => void;
  updateHero: (data: Partial<CMSData["hero"]>) => void;
  updateHotspot: (id: string, data: Partial<Hotspot>) => void;
  updateTrustItem: (id: string, data: Partial<TrustItem>) => void;
  // Categories
  addCategory: (cat: Omit<Category, "id" | "archived">) => void;
  updateCategory: (id: string, data: Partial<Category>) => void;
  archiveCategory: (id: string) => void;
  restoreCategory: (id: string) => void;
  deleteCategory: (id: string) => void;
  // Products
  addProduct: (product: Omit<Product, "id" | "archived">) => void;
  updateProduct: (id: string, data: Partial<Product>) => void;
  archiveProduct: (id: string) => void;
  restoreProduct: (id: string) => void;
  deleteProduct: (id: string) => void;
  // WhoWeAre
  updateWhoWeAre: (data: Partial<CMSData["whoWeAre"]>) => void;
  updateWhoWeAreStat: (id: string, data: Partial<WhoWeAreStat>) => void;
  updateWhoWeArePillar: (id: string, data: Partial<WhoWeArePillar>) => void;
  // Promos
  addPromo: (promo: Omit<Promo, "id" | "archived">) => void;
  updatePromo: (id: string, data: Partial<Promo>) => void;
  archivePromo: (id: string) => void;
  restorePromo: (id: string) => void;
  deletePromo: (id: string) => void;
  updatePromoStrip: (data: Partial<CMSData["promoStrip"]>) => void;
  // WhyChooseUs
  updateWhyChooseUs: (data: Partial<CMSData["whyChooseUs"]>) => void;
  addWhyFeature: (feature: Omit<WhyFeature, "id" | "archived">) => void;
  updateWhyFeature: (id: string, data: Partial<WhyFeature>) => void;
  archiveWhyFeature: (id: string) => void;
  restoreWhyFeature: (id: string) => void;
  deleteWhyFeature: (id: string) => void;
  // Contact
  updateContactUs: (data: Partial<CMSData["contactUs"]>) => void;
  updateStoreInfoItem: (id: string, data: Partial<StoreInfoItem>) => void;
  // FinalCTA
  updateFinalCTA: (data: Partial<CMSData["finalCTA"]>) => void;
  // Footer
  updateFooter: (data: Partial<CMSData["footer"]>) => void;
  // Navbar links
  addNavLink: (link: Omit<NavLink, "id">) => void;
  updateNavLink: (id: string, data: Partial<NavLink>) => void;
  deleteNavLink: (id: string) => void;
  // TikTok
  addVideoCarouselGroup: (group: Omit<VideoCarouselGroup, "id" | "archived">) => void;
  updateVideoCarouselGroup: (id: string, data: Partial<VideoCarouselGroup>) => void;
  archiveVideoCarouselGroup: (id: string) => void;
  restoreVideoCarouselGroup: (id: string) => void;
  deleteVideoCarouselGroup: (id: string) => void;
  addVideoToCarousel: (carouselId: string, video: Omit<TikTokVideo, "id" | "archived">) => void;
  updateTikTokVideo: (id: string, data: Partial<TikTokVideo>) => void;
  archiveTikTokVideo: (id: string) => void;
  restoreTikTokVideo: (id: string) => void;
  deleteTikTokVideo: (id: string) => void;
  // Reset
  resetToDefaults: () => void;
  lastSaved: Date | null;
}

const CMSContext = createContext<CMSContextValue | null>(null);

const STORAGE_KEY = "omega_cms_data";

function loadFromStorage(): CMSData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATE;
    return { ...INITIAL_STATE, ...JSON.parse(raw) };
  } catch {
    return INITIAL_STATE;
  }
}

function saveToStorage(data: CMSData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    console.warn("Failed to save CMS data to localStorage");
  }
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CMSProvider({ children }: { children: ReactNode }) {
  const [cms, setCMS] = useState<CMSData>(loadFromStorage);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const save = useCallback((updater: (prev: CMSData) => CMSData) => {
    setCMS((prev) => {
      const next = updater(prev);
      saveToStorage(next);
      setLastSaved(new Date());
      return next;
    });
  }, []);

  // Site settings
  const updateSiteSettings = useCallback((data: Partial<CMSData["siteSettings"]>) => {
    save((prev) => ({ ...prev, siteSettings: { ...prev.siteSettings, ...data } }));
  }, [save]);

  // Navbar
  const updateNavbar = useCallback((data: Partial<CMSData["navbar"]>) => {
    save((prev) => ({ ...prev, navbar: { ...prev.navbar, ...data } }));
  }, [save]);

  const addNavLink = useCallback((link: Omit<NavLink, "id">) => {
    save((prev) => ({ ...prev, navbar: { ...prev.navbar, links: [...prev.navbar.links, { ...link, id: uuidv4() }] } }));
  }, [save]);

  const updateNavLink = useCallback((id: string, data: Partial<NavLink>) => {
    save((prev) => ({ ...prev, navbar: { ...prev.navbar, links: prev.navbar.links.map((l) => l.id === id ? { ...l, ...data } : l) } }));
  }, [save]);

  const deleteNavLink = useCallback((id: string) => {
    save((prev) => ({ ...prev, navbar: { ...prev.navbar, links: prev.navbar.links.filter((l) => l.id !== id) } }));
  }, [save]);

  // Hero
  const updateHero = useCallback((data: Partial<CMSData["hero"]>) => {
    save((prev) => ({ ...prev, hero: { ...prev.hero, ...data } }));
  }, [save]);

  const updateHotspot = useCallback((id: string, data: Partial<Hotspot>) => {
    save((prev) => ({ ...prev, hero: { ...prev.hero, hotspots: prev.hero.hotspots.map((h) => h.id === id ? { ...h, ...data } : h) } }));
  }, [save]);

  // TrustBar
  const updateTrustItem = useCallback((id: string, data: Partial<TrustItem>) => {
    save((prev) => ({ ...prev, trustBar: { items: prev.trustBar.items.map((t) => t.id === id ? { ...t, ...data } : t) } }));
  }, [save]);

  // Categories
  const addCategory = useCallback((cat: Omit<Category, "id" | "archived">) => {
    save((prev) => ({ ...prev, categories: [...prev.categories, { ...cat, id: uuidv4(), archived: false }] }));
  }, [save]);

  const updateCategory = useCallback((id: string, data: Partial<Category>) => {
    save((prev) => ({ ...prev, categories: prev.categories.map((c) => c.id === id ? { ...c, ...data } : c) }));
  }, [save]);

  const archiveCategory = useCallback((id: string) => updateCategory(id, { archived: true }), [updateCategory]);
  const restoreCategory = useCallback((id: string) => updateCategory(id, { archived: false }), [updateCategory]);

  const deleteCategory = useCallback((id: string) => {
    save((prev) => ({ ...prev, categories: prev.categories.filter((c) => c.id !== id) }));
  }, [save]);

  // Products
  const addProduct = useCallback((product: Omit<Product, "id" | "archived">) => {
    save((prev) => ({ ...prev, products: [...prev.products, { ...product, id: uuidv4(), archived: false }] }));
  }, [save]);

  const updateProduct = useCallback((id: string, data: Partial<Product>) => {
    save((prev) => ({ ...prev, products: prev.products.map((p) => p.id === id ? { ...p, ...data } : p) }));
  }, [save]);

  const archiveProduct = useCallback((id: string) => updateProduct(id, { archived: true }), [updateProduct]);
  const restoreProduct = useCallback((id: string) => updateProduct(id, { archived: false }), [updateProduct]);

  const deleteProduct = useCallback((id: string) => {
    save((prev) => ({ ...prev, products: prev.products.filter((p) => p.id !== id) }));
  }, [save]);

  // WhoWeAre
  const updateWhoWeAre = useCallback((data: Partial<CMSData["whoWeAre"]>) => {
    save((prev) => ({ ...prev, whoWeAre: { ...prev.whoWeAre, ...data } }));
  }, [save]);

  const updateWhoWeAreStat = useCallback((id: string, data: Partial<WhoWeAreStat>) => {
    save((prev) => ({ ...prev, whoWeAre: { ...prev.whoWeAre, stats: prev.whoWeAre.stats.map((s) => s.id === id ? { ...s, ...data } : s) } }));
  }, [save]);

  const updateWhoWeArePillar = useCallback((id: string, data: Partial<WhoWeArePillar>) => {
    save((prev) => ({ ...prev, whoWeAre: { ...prev.whoWeAre, pillars: prev.whoWeAre.pillars.map((p) => p.id === id ? { ...p, ...data } : p) } }));
  }, [save]);

  // Promos
  const addPromo = useCallback((promo: Omit<Promo, "id" | "archived">) => {
    save((prev) => ({ ...prev, promos: [...prev.promos, { ...promo, id: uuidv4(), archived: false }] }));
  }, [save]);

  const updatePromo = useCallback((id: string, data: Partial<Promo>) => {
    save((prev) => ({ ...prev, promos: prev.promos.map((p) => p.id === id ? { ...p, ...data } : p) }));
  }, [save]);

  const archivePromo = useCallback((id: string) => updatePromo(id, { archived: true }), [updatePromo]);
  const restorePromo = useCallback((id: string) => updatePromo(id, { archived: false }), [updatePromo]);

  const deletePromo = useCallback((id: string) => {
    save((prev) => ({ ...prev, promos: prev.promos.filter((p) => p.id !== id) }));
  }, [save]);

  const updatePromoStrip = useCallback((data: Partial<CMSData["promoStrip"]>) => {
    save((prev) => ({ ...prev, promoStrip: { ...prev.promoStrip, ...data } }));
  }, [save]);

  // WhyChooseUs
  const updateWhyChooseUs = useCallback((data: Partial<CMSData["whyChooseUs"]>) => {
    save((prev) => ({ ...prev, whyChooseUs: { ...prev.whyChooseUs, ...data } }));
  }, [save]);

  const addWhyFeature = useCallback((feature: Omit<WhyFeature, "id" | "archived">) => {
    save((prev) => ({ ...prev, whyChooseUs: { ...prev.whyChooseUs, features: [...prev.whyChooseUs.features, { ...feature, id: uuidv4(), archived: false }] } }));
  }, [save]);

  const updateWhyFeature = useCallback((id: string, data: Partial<WhyFeature>) => {
    save((prev) => ({ ...prev, whyChooseUs: { ...prev.whyChooseUs, features: prev.whyChooseUs.features.map((f) => f.id === id ? { ...f, ...data } : f) } }));
  }, [save]);

  const archiveWhyFeature = useCallback((id: string) => updateWhyFeature(id, { archived: true }), [updateWhyFeature]);
  const restoreWhyFeature = useCallback((id: string) => updateWhyFeature(id, { archived: false }), [updateWhyFeature]);

  const deleteWhyFeature = useCallback((id: string) => {
    save((prev) => ({ ...prev, whyChooseUs: { ...prev.whyChooseUs, features: prev.whyChooseUs.features.filter((f) => f.id !== id) } }));
  }, [save]);

  // ContactUs
  const updateContactUs = useCallback((data: Partial<CMSData["contactUs"]>) => {
    save((prev) => ({ ...prev, contactUs: { ...prev.contactUs, ...data } }));
  }, [save]);

  const updateStoreInfoItem = useCallback((id: string, data: Partial<StoreInfoItem>) => {
    save((prev) => ({ ...prev, contactUs: { ...prev.contactUs, storeInfo: prev.contactUs.storeInfo.map((s) => s.id === id ? { ...s, ...data } : s) } }));
  }, [save]);

  // FinalCTA
  const updateFinalCTA = useCallback((data: Partial<CMSData["finalCTA"]>) => {
    save((prev) => ({ ...prev, finalCTA: { ...prev.finalCTA, ...data } }));
  }, [save]);

  // Footer
  const updateFooter = useCallback((data: Partial<CMSData["footer"]>) => {
    save((prev) => ({ ...prev, footer: { ...prev.footer, ...data } }));
  }, [save]);

  // TikTok
  const addVideoCarouselGroup = useCallback((group: Omit<VideoCarouselGroup, "id" | "archived">) => {
    save((prev) => ({ ...prev, tiktokSection: { ...prev.tiktokSection, carousels: [...prev.tiktokSection.carousels, { ...group, id: uuidv4(), archived: false }] } }));
  }, [save]);

  const updateVideoCarouselGroup = useCallback((id: string, data: Partial<VideoCarouselGroup>) => {
    save((prev) => ({ ...prev, tiktokSection: { ...prev.tiktokSection, carousels: prev.tiktokSection.carousels.map((g) => g.id === id ? { ...g, ...data } : g) } }));
  }, [save]);

  const archiveVideoCarouselGroup = useCallback((id: string) => updateVideoCarouselGroup(id, { archived: true }), [updateVideoCarouselGroup]);
  const restoreVideoCarouselGroup = useCallback((id: string) => updateVideoCarouselGroup(id, { archived: false }), [updateVideoCarouselGroup]);

  const deleteVideoCarouselGroup = useCallback((id: string) => {
    save((prev) => ({ ...prev, tiktokSection: { ...prev.tiktokSection, carousels: prev.tiktokSection.carousels.filter((g) => g.id !== id) } }));
  }, [save]);

  // Add a video to a SPECIFIC carousel (fixed — was incorrectly adding to all carousels)
  const addVideoToCarousel = useCallback((carouselId: string, video: Omit<TikTokVideo, "id" | "archived">) => {
    save((prev) => ({
      ...prev,
      tiktokSection: {
        ...prev.tiktokSection,
        carousels: prev.tiktokSection.carousels.map((g) =>
          g.id === carouselId
            ? { ...g, videos: [...g.videos, { ...video, id: uuidv4(), archived: false }] }
            : g
        ),
      },
    }));
  }, [save]);

  const updateTikTokVideo = useCallback((id: string, data: Partial<TikTokVideo>) => {
    save((prev) => ({ ...prev, tiktokSection: { ...prev.tiktokSection, carousels: prev.tiktokSection.carousels.map((g) => ({ ...g, videos: g.videos.map((v) => v.id === id ? { ...v, ...data } : v) })) } }));
  }, [save]);

  const archiveTikTokVideo = useCallback((id: string) => updateTikTokVideo(id, { archived: true }), [updateTikTokVideo]);
  const restoreTikTokVideo = useCallback((id: string) => updateTikTokVideo(id, { archived: false }), [updateTikTokVideo]);

  const deleteTikTokVideo = useCallback((id: string) => {
    save((prev) => ({ ...prev, tiktokSection: { ...prev.tiktokSection, carousels: prev.tiktokSection.carousels.map((g) => ({ ...g, videos: g.videos.filter((v) => v.id !== id) })) } }));
  }, [save]);

  // Reset
  const resetToDefaults = useCallback(() => {
    saveToStorage(INITIAL_STATE);
    setCMS(INITIAL_STATE);
    setLastSaved(new Date());
  }, []);

  return (
    <CMSContext.Provider value={{
      cms, lastSaved,
      updateSiteSettings, updateNavbar, addNavLink, updateNavLink, deleteNavLink,
      updateHero, updateHotspot, updateTrustItem,
      addCategory, updateCategory, archiveCategory, restoreCategory, deleteCategory,
      addProduct, updateProduct, archiveProduct, restoreProduct, deleteProduct,
      updateWhoWeAre, updateWhoWeAreStat, updateWhoWeArePillar,
      addPromo, updatePromo, archivePromo, restorePromo, deletePromo, updatePromoStrip,
      updateWhyChooseUs, addWhyFeature, updateWhyFeature, archiveWhyFeature, restoreWhyFeature, deleteWhyFeature,
      updateContactUs, updateStoreInfoItem,
      updateFinalCTA, updateFooter,
      addVideoCarouselGroup, updateVideoCarouselGroup, archiveVideoCarouselGroup, restoreVideoCarouselGroup, deleteVideoCarouselGroup,
      addVideoToCarousel, updateTikTokVideo, archiveTikTokVideo, restoreTikTokVideo, deleteTikTokVideo,
      resetToDefaults,
    }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS(): CMSContextValue {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be used inside CMSProvider");
  return ctx;
}