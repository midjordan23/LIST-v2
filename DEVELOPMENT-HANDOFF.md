# SetKit V2 - Development Handoff Document

## 🎯 Project Overview

**What This Is:** SetKit V2 is a Next.js 15 + TypeScript rebuild of SetKit V1 (vanilla JS cinema equipment database).

**Current Status:** Foundation complete, first page working, ready for full buildout.

**Goal:** Create a production-ready cinema equipment database with smart compatibility checking, user accounts, cloud storage, and modern UX.

---

## 📁 Project Structure

```
list-v2/
├── app/                      # Next.js App Router
│   ├── (app)/                # Main app routes
│   │   └── cameras/          # ✅ BUILT - Camera listing page
│   │       └── page.tsx
│   ├── page.tsx              # ✅ BUILT - Homepage
│   └── layout.tsx            # Root layout
│
├── components/               # React components
│   ├── ui/                   # shadcn/ui components
│   └── camera-card.tsx       # ✅ BUILT - Camera card component
│
├── lib/                      # Business logic
│   ├── compatibility/        # ✅ BUILT - Compatibility engine
│   │   ├── lens-compatibility.ts
│   │   ├── accessory-compatibility.ts
│   │   ├── package-validation.ts
│   │   └── index.ts
│   └── data/
│       └── sample-cameras.ts # ✅ BUILT - Sample data
│
├── types/                    # ✅ BUILT - TypeScript definitions
│   ├── camera.ts
│   ├── lens.ts
│   ├── accessory.ts
│   ├── compatibility.ts
│   ├── package.ts
│   └── index.ts
│
└── public/                   # Static assets
```

---

## ✅ What's Been Built

### 1. Foundation (100% Complete)
- ✅ Next.js 15 with TypeScript
- ✅ Tailwind CSS configured
- ✅ shadcn/ui installed
- ✅ Project folder structure
- ✅ Dev server running on port 3001

### 2. Dependencies Installed
```json
{
  "zustand": "^latest",              // State management
  "@supabase/supabase-js": "^latest", // Database client
  "react-hook-form": "^latest",       // Form handling
  "@hookform/resolvers": "^latest",
  "zod": "^latest",                   // Validation
  "@tanstack/react-table": "^latest"  // Data tables
}
```

### 3. TypeScript Types (100% Complete)
All types defined in `types/` folder:
- `Camera` - Camera interface with sensor modes, power, I/O
- `Lens` - Lens interface with mounts, focal length, specs
- `Accessory` - Accessory interface with categories
- `CompatibilityResult` - Compatibility check results
- `PackageItem`, `Template`, `Contact` - Package management

### 4. Compatibility Engine (100% Complete)
Migrated from V1 to TypeScript in `lib/compatibility/`:
- `checkLensCompatibility()` - Native/adapter/incompatible checking
- `checkAccessoryCompatibility()` - Matrix + category-based validation
- `validatePackage()` - Full package validation
- **All with full type safety**

### 5. First Page (100% Complete)
- ✅ Homepage with hero, features, navigation
- ✅ Cameras listing page at `/cameras`
- ✅ CameraCard component (reusable, styled)
- ✅ 5 sample cameras (ARRI, Sony, RED, Canon)

---

## 🗂️ V1 Reference (Original Project)

### Location
```
C:\Users\kaosr\Documents\trae_projects\Camera List\
```

### Key V1 Files to Reference
```
Camera List/
├── index.html                          # UI structure to recreate
├── app.js                              # Logic (already migrated to TypeScript)
├── styles.css                          # ⚠️ IMPORTANT - Styling to port
├── setkit-cameras-data-clean.json      # 50+ cameras to import
├── setkit-lenses-data-clean.json       # Lens data
├── setkit-accessories-*.json           # Accessory data
├── setkit-compatibility-matrix.csv     # Compatibility rules
└── Full Motion Picture Lens Database - *.csv  # 1500+ lenses
```

### V1 Features to Rebuild
From `index.html` and `app.js`:
1. **Tabs/Navigation** (Templates, Cameras, Lenses, Accessories, Recommendations, Compare, Your List)
2. **Search & Filters** (per category)
3. **Package Builder** (add items, manage quantities, notes)
4. **Templates System** (save/load equipment lists)
5. **Compatibility Validation** (real-time warnings/errors)
6. **Export Functionality** (download lists)
7. **Custom Items** (user-created equipment)
8. **Project Info** (dates, contacts)

---

## 🎨 V1 Styling to Recreate

### Color Palette (from V1 styles.css)
```css
Primary: #3b82f6 (blue)
Background: #f5f5f5 (light gray)
Cards: #ffffff (white)
Border: #e5e5e5 (light gray)
Text: #171717 (dark gray)
Accent: #737373 (medium gray)
Success: #10b981 (green)
Warning: #f59e0b (orange)
Error: #ef4444 (red)
```

### Key UI Components from V1
- **Sidebar navigation** (left side, vertical)
- **Tab content** (main area)
- **Card layouts** (equipment cards)
- **Modal dialogs** (template name, notes, custom items)
- **Mini cart** (slide-in from right)
- **Filter sections** (search inputs, dropdowns)
- **Package display** (item list with quantities, notes)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 📊 Data Migration Plan

### Phase 1: Import Camera Data
```typescript
// Source: Camera List/setkit-cameras-data-clean.json
// Contains: 50+ cameras with full specs
// Import to: lib/data/cameras.ts or Supabase

// Already have sample of 5 cameras in sample-cameras.ts
// Need to import all 50+ from V1
```

### Phase 2: Import Lens Data
```typescript
// Source: Camera List/Full Motion Picture Lens Database - *.csv (25 files)
// Contains: 1500+ cinema lenses
// Need to: Parse CSVs → TypeScript array → Supabase

// CSV structure:
// name, focal length, max aperture (T), close focus, image circle,
// front diameter, weight, length, original mount, iris blades, etc.
```

### Phase 3: Import Accessory Data
```typescript
// Source:
// - setkit-accessories-video-monitoring-clean.json
// - setkit-accessories-support-power-media-clean.json
// Contains: 100+ accessories across categories
```

### Phase 4: Import Compatibility Matrix
```typescript
// Source: setkit-compatibility-matrix.csv
// Format: camera_id, accessory_id, compatible, reason
// Used by: checkAccessoryCompatibility()
```

---

## 🔧 Next Development Steps

### Immediate (Next Session)

1. **Recreate V1 UI Structure**
   ```
   - Port sidebar navigation from V1
   - Create layout component with sidebar
   - Implement tab-based routing
   - Match V1 color scheme and styling
   ```

2. **Import All V1 Data**
   ```
   - Parse all lens CSVs
   - Import all cameras from JSON
   - Import all accessories
   - Import compatibility matrix
   ```

3. **Build Remaining Pages**
   ```
   - Lenses page (like cameras, but for lenses)
   - Accessories page (category tabs)
   - Templates page (grid of saved templates)
   - Package/Your List page (build equipment list)
   - Recommendations page
   - Compare page
   ```

### Short-term (This Week)

4. **Supabase Setup**
   ```
   - Create Supabase project
   - Design database schema
   - Migrate data from JSON/CSV to Supabase
   - Set up authentication
   ```

5. **Package Builder**
   ```
   - Add to package functionality
   - Real-time compatibility validation
   - Quantity management
   - Notes per item
   - Project info (dates, contacts)
   ```

6. **Search & Filters**
   ```
   - Global search (like V1)
   - Per-page filters (brand, mount, sensor, etc.)
   - Filter state management with Zustand
   ```

### Medium-term (Next 2 Weeks)

7. **Templates System**
   ```
   - Save current package as template
   - Load template into package
   - Template categories (single-cam, multi-cam, etc.)
   - Default templates (Sam's 16mm template)
   ```

8. **Export Functionality**
   ```
   - Export as PDF
   - Export as CSV
   - Include compatibility warnings in export
   ```

9. **User Accounts**
   ```
   - Supabase Auth integration
   - Login/signup pages
   - User-specific templates
   - Cloud-synced packages
   ```

---

## 🚀 How to Continue Development

### Starting a New Session

1. **Navigate to project**
   ```bash
   cd /c/Users/kaosr/Documents/trae_projects/list-v2
   ```

2. **Start dev server**
   ```bash
   npm run dev
   ```
   Opens on http://localhost:3001 (or 3000 if available)

3. **Check current status**
   ```bash
   git status
   git log --oneline -5
   ```

### Common Commands

```bash
# Install new dependency
npm install <package-name>

# Run type checker
npx tsc --noEmit

# Build for production
npm run build

# Commit changes
git add .
git commit -m "Description"
git push
```

### File Patterns to Follow

**Creating a new page:**
```typescript
// app/(app)/lenses/page.tsx
import { LensCard } from '@/components/lens-card';
import { sampleLenses } from '@/lib/data/sample-lenses';

export default function LensesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page content */}
    </div>
  );
}
```

**Creating a new component:**
```typescript
// components/lens-card.tsx
import { Lens } from '@/types';

interface LensCardProps {
  lens: Lens;
}

export function LensCard({ lens }: LensCardProps) {
  return (
    <div className="border rounded-lg p-6">
      {/* Component content */}
    </div>
  );
}
```

---

## 🐛 Known Issues & Gotchas

### Port Conflicts
- Dev server tries port 3000 first
- If 3000 is busy, uses 3001
- Old V1 server on port 8000 (Python http.server)

### Git Ownership
- If you get "dubious ownership" error:
  ```bash
  git config --global --add safe.directory C:/Users/kaosr/Documents/trae_projects/list-v2
  ```

### TypeScript Errors
- Always run `npm run dev` - it shows TypeScript errors in terminal
- Red squiggles in editor = TypeScript errors (fix before committing)
- Hover over errors for detailed explanations

### Tailwind Not Working
- If styles don't apply, check:
  1. Class names are correct (no typos)
  2. Dev server is running
  3. File is in `app/` or `components/` (Tailwind scans these)

---

## 📝 Code Conventions

### TypeScript
- All new files use `.ts` or `.tsx`
- Always define types/interfaces for props
- Export types from `types/` folder
- Use `import type` for type-only imports

### Components
- One component per file
- Named exports for components
- Props interface defined above component
- Use Tailwind for styling (no CSS modules)

### File Naming
- Components: `kebab-case.tsx` (e.g., `camera-card.tsx`)
- Types: `kebab-case.ts` (e.g., `camera.ts`)
- Pages: `page.tsx` (Next.js convention)
- Utils: `kebab-case.ts`

### Git Commits
- Format: `Action: Description`
- Examples:
  - `Add lens listing page with filters`
  - `Fix compatibility engine for PL mounts`
  - `Update camera data with new ARRI models`
- Include emoji footer:
  ```
  🤖 Generated with [Claude Code](https://claude.com/claude-code)

  Co-Authored-By: Claude <noreply@anthropic.com>
  ```

---

## 🔗 Important Links

- **GitHub Repository**: https://github.com/midjordan23/LIST-v2
- **V1 Repository**: https://github.com/midjordan23/SetKit
- **Next.js Docs**: https://nextjs.org/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com

---

## 📋 Quick Reference

### Import Aliases
```typescript
import { Camera } from '@/types';              // → types/camera.ts
import { checkLensCompatibility } from '@/lib/compatibility';  // → lib/compatibility/
import { CameraCard } from '@/components/camera-card';  // → components/
```

### shadcn/ui Components (Installed)
```bash
# To add a new component:
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# etc.
```

### Supabase (When Ready)
```typescript
// lib/db/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

---

## 🎯 Success Criteria

### MVP (Minimum Viable Product)
- [ ] All V1 pages rebuilt in Next.js
- [ ] All V1 data imported (cameras, lenses, accessories)
- [ ] Package builder working
- [ ] Compatibility validation working
- [ ] Templates save/load working
- [ ] Export functionality working
- [ ] Matches V1 feature parity

### V2 Enhancements (Beyond V1)
- [ ] User accounts & authentication
- [ ] Cloud-synced data (Supabase)
- [ ] SEO-optimized pages
- [ ] Mobile-responsive
- [ ] Better performance (lazy loading, code splitting)
- [ ] Shareable template links
- [ ] Real-time collaboration (future)

---

## 🆘 Troubleshooting

### "Module not found" errors
```bash
# Make sure dependencies are installed:
npm install

# Check import paths use @/ alias correctly
```

### TypeScript errors after adding types
```bash
# Restart TypeScript server in VS Code:
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

### Dev server not updating
```bash
# Kill and restart:
Ctrl+C (in terminal)
npm run dev
```

### Can't access V1 files
```bash
# V1 is at:
cd "C:\Users\kaosr\Documents\trae_projects\Camera List"

# V2 is at:
cd "C:\Users\kaosr\Documents\trae_projects\list-v2"
```

---

## 📞 Context for Next Agent

**User's Experience Level:** New to coding, learning as they go

**Key Decisions Made:**
- Next.js 15 (App Router, not Pages Router)
- TypeScript (strict mode, all files typed)
- Tailwind CSS (no CSS modules or Sass)
- Supabase for database (not Firebase)
- shadcn/ui for components (not Material UI or Chakra)
- Zustand for state (not Redux or Context API alone)

**User's Priorities:**
1. Feature parity with V1 (must match all V1 functionality)
2. Better UX than V1 (modern design, faster, more intuitive)
3. Type safety (TypeScript everywhere)
4. Production-ready (user accounts, SEO, performance)

**Communication Style:**
- User appreciates clear explanations
- Likes to see code working visually
- Wants to understand WHY, not just HOW
- Prefers step-by-step approach
- Values documentation

---

**Last Updated:** October 28, 2025
**Current Commit:** 96d0ba5
**Status:** Foundation complete, cameras page working, ready for full buildout
**Dev Server:** Running on http://localhost:3001
