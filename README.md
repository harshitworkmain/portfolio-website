# Harshit Singh — Personal Portfolio Website

A premium, high-performance developer portfolio built with Next.js (App Router), React 19, Three.js (React Three Fiber), and Framer Motion. 

This portfolio acts as a live showcase of software engineering, applied AI, data pipelines, and interactive web architecture, tailored for roles across **Software Development (SWE/SDE), AI/ML Engineering, Data Science & Analytics**.

**Live URL:** [portfolio-website-harshit-08.vercel.app](https://portfolio-website-harshit-08.vercel.app)

---

## 🎨 Creative Concept: "Inverted Universe"

Flipping the traditional dark-mode space aesthetic, this design system implements a clean, gallery-white canvas (`#ffffff`) populated by deep-black, charcoal-zinc elements, and subtle brand-colored highlights.
- **3D Interactive Backdrop:** A WebGL interstellar-style black hole and suspended graphite-like dust particles built using React Three Fiber (R3F) and Three.js. It responds dynamically to scroll depth and mouse cursor position.
- **Glassmorphism:** Interface panels are rendered with ultra-clean translucent glass boards (`bg-white/45`) containing 12px backdrop filters (`backdrop-blur-md`) and 1px dividers (`border-zinc-100`).
- **Typography:** Display headlines are set in uppercase **Space Grotesk** for a geometric, technical feel, balanced by **Plus Jakarta Sans** for body copy.

---

## 🛠️ Technology Stack

- **Core Framework:** Next.js 16.2 (App Router)
- **Runtime & Library:** React 19 & TypeScript
- **Styling & Theme:** Tailwind CSS 4 & PostCSS
- **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), React Three Drei (`@react-three/drei`)
- **Animation Engine:** Framer Motion v12
- **Vector Icons:** Lucide React & Simple Icons SVGs
- **Deployment Platform:** Vercel (Global Edge Network)

---

## 🌌 Core Features

1. **Software Systems & Telemetry Console:** A live-simulated retro-modern Unix terminal displaying real-time diagnostic checks across disciplines (Inference latency, ROS 2 node status, data pipeline throughput, shared-memory speed, and web response times).
2. **Interactive Tech Stack Matrix:** Dynamic categories showcasing programming languages, tools, and libraries with official vector SVG logos that expand and animate on hover.
3. **Core Engineering Pillars Grid:** Replaces standard text blocks with dedicated cards outlining core principles: Embedded Intelligence, Applied ML & Analytics, and Full-Stack Systems.
4. **Optimized Video Demonstrations:** Includes lightweight, cropped highlight previews (e.g. SPARC gesture translation preview compressed with FFmpeg) looping natively in HTML5, with modals pointing to unlisted YouTube demo videos.
5. **Unified Contact System:** Integrated directly at the bottom of the home page, backed by automatic Navbar scroll routing (hash-anchors) and server redirects.

---

## 📂 Project Directory Structure

```text
├── docs/                        # Project context and resume details
│   ├── drishtiguide/            # DrishtiGuide project documentation
│   ├── project-readmes/         # Readmes of sub-projects (Trident, Stembot, Weather, etc.)
│   ├── sparc/                   # SPARC sign language project documentation
│   └── portfolio_context.md     # Master Reference Context document
├── public/                      # Static assets (images, compressed videos)
│   ├── pfp.jpeg                 # Profile photo
│   └── videos/
│       ├── TRIDENT-demo.mp4     # TRIDENT wearable looping preview
│       └── SPARC-preview.mp4    # SPARC 25-second cropped video loop
├── src/
│   ├── app/                     # Next.js App Router (Layouts & Routes)
│   │   ├── about/               # About page
│   │   ├── achievements/        # Achievements page
│   │   ├── leadership/          # Leadership page
│   │   ├── projects/            # Projects page
│   │   ├── globals.css          # Tailwind CSS global styles
│   │   ├── layout.tsx           # Global site layout & provider setup
│   │   └── page.tsx             # Consolidated Home page (with Hero, Stack, Console, Contact)
│   └── components/              # Shared React components
│       ├── canvas/              # R3F WebGL Three.js components
│       │   └── BlackHoleCanvas.tsx # Interactive Black Hole element
│       └── ui/                  # Clean layout assets (Navbar, Footer, transitions)
│           ├── Footer.tsx
│           ├── Navbar.tsx
│           └── PageTransition.tsx
├── package.json                 # Node modules & dependencies
├── tsconfig.json                # TypeScript settings
└── next.config.ts               # Next.js configurations & redirects
```

---

## 🚀 Local Development Setup

To run the portfolio website locally, ensure you have **Node.js (v18+)** installed.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/harshitworkmain/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Dev Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the local build.

4. **Verify Production Build:**
   ```bash
   npm run build
   ```
   This will test code linting, type safety, and output the compiled, statically pre-rendered site package.
