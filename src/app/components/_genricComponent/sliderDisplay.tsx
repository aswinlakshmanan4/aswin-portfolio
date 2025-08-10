"use client";

import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ExperienceTimelineProps {
  content: { company: string; role: string; duration: string; description: string }[];
  title: string;
}

function TimelineItem({
  exp,
  index,
  total,
  smoothProgress,
  visible,
}: {
  exp: { company: string; role: string; duration: string; description: string };
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
  visible: boolean;
}) {
  const pointProgress = (index + 1) / total;
  const diamondFill = useTransform(
    smoothProgress,
    [0, pointProgress],
    ["#1f2937", "#a855f7"]
  );

  return (
    <div
      className={`relative flex transition-all duration-700 ${
        visible ? "animate-fade-up" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left side */}
      <div className="w-1/2 pl-8 flex justify-start items-center text-purple-500 font-semibold">
        {exp.company}
      </div>

      {/* Right side */}
      <div className="w-1/2 pl-8 text-left">
        <h3 className="text-xl font-bold">{exp.role}</h3>
        <p className="text-sm text-gray-400">{exp.duration}</p>
        <p className="text-gray-300 mt-2">{exp.description}</p>
      </div>

      {/* Diamond marker */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <motion.div
          className="w-5 h-5 rotate-45 border-2 border-white"
          style={{ backgroundColor: diamondFill }}
        />
      </div>
    </div>
  );
}

export default function ExperienceTimeline({
  content,
  title,
}: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Intersection Observer for fade-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const updated = [...prev];
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = Number(entry.target.getAttribute("data-index"));
              updated[index] = true;
            }
          });
          return updated;
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll("[data-index]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container mx-auto relative" id="experience-timeline">
      <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
      <section ref={containerRef} className="relative mx-auto py-10">
        {/* Timeline Track */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[4px] bg-gray-700">
          {/* Animated Line */}
          <motion.div
            className="absolute left-0 top-0 w-full bg-purple-500 origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Timeline Items */}
        <div className="relative flex flex-col gap-24">
          {content.map((exp, index) => (
            <div key={index} data-index={index}>
              <TimelineItem
                exp={exp}
                index={index}
                total={content.length}
                smoothProgress={smoothProgress}
                visible={visibleItems[index]}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
