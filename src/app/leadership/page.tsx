"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

const leadershipItems = [
  {
    category: "POSITION OF RESPONSIBILITY",
    title: "Deputy Operations Lead",
    org: "Team Namo Nirvana — Official Robotics Special Team, VIT Chennai",
    timeline: "Jan 2025 – Present",
    description:
      "Co-directed a cross-functional organization of 100+ members spanning mechanical, software, and embedded systems engineering. Managed logistically complex participation in 5–6 major competitions per semester, boosting execution efficiency by 35%. Secured 2 corporate sponsors and successfully managed end-to-end merchandise design and logistics.",
    credentialLink: "https://drive.google.com/file/d/13dByHnoyORd2wqy27hb_piQI_UBVmwLd/view?usp=sharing",
    credentialLabel: "Letter of Appreciation",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ),
  },
  {
    category: "EVENT COORDINATION",
    title: "Indian Coast Guard Fitness Festival 2025",
    org: "Event Coordinator — VIT Chennai NCC Unit",
    timeline: "2025",
    description:
      "Awarded Certificate of Appreciation for coordinating logistics, registration, and event scheduling for 1,000+ elite competitors from Armed forces personnel, corporate leaders, and university units.",
    credentialLink: "",
    credentialLabel: "",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
    ),
  },
  {
    category: "NCC CADET LEADERSHIP",
    title: "Lance Corporal → Corporal",
    org: "1 Tamil Nadu Battalion NCC — VIT Chennai Unit",
    timeline: "Republic Day 2025 – Present",
    description:
      "Promoted from Cadet to Lance Corporal (Republic Day 2025), then to Corporal (Independence Day 2025). Secured Triple Honors at CATC-25 Camp: Best Marching Contingent, Best Cultural Performance, and Overall Best Company.",
    credentialLink: "",
    credentialLabel: "",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
    ),
  },
];

const extracurriculars = [
  {
    category: "SPORTS",
    title: "University & National-Level Basketball",
    description:
      "Active university and national-level basketball player. Secured 3rd Place Men's Category at the Founder's Birthday Trophy 2024, SRM IST.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l14.14 14.14"/><path d="M19.07 4.93L4.93 19.07"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10"/><path d="M12 2a15.3 15.3 0 00-4 10 15.3 15.3 0 004 10"/></svg>
    ),
  },
  {
    category: "SOCIAL OUTREACH",
    title: "Core Volunteer — VITeach",
    description:
      "Lead tutoring and community outreach camps for underprivileged children, organizing educational sessions and providing mentorship through VIT Chennai's flagship social initiative.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
    ),
  },
  {
    category: "ACADEMIC CLUBS",
    title: "VIT Chennai Quiz Club",
    description:
      "Active member of the VIT Chennai Quiz Club, participating in inter-college quiz competitions and knowledge exchange forums.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1 },
  }),
};

export default function LeadershipPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black uppercase font-heading">
            Leadership & Life
          </h1>
          <p className="mt-3 text-sm text-zinc-600 font-medium uppercase tracking-widest">
            Positions of Responsibility, Events, Sports & Community
          </p>
          <div className="mt-6 border-b border-zinc-200" />
        </motion.div>

        {/* Leadership Section */}
        <div className="mt-14">
          <h2 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-350" />
            Leadership & Operations
          </h2>
          <div className="flex flex-col gap-6">
            {leadershipItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="glass-panel glass-panel-hover rounded-lg p-6 border border-zinc-200"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded bg-zinc-100 border border-zinc-250 flex items-center justify-center text-black shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-zinc-700 border border-zinc-350 rounded px-2 py-0.5 font-semibold">
                        {item.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-semibold">
                        {item.timeline}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-black tracking-tight font-heading">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-700 font-medium mt-0.5">{item.org}</p>
                    <p className="text-sm text-zinc-700 font-normal leading-relaxed mt-3 font-body">
                      {item.description}
                    </p>
                    {item.credentialLink && (
                      <a
                        href={item.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
                      >
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-2 5l1-3h2l1 3l-2-5z"/><circle cx="12" cy="9" r="6"/></svg>
                        {item.credentialLabel}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Extracurriculars Section */}
        <div className="mt-20">
          <h2 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-350" />
            Extracurriculars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extracurriculars.map((item, i) => (
              <motion.div
                key={i}
                custom={i + leadershipItems.length}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="glass-panel glass-panel-hover rounded-lg p-6 flex flex-col gap-4 border border-zinc-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded bg-zinc-100 border border-zinc-250 flex items-center justify-center text-black">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-semibold">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-black tracking-tight font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-700 font-normal leading-relaxed font-body">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 border-t border-zinc-200 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-sm font-semibold text-black font-heading uppercase tracking-wide">Connect on LinkedIn</h3>
            <p className="text-xs text-zinc-600 mt-1">See posts, updates, and event coverage.</p>
          </div>
          <a
            href="https://www.linkedin.com/in/harshit-singh-3b8467300/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded bg-black px-6 text-xs uppercase tracking-widest text-white font-semibold transition-all duration-300 hover:bg-zinc-800"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            View Profile
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}
