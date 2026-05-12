"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const STRENGTHS = [
  {
    title: "Full-stack delivery",
    body: "Next.js, React, Node, NestJS, Express, Laravel, WordPress — end-to-end, data model to UI.",
    accent: "bg-orange",
  },
  {
    title: "System design",
    body: "Modular, scalable systems with clean separation of concerns and well-defined APIs.",
    accent: "bg-sun",
  },
  {
    title: "DevOps + delivery",
    body: "Azure DevOps CI/CD pipelines and production deployments over SSH with low-downtime releases.",
    accent: "bg-rose",
  },
  {
    title: "Team leadership",
    body: "Led cross-functional teams of up to 6 engineers across product, design and QA.",
    accent: "bg-cream-deep",
  },
];

export default function About() {
  return (
    <main className="bg-cream">
      {/* Intro */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20 border-b-3 border-ink">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase mb-6 text-ink/70"
        >
          About — File 001
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.9]"
        >
          Hi, I&apos;m
          <br />
          <span className="text-orange">Aswin.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-6 mt-10"
        >
          <p className="text-lg leading-relaxed text-ink-soft">
            I&apos;m a Senior Software Engineer with 6+ years of experience building
            and shipping web applications across MEAN, MERN, Python, PHP and
            WordPress. Strong focus on clean architecture, performance and
            developer experience.
          </p>
          <p className="text-lg leading-relaxed text-ink-soft">
            I care about the craft — readable code, thoughtful UX, robust CI/CD
            and teams that ship calmly. Currently at{" "}
            <span className="font-bold underline decoration-orange decoration-[3px] underline-offset-4">
              Alferix
            </span>{" "}
            working on AI conversational systems.
          </p>
        </motion.div>
      </section>

      {/* Strengths */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20 border-b-3 border-ink">
        <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-10">
          What I focus on<span className="text-orange">.</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {STRENGTHS.map((s, idx) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ rotate: idx % 2 === 0 ? -0.5 : 0.5 }}
              className={`${s.accent} border-3 border-ink p-6 lg:p-8 brut-press`}
            >
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                {s.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-soft">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-20 border-b-3 border-ink">
        <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight mb-10">
          Education<span className="text-orange">.</span>
        </h2>
        <div className="border-3 border-ink p-6 lg:p-8 bg-cream-deep">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h3 className="text-2xl font-bold uppercase tracking-tight">
              B.E. Computer Science
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/70">
              2015 — 2019
            </span>
          </div>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Foundation in algorithms, distributed systems and software
            engineering principles.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-ink text-cream py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[2fr_1fr] gap-10 items-end">
          <h2 className="text-5xl sm:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
            Want to <span className="text-orange">work</span> together?
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:maswinlakshmanan4@gmail.com"
              className="bg-orange text-ink border-3 border-orange px-5 py-4 font-bold uppercase tracking-wide brut-press inline-block"
            >
              Email me →
            </a>
            <Link
              href="/home"
              className="bg-cream text-ink border-3 border-cream px-5 py-4 font-bold uppercase tracking-wide brut-press inline-block"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
