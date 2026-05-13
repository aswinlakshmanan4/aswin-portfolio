"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface ExperienceTimelineProps {
  content: ExperienceItem[];
  title: string;
}

export default function ExperienceTimeline({
  content,
  title,
}: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10">
      <div className="mb-12 sm:mb-16">
        <p className="text-xs uppercase tracking-[0.12em] text-white/45 font-medium mb-3">
          — Path
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
          {title}{" "}
          <span className="font-serif italic font-normal text-aurora-purple">
            so far
          </span>
        </h2>
      </div>

      <div ref={containerRef} className="relative pl-10 sm:pl-14">
        {/* Track */}
        <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-white/10">
          <motion.div
            className="absolute left-0 top-0 w-full bg-gradient-to-b from-aurora-purple via-aurora-pink to-aurora-mint origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        <ol className="flex flex-col gap-10 sm:gap-14">
          {content.map((exp, idx) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{
                delay: idx * 0.05,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Marker */}
              <span className="absolute -left-9 sm:-left-11 top-2 w-3.5 h-3.5 rounded-full bg-aurora-purple ring-4 ring-bg shadow-[0_0_18px_rgba(167,139,250,0.55)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                  {exp.company}
                </h3>
                <span className="text-xs uppercase tracking-[0.08em] text-white/45">
                  {exp.duration}
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.1em] text-aurora-pink mb-3 font-medium">
                {exp.role}
              </p>
              <p className="text-base text-white/65 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
