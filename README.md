# Chapter

> *The reading app people wish Goodreads had become.*

A premium, mood-driven reading companion built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Motion** for fluid, native-feeling interactions.

---

## Features

- **Mood-Driven Discovery** — Browse books by mood (cozy, dark, hopeful, philosophical, fantasy, historical, romance, classic, thriller)
- **Continue Reading Hero** — Pick up exactly where you left off with a cinematic hero section
- **Book Cards** — Rich cards with reading progress, ratings, mood tags, and social proof
- **Stats & Wrapped** — Track your reading month with a visual palette and shareable stats
- **Floating Navigation** — A glassmorphic bottom nav with spring animations
- **Sidebar** — Quick access to shelves, bookmarks, quotes, and settings
- **Design System** — Centralized tokens for colors, typography, radii, shadows, and transitions

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.2.4 (App Router) |
| UI | React 19.2.4 |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animation | Motion (Framer Motion successor) |
| Font | Geist (Vercel) |
| Language | TypeScript 5 |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/domitianegbert04/chapter.git
cd chapter

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
chapter/
├── app/
│   ├── components/
│   │   ├── BookCard.tsx          # Rich book card with progress & moods
│   │   ├── ContinueReadingHero.tsx # Hero section for current read
│   │   ├── FloatingNav.tsx        # Glassmorphic bottom navigation
│   │   ├── MoodCarousel.tsx       # Horizontal mood selector
│   │   ├── Sidebar.tsx            # App sidebar with shelves & settings
│   │   └── StatsPanel.tsx         # Reading stats & activity feed
│   ├── design-system.ts          # Tokens: colors, typography, shadows, etc.
│   ├── globals.css               # Tailwind v4 imports + custom properties
│   ├── layout.tsx                # Root layout with Geist font
│   └── page.tsx                  # Main dashboard page
├── package.json
└── README.md
```

---

## Design System

All visual tokens live in `app/design-system.ts`:

- **Colors** — Warm dark palette (`#0D0D0B` background, `#C8A26A` gold accent)
- **Typography** — Geist Sans + Mono, 7 size steps
- **Radii** — 12px to 28px for consistent soft corners
- **Shadows** — Layered depth system for cards and elevation
- **Transitions** — Fast / normal / slow / spring easing curves
- **Glass** — Reusable backdrop-blur + semi-transparent surface pattern

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Roadmap

- [ ] Connect to a real book API (Open Library / Google Books)
- [ ] User authentication & reading history persistence
- [ ] Social features (friend activity, reviews, recommendations)
- [ ] Dark/light theme toggle
- [ ] PWA support for offline reading
- [ ] Export reading stats as shareable images

---

## License

MIT — feel free to fork, remix, and build your own reading sanctuary.

---

*Built with care for people who love books.*
