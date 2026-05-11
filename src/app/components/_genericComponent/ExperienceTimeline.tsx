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
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-10">
        {title}<span className="text-orange">.</span>
      </h2>

      <div ref={containerRef} className="relative pl-10 sm:pl-14">
        {/* Track */}
        <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-1 bg-ink/15">
          <motion.div
            className="absolute left-0 top-0 w-full bg-ink origin-top"
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
              transition={{ delay: idx * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Marker */}
              <span className="absolute -left-10 sm:-left-12 top-2 w-6 h-6 bg-orange border-3 border-ink" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-tight">
                  {exp.company}
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-ink/70">
                  {exp.duration}
                </span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-orange-deep mb-2">
                {exp.role}
              </p>
              <p className="text-base text-ink-soft leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
