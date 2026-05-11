"use client";

import { motion } from "framer-motion";

interface Achievement {
  number: string;
  title: string;
  description: string;
  accent: "orange" | "sun";
}

const ACHIEVEMENTS: Achievement[] = [
  {
    number: "★",
    title: "Excellence in Action",
    description: "Recognized for outstanding contributions and impact.",
    accent: "orange",
  },
  {
    number: "3×",
    title: "Best Performer",
    description: "Awarded for consistent top performance and dedication.",
    accent: "sun",
  },
];

const ACCENT_BG: Record<Achievement["accent"], string> = {
  orange: "bg-orange",
  sun: "bg-sun",
};

export default function Achievements() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-10">
        Wins<span className="text-orange">.</span>
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
        {ACHIEVEMENTS.map((ach, idx) => (
          <motion.div
            key={ach.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            whileHover={{ rotate: idx % 2 === 0 ? -1 : 1 }}
            className="border-3 border-ink bg-cream p-6 lg:p-8 flex gap-5 items-start brut-press"
          >
            <div
              className={`${ACCENT_BG[ach.accent]} border-3 border-ink w-16 h-16 flex items-center justify-center text-2xl font-bold shrink-0`}
            >
              {ach.number}
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight leading-tight">
                {ach.title}
              </h3>
              <p className="mt-2 text-base text-ink-soft leading-relaxed">
                {ach.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
