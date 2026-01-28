# Wine & Food Pairing Explorer

A small “app-like” React + Vite application built as part of the Nesso Digitale assignment. This app demonstrates interactive state management, filtering and sorting logic, component decomposition, Framer Motion animations, and unit testing, all in a TypeScript environment.

---

## App Overview

The Wine & Food Pairing Explorer allows users to:

- Explore curated Italian wine and food pairings.
- Filter pairings by **Wine Type**, **Region**, and **Food Type**.
- Store favorites in local storage.

This app is fully **TypeScript-typed** using enums and interfaces for safety and maintainability.

---

## Built With

- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vitest](https://vitest.dev/) for unit testing
- CSS (co-located per component, simple global styles)

---

## Folder Structure

```
vite-app/
├─ public/                     # Static assets, placeholder images, icons
├─ src/
│   ├─ assets/                 # Images, icons, fonts
│   ├─ components/             # Reusable components (one folder per component)
│   │   ├─ PairingCard/
│   │   │   ├─ PairingCard.tsx
│   │   │   └─ PairingCard.css
│   │   ├─ FilterPanel/
│   │   │   ├─ FilterPanel.tsx
│   │   │   └─ FilterPanel.css
│   │   └─ PairingList/
│   │       ├─ PairingList.tsx
│   │       └─ PairingList.css
│   ├─ data/
│   │   └─ pairings.ts         # Dataset of wine-food pairings
│   ├─ hooks/
│   │   └─ useFavorites.ts
│   ├─ types/
│   │   └─ index.ts            # Enums + interfaces for TypeScript
│   ├─ utils/
│   │   └─ filterPairings.ts       # Filtering + sorting functions
│   ├─ styles/
│   │   └─ globals.css         # Global CSS
│   ├─ App.tsx                 # Main app component
│   └─ main.tsx                # Vite entry point
├─ index.html
├─ package.json
└─ tsconfig.json
```

---

## Features

1. **Filtering & Sorting**
   - Multi-select filters for Wine Type, Region, and Food Type.

2. **Favorites**
   - Users can favorite pairings.

3. **TypeScript Safety**
   - Enums for WineType and FoodType.
   - Interface `Pairing` for the dataset.

4. **Unit Testing**
   - Vitest tests for filtering and sorting logic.

---

## How It Was Built

- **React + Vite**: lightweight, fast development environment.
- **Framer Motion**: animations for cards, modal, and favorites.
- **TypeScript**: strong typing with enums and interfaces.
- **Separated concerns**: components, data, types, utils, and hooks in separate folders.
- **Unit tests**: filter/sort logic tested with Vitest.

---

## Getting Started

1. Clone the repo:

```bash
git clone <repo-url>
```

2. Install dependencies:

```bash
cd vite-app
npm install
```

3. Run the dev server:

```bash
npm run dev
```

4. Open the app in your browser at `http://localhost:5173`.

5. Run tests:

```bash
npm run test
```

---

## Notes

- Placeholder images are stored in `src/assets` and can be replaced with real images.
- All components are modular, making it easy to extend functionality.
- The app is fully TypeScript-ready for scalability and maintainability.

---

**Author:** Travis Adams
**Assignment:** Nesso Digitale - React + Vite Feature App
