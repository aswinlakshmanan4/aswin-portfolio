"use client";

import { motion } from "framer-motion";
import ExperienceTimeline from "@/app/components/_genericComponent/ExperienceTimeline";
import HeroReveal from "@/app/components/_genericComponent/HeroReveal";
import StatCounter from "@/app/components/_genericComponent/StatCounter";
import { EXPERIENCE } from "@/app/constants/constants";
import Technologies from "./technologies";
import ProjectsResume from "./projects";
import Achievements from "./achievements";

const Home = () => {
  return (
    <main className="relative w-full">
      {/* HERO */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28 grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="lg:pr-8 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 glass rounded-full mb-8 sm:mb-10"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-ok shadow-[0_0_12px_#4ADE80] animate-pulse-dot" />
              <span className="text-[12px] sm:text-[13px] text-white/65 tracking-tight">
                Senior Software Engineer — Available 2026
              </span>
            </motion.div>

            <HeroReveal />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mt-6 sm:mt-8 lg:mt-10 max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/65"
            >
              I design and ship{" "}
              <span className="font-serif italic text-white">calm</span>,
              well-architected web applications. Six years of MEAN, MERN, Python
              and PHP — currently at{" "}
              <span className="text-white font-medium">Alferix</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-bg text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
              >
                See the work →
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass glass-hover text-white text-sm font-medium tracking-tight transition-all duration-200 hover:-translate-y-px"
              >
                Resume.pdf
              </a>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="glass glass-hover transition-colors duration-300 p-5 sm:p-6 lg:p-7 flex flex-col justify-between gap-6 min-w-0"
          >
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-ok shadow-[0_0_10px_#4ADE80] animate-pulse-dot" />
              <p className="text-[11px] sm:text-xs tracking-[0.14em] uppercase text-white/50 font-medium">
                Available
              </p>
            </div>

            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-white/45 mb-2">
                Currently
              </p>
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-snug text-white">
                Building AI conversational systems{" "}
                <span className="font-serif italic font-normal text-aurora-purple">
                  @ Alferix
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/45">
                  Years
                </p>
                <p className="text-2xl sm:text-3xl font-medium leading-none mt-1 text-white">
                  <StatCounter value={6.6} decimals={1} />
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/45">
                  Shipped
                </p>
                <p className="text-2xl sm:text-3xl font-medium leading-none mt-1 text-white">
                  <StatCounter value={5} suffix="+" />
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/45">
                  Team led
                </p>
                <p className="text-2xl sm:text-3xl font-medium leading-none mt-1 text-white">
                  <StatCounter value={6} />
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.14em] uppercase text-white/45">
                  Stacks
                </p>
                <p className="text-2xl sm:text-3xl font-medium leading-none mt-1 text-white">
                  <StatCounter value={4} />
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <ExperienceTimeline content={EXPERIENCE} title="Experience" />
      </section>

      {/* TECHNOLOGIES */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-8 sm:mb-10">
            <p className="text-xs uppercase tracking-[0.12em] text-white/45 font-medium mb-3">
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
      <section id="projects" className="relative py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-10 sm:mb-12">
            <p className="text-xs uppercase tracking-[0.12em] text-white/45 font-medium mb-3">
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
      <section className="relative py-16 sm:py-20 lg:py-28">
        <Achievements />
      </section>

      {/* CONTACT */}
      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="glass p-10 sm:p-12 lg:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white mb-5">
              Got a project?{" "}
              <span className="font-serif italic font-normal gradient-text-pink">
                Let&apos;s talk.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/65 leading-relaxed max-w-xl mx-auto mb-9">
              I&apos;m taking on new work this year — full-time or contract. Drop
              me a line if you&apos;d like to chat.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:maswinlakshmanan4@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-bg text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
              >
                maswinlakshmanan4@gmail.com →
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/10 hover:-translate-y-px"
              >
                Download resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
