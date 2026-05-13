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
  },
];

const ACCENT_DOT: Record<Project["accent"], string> = {
  purple: "bg-aurora-purple shadow-[0_0_16px_rgba(167,139,250,0.55)]",
  pink: "bg-aurora-pink shadow-[0_0_16px_rgba(244,114,182,0.55)]",
  teal: "bg-aurora-mint shadow-[0_0_16px_rgba(63,216,194,0.55)]",
};

const ACCENT_TEXT: Record<Project["accent"], string> = {
  purple: "text-aurora-purple",
  pink: "text-aurora-pink",
  teal: "text-aurora-mint",
};

export default function ProjectsResume() {
  return (
    <div className="grid gap-5 sm:gap-6">
      {PROJECTS.map((p, idx) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
        >
          <GlassCard tilt tiltIntensity={5} className="p-6 sm:p-8 grid lg:grid-cols-[1fr_280px] gap-6 lg:gap-8">
            <div className="min-w-0">
              <div className="flex items-baseline gap-3 sm:gap-4 mb-3 flex-wrap">
                <span className={`text-xs tracking-[0.15em] ${ACCENT_TEXT[p.accent]} font-medium`}>
                  {p.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight text-white">
                  {p.title}
                </h3>
              </div>

              <p className="text-[11px] sm:text-xs uppercase tracking-[0.1em] text-white/45 mb-4">
                {p.role} · Team of {p.team} · {p.tech.join(" / ")}
              </p>

              <p className="text-[15px] sm:text-base leading-relaxed text-white/65 max-w-2xl">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/65"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${ACCENT_DOT[p.accent]}`} />
                <p className="text-[10px] tracking-[0.15em] uppercase text-white/50 font-medium">
                  Highlights
                </p>
              </div>
              <ul className="space-y-2.5 text-sm leading-snug text-white/80">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className={`${ACCENT_TEXT[p.accent]} font-medium`}>→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
