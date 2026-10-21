# Huy Dang - Video Editor & Creative Portfolio

A high-performance, dark-aesthetic portfolio website for video editing, football edits, AI creation, and cinematic visuals. Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Run static type checking
npm run typecheck

# Run linter (Oxlint)
npm run lint

# Build production bundle
npm run build
```

---

## 📁 Architecture & Directory Structure

```
├── public/                 # Static assets (images, hero visual, skills visuals)
│   ├── hero-card.png       # 1:1 square featured showreel card image
│   ├── skills/             # High-resolution skills visuals
│   └── videos/             # Optional local video files
├── src/
│   ├── assets/             # Brand SVGs and icons
│   ├── components/
│   │   ├── icons/          # Custom vector icons (Instagram, YouTube, etc.)
│   │   ├── layout/         # Persistent chrome (Navbar with scroll dynamics, Footer)
│   │   ├── sections/       # Primary page sections
│   │   │   ├── HeroSection.tsx       # Main header with typography & 1:1 showreel card
│   │   │   ├── ProjectsGallery.tsx   # Portfolio grid with category filters
│   │   │   ├── ProjectCard.tsx       # 9:16 vertical & 16:9 horizontal card engine
│   │   │   ├── SkillsSection.tsx     # Specialized services & capabilities showcase
│   │   │   ├── AboutSection.tsx      # Personal bio, on-set photography & credentials
│   │   │   ├── ContactSection.tsx    # Direct email CTA & social media buttons
│   │   │   └── VideoPreviewModal.tsx # Fullscreen video player modal
│   │   └── ui/             # Reusable UI primitives (Button, Badge, Modal, SectionHeader)
│   ├── constants/
│   │   └── siteConfig.ts   # Global configuration (name, bio, navigation, social URLs, email)
│   ├── data/
│   │   ├── projectsData.ts # Master portfolio project registry
│   │   └── skillsData.ts   # Skills section content registry
│   ├── hooks/
│   │   └── useProjectFilter.ts # Filter state & category grouping logic
│   ├── types/
│   │   ├── project.ts      # TypeScript interfaces for projects and platforms
│   │   └── skill.ts        # TypeScript interface for skills cards
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Global Tailwind v4 styles, radar animations & GPU compositing
│   └── main.tsx            # React application entry point
```

---

## 🛠️ Extending the Portfolio

### 1. Adding a New Project (`src/data/projectsData.ts`)

Each project in `PROJECTS_DATA` follows the `Project` interface from `src/types/project.ts`:

```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  client: 'Client or Brand Name',
  category: 'Football Edits', // See ProjectCategory for supported options
  platform: 'Instagram',       // 'TikTok' | 'Instagram' | 'YouTube'
  views: '2.4M',               // Optional: Displayed bottom-left on card
  year: '2025',
  duration: '00:45',           // Duration formatted as MM:SS
  thumbnail: 'https://...',    // High-res image URL or local /path
  externalUrl: 'https://...',  // Direct link to TikTok, Instagram, or YouTube
  description: 'Short editorial synopsis of the project...',
}
```

#### Card Layout Rules:
- **Vertical Cards (9:16)**: Used automatically for `Football Edits` and `Short-Form Content`. Sized at `lg:col-span-3` (maximum 4 cards per row).
- **Horizontal Cards (16:9)**: Used for `AI Video Creation`, `Cinematic Videos`, and `VFX & Experiments`. Sized at `lg:col-span-4` (maximum 3 cards per row).
- **The "All" Category**: Uses an alternating rhythm across a 12-column CSS Grid.

---

### 2. Adding a New Skill (`src/data/skillsData.ts`)

Append a new object to `SKILLS_DATA`:

```typescript
{
  id: 'short-form-repurposing',
  title: 'Short-Form Repurposing',
  description: 'Detailed description of the service...',
  image: '/skills/your-visual.png',
  imageAlt: 'Visual description',
  // Optional button:
  ctaText: 'Book Edit',
  ctaHref: '#contact',
}
```

---

### 3. Updating Profile Information (`src/constants/siteConfig.ts`)

All personal details, contact email, social media links, and navigation items are centralized in `SITE_CONFIG`:
- `email`: Controls both the visual button and `mailto:` link across the site.
- `socials`: Controls direct profile links in the contact section and navigation.

---

## 🎨 Design System & Code Conventions

1. **Consistent Card Geometry**:
   - Standard card borders: `border border-zinc-800/80`.
   - Standard border radius: `rounded-2xl` across projects, service cards, and hero elements.
   - Contrast accents: `amber-400` / `amber-500` for badges, hover states, and play buttons.
2. **GPU Acceleration**:
   - Transform and scale transitions use `.project-card-image` and `will-change-transform` to prevent subpixel layout shifts.
3. **Accessibility**:
   - All interactive elements include proper ARIA roles, labels, and keyboard listeners (`Enter` / `Space`).
4. **Type Safety**:
   - Zero `any` types. Strict TypeScript checks with `tsc -b`.

---

### 2. Adding a New Skill (`src/data/skillsData.ts`)

Append a new object to `SKILLS_DATA`:

```typescript
{
  id: 'short-form-repurposing',
  title: 'Short-Form Repurposing',
  description: 'Detailed description of the service...',
  image: '/skills/your-visual.png',
  imageAlt: 'Visual description',
  // Optional button:
  ctaText: 'Book Edit',
  ctaHref: '#contact',
}
```

---

### 3. Updating Profile Information (`src/constants/siteConfig.ts`)

All personal details, contact email, social media links, and navigation items are centralized in `SITE_CONFIG`:
- `email`: Controls both the visual button and `mailto:` link across the site.
- `socials`: Controls direct profile links in the contact section and navigation.

---

## 🎨 Design System & Code Conventions

1. **Consistent Card Geometry**:
   - Standard card borders: `border border-zinc-800/80`.
   - Standard border radius: `rounded-2xl` across projects, service cards, and hero elements.
   - Contrast accents: `amber-400` / `amber-500` for badges, hover states, and play buttons.
2. **GPU Acceleration**:
   - Transform and scale transitions use `.project-card-image` and `will-change-transform` to prevent subpixel layout shifts.
3. **Accessibility**:
   - All interactive elements include proper ARIA roles, labels, and keyboard listeners (`Enter` / `Space`).
4. **Type Safety**:
   - Zero `any` types. Strict TypeScript checks with `tsc -b`.

