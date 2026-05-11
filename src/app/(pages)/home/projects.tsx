"use client";

import { motion } from "framer-motion";

interface Project {
  number: string;
  title: string;
  role: string;
  team: number;
  tech: string[];
  description: string;
  highlights: string[];
  accent: "orange" | "sun" | "rose";
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
    accent: "orange",
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
    accent: "sun",
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
    accent: "rose",
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
    accent: "orange",
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
    accent: "sun",
  },
];

const ACCENT_BG: Record<Project["accent"], string> = {
  orange: "bg-orange",
  sun: "bg-sun",
  rose: "bg-rose",
};

export default function ProjectsResume() {
  return (
    <div className="grid gap-6 sm:gap-8 lg:gap-10">
      {PROJECTS.map((p, idx) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: idx % 2 === 0 ? -0.4 : 0.4 }}
          className="bg-cream border-3 border-ink p-4 sm:p-6 lg:p-8 grid lg:grid-cols-[1fr_280px] gap-5 lg:gap-6 brut-press"
        >
          <div className="min-w-0">
            <div className="flex items-baseline gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
              <span className="font-mono text-xs tracking-widest text-ink/60">
                {p.number}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-none break-words">
                {p.title}
              </h3>
            </div>

            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-ink/70 mb-3 sm:mb-4 break-words">
              {p.role} · Team of {p.team} · {p.tech.join(", ")}
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-ink-soft max-w-2xl">
              {p.description}
            </p>

            <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] sm:text-xs font-bold uppercase tracking-wide border-3 border-ink px-2 sm:px-3 py-1 bg-cream-deep"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`${ACCENT_BG[p.accent]} border-3 border-ink p-4 sm:p-5 flex flex-col gap-2`}
          >
            <p className="font-mono text-[10px] tracking-widest uppercase text-ink/70 mb-1">
              Highlights
            </p>
            <ul className="space-y-2 text-sm leading-snug text-ink font-medium">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="font-bold">→</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
