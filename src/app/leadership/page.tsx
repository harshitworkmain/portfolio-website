"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

/* ════════════════════════════════════════════════════════════
   DATA — Namo Nirvana Operation Logs
   ════════════════════════════════════════════════════════════ */

interface OperationLog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  linkedinUrl?: string;
}

const namoNirvanaLogs: OperationLog[] = [
  {
    id: "NN-01",
    title: "Official Recognition",
    subtitle: "Establishing Team Namo Nirvana as VIT Chennai's Official Robotics Special Team",
    description:
      "Team Namo Nirvana was officially recognized as the flagship Robotics Special Team of VIT Chennai, representing the university at RoboCup (national & international) and other prestigious competitions.",
    images: [
      "/images/leadership/namo-nirvana/officially-recognized-as-special-team.jpeg",
      "/images/leadership/namo-nirvana/nn-logo.jpeg",
      "/images/leadership/namo-nirvana/nn-logo-with-name.jpeg",
    ],
  },
  {
    id: "NN-02",
    title: "Recruitment & Training",
    subtitle: "Designing recruitment pipelines across 6 departments",
    description:
      "Designed core recruitment interview grids for departments spanning Programming, Electronics, Mechatronics, Research & Science, Media & Outreach, and Operations. Formally addressed and oriented new recruits as Deputy Operations Lead.",
    images: [
      "/images/leadership/namo-nirvana/special-team-recruit-nterview.jpeg",
      "/images/leadership/namo-nirvana/special-team-recruit-nterview1.jpeg",
      "/images/leadership/namo-nirvana/new-recruits-addressing1.jpeg",
      "/images/leadership/namo-nirvana/new-recruits-addressing2.jpeg",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/namo-nirvana_namonirvana-vitchennai-robotics-activity-7351808302894272513-nrfe?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
  },
  {
    id: "NN-03",
    title: "Project Showcases",
    subtitle: "Pro-VC review panels and university-wide technical demonstrations",
    description:
      "Displayed robotics systems to university officials. Coordinated live hardware demonstrations during institutional reviews by the Pro-Vice Chancellor and faculty panels.",
    images: [
      "/images/leadership/namo-nirvana/college-special-team-showcase-grp-photo.jpeg",
      "/images/leadership/namo-nirvana/college-special-team-showcase-proVC-review.jpeg",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/harshit-singh-3b8467300_namonirvana-futurecreators-roboticsrevolution-activity-7322695131084595200-N7Kp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
  },
  {
    id: "NN-04",
    title: "Team Merchandising",
    subtitle: "End-to-end design, sourcing, and logistics for official team merchandise",
    description:
      "Managed the full pipeline from design to distribution for official team caps and apparel. Coordinated vendor sourcing, quality checks, and logistics to outfit 100+ team members.",
    images: ["/images/leadership/namo-nirvana/nn-cap-merch.jpeg"],
  },
  {
    id: "NN-05",
    title: "Tenure Conclusion",
    subtitle: "Farewell reviews with the School Dean & Associate Dean",
    description:
      "Held final reviews and group photos with the School Dean and Associate Dean upon completing tenure as Deputy Operations Lead. Documented operational learnings for the incoming team.",
    images: [
      "/images/leadership/namo-nirvana/team-photo-with-school-dean-assocDean-as-tenure-ends.jpeg",
      "/images/leadership/namo-nirvana/team-photo-with-school-dean-assocDean-as-tenure-ends1.jpeg",
    ],
  },
  {
    id: "NN-06",
    title: "Power Handover",
    subtitle: "Responsibilities transition to the junior core team",
    description:
      "Conducted the official operations handoff ceremony, transferring all responsibilities, documentation, and vendor relationships to the incoming junior core team.",
    images: [
      "/images/leadership/namo-nirvana/power-transfer-to-juniors1.jpeg",
      "/images/leadership/namo-nirvana/power-transfer-to-juniors2.jpeg",
      "/images/leadership/namo-nirvana/power-transfer-to-juniors3.jpeg",
      "/images/leadership/namo-nirvana/power-transfer-to-juniors4.jpeg",
      "/images/leadership/namo-nirvana/power-transfer-to-juniors5.jpeg",
      "/images/leadership/namo-nirvana/power-transfer-to-juniors6.jpeg",
      "/images/leadership/namo-nirvana/power-transfer-to-juniors7.jpeg",
      "/images/leadership/namo-nirvana/power-transfer-to-juniors8.jpeg",
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   DATA — NCC Promotion Timeline & Camp Events
   ════════════════════════════════════════════════════════════ */

interface NCCRank {
  rank: string;
  period: string;
  occasion: string;
  chevrons: number; // 0 = cadet, 1 = L/Cpl, 2 = Cpl
}

const nccRanks: NCCRank[] = [
  {
    rank: "Cadet",
    period: "Aug 2024 – Feb 2025",
    occasion: "Initial Enlistment",
    chevrons: 0,
  },
  {
    rank: "Lance Corporal",
    period: "Jan 2025 – Oct 2025",
    occasion: "76th Republic Day (Jan 26, 2025)",
    chevrons: 1,
  },
  {
    rank: "Corporal",
    period: "Aug 2025 – Jan 2026",
    occasion: "79th Independence Day (Aug 15, 2025)",
    chevrons: 2,
  },
];

interface NCCEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  certificateUrl?: string;
  certificateLabel?: string;
}

const nccEvents: NCCEvent[] = [
  {
    id: "NCC-CGFF",
    title: "Coast Guard Fitness Festival 2025",
    date: "Feb 15, 2025",
    description:
      "Organized by the Indian Coast Guard (Region East) for the 49th Raising Day. Under VIT NCC, assisted with student coordination, registration management, and piloted chief guests Dr. J. Radhakrishnan (IAS) and IG Datwinder Singh Saini (TM, ICG Region East). Managed obstacle courses, zumba, and ₹2L prize pool for 700+ participants.",
    images: [
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-10.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-1.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-2.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-groupphoto-3.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-4.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-5.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-Datwinder-6.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-7.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-8.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-9.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-11.jpeg",
      "/images/leadership/coast-guard/coast-guard-fitness-festival-2025-Radhakrishnan-12.jpeg",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1zLqcapaGHt8TDJJSpMiYdnpmeqqUG60l/view?usp=sharing",
    certificateLabel: "CGFF'25 Certificate",
  },
  {
    id: "NCC-SALAMI",
    title: "Valedictory Address Salami Shastra",
    date: "July 2025",
    description:
      "Selected for the elite Guard of Honor presenting parade salute and honors to Dr. Pramod Sawant, Chief Minister of Goa, during his two-day national conference visit on 'Road Map to VIKSIT BHARAT' at VIT Chennai campus.",
    images: [
      "/images/leadership/ncc/salami-shastra-to-goa-cm2.jpeg",
      "/images/leadership/ncc/salami-shastra-to-goa-cm1.jpeg",
      "/images/leadership/ncc/salami-shastra-to-goa-cm3.jpeg",
      "/images/leadership/ncc/salami-shastra-to-goa-cm4.jpeg",
    ],
  },
  {
    id: "NCC-PARAKRAM",
    title: "Parakram Divas Piloting & Guard of Honor",
    date: "Jan 23, 2025",
    description:
      "Piloted the parents of Ashok Chakra (Posthumous) recipient Major Mukund Varadarajan AC — Shri R. Varadarajan and Smt. Geetha Varadarajan — alongside senior army officers during the patriotic tribute event at VIT Chennai.",
    images: [
      "/images/leadership/ncc/piloting-maj-varadrajans-parents-army-officers2.jpeg",
      "/images/leadership/ncc/piloting-maj-varadrajans-parents-army-officers1.jpeg",
    ],
  },
  {
    id: "NCC-OTA",
    title: "OTA Chennai Passing Out Parade Camps",
    date: "2025",
    description:
      "Visited Officers Training Academy (OTA) Chennai for the Passing Out Parade. Explored military infrastructure, drill squares, and interacted with senior OTA instructors, officer cadets (including VIT alumni), and army officers.",
    images: [
      "/images/leadership/ncc/ota-adjutants-parade-visit3.jpeg",
      "/images/leadership/ncc/ota-adjutants-parade-visit1.jpeg",
      "/images/leadership/ncc/ota-adjutants-parade-visit2.jpeg",
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   DATA — Basketball
   ════════════════════════════════════════════════════════════ */

const basketballImages = [
  "/images/leadership/basketball/srm-ktr-founders-trophy-third-place1.jpeg",
  "/images/leadership/basketball/srm-ktr-founders-trophy-third-place2.jpeg",
  "/images/leadership/basketball/srm-ktr-founders-trophy-third-place3.jpeg",
  "/images/leadership/basketball/pre-vibrance-tournament1.jpeg",
  "/images/leadership/basketball/pre-vibrance-tournament2.jpeg",
  "/images/leadership/basketball/pre-vibrance-tournament3.jpeg",
  "/images/leadership/basketball/cbse-cluster-nationals-2019-quarterfinalists1.jpeg",
  "/images/leadership/basketball/cbse-cluster-nationals-2019-quarterfinalists2.jpeg",
  "/images/leadership/basketball/cbse-cluster-nationals-2019-quarterfinalists3.jpeg",
  "/images/leadership/basketball/dps-meerut-road-u-15-team-fun-photo.jpeg",
];

/* ════════════════════════════════════════════════════════════
   DATA — VITeach Outreach Campaigns
   ════════════════════════════════════════════════════════════ */

interface OutreachCampaign {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
  linkedinUrls?: { label: string; url: string }[];
}

const viteachCampaigns: OutreachCampaign[] = [
  {
    id: "VT-ANSALDO",
    title: "Ansaldo Academy — SDG 4 Quality Education",
    date: "Oct 22 & 24, 2024",
    description:
      "Coordinated educational camps at Ansaldo Academy (Thazhambur, Chennai). Ran interactive curiosity sessions, hygiene awareness, nutrition workshops with yoga, and 9th-grade academic stream mentoring.",
    images: [
      "/images/leadership/viteach/ansaldo2.jpeg",
      "/images/leadership/viteach/ansaldo1.jpeg",
      "/images/leadership/viteach/ansaldo3.jpeg",
      "/images/leadership/viteach/ansaldo4.jpeg",
      "/images/leadership/viteach/ansaldo5.jpeg",
    ],
    linkedinUrls: [
      {
        label: "VITeach Post",
        url: "https://www.linkedin.com/posts/viteach-vitc_qualityeducation-viteach-ansaldoacademy-ugcPost-7271260000675667973-AHow?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
      },
      {
        label: "Lavanya's Post",
        url: "https://www.linkedin.com/posts/darshnilavanya_sdg-education-youth-ugcPost-7255810360899743746-sQyi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
      },
    ],
  },
  {
    id: "VT-DONATION",
    title: "Sirudhavoor Stationery Donation Drive",
    date: "Apr 15, 2025",
    description:
      "Led a 3-day flagship donation logistics track, collecting and delivering academic stationery supplies to students of Sirudhavoor Government High School alongside Faculty Coordinator Dr. Sathiya Narayanan Sekar.",
    images: [
      "/images/leadership/viteach/donation-video.mp4",
      "/images/leadership/viteach/donation1.jpeg",
      "/images/leadership/viteach/donation2.jpeg",
      "/images/leadership/viteach/donation3.jpeg",
      "/images/leadership/viteach/donation4.jpeg",
      "/images/leadership/viteach/donation5.jpeg",
      "/images/leadership/viteach/donation6.jpeg",
      "/images/leadership/viteach/donation7.jpeg",
    ],
    linkedinUrls: [
      {
        label: "Harshit's Post",
        url: "https://www.linkedin.com/posts/harshit-singh-3b8467300_viteach-donationdrive-schoolvisit-activity-7318722780353482753-emC-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
      },
      {
        label: "Lavanya's Post",
        url: "https://www.linkedin.com/posts/darshnilavanya_communityservice-stationerydrive-sdg-ugcPost-7319651650325946368-6uDt?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg",
      },
    ],
  },
  {
    id: "VT-BEACH",
    title: "Kovalam Beach Cleanup Camp",
    date: "Aug 9, 2025",
    description:
      "Coordinated volunteering logistics and safety protocols for an environmental beach cleaning camp at Kovalam Beach.",
    images: [
      "/images/leadership/viteach/beach3.jpeg",
      "/images/leadership/viteach/beach1.jpeg",
      "/images/leadership/viteach/beach2.jpeg",
      "/images/leadership/viteach/beach4.jpeg",
      "/images/leadership/viteach/beach5.jpeg",
      "/images/leadership/viteach/beach6.jpeg",
      "/images/leadership/viteach/beach7.jpeg",
      "/images/leadership/viteach/beach8.jpeg",
    ],
  },
  {
    id: "VT-PICT",
    title: "Pictionary — Pre-Vibrance Event",
    date: "Feb 17, 2025",
    description:
      "Student Coordinator managing 22 volunteers across Registration (4), Design (5), Marketing (3), and Groundwork (10). Organized Skribbl, Akinator, and Whisper Challenge games with a custom paper-slip points calculator.",
    images: [
      "/images/leadership/viteach/pict4.jpeg",
      "/images/leadership/viteach/pict1.jpeg",
      "/images/leadership/viteach/pict2.jpeg",
      "/images/leadership/viteach/pict3.jpeg",
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   COMPONENT — Lightbox Modal (reusable gallery viewer)
   ════════════════════════════════════════════════════════════ */

function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [active, setActive] = useState(initialIndex);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="absolute top-5 left-5 text-white/60 text-xs font-mono tracking-widest">
        {active + 1} / {images.length}
      </div>

      <div
        className="relative w-[90vw] max-w-4xl aspect-[4/3] rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            {images[active].endsWith(".mp4") ? (
              <video
                src={images[active]}
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                src={images[active]}
                alt={`Photo ${active + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div
        className="mt-4 flex gap-2 overflow-x-auto max-w-[90vw] pb-2 px-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            className={`relative shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
              i === active
                ? "border-white scale-105"
                : "border-white/20 opacity-60 hover:opacity-100"
            }`}
          >
            {src.endsWith(".mp4") ? (
              <video src={src} className="w-full h-full object-cover" muted />
            ) : (
              <Image src={src} alt={`Thumb ${i + 1}`} fill sizes="64px" className="object-cover" />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENT — Compact Media Gallery (featured + thumbs)
   ════════════════════════════════════════════════════════════ */

function MediaGallery({ images }: { images: string[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);

  const MAX_THUMBS = 4;
  const visibleThumbs = images.slice(0, MAX_THUMBS);
  const overflow = images.length - MAX_THUMBS;

  const openLightbox = (idx: number) => {
    setLightboxStart(idx);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-zinc-100 cursor-pointer group"
        onClick={() => openLightbox(activeIdx)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {images[activeIdx].endsWith(".mp4") ? (
              <video
                src={images[activeIdx]}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                src={images[activeIdx]}
                alt="Featured"
                fill
                sizes="(max-width: 768px) 90vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-2">
          {visibleThumbs.map((src, i) => {
            const isLast = i === MAX_THUMBS - 1 && overflow > 0;
            return (
              <button
                key={src}
                onClick={() => (isLast ? openLightbox(i) : setActiveIdx(i))}
                className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden border transition-all duration-200 ${
                  i === activeIdx
                    ? "border-black ring-1 ring-black/20"
                    : "border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {src.endsWith(".mp4") ? (
                  <video src={src} className="w-full h-full object-cover" muted />
                ) : (
                  <Image src={src} alt={`Thumb ${i + 1}`} fill sizes="80px" className="object-cover" />
                )}
                {isLast && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold font-mono">+{overflow}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={images}
            initialIndex={lightboxStart}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENT — Document Viewer Modal (LOR / Certificates)
   ════════════════════════════════════════════════════════════ */

function DocumentViewer({
  src,
  title,
  highlights,
  onClose,
}: {
  src: string;
  title: string;
  highlights?: string[];
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors"
          aria-label="Close"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image Panel */}
        <div className="relative flex-1 min-h-[300px] md:min-h-0 bg-zinc-50 overflow-auto flex items-center justify-center p-4">
          <div style={{ transform: `scale(${zoom})`, transition: "transform 0.3s ease" }}>
            <Image
              src={src}
              alt={title}
              width={600}
              height={800}
              className="rounded shadow-lg max-h-[75vh] w-auto object-contain"
            />
          </div>
          {/* Zoom controls */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white/90 backdrop-blur rounded-full shadow px-3 py-1.5 border border-zinc-200">
            <button
              onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
              className="text-xs font-bold text-zinc-600 hover:text-black px-2"
            >
              −
            </button>
            <span className="text-[10px] font-mono text-zinc-500 px-2 self-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
              className="text-xs font-bold text-zinc-600 hover:text-black px-2"
            >
              +
            </button>
          </div>
        </div>

        {/* Side Panel (details) */}
        {highlights && highlights.length > 0 && (
          <div className="w-full md:w-72 border-t md:border-t-0 md:border-l-2 border-zinc-300 p-5 overflow-y-auto bg-zinc-50/80 max-h-[85vh]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-700 mb-3 font-heading">
              {title}
            </h3>
            <div className="flex flex-col gap-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-600 leading-relaxed">
                  <span className="text-zinc-400 mt-0.5 shrink-0">▸</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENT — NCC Chevron SVG
   ════════════════════════════════════════════════════════════ */

function ChevronSVG({ count, active }: { count: number; active: boolean }) {
  const fill = active ? "#000" : "#d4d4d8";
  return (
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
      {count >= 1 && (
        <path d="M4 4 L14 14 L24 4 L21.5 4 L14 11 L6.5 4 Z" fill={fill} />
      )}
      {count >= 2 && (
        <path d="M4 10 L14 20 L24 10 L21.5 10 L14 17 L6.5 10 Z" fill={fill} />
      )}
      {count === 0 && (
        <circle cx="14" cy="12" r="5" fill="none" stroke={fill} strokeWidth="2" />
      )}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   COMPONENT — Outreach Carousel
   ════════════════════════════════════════════════════════════ */

function OutreachCarousel({ campaigns }: { campaigns: OutreachCampaign[] }) {
  const [active, setActive] = useState(0);
  const campaign = campaigns[active];

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        {campaigns.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 ${
              i === active
                ? "bg-black text-white border-black"
                : "bg-transparent text-zinc-600 border-zinc-300 hover:border-zinc-500"
            }`}
          >
            {c.title.split("—")[0].trim()}
          </button>
        ))}
      </div>

      {/* Active campaign content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={campaign.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {/* Telemetry bar */}
          <div className="px-3 py-2 border border-zinc-200 rounded-t bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase">
            [ ID: {campaign.id} | DATE: {campaign.date} ]
          </div>

          <div className="border border-t-0 border-zinc-200 rounded-b p-4">
            <MediaGallery images={campaign.images} />
            <h4 className="text-sm font-bold text-black tracking-tight font-heading mt-4">
              {campaign.title}
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed mt-2 font-body">
              {campaign.description}
            </p>

            {campaign.linkedinUrls && campaign.linkedinUrls.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {campaign.linkedinUrls.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300"
                  >
                    <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.08 },
  }),
};

export default function LeadershipPage() {
  const [docViewer, setDocViewer] = useState<{
    src: string;
    title: string;
    highlights: string[];
  } | null>(null);

  const [activeNccEvent, setActiveNccEvent] = useState(0);

  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 lg:px-8">
        {/* ─── Page Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black uppercase font-heading">
            Leadership &amp; Interests
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-zinc-600 font-medium uppercase tracking-widest">
            Engineering Team Operations, NCC (1 TN BN), Athletics &amp; Community Outreach
          </p>
          <div className="mt-6 border-b border-zinc-200" />
        </motion.div>

        {/* ─── Console Header / Stats Grid ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10"
        >
          {/* Telemetry bar */}
          <div className="px-4 py-2.5 border border-zinc-200 rounded-t bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase flex flex-wrap justify-between gap-2">
            <span>[ COMPONENT: LOGISTICS_CONSOLE | CORE: TEAM_OPERATIONS ]</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-pulse" />
              STATUS: CONCLUDED
            </span>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border border-t-0 border-zinc-200 rounded-b overflow-hidden">
            {[
              { value: "100+", label: "Members Managed" },
              { value: "5–6", label: "Events / Semester" },
              { value: "1,000+", label: "Competitors Coordinated" },
              { value: "CPL", label: "NCC Rank (Aug '25 – Jan '26)" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-4 sm:p-5 text-center ${
                  i < 3 ? "border-r border-zinc-200" : ""
                } ${i < 2 ? "border-b md:border-b-0 border-zinc-200" : i === 2 ? "border-b md:border-b-0 border-zinc-200 border-r-0 md:border-r" : ""}`}
              >
                <div className="text-xl sm:text-2xl font-bold text-black font-heading tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════
           SECTION 1: TEAM NAMO NIRVANA
           ══════════════════════════════════════════════ */}
        <div className="mt-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-400" />
            Team Namo Nirvana — Operation Logs
          </h2>

          {/* Org card with logo */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="glass-panel glass-panel-hover rounded-lg p-5 border border-zinc-200 mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-lg overflow-hidden border border-zinc-200 shrink-0 bg-zinc-50">
                <Image
                  src="/images/leadership/namo-nirvana/nn-logo.jpeg"
                  alt="Namo Nirvana Logo"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-700 border border-zinc-350 rounded px-2 py-0.5 font-semibold">
                    POSITION OF RESPONSIBILITY
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                    Jan 2025 – May 2026
                  </span>
                </div>
                <h3 className="text-base font-bold text-black tracking-tight font-heading">
                  Deputy Operations Lead
                </h3>
                <p className="text-xs text-zinc-600 mt-0.5">
                  Official Robotics Special Team — VIT Chennai
                </p>
              </div>
            </div>
            <p className="text-sm text-zinc-700 font-normal leading-relaxed mt-4 font-body">
              Co-directed a cross-functional organization of 100+ members spanning mechanical, software, and embedded systems engineering. Managed logistically complex participation in 5–6 major competitions per semester, boosting execution efficiency by 35%. Secured 2 corporate sponsors and managed end-to-end merchandise design and logistics.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={() =>
                  setDocViewer({
                    src: "/credentials/namo_nirvana_lor.jpeg",
                    title: "Letter of Appointment",
                    highlights: [
                      "Signed by Dr. Saurav Gupta (Faculty Coordinator)",
                      "Co-signed by Dr. Ravi Tiwari",
                      "Appointed as Deputy Operations Lead",
                      "Effective from July 14, 2025",
                      "Responsibilities: Development, execution, and innovation of ongoing and upcoming robotics projects",
                    ],
                  })
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300 cursor-pointer"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                View Signed LOR
              </button>
              <button
                onClick={() =>
                  setDocViewer({
                    src: "/credentials/namo_nirvana_coc.jpeg",
                    title: "Certificate of Completion",
                    highlights: [
                      "Issued upon tenure conclusion",
                      "Recognized contributions to Team Namo Nirvana",
                      "Documented operational achievements",
                    ],
                  })
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300 cursor-pointer"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15l-2 5l1-3h2l1 3l-2-5z" />
                  <circle cx="12" cy="9" r="6" />
                </svg>
                View Certificate
              </button>
              <a
                href="https://www.linkedin.com/posts/harshit-singh-3b8467300_namonirvana-vitchennai-robotics-activity-7351886716011520000-BYRd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEz0R3wBI3e4H3rmOGoUq9S8zerUqdPc9Zg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300"
              >
                <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Appointment Post
              </a>
            </div>
          </motion.div>

          {/* Operation Log Cards */}
          <div className="flex flex-col gap-4">
            {namoNirvanaLogs.map((log, i) => (
              <motion.div
                key={log.id}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="glass-panel glass-panel-hover rounded-lg overflow-hidden border border-zinc-200"
              >
                {/* Log telemetry header */}
                <div className="px-4 py-2 border-b border-zinc-200 bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase flex justify-between">
                  <span>[ LOG: {log.id} ]</span>
                  <span>PHASE {i + 1} / {namoNirvanaLogs.length}</span>
                </div>

                <div className="p-4">
                  <MediaGallery images={log.images} />
                  <h4 className="text-sm font-bold text-black tracking-tight font-heading mt-4">
                    {log.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
                    {log.subtitle}
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed mt-2 font-body">
                    {log.description}
                  </p>

                  {log.linkedinUrl && (
                    <a
                      href={log.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300"
                    >
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      View Post
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════
           SECTION 2: NCC LEADERSHIP
           ══════════════════════════════════════════════ */}
        <div className="mt-20">
          <h2 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-400" />
            NCC — Promotion Timeline & Camp Operations
          </h2>

          {/* Rank Promotion Path */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover rounded-lg border border-zinc-200 overflow-hidden mb-6"
          >
            <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase">
              [ UNIT: 1 TAMIL NADU BN NCC — VIT CHENNAI | SERVICE: AUG 2024 – JAN 2026 ]
            </div>

            <div className="p-5">
              <h3 className="text-sm font-bold text-black tracking-tight font-heading mb-4">
                Rank Progression
              </h3>

              {/* Chevron Timeline */}
              <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0">
                {nccRanks.map((r, i) => (
                  <div key={r.rank} className="flex items-center gap-0 flex-1">
                    {/* Rank node */}
                    <div className="flex sm:flex-col items-center gap-3 sm:gap-2 sm:text-center flex-1">
                      <div className="h-12 w-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
                        <ChevronSVG count={r.chevrons} active={true} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-black font-heading">{r.rank}</div>
                        <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">
                          {r.period}
                        </div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">{r.occasion}</div>
                      </div>
                    </div>

                    {/* Arrow connector between nodes */}
                    {i < nccRanks.length - 1 && (
                      <div className="hidden sm:flex items-center justify-center shrink-0 px-1">
                        <svg className="h-4 w-10 text-zinc-300" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="0" y1="8" x2="34" y2="8" />
                          <polyline points="28 2 34 8 28 14" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Promotion images */}
              <div className="grid grid-cols-2 gap-2 mt-5">
                {[
                  "/images/leadership/ncc/cdt-to-lcpl-promotion2.jpeg",
                  "/images/leadership/ncc/lcpl-to-cpl-promotion.jpeg",
                ].map((src) => (
                  <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100">
                    <Image src={src} alt="NCC Promotion" fill sizes="300px" className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Training drill images */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  "/images/leadership/ncc/me-with-rifle1.jpeg",
                  "/images/leadership/ncc/me-with-rifle2.jpeg",
                ].map((src) => (
                  <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100">
                    <Image src={src} alt="NCC Training" fill sizes="300px" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CATC-25 Accolades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover rounded-lg border border-zinc-200 overflow-hidden mb-6"
          >
            <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase">
              [ CATC-25 CAMP | TRIPLE ACCOLADES ]
            </div>
            <div className="p-5">
              <h3 className="text-sm font-bold text-black tracking-tight font-heading mb-3">
                NCC CATC-25 Camp — Triple Honours
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: "🏅", title: "Best Marching Contingent" },
                  { icon: "🎭", title: "Best Cultural Performance" },
                  { icon: "🏆", title: "Overall Best Company" },
                ].map((award) => (
                  <div
                    key={award.title}
                    className="text-center p-3 rounded-lg border border-zinc-200 bg-zinc-50/50 hover:border-black/20 transition-colors"
                  >
                    <div className="text-xl mb-1">{award.icon}</div>
                    <div className="text-xs font-bold text-black tracking-tight font-heading">
                      {award.title}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://drive.google.com/file/d/1Uu_nhReVK7h4xlHu3vYChe7acoKf6WPa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15l-2 5l1-3h2l1 3l-2-5z" />
                  <circle cx="12" cy="9" r="6" />
                </svg>
                CATC&apos;25 Certificate
              </a>
            </div>
          </motion.div>

          {/* NCC Camp Events — Tabbed Slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-lg border border-zinc-200 overflow-hidden mb-6"
          >
            <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase">
              [ CAMP & EVENT OPERATIONS LOG ]
            </div>
            <div className="p-5">
              {/* Event tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {nccEvents.map((evt, i) => (
                  <button
                    key={evt.id}
                    onClick={() => setActiveNccEvent(i)}
                    className={`px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 ${
                      i === activeNccEvent
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-zinc-600 border-zinc-300 hover:border-zinc-500"
                    }`}
                  >
                    {evt.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={nccEvents[activeNccEvent].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <MediaGallery images={nccEvents[activeNccEvent].images} />
                  <h4 className="text-sm font-bold text-black tracking-tight font-heading mt-4">
                    {nccEvents[activeNccEvent].title}
                  </h4>
                  <p className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
                    {nccEvents[activeNccEvent].date}
                  </p>
                  <p className="text-xs text-zinc-600 leading-relaxed mt-2 font-body">
                    {nccEvents[activeNccEvent].description}
                  </p>
                  {nccEvents[activeNccEvent].certificateUrl && (
                    <a
                      href={nccEvents[activeNccEvent].certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
                    >
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 15l-2 5l1-3h2l1 3l-2-5z" />
                        <circle cx="12" cy="9" r="6" />
                      </svg>
                      {nccEvents[activeNccEvent].certificateLabel}
                    </a>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* NCC Instagram CTA */}
          <div className="flex justify-end">
            <a
              href="https://www.instagram.com/vit_chennai_ncc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              VIT Chennai NCC
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
           SECTION 3: SPORTS & ATHLETICS
           ══════════════════════════════════════════════ */}
        <div className="mt-20">
          <h2 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-400" />
            Sports & Athletics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basketball Player Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel glass-panel-hover rounded-lg border border-zinc-200 overflow-hidden"
            >
              <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase flex justify-between">
                <span>[ SPORT: BASKETBALL ]</span>
                <span>APR 2018 – JUN 2025</span>
              </div>

              <div className="p-5">
                <MediaGallery images={basketballImages} />

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded bg-black px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Point Guard
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                    School · Zone · State · University · Nationals
                  </span>
                </div>

                <h3 className="text-sm font-bold text-black tracking-tight font-heading mt-3">
                  Basketball — Player Stats
                </h3>

                <div className="mt-3 border border-zinc-200 rounded-lg overflow-hidden">
                  {/* Level header row */}
                  <div className="grid grid-cols-3 text-center text-[9px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-50 border-b border-zinc-200">
                    <div className="py-2 border-r border-zinc-200">Level</div>
                    <div className="py-2 border-r border-zinc-200">Achievement</div>
                    <div className="py-2">Result</div>
                  </div>
                  {/* Nationals row */}
                  <div className="grid grid-cols-3 text-center text-xs border-b border-zinc-200">
                    <div className="py-2.5 border-r border-zinc-200 font-semibold text-black">Nationals</div>
                    <div className="py-2.5 border-r border-zinc-200 text-zinc-600">CBSE Cluster Nationals 2019</div>
                    <div className="py-2.5 text-zinc-600">Quarter-Finalists</div>
                  </div>
                  {/* University row */}
                  <div className="grid grid-cols-3 text-center text-xs border-b border-zinc-200">
                    <div className="py-2.5 border-r border-zinc-200 font-semibold text-black">University</div>
                    <div className="py-2.5 border-r border-zinc-200 text-zinc-600">
                      SRM IST Founder&apos;s Trophy 2024
                      <a
                        href="https://drive.google.com/file/d/1Atnfj2h5QbCv8gZkVAOXkYOoSgdbJVkn/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-[9px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
                      >
                        [Cert]
                      </a>
                    </div>
                    <div className="py-2.5 text-zinc-600">3rd Place — Men&apos;s</div>
                  </div>
                  {/* School / State / Zone placeholder rows */}
                  {["State", "Zone", "School"].map((level) => (
                    <div key={level} className="grid grid-cols-3 text-center text-xs border-b border-zinc-200 last:border-b-0">
                      <div className="py-2.5 border-r border-zinc-200 font-semibold text-black">{level}</div>
                      <div className="py-2.5 border-r border-zinc-200 text-zinc-300 italic">—</div>
                      <div className="py-2.5 text-zinc-300 italic">—</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Athletics / Marathon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel glass-panel-hover rounded-lg border border-zinc-200 overflow-hidden"
            >
              <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase">
                [ SPORT: ATHLETICS — MARATHON ]
              </div>

              <div className="p-5">
                <MediaGallery
                  images={[
                    "/images/leadership/marathon/marathon1.jpeg",
                    "/images/leadership/marathon/marathon2.jpeg",
                  ]}
                />
                <h3 className="text-sm font-bold text-black tracking-tight font-heading mt-4">
                  Marathon Runner
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mt-2 font-body">
                  Active participation in endurance runs and marathon events. Building consistent distance running practice and competitive exposure.
                </p>
                <a
                  href="https://drive.google.com/file/d/1r3xe2khNXcbYy3_yC9T7Dnl15S3bTtin/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-black transition-colors"
                >
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15l-2 5l1-3h2l1 3l-2-5z" />
                    <circle cx="12" cy="9" r="6" />
                  </svg>
                  Marathon Certificate
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
           SECTION 4: VITEACH COMMUNITY OUTREACH
           ══════════════════════════════════════════════ */}
        <div className="mt-20">
          <h2 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-400" />
            VITeach — Community Outreach
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover rounded-lg border border-zinc-200 overflow-hidden"
          >
            <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/60 font-mono text-[8px] sm:text-[9px] tracking-wider text-zinc-400 uppercase flex justify-between">
              <span>[ ORG: VITEACH VITC | ROLE: FFCS MEMBER ]</span>
              <span>JAN 2024 – MAR 2025</span>
            </div>

            <div className="p-5">
              <p className="text-sm text-zinc-700 font-normal leading-relaxed font-body mb-5">
                Core volunteer leading tutoring, environmental campaigns, and community outreach drives for underprivileged children through VIT Chennai&apos;s flagship social initiative.
              </p>

              <OutreachCarousel campaigns={viteachCampaigns} />

              {/* Social links */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-200">
                {[
                  { label: "Website", url: "https://viteach.in/", icon: "🌐" },
                  {
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/company/viteachvitcc/",
                    icon: null,
                    svg: (
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Instagram",
                    url: "https://www.instagram.com/viteachvitc/",
                    icon: null,
                    svg: (
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest bg-zinc-100 hover:bg-black hover:text-white border border-zinc-300 text-zinc-700 transition-all duration-300"
                  >
                    {link.icon ? <span className="text-xs">{link.icon}</span> : link.svg}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
           SECTION 5: ACADEMIC CLUBS
           ══════════════════════════════════════════════ */}
        <div className="mt-20">
          <h2 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-8 font-heading flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-400" />
            Academic Clubs
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover rounded-lg p-5 border border-zinc-200"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                  Academic Clubs
                </span>
                <h3 className="text-sm font-bold text-black tracking-tight font-heading">
                  VIT Chennai Quiz Club
                </h3>
              </div>
            </div>
            <p className="text-xs text-zinc-600 font-normal leading-relaxed font-body mt-3">
              Active member of the VIT Chennai Quiz Club, participating in inter-college quiz competitions and knowledge exchange forums.
            </p>
          </motion.div>
        </div>

        {/* ─── LinkedIn CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 border-t border-zinc-200 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-sm font-semibold text-black font-heading uppercase tracking-wide">
              Connect on LinkedIn
            </h3>
            <p className="text-xs text-zinc-600 mt-1">
              See posts, updates, and event coverage.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/harshit-singh-3b8467300/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded bg-black px-6 text-xs uppercase tracking-widest text-white font-semibold transition-all duration-300 hover:bg-zinc-800"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View Profile
          </a>
        </motion.div>
      </div>

      {/* Document Viewer Modal */}
      <AnimatePresence>
        {docViewer && (
          <DocumentViewer
            src={docViewer.src}
            title={docViewer.title}
            highlights={docViewer.highlights}
            onClose={() => setDocViewer(null)}
          />
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
      <ScrollToTop />
    </PageTransition>
  );
}
