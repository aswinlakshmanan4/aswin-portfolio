"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const STRENGTHS = [
  {
    title: "Full-stack delivery",
    body: "Next.js, React, Node, NestJS, Express, Laravel, WordPress — end-to-end, data model to UI.",
    accent: "purple",
  },
  {
    title: "System design",
    body: "Modular, scalable systems with clean separation of concerns and well-defined APIs.",
    accent: "pink",
  },
  {
    title: "DevOps + delivery",
    body: "Azure DevOps CI/CD pipelines and production deployments over SSH with low-downtime releases.",
    accent: "teal",
  },
  {
    title: "Team leadership",
    body: "Led cross-functional teams of up to 6 engineers across product, design and QA.",
    accent: "blue",
  },
] as const;

const ACCENT_DOT: Record<(typeof STRENGTHS)[number]["accent"], string> = {
  purple: "bg-aurora-purple shadow-[0_0_14px_rgba(167,139,250,0.55)]",
  pink: "bg-aurora-pink shadow-[0_0_14px_rgba(244,114,182,0.55)]",
  teal: "bg-aurora-mint shadow-[0_0_14px_rgba(63,216,194,0.55)]",
  blue: "bg-aurora-sky shadow-[0_0_14px_rgba(63,157,255,0.55)]",
};

export default function About() {
  return (
    <main className="relative">
      {/* Intro */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.12em] text-white/45 font-medium mb-5"
        >
          — About
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.0] text-white max-w-4xl"
        >
          Hi, I&apos;m{" "}
          <span className="font-serif italic font-normal gradient-text">
            Aswin
          </span>
          .
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-6 mt-10 sm:mt-12 lg:mt-14"
        >
          <p className="text-lg leading-relaxed text-white/65">
            I&apos;m a Senior Software Engineer with 6+ years of experience
            building and shipping web applications across MEAN, MERN, Python,
            PHP and WordPress. Strong focus on clean architecture, performance
            and developer experience.
          </p>
          <p className="text-lg leading-relaxed text-white/65">
            I care about the craft — readable code, thoughtful UX, robust CI/CD
            and teams that ship calmly. Currently at{" "}
            <span className="text-white font-medium">Alferix</span> working on AI
            conversational systems.
          </p>
        </motion.div>
      </section>

      {/* Strengths */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.12em] text-white/45 font-medium mb-3">
            — Strengths
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            What I{" "}
            <span className="font-serif italic font-normal text-aurora-pink">
              focus on
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {STRENGTHS.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              className="glass glass-hover transition-all duration-300 hover:-translate-y-1 p-6 lg:p-8"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className={`w-2 h-2 rounded-full ${ACCENT_DOT[s.accent]}`} />
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {s.title}
                </h3>
              </div>
              <p className="text-[15px] leading-relaxed text-white/65">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.12em] text-white/45 font-medium mb-3">
            — Education
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            Where I{" "}
            <span className="font-serif italic font-normal text-aurora-mint">
              learned the basics
            </span>
          </h2>
        </div>
        <div className="glass p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              B.E. Computer Science
            </h3>
            <span className="text-xs uppercase tracking-[0.1em] text-white/45">
              2015 — 2019
            </span>
          </div>
          <p className="mt-3 text-base text-white/65 leading-relaxed">
            Foundation in algorithms, distributed systems and software
            engineering principles.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="glass p-10 sm:p-12 lg:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white mb-5">
              Want to{" "}
              <span className="font-serif italic font-normal gradient-text-pink">
                work together
              </span>
              ?
            </h2>
            <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-xl mx-auto mb-9">
              I&apos;m taking on new work this year. Send a note — I read every
              email.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:maswinlakshmanan4@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-bg text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
              >
                Email me →
              </a>
              <Link
                href="/home"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/10 hover:-translate-y-px"
              >
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
