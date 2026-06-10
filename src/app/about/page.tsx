"use client";

import { Award, Briefcase, GraduationCap, Trophy, ChevronRight } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col items-start gap-4 border-b border-zinc-200 pb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl uppercase">
            Profile &amp; Journey
          </h1>
          <p className="text-sm uppercase tracking-widest text-zinc-600 font-medium">
            Academic timeline, professional credentials, and honors
          </p>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mt-12">
          {/* Left Column: Executive Summary & Education */}
          <div className="lg:col-span-1 flex flex-col gap-10">
            {/* Short Bio */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-700 font-extrabold mb-4 flex items-center gap-2">
                <ChevronRight className="h-3 w-3 text-black" />
                Brief Context
              </h2>
              <p className="text-sm text-zinc-700 font-normal leading-relaxed">
                I study Electronics and Computer Engineering at Vellore Institute of Technology. I am deeply interested
                in applied Artificial Intelligence, deep vision pipelines, edge optimizations, and complex physical machines (ROVs, Rocker-Bogies, Drones).
              </p>
            </div>

            {/* Education Timeline */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-700 font-extrabold mb-6 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-black" />
                Education
              </h2>
              <div className="flex flex-col gap-6 pl-2 border-l border-zinc-200">
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-zinc-600">2023 – 2027</span>
                  <span className="block text-xs font-bold text-black uppercase mt-1">B.Tech ECE (Undergrad)</span>
                  <span className="block text-[11px] text-zinc-700 font-normal mt-0.5">VIT Chennai (CGPA: 8.07)</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-semibold text-zinc-600">2022 – 2023</span>
                  <span className="block text-xs font-bold text-black uppercase mt-1">Class XII Secondary</span>
                  <span className="block text-[11px] text-zinc-700 font-normal mt-0.5">New Era School, Ghaziabad (87.2%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Achievements */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Experience */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-700 font-extrabold mb-6 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-black" />
                Professional Milestones
              </h2>
              <div className="flex flex-col gap-8">
                {/* STEMTEC */}
                <div className="glass-panel rounded-lg p-6 border border-zinc-200">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-xs font-bold text-black uppercase">AI &amp; Robotics Intern</h3>
                      <span className="block text-[11px] text-zinc-600 mt-0.5 font-medium">STEMTEC AI &amp; Robotics Tech | Chennai, IN</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold tracking-widest bg-zinc-150 border border-zinc-300 text-zinc-700 uppercase">
                      Jul &apos;25 – Aug &apos;25
                    </span>
                  </div>
                  <ul className="text-sm text-zinc-700 font-normal leading-relaxed flex flex-col gap-2 list-disc pl-4">
                    <li>Developed reactive obstacle navigation nodes processing LiDAR `/scan` arrays at 10 Hz under ROS 2.</li>
                    <li>Achieved sub-50 ms delay publishing velocity triggers to `/cmd_vel` loops.</li>
                    <li>Validated odometry profiles across simulation (Gazebo) and real chassis.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-zinc-200">
                    <a
                      href="https://drive.google.com/file/d/1tlTXqB9SfdCe-Xos92JxB9dEDdrS36nc/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
                    >
                      <Trophy className="h-3.5 w-3.5" />
                      View Certificate
                    </a>
                  </div>
                </div>

                {/* Namo Nirvana */}
                <div className="glass-panel rounded-lg p-6 border border-zinc-200">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <div>
                      <h3 className="text-xs font-bold text-black uppercase">Deputy Operations Lead</h3>
                      <span className="block text-[11px] text-zinc-600 mt-0.5 font-medium">Team Namo Nirvana (Special Robotics Unit)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[8px] font-bold tracking-widest bg-zinc-150 border border-zinc-300 text-zinc-700 uppercase">
                      Jan &apos;25 – Present
                    </span>
                  </div>
                  <ul className="text-sm text-zinc-700 font-normal leading-relaxed flex flex-col gap-2 list-disc pl-4">
                    <li>Co-directed a 100+ member systems engineering, mechanical, and controls crew.</li>
                    <li>Boosted semester coordination times by 35% across 5-6 target national competitions.</li>
                    <li>Structured corporate sponsorships, budgets, and hardware parts sourcing pipelines.</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-zinc-200">
                    <a
                      href="https://drive.google.com/file/d/13dByHnoyORd2wqy27hb_piQI_UBVmwLd/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300"
                    >
                      <Trophy className="h-3.5 w-3.5" />
                      View Letter of Appreciation
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards & Competitions */}
            <div>
              <h2 className="text-xs uppercase tracking-widest text-zinc-700 font-extrabold mb-6 flex items-center gap-2">
                <Award className="h-4 w-4 text-black" />
                Honors &amp; Awards
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* SIH */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="block text-[9px] font-bold uppercase text-zinc-650">Qualifiers</span>
                    <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight">SIH&apos;25 National Finalist</h4>
                    <p className="text-sm text-zinc-700 font-normal mt-2 leading-relaxed">
                      Ranked Top 5 out of 500+ competing teams globally at the Smart India Hackathon Hardware edition.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1Vy3qPMbipSNLYGE3GdyYMsqRPwHSYtPD/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300 mt-4"
                  >
                    SIH Certificate
                  </a>
                </div>

                {/* Technovation */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200 flex flex-col justify-between">
                  <div>
                    <span className="block text-[9px] font-bold uppercase text-zinc-650">3rd Place</span>
                    <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight">Technovation 2025</h4>
                    <p className="text-sm text-zinc-700 font-normal mt-2 leading-relaxed">
                      CEG Guindy Kurukshetra &apos;25. Awarded ₹15,000 for high-performance rocker-bogie Terrain Scout.
                    </p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1AkRdc0y1Qdw9cImu5395G5RwdB8vPJuo/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors duration-300 mt-4"
                  >
                    Tech Certificate
                  </a>
                </div>

                {/* V-NEST */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200">
                  <span className="block text-[9px] font-bold uppercase text-zinc-650">1st Place</span>
                  <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight">Innovate X Impact</h4>
                  <p className="text-sm text-zinc-700 font-normal mt-2 leading-relaxed">
                    V-NEST Business Incubator Winner. Pitch session for edge robotics startup, awarded ₹5,000.
                  </p>
                </div>

                {/* NCC */}
                <div className="glass-panel p-5 rounded-lg border border-zinc-200">
                  <span className="block text-[9px] font-bold uppercase text-zinc-650">Corporal</span>
                  <h4 className="text-xs font-bold text-black uppercase mt-1 leading-tight">NCC Leadership</h4>
                  <p className="text-sm text-zinc-700 font-normal mt-2 leading-relaxed">
                    1 Tamil Nadu Battalion NCC. Promoted to Corporal. Triple Honors at camp: Marching, Cultural &amp; Co.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
