"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  tiltIntensity?: number;
  liftOnHover?: boolean;
  as?: "div" | "a" | "article";
  href?: string;
  onClick?: () => void;
}

/**
 * Glass card primitive — translucent, blurred surface for the aurora theme.
 * Optional 3D tilt-on-hover (mouse-follow perspective rotation).
 */
export default function GlassCard({
  children,
  className = "",
  tilt = false,
  tiltIntensity = 6,
  liftOnHover = true,
  as = "div",
  href,
  onClick,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rx = useSpring(useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), {
    stiffness: 200,
    damping: 18,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), {
    stiffness: 200,
    damping: 18,
  });

  function onMouseMove(e: React.MouseEvent) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    if (!tilt) return;
    x.set(0);
    y.set(0);
  }

  const baseClass =
    "glass " +
    (liftOnHover ? "glass-hover transition-colors duration-300 " : "") +
    className;

  const motionProps = tilt
    ? {
        style: {
          rotateX: rx,
          rotateY: ry,
          transformPerspective: 1000,
          transformStyle: "preserve-3d" as const,
        },
      }
    : {};

  const Component = as === "a" ? motion.a : as === "article" ? motion.article : motion.div;

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement & HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      className={baseClass}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
