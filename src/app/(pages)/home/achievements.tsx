"use client";

import { motion } from "framer-motion";

interface Achievement {
  number: string;
  title: string;
  description: string;
  accent: "purple" | "pink";
}

const ACHIEVEMENTS: Achievement[] = [
  {
    number: "★",
    title: "Excellence in Action",
    description: "Recognized for outstanding contributions and impact.",
    accent: "purple",
  },
  {
    number: "3×",
    title: "Best Performer",
    description: "Awarded for consistent top performance and dedication.",
    accent: "pink",
  },
];

const ACCENT_BG: Record<Achievement["accent"], string> = {
  purple: "bg-aurora-purple/20 border-aurora-purple/40 text-aurora-purple shadow-[0_0_24px_rgba(167,139,250,0.35)]",
  pink: "bg-aurora-pink/20 border-aurora-pink/40 text-aurora-pink shadow-[0_0_24px_rgba(244,114,182,0.35)]",
};

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10">
      <div className="mb-12 sm:mb-16">
        <p className="text-xs uppercase tracking-[0.12em] text-white/45 font-medium mb-3">
          — Recognition
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
          A few <span className="font-serif italic font-normal text-aurora-pink">wins</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {ACHIEVEMENTS.map((ach, idx) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: idx * 0.1, duration: 0.55 }}
            className="glass glass-hover transition-all duration-300 hover:-translate-y-1 p-6 lg:p-8 flex gap-5 items-start"
          >
            <div
              className={`${ACCENT_BG[ach.accent]} border rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-medium shrink-0`}
            >
              {ach.number}
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight leading-tight text-white">
                {ach.title}
              </h3>
              <p className="mt-2 text-[15px] text-white/65 leading-relaxed">
                {ach.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
