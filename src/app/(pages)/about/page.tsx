"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const easeOut = [0.22, 1, 0.36, 1] as const;

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
  purple: "bg-aurora-purple shadow-[0_0_14px_rgba(167,139,250,0.6)]",
  pink: "bg-aurora-pink shadow-[0_0_14px_rgba(244,114,182,0.6)]",
  teal: "bg-aurora-mint shadow-[0_0_14px_rgba(63,216,194,0.6)]",
  blue: "bg-aurora-sky shadow-[0_0_14px_rgba(63,157,255,0.6)]",
};

export default function About() {
  return (
    <main className="relative z-10">
      {/* INTRO */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="text-xs uppercase tracking-[0.14em] text-white/45 font-medium mb-6"
          >
            — About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="font-medium tracking-[-0.04em] leading-[1.02] text-white mx-auto max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Hi, I&apos;m{" "}
            <span className="font-serif italic font-normal gradient-text">
              Aswin
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
            className="mt-7 sm:mt-9 text-base sm:text-lg lg:text-xl leading-[1.55] text-white/70 max-w-2xl mx-auto"
          >
            A Senior Software Engineer with 6+ years building and shipping web
            applications across MEAN, MERN, Python, PHP and WordPress. Strong
            focus on clean architecture, performance and developer experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
            className="mt-5 text-base sm:text-lg leading-[1.55] text-white/55 max-w-2xl mx-auto"
          >
            I care about the craft — readable code, thoughtful UX, robust CI/CD,
            and teams that ship calmly. Currently at{" "}
            <span className="text-white font-medium">Alferix</span> working on
            AI conversational systems.
          </motion.p>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="relative py-14 sm:py-18 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 sm:mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-white/45 font-medium mb-3">
              — Strengths
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              What I{" "}
              <span className="font-serif italic font-normal text-aurora-pink">
                focus on
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {STRENGTHS.map((s, idx) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.08, duration: 0.55, ease: easeOut }}
                className="glass glass-hover transition-all duration-300 hover:-translate-y-1 p-7 sm:p-8"
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
        </div>
      </section>

      {/* EDUCATION */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl">
          <div className="mb-10 sm:mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-white/45 font-medium mb-3">
              — Education
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              Where I{" "}
              <span className="font-serif italic font-normal text-aurora-mint">
                learned the basics
              </span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="glass p-7 sm:p-8 lg:p-10"
          >
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
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="glass p-10 sm:p-14 lg:p-20 text-center max-w-3xl mx-auto"
          >
            <h2
              className="font-medium tracking-tight leading-[1.05] text-white mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
