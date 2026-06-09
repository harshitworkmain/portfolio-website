"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────
   Tech Stack Data — official brand colours per icon
   ──────────────────────────────────────────────────────── */

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

interface TechCategory {
  label: string;
  items: TechItem[];
}

const categories: TechCategory[] = [
  {
    label: "Languages",
    items: [
      {
        name: "C",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-1.7-1-4.5-1-6.2 0L12.6 30.7c-1.7 1-3.1 3.5-3.1 5.5v55.7c0 2 1.4 4.5 3.1 5.5l48.3 27.8c1.7 1 4.5 1 6.2 0l48.3-27.8c1.7-1 3.1-3.5 3.1-5.5V36.2c.1-2-1.3-4.5-3.1-5.5zM64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5 24.5 11 24.5 24.5-11 24.5-24.5 24.5z"/>
            <path fill="#fff" d="M64 44.5c-10.8 0-19.5 8.7-19.5 19.5S53.2 83.5 64 83.5 83.5 74.8 83.5 64 74.8 44.5 64 44.5zm0 34c-8 0-14.5-6.5-14.5-14.5S56 49.5 64 49.5 78.5 56 78.5 64 72 78.5 64 78.5z"/>
          </svg>
        ),
      },
      {
        name: "Python",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <linearGradient id="pyA" x1="12.959" x2="79.639" y1="12.039" y2="78.719" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#387eb8"/><stop offset="1" stopColor="#366994"/></linearGradient>
            <linearGradient id="pyB" x1="49.414" x2="110.008" y1="56.648" y2="118.738" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffe052"/><stop offset="1" stopColor="#ffc331"/></linearGradient>
            <path fill="url(#pyA)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
            <path fill="url(#pyB)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
          </svg>
        ),
      },
      {
        name: "Java",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
            <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
            <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
            <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 63.056 31.071c-21.222 13.278-4.836 20.852-.003 29.51C50.837 49.104 41.106 39.666 47.754 30.944 57.571 17.972 81.35 11.647 76.491 1.587z"/>
            <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
          </svg>
        ),
      },
      {
        name: "HTML",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
            <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
            <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
            <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
          </svg>
        ),
      },
      {
        name: "CSS",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543z"/>
            <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"/>
            <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V24.208h34.682l-.332 3.711-3.4 38.114H64.001z"/>
            <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"/>
            <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"/>
            <path fill="#EBEBEB" d="M64.048 24.208v13.058H30.64l-.277-3.108-.633-7.059-.33-2.891zm-.047 27.221v13.157H46.119l-.277-3.108-.634-7.059-.33-2.99z"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      {
        name: "OpenCV",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <circle cx="64" cy="64" r="28" fill="none" stroke="#5C3EE8" strokeWidth="8"/>
            <circle cx="36" cy="90" r="12" fill="#FF0000"/>
            <circle cx="92" cy="90" r="12" fill="#00AA00"/>
            <circle cx="64" cy="36" r="12" fill="#5C3EE8"/>
          </svg>
        ),
      },
      {
        name: "PyTorch",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#EE4C2C" d="M64.3 8.7L40.6 32.4c-16 16-16 41.8 0 57.7 16 16 41.8 16 57.7 0 16-16 16-41.8 0-57.7L89.7 41l-8.6 8.6 8.6 8.6c9.3 9.3 9.3 24.5 0 33.8s-24.5 9.3-33.8 0-9.3-24.5 0-33.8l17-17 8.6-8.6L64.3 8.7z"/>
            <circle fill="#EE4C2C" cx="89" cy="26" r="7"/>
          </svg>
        ),
      },
      {
        name: "TensorFlow",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#FF6F00" d="M64 4L16 28v72l48 24 48-24V28L64 4zm0 10.4L100 36v56L64 113.6 28 92V36L64 14.4z"/>
            <path fill="#FF6F00" d="M64 30L40 42v36l24 12 24-12V42L64 30zm0 8l16 8v24L64 78 48 70V46l16-8z"/>
          </svg>
        ),
      },
      {
        name: "YOLOv8",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <rect x="20" y="20" width="88" height="88" rx="12" fill="none" stroke="#6C3BAA" strokeWidth="6"/>
            <rect x="40" y="40" width="20" height="20" rx="2" fill="#6C3BAA" opacity="0.6"/>
            <rect x="68" y="40" width="20" height="20" rx="2" fill="#6C3BAA" opacity="0.8"/>
            <rect x="40" y="68" width="20" height="20" rx="2" fill="#6C3BAA"/>
            <circle cx="78" cy="78" r="10" fill="#6C3BAA"/>
          </svg>
        ),
      },
      {
        name: "ROS 2",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
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
        name: "NumPy",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#4DABCF" d="M64 16L28 36v56l36 20 36-20V36L64 16zm0 8l28 16v40L64 96 36 80V40l28-16z"/>
            <path fill="#4D77CF" d="M64 24L36 40v40l28 16V24z"/>
            <text x="44" y="78" fontFamily="sans-serif" fontWeight="bold" fontSize="32" fill="#fff">N</text>
          </svg>
        ),
      },
      {
        name: "Pandas",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
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
        name: "MediaPipe",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
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
        name: "CVZone",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <rect x="20" y="20" width="88" height="88" rx="16" fill="#2196F3"/>
            <text x="32" y="82" fontFamily="sans-serif" fontWeight="bold" fontSize="40" fill="#fff">CV</text>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Systems & Platforms",
    items: [
      {
        name: "Linux",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#333" d="M64 6C38.6 6 18 26.6 18 52c0 16.2 8.4 30.4 21 38.6l-3 14.4h56l-3-14.4C101.6 82.4 110 68.2 110 52 110 26.6 89.4 6 64 6z"/>
            <circle cx="50" cy="46" r="6" fill="#fff"/>
            <circle cx="78" cy="46" r="6" fill="#fff"/>
            <circle cx="50" cy="46" r="3" fill="#000"/>
            <circle cx="78" cy="46" r="3" fill="#000"/>
            <path fill="#FBC02D" d="M64 100c-8 0-14-3-14-3l2-8s5 3 12 3 12-3 12-3l2 8s-6 3-14 3z"/>
          </svg>
        ),
      },
      {
        name: "ROS 2 Middleware",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <rect x="16" y="16" width="96" height="96" rx="12" fill="#22314E"/>
            <text x="24" y="78" fontFamily="monospace" fontWeight="bold" fontSize="28" fill="#fff">ROS</text>
          </svg>
        ),
      },
      {
        name: "Data Pipelines",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path d="M20 44h28l12 20-12 20H20l12-20L20 44z" fill="#4CAF50"/>
            <path d="M52 44h28l12 20-12 20H52l12-20L52 44z" fill="#2196F3"/>
            <path d="M84 44h24l-12 20 12 20H84l-12-20 12-20z" fill="#FF9800"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Dev Tools",
    items: [
      {
        name: "VS Code",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#0065A9" d="M96.4 6.4l-26 20L42 6.4 6.4 24v80l35.6 17.6 28.4-20 26 20L121.6 104V24L96.4 6.4zM42 88.4L22 76V52l20-12.4v48.8zm48 0l-20 12.4V39.6L90 52v36.4z"/>
          </svg>
        ),
      },
      {
        name: "Git",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fill="#F05032" d="M124.742 58.378L69.622 3.258c-3.678-3.678-9.64-3.678-13.318 0l-11.436 11.436 14.47 14.47c3.37-1.14 7.226-.4 9.908 2.282 2.698 2.698 3.426 6.588 2.264 9.966l13.94 13.94c3.378-1.162 7.268-.434 9.966 2.264 3.77 3.77 3.77 9.882 0 13.652-3.77 3.77-9.882 3.77-13.652 0-2.84-2.84-3.544-7.018-2.116-10.496L66.14 47.264v35.284c.93.462 1.812 1.074 2.596 1.858 3.77 3.77 3.77 9.882 0 13.652-3.77 3.77-9.882 3.77-13.652 0-3.77-3.77-3.77-9.882 0-13.652.936-.936 2.016-1.636 3.174-2.128V46.598c-1.158-.492-2.238-1.192-3.174-2.128-2.858-2.858-3.55-7.068-2.096-10.558L38.86 19.784 3.258 55.386c-3.678 3.678-3.678 9.64 0 13.318l55.12 55.12c3.678 3.678 9.64 3.678 13.318 0l53.046-53.046c3.678-3.678 3.678-9.64 0-13.318z"/>
          </svg>
        ),
      },
      {
        name: "GitHub",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path fillRule="evenodd" clipRule="evenodd" fill="#333" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19A57.89 57.89 0 0164 33.53a57.9 57.9 0 0115.155 2.039c11.523-7.813 16.587-6.19 16.587-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Professional Skills",
    items: [
      {
        name: "Software Design",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <rect x="20" y="20" width="88" height="88" rx="14" fill="none" stroke="#555" strokeWidth="5"/>
            <path d="M44 48l-12 16 12 16M84 48l12 16-12 16" stroke="#555" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="70" y1="40" x2="58" y2="88" stroke="#555" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: "Debugging",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <circle cx="64" cy="64" r="40" fill="none" stroke="#E53935" strokeWidth="5"/>
            <path d="M44 64h40M64 44v40" stroke="#E53935" strokeWidth="5" strokeLinecap="round"/>
            <circle cx="64" cy="64" r="12" fill="#E53935" opacity="0.3"/>
          </svg>
        ),
      },
      {
        name: "Problem-Solving",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <path d="M64 20c-22 0-40 16-40 36 0 12 6 22 16 28v16h48V84c10-6 16-16 16-28 0-20-18-36-40-36z" fill="none" stroke="#FFA000" strokeWidth="5"/>
            <line x1="48" y1="108" x2="80" y2="108" stroke="#FFA000" strokeWidth="5" strokeLinecap="round"/>
            <line x1="64" y1="44" x2="64" y2="72" stroke="#FFA000" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="64" cy="80" r="3" fill="#FFA000"/>
          </svg>
        ),
      },
      {
        name: "Collaboration",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <circle cx="44" cy="44" r="14" fill="none" stroke="#1976D2" strokeWidth="5"/>
            <circle cx="84" cy="44" r="14" fill="none" stroke="#1976D2" strokeWidth="5"/>
            <path d="M24 96c0-16 12-28 28-28h4c-4 4-8 12-8 20v8H24z" fill="#1976D2" opacity="0.6"/>
            <path d="M104 96c0-16-12-28-28-28h-4c4 4 8 12 8 20v8h24z" fill="#1976D2" opacity="0.6"/>
          </svg>
        ),
      },
      {
        name: "Time Management",
        icon: (
          <svg viewBox="0 0 128 128" className="h-8 w-8">
            <circle cx="64" cy="68" r="40" fill="none" stroke="#388E3C" strokeWidth="5"/>
            <line x1="64" y1="68" x2="64" y2="44" stroke="#388E3C" strokeWidth="5" strokeLinecap="round"/>
            <line x1="64" y1="68" x2="82" y2="68" stroke="#388E3C" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="64" cy="68" r="4" fill="#388E3C"/>
            <line x1="64" y1="20" x2="64" y2="28" stroke="#388E3C" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────── */

export default function TechMatrix() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            onClick={() => setActiveCategory(i)}
            className={`px-4 py-2 rounded text-[10px] font-semibold tracking-widest uppercase transition-all duration-300 border ${
              activeCategory === i
                ? "bg-black text-white border-black"
                : "bg-white text-zinc-400 border-zinc-200 hover:text-black hover:border-zinc-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4"
      >
        {categories[activeCategory].items.map((item) => (
          <TechIcon key={item.name} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

function TechIcon({ item }: { item: TechItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.12, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex flex-col items-center gap-2 p-4 rounded-lg border border-zinc-100 bg-white/40 backdrop-blur-sm cursor-default transition-shadow duration-300 hover:shadow-lg hover:border-zinc-300"
    >
      {/* Glow backdrop */}
      {hovered && (
        <motion.div
          layoutId="tech-glow"
          className="absolute inset-0 rounded-lg bg-gradient-to-br from-zinc-100/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      <div className="relative z-10">{item.icon}</div>
      <span className="relative z-10 text-[9px] font-semibold uppercase tracking-widest text-zinc-500 text-center leading-tight">
        {item.name}
      </span>
    </motion.div>
  );
}
