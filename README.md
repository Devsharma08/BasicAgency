# BASIC/DEPT® — Agency Clone

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A pixel-perfect frontend clone of the [BASIC/DEPT®](https://www.basicagency.com/) agency website.**
Built for learning and portfolio purposes — no backend, no credentials, no affiliation.

### 🔗 [Live Demo →](https://basic-agency-seven.vercel.app/)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat-square&logo=vercel&logoColor=white)](https://basic-agency-seven.vercel.app/)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎬 **Cinematic Preloader** | Animated text reveal with a sliding white overlay, sequenced before the hero |
| 🎥 **Hero Video Section** | Full-viewport autoplaying video with click-to-unmute and a custom follower cursor |
| 📂 **Slide-in Navigation** | Fullscreen menu overlay with smooth `translateX` transition |
| 🏆 **Awards Section** | Responsive logo grid with hover underline effects |
| 🖱️ **Draggable Carousels** | Mouse-drag horizontal scrolling on Projects & Featured Engagements |
| 🔵 **Custom Cursors** | Context-aware cursors — "Watch Reel" on hero, "DRAG" on carousels |
| 🌗 **Dynamic Theme Switching** | `IntersectionObserver` driven dark/light mode transition at the Connect section |
| 📰 **News Cards** | Image cards with hover zoom and arrow animations |
| 🦶 **Full Footer** | Newsletter input, social links, office locations, SVG logo |

---

## 🛠️ Tech Stack

```
React 19  ·  Vite 8  ·  Tailwind CSS 4  ·  tailwindcss-animate
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Devsharma08/BasicAgency.git
cd BasicAgency

# Install dependencies
pnpm install     # or npm install

# Start dev server
pnpm dev         # or npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── App.jsx                       # Root component with theme observer
├── main.jsx                      # Entry point
├── index.css                     # Global styles & Tailwind config
│
├── pages/
│   ├── PreLoad.jsx               # Cinematic preloader animation
│   ├── Hero.jsx                  # Hero video + nav + menu overlay
│   ├── Awards.jsx                # Awards logo section
│   ├── FeaturedWork.jsx          # Agency description + CTA
│   ├── Projects.jsx              # Draggable project cards
│   ├── FeaturedEngagements.jsx   # Draggable engagement cards
│   ├── Connect.jsx               # Culture section (dark theme trigger)
│   ├── FeaturedNews.jsx          # News grid
│   └── Footer.jsx                # Full footer with newsletter
│
└── utils/
    ├── heroFollowerPointer.jsx   # Custom "Watch Reel" cursor
    ├── dragComponent.jsx         # Custom "DRAG" cursor
    └── cards.jsx                 # News list cards component
```

---

## 🎨 Animation Flow

```
┌─────────────────────────────────────────────┐
│  1. PreLoad                                 │
│     ├── Text fades in from bottom           │
│     └── White strip slides up (800ms)       │
│                                             │
│  2. Hero Video                              │
│     └── Slides in from bottom (1000ms)      │
│        after PreLoad calls onFinish()       │
│                                             │
│  3. Scroll ↓                                │
│     ├── Awards, FeaturedWork, Projects      │
│     └── Theme flips dark at Connect section │
│        via IntersectionObserver             │
└─────────────────────────────────────────────┘
```

---

## ⚠️ Disclaimer

> This project is a **frontend clone** built purely for **educational and portfolio purposes**.
> All brand names, logos, images, and videos belong to their respective owners.
> **No credentials, API keys, or proprietary code** are included.
> This project has **no affiliation** with BASIC/DEPT® or any of the brands shown.

---

## 📜 License

MIT — free to use, modify, and learn from.
