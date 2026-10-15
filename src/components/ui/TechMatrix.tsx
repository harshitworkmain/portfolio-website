"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────
   Honest Tech Stack Data — Verified from Projects & Resume
   ──────────────────────────────────────────────────────── */

interface TechItem {
  name: string;
  tag: string;
  icon: React.ReactNode;
}

interface TechCategory {
  id: string;
  label: string;
  subtitle: string;
  items: TechItem[];
}

const categories: TechCategory[] = [
  {
    id: "data-science-ml",
    label: "Data Science & Predictive ML",
    subtitle: "Recurrent architectures, stochastic state estimation, and statistical modeling",
    items: [
      {
        name: "Python",
        tag: "Core Language",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <linearGradient id="pyA" x1="12.959" x2="79.639" y1="12.039" y2="78.719" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#387eb8"/><stop offset="1" stopColor="#366994"/></linearGradient>
            <linearGradient id="pyB" x1="49.414" x2="110.008" y1="56.648" y2="118.738" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffe052"/><stop offset="1" stopColor="#ffc331"/></linearGradient>
            <path fill="url(#pyA)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
            <path fill="url(#pyB)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
          </svg>
        ),
      },
      {
        name: "PyTorch",
        tag: "Deep Learning",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#EE4C2C" d="M64.3 8.7L40.6 32.4c-16 16-16 41.8 0 57.7 16 16 41.8 16 57.7 0 16-16 16-41.8 0-57.7L89.7 41l-8.6 8.6 8.6 8.6c9.3 9.3 9.3 24.5 0 33.8s-24.5 9.3-33.8 0-9.3-24.5 0-33.8l17-17 8.6-8.6L64.3 8.7z"/>
            <circle fill="#EE4C2C" cx="89" cy="26" r="7"/>
          </svg>
        ),
      },
      {
        name: "Scikit-Learn",
        tag: "Statistical ML",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#F89939" d="M38 24h52v80H38z" rx="8" />
            <circle cx="50" cy="50" r="14" fill="#3499CD"/>
            <circle cx="78" cy="78" r="14" fill="#F89939"/>
            <line x1="50" y1="50" x2="78" y2="78" stroke="#fff" strokeWidth="4"/>
          </svg>
        ),
      },
      {
        name: "NumPy",
        tag: "Vectorized Math",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#4DABCF" d="M64 16L28 36v56l36 20 36-20V36L64 16zm0 8l28 16v40L64 96 36 80V40l28-16z"/>
            <path fill="#4D77CF" d="M64 24L36 40v40l28 16V24z"/>
            <text x="44" y="78" fontFamily="sans-serif" fontWeight="bold" fontSize="32" fill="#fff">N</text>
          </svg>
        ),
      },
      {
        name: "Pandas",
        tag: "Data Ingestion",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <rect x="34" y="16" width="12" height="32" rx="2" fill="#130754"/>
            <rect x="34" y="56" width="12" height="56" rx="2" fill="#130754"/>
            <rect x="58" y="24" width="12" height="80" rx="2" fill="#130754"/>
            <rect x="82" y="16" width="12" height="56" rx="2" fill="#130754"/>
            <rect x="82" y="80" width="12" height="32" rx="2" fill="#130754"/>
            <rect x="52" y="108" width="24" height="8" rx="2" fill="#E70488"/>
          </svg>
        ),
      },
      {
        name: "Stacked LSTMs",
        tag: "Time-Series",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <rect x="20" y="30" width="88" height="68" rx="10" fill="none" stroke="#4f46e5" strokeWidth="6"/>
            <path d="M30 64 Q 45 40, 64 64 T 98 64" fill="none" stroke="#059669" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: "Extended Kalman Filter",
        tag: "State Estimation",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="64" cy="64" r="44" fill="none" stroke="#0284c7" strokeWidth="6"/>
            <circle cx="64" cy="64" r="22" fill="none" stroke="#d97706" strokeWidth="4" strokeDasharray="6 4"/>
            <circle cx="64" cy="64" r="6" fill="#0284c7"/>
          </svg>
        ),
      },
      {
        name: "NetworkX",
        tag: "Graph Diffusion",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="36" cy="40" r="12" fill="#6366f1"/>
            <circle cx="92" cy="40" r="12" fill="#6366f1"/>
            <circle cx="64" cy="90" r="12" fill="#6366f1"/>
            <line x1="36" y1="40" x2="92" y2="40" stroke="#6366f1" strokeWidth="4"/>
            <line x1="36" y1="40" x2="64" y2="90" stroke="#6366f1" strokeWidth="4"/>
            <line x1="92" y1="40" x2="64" y2="90" stroke="#6366f1" strokeWidth="4"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "applied-ml-perception",
    label: "Applied ML & Perception",
    subtitle: "Computer vision, edge inference, real-time tracking, and sensor fusion",
    items: [
      {
        name: "OpenCV",
        tag: "Computer Vision",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="64" cy="64" r="28" fill="none" stroke="#5C3EE8" strokeWidth="8"/>
            <circle cx="36" cy="90" r="12" fill="#FF0000"/>
            <circle cx="92" cy="90" r="12" fill="#00AA00"/>
            <circle cx="64" cy="36" r="12" fill="#5C3EE8"/>
          </svg>
        ),
      },
      {
        name: "YOLOv8",
        tag: "Real-Time Detection",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <rect x="20" y="20" width="88" height="88" rx="12" fill="none" stroke="#6C3BAA" strokeWidth="6"/>
            <rect x="40" y="40" width="20" height="20" rx="2" fill="#6C3BAA" opacity="0.6"/>
            <rect x="68" y="40" width="20" height="20" rx="2" fill="#6C3BAA" opacity="0.8"/>
            <rect x="40" y="68" width="20" height="20" rx="2" fill="#6C3BAA"/>
            <circle cx="78" cy="78" r="10" fill="#6C3BAA"/>
          </svg>
        ),
      },
      {
        name: "MediaPipe",
        tag: "Face & Hand Meshes",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#0097A7" d="M64 20L28 42v44l36 22 36-22V42L64 20z"/>
            <circle cx="64" cy="52" r="8" fill="#fff"/>
            <circle cx="48" cy="72" r="6" fill="#fff"/>
            <circle cx="80" cy="72" r="6" fill="#fff"/>
            <line x1="64" y1="58" x2="50" y2="68" stroke="#fff" strokeWidth="2.5"/>
            <line x1="64" y1="58" x2="78" y2="68" stroke="#fff" strokeWidth="2.5"/>
          </svg>
        ),
      },
      {
        name: "ROS 2",
        tag: "Robotics Stack",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="64" cy="64" r="44" fill="none" stroke="#22314E" strokeWidth="6"/>
            <circle cx="64" cy="30" r="8" fill="#22314E"/>
            <circle cx="34" cy="84" r="8" fill="#22314E"/>
            <circle cx="94" cy="84" r="8" fill="#22314E"/>
            <line x1="64" y1="38" x2="38" y2="78" stroke="#22314E" strokeWidth="4"/>
            <line x1="64" y1="38" x2="90" y2="78" stroke="#22314E" strokeWidth="4"/>
            <line x1="38" y1="82" x2="90" y2="82" stroke="#22314E" strokeWidth="4"/>
          </svg>
        ),
      },
      {
        name: "LiDAR Processing",
        tag: "3,600 pts/sec Filter",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path d="M20 100 A 50 50 0 0 1 108 100" fill="none" stroke="#10b981" strokeWidth="6"/>
            <path d="M35 100 A 35 35 0 0 1 93 100" fill="none" stroke="#10b981" strokeWidth="6" strokeDasharray="4 4"/>
            <circle cx="64" cy="100" r="8" fill="#10b981"/>
          </svg>
        ),
      },
      {
        name: "WebGL Inference",
        tag: "Client-Side GPU",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <polygon points="64,20 108,44 108,84 64,108 20,84 20,44" fill="none" stroke="#990000" strokeWidth="6"/>
            <polygon points="64,36 92,52 92,76 64,92 36,76 36,52" fill="#990000" opacity="0.6"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "data-engineering-systems",
    label: "Data Engineering & Systems",
    subtitle: "High-throughput telemetry streams, shared memory, and Linux orchestration",
    items: [
      {
        name: "PostgreSQL",
        tag: "Relational Schemas",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#336791" d="M64 12C35.3 12 12 35.3 12 64s23.3 52 52 52 52-23.3 52-52S92.7 12 64 12zm0 94c-23.2 0-42-18.8-42-42S40.8 22 64 22s42 18.8 42 42-18.8 42-42 42z"/>
            <path fill="#336791" d="M78 48c-3-6-9-10-16-10s-13 4-16 10c-5 10-2 22 7 28v12h18V76c9-6 12-18 7-28z"/>
          </svg>
        ),
      },
      {
        name: "SQLite",
        tag: "Local Datastores",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <rect x="24" y="24" width="80" height="80" rx="16" fill="#003B57"/>
            <text x="32" y="78" fontFamily="sans-serif" fontWeight="bold" fontSize="30" fill="#00ADEF">SQL</text>
          </svg>
        ),
      },
      {
        name: "Shared Memory",
        tag: "/dev/shm Zero-Copy",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <rect x="20" y="36" width="40" height="56" rx="6" fill="#059669"/>
            <rect x="68" y="36" width="40" height="56" rx="6" fill="#059669" opacity="0.6"/>
            <path d="M40 64 h48" stroke="#fff" strokeWidth="6" strokeDasharray="4 2"/>
          </svg>
        ),
      },
      {
        name: "Linux / Ubuntu",
        tag: "Server OS",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="64" cy="64" r="54" fill="#E95420"/>
            <circle cx="64" cy="64" r="30" fill="#fff"/>
            <circle cx="64" cy="64" r="18" fill="#E95420"/>
          </svg>
        ),
      },
      {
        name: "Docker",
        tag: "Microservices",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#2496ED" d="M120 54c-1.8-1.2-5.7-1.7-8.8-1.1-1.3-4.3-4.7-7.7-9.4-9.3-5.5-1.9-11.8-.7-16.1 3-1.6.4-3.1 1-4.6 1.7V42H65v12h14v-4h-8v-4h6V34H65v4h-6v12h10v-4h-8v-4h2V30H51v20h12v-4h-8v-4h6V34H51v4h-6v12h10v-4h-8v-4h2V30H37v20h12v-4h-8v-4h6V34H37v16H23v-6H11v6H5c-3 8-1 18 6 25 10 10 24 16 38 16 28 0 54-15 67-40 2.2-4.2 3.6-8.8 4-13.5v-.5z"/>
          </svg>
        ),
      },
      {
        name: "Git & GitHub",
        tag: "Version Control",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#F05032" d="M124.742 58.378L69.622 3.258c-3.678-3.678-9.64-3.678-13.318 0l-11.436 11.436 14.47 14.47c3.37-1.14 7.226-.4 9.908 2.282 2.698 2.698 3.426 6.588 2.264 9.966l13.94 13.94c3.378-1.162 7.268-.434 9.966 2.264 3.77 3.77 3.77 9.882 0 13.652-3.77 3.77-9.882 3.77-13.652 0-2.84-2.84-3.544-7.018-2.116-10.496L66.14 47.264v35.284c.93.462 1.812 1.074 2.596 1.858 3.77 3.77 3.77 9.882 0 13.652-3.77 3.77-9.882 3.77-13.652 0-3.77-3.77-3.77-9.882 0-13.652.936-.936 2.016-1.636 3.174-2.128V46.598c-1.158-.492-2.238-1.192-3.174-2.128-2.858-2.858-3.55-7.068-2.096-10.558L38.86 19.784 3.258 55.386c-3.678 3.678-3.678 9.64 0 13.318l55.12 55.12c3.678 3.678 9.64 3.678 13.318 0l53.046-53.046c3.678-3.678 3.678-9.64 0-13.318z"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "software-web-architecture",
    label: "Software & Web Architecture",
    subtitle: "Full-stack interfaces, reactive telemetry streams, and REST API microservices",
    items: [
      {
        name: "Next.js 16",
        tag: "React Framework",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="64" cy="64" r="64" fill="#000"/>
            <path fill="#fff" d="M102.5 106.8L51.8 41.5H41.5v44.9h8.5V54.4l45.4 58.7c2.4-2 4.8-4.2 7.1-6.3zM78 41.5h8.5v28.8L78 59.5V41.5z"/>
          </svg>
        ),
      },
      {
        name: "React 19",
        tag: "UI Architecture",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <circle cx="64" cy="64" r="11" fill="#61DAFB"/>
            <ellipse cx="64" cy="64" rx="52" ry="20" fill="none" stroke="#61DAFB" strokeWidth="4.5"/>
            <ellipse cx="64" cy="64" rx="52" ry="20" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(60 64 64)"/>
            <ellipse cx="64" cy="64" rx="52" ry="20" fill="none" stroke="#61DAFB" strokeWidth="4.5" transform="rotate(120 64 64)"/>
          </svg>
        ),
      },
      {
        name: "TypeScript",
        tag: "Typed Systems",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#3178C6" d="M1.5 1.5h125v125H1.5z"/>
            <path fill="#fff" d="M68.7 89.2c-2.4 1.4-5.3 2.1-8.7 2.1-9.1 0-14.8-5.7-14.8-15.1V55.6h-11v-9.5h11V31.5h9.8v14.6h13.7v9.5H65v19.4c0 4.1 2.4 6.3 6.4 6.3 2.5 0 4.7-.6 6.3-1.6l1 9zM102.7 75.8c0 4.8-2 8.7-6 11.6-4 2.9-9.5 4.4-16.5 4.4-4.8 0-9.4-.8-13.8-2.5v-10c4.5 2.5 9.1 3.7 13.8 3.7 3.5 0 6.2-.7 8.1-2 1.9-1.4 2.9-3.2 2.9-5.6 0-1.8-.7-3.4-2-4.6-1.4-1.2-3.8-2.6-7.3-4.1-5.7-2.4-9.8-5.1-12.4-7.9-2.5-2.8-3.8-6.6-3.8-11.2 0-4.6 1.9-8.4 5.7-11.3 3.8-2.9 9-4.3 15.6-4.3 4.2 0 8.3.7 12.3 2v9.6c-3.9-1.9-7.9-2.9-12-2.9-3.2 0-5.7.7-7.4 2-1.7 1.3-2.6 3.1-2.6 5.2 0 1.9.7 3.4 2 4.6 1.3 1.2 3.6 2.5 6.9 3.9 5.8 2.5 10 5.2 12.6 8.1 2.8 2.8 4.2 6.5 4.2 11z"/>
          </svg>
        ),
      },
      {
        name: "Node.js & Express",
        tag: "REST API Microservices",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#539E43" d="M64 8.7L14.4 37.3v57.4L64 123.3l49.6-28.6V37.3L64 8.7zm0 18.2l34.5 19.9v39.8L64 106.5 29.5 86.6V46.8L64 26.9z"/>
          </svg>
        ),
      },
      {
        name: "Tailwind CSS v4",
        tag: "Design System",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#06B6D4" d="M64 32C42.7 32 29.3 42.7 24 64c8-10.7 17.3-14.7 28-12 6.1 1.5 10.5 5.9 15.3 10.9 7.9 8 17 17.1 36.7 17.1 21.3 0 34.7-10.7 40-32-8 10.7-17.3 14.7-28 12-6.1-1.5-10.5-5.9-15.3-10.9-7.9-8-17-17.1-36.7-17.1zM24 64c-21.3 0-34.7 10.7-40 32 8-10.7 17.3-14.7 28-12 6.1 1.5 10.5 5.9 15.3 10.9 7.9 8 17 17.1 36.7 17.1 21.3 0 34.7-10.7 40-32-8 10.7-17.3 14.7-28 12-6.1-1.5-10.5-5.9-15.3-10.9-7.9-8-17-17.1-36.7-17.1z"/>
          </svg>
        ),
      },
      {
        name: "Framer Motion",
        tag: "Spring Physics",
        icon: (
          <svg viewBox="0 0 128 128" className="h-7 w-7">
            <path fill="#0055FF" d="M20 20h88v44H64zM20 64h44l44 44H20zM64 64l44-44v44z"/>
          </svg>
        ),
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────
   Component — Style 37 Dynamic Pill Switcher
   ──────────────────────────────────────────────────────── */

export default function TechMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      {/* Category Tabs with Style 37 Sliding LayoutId Pill */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl border border-zinc-200/90 bg-zinc-100/70 backdrop-blur-sm max-w-fit shadow-xs">
        {categories.map((cat, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(i)}
              className="relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm tracking-wide uppercase select-none transition-colors duration-200"
            >
              {/* Style 37 Sliding layoutId pill */}
              {isActive && (
                <motion.div
                  layoutId="activeTechTab"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 32,
                  }}
                  className="absolute inset-0 rounded-xl bg-black shadow-md"
                />
              )}

              {/* Text snap (Style 37: crisp weight transition and contrast) */}
              <span
                className={`relative z-10 transition-all duration-200 ${
                  isActive
                    ? "font-black text-white"
                    : "font-bold text-zinc-650 hover:text-black"
                }`}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Category Subtitle */}
      <motion.div
        key={categories[activeTab].subtitle}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-50/80 border border-indigo-200/60 max-w-fit text-xs sm:text-sm font-mono font-bold text-indigo-900"
      >
        <span className="text-indigo-500 font-mono">//</span>
        <span>{categories[activeTab].subtitle}</span>
      </motion.div>

      {/* Grid of Verified Tech Items */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5"
      >
        {categories[activeTab].items.map((item) => (
          <TechItemCard key={item.name} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function TechItemCard({ item }: { item: TechItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-zinc-200 bg-white/85 backdrop-blur-md cursor-default transition-all duration-300 hover:border-indigo-400 hover:shadow-lg group shadow-xs"
    >
      {/* Border glow on hover */}
      {hovered && (
        <motion.div
          layoutId="tech-card-glow"
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-emerald-500/10 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Icon */}
      <div className="shrink-0 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 group-hover:bg-white group-hover:scale-110 group-hover:shadow-xs transition-all duration-300">
        {item.icon}
      </div>

      {/* Label and Role Tag */}
      <div className="flex flex-col min-w-0">
        <span className="text-sm sm:text-base font-extrabold text-black uppercase tracking-tight truncate group-hover:text-indigo-950 font-heading">
          {item.name}
        </span>
        <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-wider truncate mt-0.5">
          {item.tag}
        </span>
      </div>
    </motion.div>
  );
}
