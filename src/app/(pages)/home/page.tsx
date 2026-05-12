"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ExperienceTimeline from "@/app/components/_genericComponent/ExperienceTimeline";
import HeroReveal from "@/app/components/_genericComponent/HeroReveal";
import StatCounter from "@/app/components/_genericComponent/StatCounter";
import { EXPERIENCE } from "@/app/constants/constants";
import Technologies from "./technologies";
import ProjectsResume from "./projects";
import Achievements from "./achievements";

const BackgroundShapes = dynamic(
  () => import("@/app/components/_genericComponent/BackgroundShapes"),
  { ssr: false }
);

const Home = () => {
  return (
    <main className="relative w-full overflow-hidden">
      {/* HERO */}
      <section className="relative border-b-3 border-ink scanlines">
        <BackgroundShapes />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-16 grid lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8 lg:gap-10 items-stretch">
          <div className="lg:pr-8 min-w-0">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-mono text-[10px] sm:text-xs lg:text-sm tracking-[0.18em] uppercase mb-4 sm:mb-6 text-ink/70"
            >
              Senior Software Engineer — 2026
            </motion.p>

            <HeroReveal />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-5 sm:mt-6 lg:mt-10 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-ink-soft"
            >
              I design and ship calm, well-architected web applications. Six years
              of MEAN, MERN, Python and PHP — currently at{" "}
              <span className="font-bold underline decoration-orange decoration-[3px] underline-offset-4">
                Alferix
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-5 sm:mt-6 lg:mt-8 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <a
                href="#projects"
                className="bg-ink text-cream border-3 border-ink px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide brut-press"
              >
                See the work →
              </a>
              <a
                href="/resume.pdf"
                download
                className="bg-cream text-ink border-3 border-ink px-4 sm:px-5 py-2.5 sm:py-3 text-sm sm:text-base font-bold uppercase tracking-wide brut-press"
              >
                Resume.pdf
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-orange border-3 border-ink p-4 sm:p-5 lg:p-6 flex flex-col justify-between gap-5 sm:gap-6 brut-press min-w-0"
          >
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-ink animate-pulse-dot" />
              <p className="font-mono text-[10px] sm:text-xs tracking-[0.18em] uppercase text-ink">
                Available
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] sm:text-xs uppercase text-ink/80 mb-1">
                Currently
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-bold leading-tight">
                Building AI conversational systems @ Alferix.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 border-t-3 border-ink pt-4">
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-ink/80">
                  Years
                </p>
                <p className="text-2xl sm:text-3xl font-bold leading-none mt-1">
                  <StatCounter value={6.6} decimals={1} />
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-ink/80">
                  Shipped
                </p>
                <p className="text-2xl sm:text-3xl font-bold leading-none mt-1">
                  <StatCounter value={5} suffix="+" />
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-ink/80">
                  Team led
                </p>
                <p className="text-2xl sm:text-3xl font-bold leading-none mt-1">
                  <StatCounter value={6} />
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-ink/80">
                  Stacks
                </p>
                <p className="text-2xl sm:text-3xl font-bold leading-none mt-1">
                  <StatCounter value={4} />
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative border-b-3 border-ink bg-cream-deep py-10 sm:py-14 lg:py-20">
        <ExperienceTimeline content={EXPERIENCE} title="Experience" />
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative border-b-3 border-ink bg-cream py-8 sm:py-10 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-4 lg:mb-6 gap-4 flex-wrap">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold uppercase tracking-tight">
              Stack
              <span className="text-orange">.</span>
            </h2>
            <p className="hidden sm:block font-mono text-xs uppercase tracking-widest text-ink/70">
              Tools I reach for
            </p>
          </div>
        </div>
        <Technologies />
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative border-b-3 border-ink bg-cream py-10 sm:py-14 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold uppercase tracking-tight mb-6 sm:mb-10">
            Selected work
            <span className="text-orange">.</span>
          </h2>
          <ProjectsResume />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="relative border-b-3 border-ink bg-cream-deep py-10 sm:py-14 lg:py-20">
        <Achievements />
      </section>

      {/* CONTACT */}
      <section className="relative bg-ink text-cream py-12 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8 lg:gap-12 items-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-[0.9] break-words">
            Got a project?
            <br />
            <span className="text-orange">Let&apos;s talk.</span>
          </h2>
          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="mailto:maswinlakshmanan4@gmail.com"
              className="bg-orange text-ink border-3 border-orange px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wide brut-press inline-block break-all"
            >
              maswinlakshmanan4@gmail.com →
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-cream text-ink border-3 border-cream px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wide brut-press inline-block"
            >
              Download resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
