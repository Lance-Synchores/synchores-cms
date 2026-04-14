# Admin Feature Module

The admin dashboard is now organized as a feature module within `/src/features/admin/`.

## Structure

```
features/admin/
├── index.ts                    # Main exports
├── admin-config.ts             # Constants & configuration
├── admin-registry.ts           # Section component mapping
├── components/
│   ├── LoginScreen.tsx         # Login form component
│   ├── AdminShell.tsx          # Main layout orchestrator
│   ├── AdminSidebar.tsx        # Sidebar navigation
│   ├── AdminNavItem.tsx        # Individual nav item
│   └── SaveBadge.tsx           # Save status indicator
├── hooks/
│   └── useAdminAuth.ts         # Authentication logic
└── sections/
    └── [Create section components here]
```

## Quick Start

### Add a New Section

1. Create the section component in `sections/`:
```tsx
// sections/MySection.tsx
export function MySection() {
  return <div>My Section</div>;
}
```

2. Update `admin-registry.ts`:
```tsx
export const SECTION_REGISTRY: Record<string, SectionComponentType> = {
  // ...
  "my-section": MySection,
};
```

3. Add to `admin-config.ts`:
```tsx
export const NAV_ITEMS: NavItem[] = [
  // ...
  { id: "my-section", label: "My Section", icon: SomeIcon, group: "Page Sections" },
];

export const SECTION_TITLES: Record<string, string> = {
  // ...
  "my-section": "My Section Title",
};
```

## Imports

All admin features are exported from `@/features/admin`:

```tsx
import {
  LoginScreen,
  AdminShell,
  AdminSidebar,
  AdminNavItem,
  SaveBadge,
  useAdminAuth,
  ADMIN_PASSWORD,
  NAV_ITEMS,
  getSectionComponent,
} from "@/features/admin";
```

## Usage in Page

```tsx
"use client";

import { LoginScreen, AdminShell, useAdminAuth } from "@/features/admin";
import { useCMS } from "../cms/CMSContext";

export default function AdminPage() {
  const { authenticated, handleLogin, handleLogout } = useAdminAuth();
  const { cms, lastSaved } = useCMS();

  if (!authenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <AdminShell onLogout={handleLogout} cms={cms} lastSaved={lastSaved} />;
}
```

## Dependencies

- **useCMS**: Expects a `useCMS` hook that provides:
  ```tsx
  {
    cms: { siteSettings: { siteName: string } },
    lastSaved: Date | null
  }
  ```

## Customization

### Password
Change the admin password in `admin-config.ts`:
```tsx
export const ADMIN_PASSWORD = "your-new-password";
```

### Colors & Styling
Update Tailwind classes in individual components:
- Primary color: `#bf262f` (red)
- Secondary: `#e8959b` (pink)
- Background: `#0d1117` (dark)

### Navigation Groups
Organize navs into groups in `admin-config.ts`:
```tsx
{ id: "item", label: "Item", icon: Icon, group: "Group Name" }
```

Ungrouped items use `group: null` (like Dashboard).
