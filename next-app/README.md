# Nesso Digitale Landing Page

**Next.js Implementation**

## Overview

A pixel-perfect, responsive marketing landing page built with Next.js 14, featuring interactive components and smooth animations.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Framer Motion (animations)
- CSS Modules
- Lucide React (icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
next-app/
├── public/             # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts
│   │   ├── page.tsx        # Main page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── sections/       # Page sections
│       │   ├── about/
│       │   ├── cta/
│       │   ├── features/
│       │   ├── hero/
│       │   ├── project-showcase/
│       │   ├── service/
│       │   └── transformation/
│       └── ui/             # Reusable components
│           ├── button/
│           ├── footer/
│           ├── header/
│           ├── section-header/
│           └── section-title/
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Key Features

### Interactive Components

**1. Mobile Navigation**

- Hamburger menu with overlay

**2. Project Carousel**

- Animated slide transitions (Framer Motion)
- Direction-aware animations
- Previous/Next navigation
- Responsive image handling

### Responsive Design

**Desktop (1440px+)**

- Multi-column layouts
- Large typography (85px hero)
- Full navigation bar

**Tablet (768px - 1024px)**

- Adjusted layouts
- Medium typography (64px hero)
- Maintained hierarchy

**Mobile (< 768px)**

- Single column stack
- Hamburger menu
- Small typography (36-48px)
- Hidden decorative elements for performance

### Design Tokens

```css
--color-primary: #4a90e2 --color-gray: #f9fafb --font-jakarta: Plus Jakarta Sans
  --font-poppins: Poppins;
```

## Component Architecture

### Reusable Components

**Button**

- Variant for showing common icon

**SectionHeader**

- Two-column layout (title + description)
- Responsive text sizing

**AboutCard**

- Content card with subtitle and description
- Flexible layout

### Component Patterns Used

- CSS Modules for scoped styling
- TypeScript interfaces for props
- Composition with children props
- Responsive design with media queries

## Technical Decisions

### Why Framer Motion?

Provides professional, smooth animations with spring physics. Better than CSS-only for complex interactive components.

### Why CSS Modules?

- Component-scoped styling prevents conflicts
- Better performance than CSS-in-JS
- Works seamlessly with Next.js

### Why TypeScript?

- Catch errors at compile time
- Better IDE autocomplete
- Self-documenting component APIs

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## Accessibility

- Semantic HTML elements
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus states on all clickable items
- WCAG AA color contrast

## Performance

- Next.js optimized builds
- CSS Modules for smaller bundles
- GPU-accelerated animations
- Optimized images
- Minimal JavaScript

## SEO

- Proper page metadata
- Open Graph tags
- Semantic heading hierarchy
- Descriptive alt text
