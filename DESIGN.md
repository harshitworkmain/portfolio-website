# Minimalist Ink & Vellum Design System

## 1. Creative Concept: "Inverted Universe"
This design system flips traditional dark-mode space portfolios on their head. Rather than a glowing matrix of white stars on black velvet, we engineer an **Inverted Universe**: a pure, gallery-white studio background (`#ffffff`) populated by deep-black, slate-grey, and charcoal-zinc elements. 
The 3D black hole and floating dust particles are rendered in shades of black and grey, creating a beautiful graphite-sketched, physical-paper look. The interface feels like a high-end architectural print or premium editorial publication (such as a physical Apple brochure or minimalist museum index).

---

## 2. Color Palette & Typography
- **Global Canvas**: Pure White (`#ffffff`)
- **Primary Typography**: Deep Jet Black (`#000000`)
- **Secondary Subtitles**: Muted Zinc Grey (`#71717a`)
- **Borders & Dividers**: Thin Light Grey (`#e4e4e7` / 1px)
- **Interactive UI Cards**: Ultra-clean light glassmorphic panels (`rgba(255, 255, 255, 0.45)` with a 12px backdrop blur and soft 1px border `rgba(0, 0, 0, 0.05)`).
- **Fonts**: **Inter** (Display tracking: `-0.02em`; label tracking: `0.05em` all-caps).

---

## 3. High-Contrast UI Component Spec
- **Navbar**: High-contrast, floating glass panel with a thin bottom border, black text links, and crisp, minimal hover scaling.
- **Project Cards**: White glass panels (`bg-white/45`) with light, crisp borders (`border-zinc-100`). Hover states scale gently and apply a subtle grey drop shadow.
- **Form Fields**: Matte white backgrounds (`bg-zinc-50`) with thin bottom-strokes (`border-b border-zinc-200`) and pure black focus states.

---

## 4. Text Motion & Typographic Animation Guidelines

### Sources & References
- **8 Creative Text Animations for Your Website's Hero Area**: [https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo](https://dev.to/madza/8-creative-text-animations-for-your-websites-hero-area-gbo)
- **40 Examples of CSS Text Animations**: [https://prismic.io/blog/css-text-animations](https://prismic.io/blog/css-text-animations)

### Core Rules & Constraints
When introducing text animations into the **Inverted Universe**, we must respect the following core design constraints:
1. **Gallery Aesthetic Integrity**: Animations must feel editorial, architectural, and deliberate — avoiding chaotic or cheap cartoonish effects.
2. **High-Contrast Monochromatic Harmony**: Text remains primarily deep jet black (`#000000`) with subtle charcoal/zinc strokes (`#27272a` to `#71717a`).
3. **Theme Color Palette Flexibility**: For animated texts, badges, hover transforms, and typographic effects, **we are explicitly permitted to use curated accent color palettes** that harmonize with the gallery-white `#ffffff` vellum backdrop. Specifically:
   - **Emerald & Mint** (`#059669` / `#10b981` / `#ecfdf5`): For live telemetry, verification checks, high accuracy metrics.
   - **Electric Indigo & Sky** (`#4f46e5` / `#0284c7` / `#f0f9ff`): For predictive modeling, time-series forecasting, and cloud pipelines.
   - **Warm Amber & Coral** (`#d97706` / `#f59e0b` / `#fffbeb`): For real-time triage thresholds, warnings, and awards.
   - **Graphite & Ink Gradients** (`linear-gradient(135deg, #000000 0%, #3f3f46 100%)`): For high-impact headline fills.
4. **Performance First**: Favor CSS transforms, clip-paths, SVG stroke-dashoffset, and Framer Motion spring physics. Heavy Canvas/WebGL effects should be restricted to isolated accents.
5. **Accessible & Responsive**: Text must remain crawlable by screen readers and respect `prefers-reduced-motion`.

---

## 5. Curated Text Animation Code Structures (7 Styles)

Below are the complete code structures, HTML, CSS/SCSS, and JavaScript implementations provided for the 7 creative hero text animations.

### Style 1: Hover Slider (Dark/Light) — by Ivan Grozdic
*Concept: Vertical rotating watermark background text with interactive hover slide buttons and full-screen contrast transition.*

#### HTML
```html
<div class="hero-center-section">
  <div class="left-text">DATA SCIENCE</div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="img-wrap">
          <img src="/images/projects/trident/command-center-landing-page.png" alt="TRIDENT">
        </div>
      </div>
    </div>
  </div>
</div>
<div class="hero-center-section">
  <div class="left-text">APPLIED ML</div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="img-wrap">
          <img src="/images/projects/neurobridge/screening-model.png" alt="NeuroBridge">
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section padding-top-bottom over-hide z-bigger">
  <ul class="slide-buttons">
    <li class="active"><a href="#0" class="hover-target" data-hover="predictive">predictive</a></li>
    <li><a href="#0" class="hover-target" data-hover="vision">vision</a></li>
    <li><a href="#0" class="hover-target" data-hover="pipelines">pipelines</a></li>
    <li><a href="#0" class="hover-target" data-hover="systems">systems</a></li>
  </ul>
</div>

<div class="cursor" id="cursor"></div>
<div class="cursor2" id="cursor2"></div>
<div class="cursor3" id="cursor3"></div>
```

#### CSS
```css
.hero-center-section {
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  z-index: 10;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 300ms linear;
}
.hero-center-section.show {
  opacity: 1;
}
.hero-center-section .left-text {
  position: absolute;
  top: -50%;
  left: -20px;
  height: 200%;
  z-index: 1;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  text-align: center;
  writing-mode: vertical-lr;
  font-size: 8vw;
  line-height: 1;
  color: rgba(0, 0, 0, 0.05);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.08));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 300ms linear;
}
.hero-center-section.show .left-text {
  left: 0;
}
.slide-buttons li a {
  position: relative;
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: clamp(48px, 6vw, 90px);
  line-height: 1;
  text-transform: uppercase;
  -webkit-text-stroke: 2px #000000;
  -webkit-text-fill-color: transparent;
  opacity: 0.25;
  transition: all 300ms linear;
}
.slide-buttons li.active a {
  opacity: 1;
}
.slide-buttons li a::before {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 900;
  font-size: clamp(48px, 6vw, 90px);
  line-height: 1;
  overflow: hidden;
  text-transform: uppercase;
  padding: 0;
  max-height: 0;
  -webkit-text-stroke: transparent;
  -webkit-text-fill-color: #000000;
  color: #000000;
  content: attr(data-hover);
  transition: max-height 0.4s ease-in-out;
}
.slide-buttons li.active a::before,
.slide-buttons li a:hover::before {
  max-height: 100%;
}
```

#### JavaScript
```js
(function() {
  const buttons = document.querySelectorAll('.slide-buttons li');
  const sections = document.querySelectorAll('.hero-center-section');

  buttons.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
      buttons.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('show'));
      btn.classList.add('active');
      if (sections[index]) sections[index].classList.add('show');
    });
  });
})();
```

---

### Style 2: Fluid Text Hover (WebGL Flowmap) — by Robin Delaporte
*Concept: WebGL fragment shader fluid ripple mask that distorts SVG text based on mouse velocity.*

#### HTML
```html
<div class="mask">
  <svg viewBox="0 0 1040 205" class="fluid-svg">
    <text x="50%" y="60%" text-anchor="middle" class="fluid-text">DATA SCIENCE</text>
  </svg>
</div>
```

#### Shader (Vertex & Fragment)
```glsl
// Vertex Shader
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
}

// Fragment Shader
precision highp float;
uniform sampler2D tWater;
uniform sampler2D tFlow;
uniform float uTime;
varying vec2 vUv;
uniform vec4 res;

void main() {
  vec3 flow = texture2D(tFlow, vUv).rgb;
  vec2 uv = .5 * gl_FragCoord.xy / res.xy;
  vec2 myUV = (uv - vec2(0.5)) * res.zw + vec2(0.5);
  myUV -= flow.xy * (0.15 * 1.2);
  vec3 tex = texture2D(tWater, myUV).rgb;
  gl_FragColor = vec4(tex.r, tex.g, tex.b, 1.0);
}
```

---

### Style 3: CSS Perspective Text Hover — by James Bosworth
*Concept: Alternating skew transforms creating a 3D isometric ribbon that flips text upward on hover.*

#### HTML
```html
<ul class="PerspectiveWords">
  <li class="Words-line"><p>&nbsp;</p><p>APPLIED ML</p></li>
  <li class="Words-line"><p>APPLIED ML</p><p>PREDICTIVE</p></li>
  <li class="Words-line"><p>PREDICTIVE</p><p>PIPELINES</p></li>
  <li class="Words-line"><p>PIPELINES</p><p>SOFTWARE</p></li>
  <li class="Words-line"><p>SOFTWARE</p><p>SYSTEMS</p></li>
  <li class="Words-line"><p>SYSTEMS</p><p>&nbsp;</p></li>
</ul>
```

#### CSS / SCSS
```scss
$clip-height: 50px;
$left-offset: 24px;

.PerspectiveWords {
  margin: 0 auto;
  padding: 40px 0;
  font-family: 'Inter', sans-serif;
  font-size: 56px;
  font-weight: 900;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  transform: translate3d(0, 0, 0);
  -webkit-font-smoothing: antialiased;
}

.Words-line {
  height: $clip-height;
  overflow: hidden;
  position: relative;
  
  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(0.66667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.33333);
  }
  
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      left: $left-offset * $i;
    }
  }

  p {
    height: $clip-height;
    line-height: $clip-height - 5px;
    padding: 0 10px;
    transition: all 0.4s ease-in-out;
    transform: translate3d(0, 0, 0);
    color: #000000;
  }
}

.PerspectiveWords:hover p {
  transform: translate3d(0, -($clip-height), 0);
}
```

---

### Style 4: Apple TV Word Rotation — by Steven Lei
*Concept: Smooth 3D rotating vertical carousel swapping highlighted keywords in a sentence using CSS 3D perspective transforms (`rotateX`) and cubic-bezier easing.*

#### 1. Pure HTML + CSS + JS Implementation

##### HTML
```html
<div class="apple-tv-hero">
  <span class="static-prefix">I architect</span>
  <span class="words-wrapper">
    <span class="rotate-word active">Predictive Models</span>
    <span class="rotate-word">Applied ML Systems</span>
    <span class="rotate-word">Streaming ETL Pipelines</span>
    <span class="rotate-word">Autonomous Software</span>
  </span>
</div>
```

##### CSS
```css
.apple-tv-hero {
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #000000;
  line-height: 1.2;
}

.static-prefix {
  margin-right: 0.5rem;
}

.words-wrapper {
  position: relative;
  display: inline-block;
  perspective: 400px; /* Essential for 3D depth */
  height: 1.3em;
  min-width: 280px;
  overflow: hidden;
  vertical-align: middle;
}

.rotate-word {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  opacity: 0;
  transform: rotateX(-90deg) translateY(100%);
  transform-origin: bottom center;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  color: #4f46e5; /* Permitted accent palette (Electric Indigo) */
}

/* Current active word */
.rotate-word.active {
  opacity: 1;
  transform: rotateX(0deg) translateY(0%);
  transform-origin: center center;
}

/* Exiting word */
.rotate-word.prev {
  opacity: 0;
  transform: rotateX(90deg) translateY(-100%);
  transform-origin: top center;
}
```

##### JavaScript
```js
(function initAppleTvRotator() {
  const words = document.querySelectorAll('.words-wrapper .rotate-word');
  if (!words.length) return;
  let currentIndex = 0;

  setInterval(() => {
    const currentWord = words[currentIndex];
    currentWord.classList.remove('active');
    currentWord.classList.add('prev');

    currentIndex = (currentIndex + 1) % words.length;
    const nextWord = words[currentIndex];
    nextWord.classList.remove('prev');
    nextWord.classList.add('active');

    // Clean up previous classes after transition
    setTimeout(() => {
      words.forEach((w, i) => {
        if (i !== currentIndex) w.classList.remove('prev', 'active');
      });
    }, 600);
  }, 2600);
})();
```

#### 2. React 19 + Framer Motion Implementation (Recommended for Next.js App Router)
```tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATING_WORDS = [
  "Predictive ML Models",
  "Applied AI Systems",
  "Streaming ETL Pipelines",
  "Autonomous Ground Rovers",
  "Full-Stack ML Engines",
];

export function AppleTvWordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center overflow-hidden [perspective:400px] h-[1.3em] align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[index]}
          initial={{ opacity: 0, y: 26, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -26, rotateX: -90 }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1], // Smooth Apple-like spring cubic-bezier
          }}
          className="inline-block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-indigo-950 to-zinc-700"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
```

---

### Style 5: Spotlight Cursor Text — by Caroline Artz
*Concept: Interactive radial gradient following the cursor, revealed through a bold cutout text mask.*

#### HTML
```html
<div class="spotlight-container">
  <div class="cursor-blob"></div>
  <div class="mask-layer">
    <h1 class="spotlight-title">DATA SYSTEMS</h1>
  </div>
</div>
```

#### CSS
```css
.spotlight-container {
  position: relative;
  height: 350px;
  width: 100%;
  background: #f4f4f5;
  overflow: hidden;
}
.cursor-blob {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(100,100,100,0) 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
}
.mask-layer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  mix-blend-mode: screen;
}
.spotlight-title {
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  color: #000000;
  letter-spacing: -0.04em;
}
```

#### JS
```js
const container = document.querySelector('.spotlight-container');
const blob = document.querySelector('.cursor-blob');
if (container && blob) {
  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    blob.style.left = `${e.clientX - rect.left}px`;
    blob.style.top = `${e.clientY - rect.top}px`;
  });
}
```

---

### Style 6: SVG Text Mask w/ Video Fill — by Dudley Storey
*Concept: Video stream clipped directly within the letterforms of an SVG typography mask.*

#### HTML
```html
<div class="video-text-header">
  <video autoplay playsinline muted loop poster="/images/projects/weather-lstm/storm_tracking_network.png">
    <source src="/videos/stembot/stembot-ros2.mp4" type="video/mp4" />
  </video>
  <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice">
    <defs>
      <mask id="video-mask" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
        <text x="50%" y="60%" text-anchor="middle" font-size="110" font-weight="900" fill="#000000">
          HARSHIT
        </text>
      </mask>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" mask="url(#video-mask)" />
  </svg>
</div>
```

#### CSS
```css
.video-text-header {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
.video-text-header video {
  width: 100%;
  display: block;
}
.video-text-header svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

---

### Style 7: SVG Text Animation w/ Stroke Offset (Handwritten Draw-In) — by Mack Ayache
*Concept: Precision stroke-dashoffset animation simulating architectural ink sketching.*

#### HTML
```html
<div class="ink-draw-wrapper">
  <svg class="ink-svg" viewBox="0 0 600 150">
    <text x="30" y="100" class="ink-stroke-text">DATA SCIENCE</text>
  </svg>
</div>
```

#### CSS
```css
.ink-stroke-text {
  font-family: 'Inter', sans-serif;
  font-size: 72px;
  font-weight: 800;
  letter-spacing: -0.02em;
  fill: transparent;
  stroke: #000000;
  stroke-width: 2px;
  stroke-dasharray: 600;
  stroke-dashoffset: 600;
  animation: inkDraw 3.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes inkDraw {
  0% {
    stroke-dashoffset: 600;
    fill: transparent;
  }
  70% {
    stroke-dashoffset: 0;
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0;
    fill: #000000;
  }
}
```

---

## 6. Catalog of 40 CSS Text Animation Techniques (For Future Discussion)

| # | Technique Name | Core CSS / Math Mechanism | Recommended Aesthetic Role |
|---|---|---|---|
| 1 | **Explosive Letter Burst** | `radial-gradient` + `@keyframes burst` on `::before/after` | Action button / CTA micro-interaction |
| 2 | **Dancing Shadow** | Dynamic multi-layer `text-shadow` displacement | Subtitle hover state |
| 3 | **Melting Text** | `filter: blur()`, `::after` vertical elongation | Warning / error diagnostic indicator |
| 4 | **Matrix Code Rain** | `repeating-linear-gradient` vertical loop + green/charcoal glitch | StatusConsole terminal diagnostics header |
| 5 | **Text Masking / Shimmer** | `background-clip: text` + moving linear-gradient | Badge highlights ("Top 5 Finalist") |
| 6 | **3D Spin** | `transform: rotateY()` with `transform-style: preserve-3d` | 3D visual badges |
| 7 | **Glitch Effect** | Sliced `clip-path: polygon()` layers with random jitter | System error / terminal shell prompts |
| 8 | **Neon / Graphite Glow** | Layered `text-shadow` pulsating blur spread | High-importance metric callouts |
| 9 | **Wavy Text** | Staggered `translateY()` across `<span>` letters | Playful footer taglines |
| 10 | **Split Text** | Opposing `translateX` halves converging at center | Hero title entry animation |
| 11 | **Glowing 3D Text** | Multi-depth `translateZ()` stacks with light oscillation | 3D Black Hole Canvas overlay |
| 12 | **Heartbeat Pulse (HEY)** | Scale transform coupled with subtle shadow breathing | Live status indicator ("Online / Ready") |
| 13 | **3D Marquee Corner** | Perspective rotation over 90° panel folds | Infinite photo / awards ticker |
| 14 | **Nabla Variable Extrusion** | `font-variation-settings: 'EDPT'` pulsing depth | Heavy display typography |
| 15 | **3D Rotate Cylinder** | Rotating cylindrical `preserve-3d` text rings | Skills carousel |
| 16 | **Slide-in Background Roll** | Paired `roll` and background color cycling keyframes | Section transitions |
| 17 | **Gooey Marquee** | SVG filter `feGaussianBlur` + `feColorMatrix` | Ambient footer ticker |
| 18 | **Ghost / X-Ray Wipe** | `mix-blend-mode: difference` silhouette scanning text | Telemetry scanning node |
| 19 | **Schitt's Creek Shimmer** | Rotational reveal + sparkle scaling on superscripts | Award badge titles |
| 20 | **Frame Border Orbit** | Circular path offset around rectangular card border | Project card highlight borders |
| 21 | **Pure Typewriter** | `width: steps(n)` + blinking border cursor | Hero code bio |
| 22 | **Modern Multi-Caret Typewriter** | Staggered character reveal + variable cursor width | StatusConsole command output |
| 23 | **Gradient Flow Typewriter** | Clipped gradient fill revealed through character mask | Landing page subtitle |
| 24 | **IDE Code Stream (Editor)** | Staggered multi-line code typewriter with line numbers | Code demonstration cards |
| 25 | **Typing with Wave Motion** | Reveal typewriter backed by sine wave translation | Footer signature |
| 26 | **Split-Half Text Reveal** | Upper and lower letter slices sliding out on hover | Interactive navigation links |
| 27 | **Diagonal Blade Slice** | Diagonal `clip-path` with opposing slide on hover | Primary action buttons |
| 28 | **Editorial Box Curtain** | Expanding color block curtain revealing text beneath | Subpage header reveals |
| 29 | **Hamburger Text Slot** | Three-tier text sandwich opening on hover | Complex project links |
| 30 | **Variable Weight Shift** | `font-variation-settings: 'wght' 200 -> 900` on hover | Project cards title hover |
| 31 | **Monochrome Aurora** | Soft graphite blurred blob blends moving behind text | Hero background aura |
| 32 | **City Lights Pulse** | Oscillating lightness levels in HSL color channels | Live telemetry nodes |
| 33 | **Color Paint Roller** | Horizontal and vertical mask wipes coloring letters | Skill level meters |
| 34 | **Holographic Floating Tilt** | `perspective()` tilt + brightness shimmer gradient | Research publication cards |
| 35 | **Spotlight Swing** | Elliptical `clip-path` swinging across bold letterforms | Hero interactive banner |
| 36 | **Breathe Variable Font** | Continuous sinusoidal weight oscillation (100 -> 800) | Ambient header tag |
| 37 | **Variable Font Snap** | Instantaneous weight expansion on hover | Navbar menu links |
| 38 | **Curved Dusseldot** | Characters rotated individually on circular orbit | Circular badge seals |
| 39 | **Work/Life Dual Balance** | Antiphase weight oscillation between paired words | "Data Science / Software Systems" headline |
| 40 | **Decovar "Draw In"** | Variable font `DRAW` axis morphing from wireframe | Initial page loader title |

## 7. Creative Text Motion & Dynamic Typography Strategy

### Architectural Philosophy: Landing Page vs. Subpages
- **Landing Homepage (Moderate to Highly Heavy)**:
  The landing page is the visitor's primary impression. It must dazzle with purposeful, high-end motion across **every section**: the hero title, rotating subtitle, metric counters, video demo cards, engineering pillars, technical arsenal tabs, terminal console, and contact portal.
- **Subpages (Moderate & Focused)**:
  Subpages (`/about`, `/projects`, `/internship`, `/resume`, `/achievements`, `/leadership`) maintain a more focused, content-first rhythm with targeted, elegant animations so reading in-depth project documentation or reviewing resumes remains comfortable and distraction-free.

---

### Detailed Landing Homepage Typography & Motion Blueprint

```
Landing Page (/)
 ├── 1. Hero Area (Moderate-to-Heavy)
 │    ├── Headline: Architectural Ink Stroke Draw-In (Style 7) for "DATA SCIENCE & APPLIED ML"
 │    ├── Subtitle: Apple TV 3D Word Rotation (Style 4) via perspective rotateX
 │    ├── Institution Pill: Heartbeat Pulse beacon (Style 12) + glass border glow
 │    ├── Career Identity Quotes: Staggered line reveal with left ink accent line
 │    └── CTA Buttons: Diagonal blade slice & contrast inversion on hover (Style 27)
 │
 ├── 2. Quantified Metrics Row (Moderate-to-Heavy)
 │    ├── Metric Digits: Number counter roll-in + Variable Weight Shift (Style 30: 'wght' 400 -> 800 on hover)
 │    ├── Metric Glow: Dancing subtle emerald/graphite shadow on hover (Style 2)
 │    └── Subtitles: Monospace tracking expansion (0.05em -> 0.12em)
 │
 ├── 3. Featured Demos & Video Play Boxes (Moderate-to-Heavy)
 │    ├── Section Title: Editorial curtain reveal sweep (Style 28)
 │    ├── Play Button Overlay: Radial pulse with breathing glow ring
 │    ├── Card Headings: Text split reveal (Style 26) showing technical tags ([LSTM • NetworkX])
 │    └── Action Links: Animated underline slide-out on hover
 │
 ├── 4. Project & Competition Photo Marquee (Moderate)
 │    ├── Section Header: Hairline divider with letter tracking stagger
 │    └── Photo Overlay: Upward sliding glassmorphic caption pill
 │
 ├── 5. Core Engineering Pillars (Moderate-to-Heavy)
 │    ├── Pillar Titles: Variable font breathing (Style 36: Breathe) with subtle indigo/emerald gradient
 │    ├── Icon Beacons: Smooth spring rotation on hover
 │    └── Descriptions: High-contrast legible body text with subtle border brightening
 │
 ├── 6. Technical Arsenal / Tech Matrix (Moderate-to-Heavy)
 │    ├── Category Filter Tabs: Sliding layoutId highlight pill with text snap (Style 37)
 │    └── Skill Tags: Interactive micro-tilt with subtle emerald/sky border glow
 │
 ├── 7. System Diagnostics Console (Heavy)
 │    ├── Title Bar: Pulsing emerald beacon + real-time UTC clock
 │    ├── Boot Sequence: IDE Code Stream (Style 24) typewriter with colored status logs
 │    └── Interactive Shell Prompt: Blinking caret + command output stream
 │
 └── 8. Transmission Portal / Contact (Moderate-to-Heavy)
      ├── Section Title ("Start a Conversation"): Subtle text shimmer (Style 19)
      ├── Connection Nodes: Hover sliding cards with active border color injection
      ├── Form Inputs: Floating uppercase labels with focus underline expansion
      └── Send Button: Multi-state spring animation (Idle -> Sending -> Success pulse)
```

---

### Landing Page Section Specifications

#### Section 1: Hero Area
1. **Primary Title (`Data Science & Applied ML`)**:
   - Employs **Style 7 (Architectural Ink Stroke Draw-In)** or staggered Framer Motion spring characters (`y: 20 -> 0`, `opacity: 0 -> 1`, `ease: [0.16, 1, 0.3, 1]`).
   - Deep jet black typography (`#000000`) with high-contrast letter spacing (`-0.02em`).
2. **Rotating Subtitle (`Apple TV 3D Word Rotation — Style 4`)**:
   - Uses `[perspective: 400px]` with `rotateX` 3D flipping in antiphase:
     - `Software Systems Engineer`
     - `Predictive AI Architect`
     - `Data Infrastructure Builder`
     - `Assistive ML Developer`
   - Rendered with an elegant permitted text gradient (`from-zinc-900 via-indigo-950 to-zinc-700`).
3. **Hero Institution Pill**:
   - `Vellore Institute of Technology, Chennai` pill featuring an emerald pulse indicator (`#10b981`) using **Style 12 (Heartbeat Pulse)**.
4. **Verbatim Identity Block**:
   - Rendered with a thin vertical charcoal accent stroke (`border-l-2 border-zinc-300 pl-4`) and staggered line fade-in.

#### Section 2: Quantified Metrics Row
1. **Digits Display (`92.4%`, `98.4%`, `>95%`)**:
   - Animated count-up on viewport enter.
   - On hover: **Style 30 (Variable Weight Shift)** smoothly interpolating font weight from `700` to `900`.
   - Card border subtly lights up with permitted theme glow (`rgba(16, 185, 129, 0.15)` for accuracy/uptime).
2. **Metric Subtitles**:
   - Monospace uppercase captions with letter-spacing transition on card hover (`tracking-widest` to `tracking-[0.2em]`).

#### Section 3: Featured Demos & Video Play Boxes
1. **Video Cards (`TRIDENT` & `SPARC`)**:
   - Video overlay play button features a breathing pulse ring on hover.
   - Titles feature **Style 26 (Text Split Reveal)** on hover, subtly translating up while revealing an engineering tag: `[PyTorch LSTM • Graph Diffusion]` and `[MediaPipe • YOLOv8n]`.
   - Action links (`Code` & `Demo`) feature an expanding horizontal underline.
2. **STEMBOT Phone Frame Mockups**:
   - Device shell with glass edge reflection and hover scale (`scale: 1.02`).

#### Section 4: Project & Competition Photo Marquee
- Marquee header features a thin geometric hairline rule with staggered uppercase letter spacing.
- Images feature a subtle grayscale-to-color shift on hover with caption pills sliding up.

#### Section 5: Core Engineering Pillars
- **Pillar 1**: `Data Science & Predictive Modeling` (Time-series LSTM, graph diffusion, PyTorch/Scikit-Learn).
- **Pillar 2**: `Applied ML & Computer Vision` (YOLOv8, MediaPipe, in-browser edge inference).
- **Pillar 3**: `Software & Data Systems Engineering` (Performant Next.js/React apps, REST APIs, Docker).
- Each pillar card title utilizes **Style 36 (Breathe Variable Font)** on hover, shifting font weight and applying a subtle color wash (Indigo for Pillar 1, Emerald for Pillar 2, Slate for Pillar 3).

#### Section 6: Technical Arsenal / Tech Matrix
- Category tabs (`Data Science`, `Applied ML`, `Data Engineering`, `Software Systems`) feature a floating background pill transition (`framer-motion layoutId="activeTab"`).
- Individual technology badges display animated micro-borders on hover.

#### Section 7: System Diagnostics Terminal (`StatusConsole`)
- Utilizes **Style 24 (IDE Code Stream)** with typewriter letter streaming at 12ms/character.
- Pulsing colored indicator dots (emerald, amber, red) and interactive shell prompt with blinking caret (`animate={{ opacity: [1, 0, 1] }}`).

#### Section 8: Transmission Portal / Contact Section
- Section header "Start a Conversation" features **Style 19 (Subtle Shimmer)**.
- Form inputs feature floating labels with animated bottom border expansion (`scaleX: 0 -> 1` on focus).
- Submit button morphs between Idle (`Send Transmission`), Sending (spinner), and Success (emerald check pulse).

---

### Roadmap for Subsequent Subpages (To Be Discussed Individually)
After finalizing and implementing the landing page animations, we will review and tailor each subpage:
1. **`/about`**: Focus on the top identity statements, editorial curtain reveal, and the 4-tier skills matrix.
2. **`/projects`**: Focus on interactive card title blades, media modals, and architecture tags.
3. **`/internship`**: Focus on ROS 2 telemetry indicators, EKF drift reduction counters, and simulation video players.
4. **`/resume`**: Focus on track-switcher pills, ATS watermark, and verified metric badges.
5. **`/achievements` & `/leadership`**: Focus on award badge shimmers and timeline highlights.
