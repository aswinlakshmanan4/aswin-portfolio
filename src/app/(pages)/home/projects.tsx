"use client";

import { motion } from "framer-motion";
import GlassCard from "@/app/components/_genericComponent/GlassCard";

interface Project {
  number: string;
  title: string;
  role: string;
  team: number;
  tech: string[];
  description: string;
  highlights: string[];
  accent: "purple" | "pink" | "teal";
  status: "shipped" | "in-progress";
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Tire Planet",
    role: "Senior Developer",
    team: 6,
    tech: ["ReactJS", "Azure DevOps"],
    description:
      "A B2C platform letting end-users track orders and browse product/brand information, with role-based portals for retailers and distributors.",
    highlights: [
      "Led a team of 6 to deliver on time",
      "Multi-role access with secure auth",
      "Retailer + distributor portals",
    ],
    accent: "purple",
    status: "shipped",
  },
  {
    number: "02",
    title: "Instream Dashboard",
    role: "Software Engineer",
    team: 1,
    tech: ["React", "Node", "Express", "PostgreSQL"],
    description:
      "Publisher revenue insights dashboard with month-wise and date-wise filters, and dynamic charting for trend analysis.",
    highlights: [
      "Dynamic data visualization charts",
      "Optimized revenue queries",
      "Advanced filtering",
    ],
    accent: "pink",
    status: "shipped",
  },
  {
    number: "03",
    title: "Kolibri Studio",
    role: "Software Engineer",
    team: 1,
    tech: ["Vue.js", "Python", "MySQL"],
    description:
      "Accessible content creation platform for visually impaired users — channels, quizzes, audio, embedded video.",
    highlights: [
      "Accessibility-first UI",
      "Interactive multimedia support",
      "Friendly creation workflow",
    ],
    accent: "teal",
    status: "shipped",
  },
  {
    number: "04",
    title: "Kolibri Desktop Tool",
    role: "Software Engineer",
    team: 1,
    tech: ["Vue.js", "Python", "MySQL"],
    description:
      "Offline-capable desktop learning tool for visually impaired users covering quizzes, audio, video and resources.",
    highlights: [
      "Offline desktop app",
      "Screen-reader friendly UI",
      "Multimedia resources",
    ],
    accent: "purple",
    status: "shipped",
  },
  {
    number: "05",
    title: "Instream Ad Widget",
    role: "Software Engineer",
    team: 1,
    tech: ["AngularJS"],
    description:
      "Configurable ad slider letting clients pick exactly which slide their ad appears on for strategic placement.",
    highlights: [
      "Configurable ad slider",
      "Targeted placement per client",
      "Improved engagement",
    ],
    accent: "pink",
    status: "shipped",
  },
];

const ACCENT_DOT: Record<Project["accent"], string> = {
  purple: "bg-aurora-purple shadow-[0_0_14px_rgba(167,139,250,0.6)]",
  pink: "bg-aurora-pink shadow-[0_0_14px_rgba(244,114,182,0.6)]",
  teal: "bg-aurora-mint shadow-[0_0_14px_rgba(63,216,194,0.6)]",
};

const ACCENT_TEXT: Record<Project["accent"], string> = {
  purple: "text-aurora-purple",
  pink: "text-aurora-pink",
  teal: "text-aurora-mint",
};

export default function ProjectsResume() {
  return (
    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
      {PROJECTS.map((p, idx) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
          className="h-full"
        >
          <GlassCard tilt tiltIntensity={5} className="p-7 sm:p-8 h-full flex flex-col">
            <div className="flex justify-between items-start gap-3 mb-5">
              <span className="text-[11px] tracking-[0.12em] uppercase text-white/45 font-medium">
                {p.number} · {p.role}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase font-medium text-white/55 whitespace-nowrap">
                <span className={`w-1.5 h-1.5 rounded-full ${ACCENT_DOT[p.accent]}`} />
                {p.status === "shipped" ? "Shipped" : "In progress"}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium tracking-tight leading-snug text-white mb-3">
              {p.title}
            </h3>

            <p className="text-[15px] leading-relaxed text-white/65 mb-5">
              {p.description}
            </p>

            <ul className="space-y-2 mb-6 text-sm text-white/75 leading-snug">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5">
                  <span className={`${ACCENT_TEXT[p.accent]} shrink-0`}>→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-1">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
