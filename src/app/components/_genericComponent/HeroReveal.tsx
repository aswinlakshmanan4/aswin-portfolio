"use client";

import { motion } from "framer-motion";

const NAME_LINES = [
  ["A", "S", "W", "I", "N"],
  ["L", "A", "K", "S", "H", "M", "A", "N", "A", "N"],
];

export default function HeroReveal() {
  return (
    <h1
      className="font-medium leading-[0.95] tracking-[-0.04em] select-none text-white"
      style={{
        fontSize: "clamp(2.5rem, 10vw, 8rem)",
      }}
    >
      {NAME_LINES.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.map((letter, i) => (
            <motion.span
              key={`${lineIdx}-${i}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                delay: lineIdx * 0.25 + i * 0.04,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                lineIdx === 1
                  ? "inline-block font-serif italic font-normal gradient-text"
                  : "inline-block"
              }
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}
