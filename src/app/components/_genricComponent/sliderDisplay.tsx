"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface ExperienceTimelineProps {
    content: { company: string; role: string; duration: string; description: string }[];
    title: string;
}

export default function ExperienceTimeline({ content, title }: ExperienceTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // when this id is visible, we need to animate the company div and role div
  const companyRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleScroll = () => {
      if(!containerRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      console.log("Adding scroll event listener", top, window.innerHeight, companyRef.current, roleRef.current);
      if (top < window.innerHeight && companyRef.current && roleRef.current) {
        companyRef.current.classList.add("animate-fade-up");
        roleRef.current.classList.add("animate-fade-up");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          {content.map((exp, index) => {
            const pointProgress = (index + 1) / content.length;
            const diamondFill = useTransform(
              smoothProgress,
              [0, pointProgress],
              ["#1f2937", "#a855f7"]
            );

            return (
              <div key={index} className="relative flex">
                
                {/* Left side */}
                <div className="w-1/2 pl-8 flex justify-start items-center text-purple-500 font-semibold" ref={companyRef}>
                  {exp.company}
                </div>
                {/* Right side */}

                <div className="w-1/2 pl-8 text-left" ref={roleRef}>
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
          })}
        </div>
      </section>
    </section>
  );
}
