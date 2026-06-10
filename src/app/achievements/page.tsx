"use client";

import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";

const achievements = [
  {
    rank: "National Finalist",
    tag: "TOP 5 / 500+ TEAMS",
    title: "Smart India Hackathon 2025 — Hardware Edition",
    description:
      "Advanced to Top 50 out of 864 teams in internal qualifiers. Ranked in the Top 5 out of 500+ competing teams nationally for the primary problem statement to compete at the National Grand Finale.",
    credential: "https://drive.google.com/file/d/1Vy3qPMbipSNLYGE3GdyYMsqRPwHSYtPD/view?usp=sharing",
    credentialLabel: "SIH'25 Certificate",
    color: "bg-black text-white",
  },
  {
    rank: "3rd Place",
    tag: "₹15,000 CASH PRIZE",
    title: "Technovation 2025 — Kurukshetra '25",
    description:
      "Ranked 2nd Runner Up out of 50+ elite hardware teams presenting the Terrain Scout Rover project at CEG Guindy, Anna University. Awarded a cash prize of ₹15,000.",
    credential: "https://drive.google.com/file/d/1AkRdc0y1Qdw9cImu5395G5RwdB8vPJuo/view?usp=sharing",
    credentialLabel: "Technovation Certificate",
    color: "bg-zinc-800 text-white",
  },
  {
    rank: "1st Place",
    tag: "₹5,000 CASH PRIZE",
    title: "Innovate X Impact — V-NEST Business Incubator",
    description:
      "Won 1st Place out of 35 competing startup pitches at V-NEST, the official business incubator of VIT Chennai, demonstrating applied AI/IoT concepts with clear product-market fit.",
    credential: "",
    credentialLabel: "",
    color: "bg-zinc-700 text-white",
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

export default function AchievementsPage() {
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
            Achievements
          </h1>
          <p className="mt-3 text-sm text-zinc-600 font-medium uppercase tracking-widest">
            Hackathons, Tech Competitions & National Recognition
          </p>
          <div className="mt-6 border-b border-zinc-200" />
        </motion.div>

        {/* Achievement Cards */}
        <div className="mt-14 flex flex-col gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass-panel glass-panel-hover rounded-lg overflow-hidden border border-zinc-200"
            >
              <div className="flex flex-col md:flex-row">
                {/* Rank Badge Strip */}
                <div className={`${item.color} px-6 py-6 md:py-0 md:w-56 flex flex-col items-start md:items-center justify-center gap-2 shrink-0`}>
                  <span className="text-[10px] uppercase tracking-widest opacity-80 font-semibold">
                    {item.tag}
                  </span>
                  <span className="text-lg font-bold tracking-tight font-heading">
                    {item.rank}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-semibold text-black tracking-tight font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-700 font-normal leading-relaxed font-body">
                    {item.description}
                  </p>
                  {item.credential && (
                    <a
                      href={item.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
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
    </PageTransition>
  );
}
