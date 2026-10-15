"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Leadership & Interests", href: "/leadership" },
  { name: "Internship", href: "/internship" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/#contact" },
];

function AnimatedBrandLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const name = "HARSHIT SINGH";

  return (
    <Link
      href="/"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex items-center gap-3 select-none"
    >
      {/* Kinetic Animated Name (Style: Character Ripple Wave + Gradient Shift) */}
      <div className="flex items-center">
        <span className="flex text-sm sm:text-base font-black tracking-wider uppercase font-heading">
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              animate={
                isHovered
                  ? {
                      y: [0, -5, 0],
                      color: ["#000000", "#4f46e5", "#000000"],
                    }
                  : { y: 0, color: "#000000" }
              }
              transition={{
                duration: 0.35,
                delay: i * 0.025,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </div>

      {/* Live Permanent Location Badge: Chennai, India */}
      <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-zinc-200/90 bg-zinc-100/70 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider uppercase text-zinc-700 shadow-2xs group-hover:border-indigo-400 group-hover:bg-indigo-50/60 group-hover:text-indigo-950 transition-all duration-300">
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
        </span>
        <span>Chennai, IN</span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Special handling for Contact — smooth scroll if on home page
    if (href === "/#contact") {
      e.preventDefault();
      if (pathname === "/") {
        // Already on home — smooth scroll
        const el = document.getElementById("contact");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home then scroll (hash will trigger browser scroll)
        router.push("/#contact");
      }
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Kinetic Logo / Branding + Location Tag */}
          <AnimatedBrandLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navItems.map((item) => {
              const isActive =
                item.href === "/#contact"
                  ? false
                  : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 text-xs uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-black font-medium"
                      : "text-zinc-400 hover:text-black"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-black"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-zinc-500 hover:text-black transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-xl px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/#contact"
                    ? false
                    : pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsOpen(false);
                    }}
                    className={`text-xs uppercase tracking-widest py-2 transition-colors duration-300 ${
                      isActive
                        ? "text-black font-medium"
                        : "text-zinc-400 hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
