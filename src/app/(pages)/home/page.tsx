"use client";

import { motion } from "framer-motion";
import ExperienceTimeline from "@/app/components/_genericComponent/ExperienceTimeline";
import StatCounter from "@/app/components/_genericComponent/StatCounter";
import { EXPERIENCE } from "@/app/constants/constants";
import Technologies from "./technologies";
import ProjectsResume from "./projects";
import Achievements from "./achievements";

const easeOut = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { label: "Years", value: 6.6, decimals: 1 },
  { label: "Shipped", value: 5, suffix: "+" },
  { label: "Team led", value: 6 },
  { label: "Stacks", value: 4 },
];

const Home = () => {
  return (
    <main className="relative w-full z-10">
      {/* HERO */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-24 lg:pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 glass rounded-full mb-10"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-ok shadow-[0_0_12px_#4ADE80] animate-pulse-dot" />
            <span className="text-[13px] text-white/70 tracking-tight">
              Available for new work — 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            className="font-medium tracking-[-0.04em] leading-[1.02] text-white mx-auto max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)" }}
          >
            Hi, I&apos;m{" "}
            <span className="font-serif italic font-normal gradient-text">
              Aswin
            </span>
            .
            <br />I build{" "}
            <span className="font-serif italic font-normal text-aurora-mint">
              calm
            </span>{" "}
            web systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.35 }}
            className="mt-7 sm:mt-9 text-base sm:text-lg lg:text-xl leading-[1.55] text-white/65 max-w-2xl mx-auto"
          >
            Senior Software Engineer with 6+ years across MEAN, MERN, Python and
            PHP. Currently at{" "}
            <span className="text-white font-medium">Alferix</span> building AI
            conversational systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-bg text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
            >
              See my work →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass glass-hover text-white text-sm font-medium tracking-tight transition-all duration-200 hover:-translate-y-px"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.7 }}
            className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass glass-hover rounded-2xl px-5 py-5 sm:py-6 text-left transition-colors duration-300"
              >
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/45 font-medium">
                  {s.label}
                </p>
                <p className="text-2xl sm:text-3xl font-medium leading-none mt-2 text-white">
                  <StatCounter
                    value={s.value}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT — Currently */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-4xl">
          <div className="mb-10 sm:mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-white/45 font-medium mb-3">
              — Currently
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              A few things{" "}
              <span className="font-serif italic font-normal text-aurora-purple">
                on my desk
              </span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="glass p-8 sm:p-10 lg:p-12"
          >
            <div className="space-y-5 text-[15px] sm:text-base lg:text-lg leading-relaxed text-white/70">
              <p>
                I&apos;ve been shipping production software since 2019 — across{" "}
                <span className="text-white font-medium">
                  MEAN, MERN, Python, PHP and WordPress
                </span>
                . Most of my work lives in the backend, where it does its job
                quietly without anyone noticing.
              </p>
              <p>
                Right now I&apos;m at{" "}
                <span className="text-white font-medium">Alferix</span> building
                AI conversational systems — making them faster, cleaner, and
                easier to live with. I care about readable code, fast feedback
                loops, and naming things well.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <ExperienceTimeline content={EXPERIENCE} title="Experience" />
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 sm:mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-white/45 font-medium mb-3">
              — Tools
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              Stuff I{" "}
              <span className="font-serif italic font-normal text-aurora-mint">
                reach for
              </span>
            </h2>
          </div>
        </div>
        <Technologies />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 sm:mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-white/45 font-medium mb-3">
              — Selected work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
              Things I&apos;ve{" "}
              <span className="font-serif italic font-normal text-aurora-purple">
                shipped
              </span>
            </h2>
          </div>
          <ProjectsResume />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <Achievements />
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-16 sm:py-20 lg:py-28">
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
              Let&apos;s build{" "}
              <span className="font-serif italic font-normal gradient-text-pink">
                something good
              </span>
              .
            </h2>
            <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-xl mx-auto mb-9">
              I&apos;m taking on new work this year — full-time or contract.
              Drop me a line if you&apos;d like to chat.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:maswinlakshmanan4@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-bg text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
              >
                Email me →
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/10 hover:-translate-y-px"
              >
                Download resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
