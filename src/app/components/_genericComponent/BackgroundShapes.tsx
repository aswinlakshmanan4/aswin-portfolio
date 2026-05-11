"use client";

import { useEffect, useRef } from "react";

type Shape = "square" | "circle" | "triangle" | "cross";

interface ShapeConfig {
  shape: Shape;
  size: number;
  position: string; // tailwind classes pinning the shape clear of the hero text
  color: string;
  driftX: number;
  driftY: number;
  rot: number;
  delay: number;
  hideUnderLg?: boolean;
}

const SHAPES: ShapeConfig[] = [
  // Top-left: orange square sitting above the eyebrow text
  {
    shape: "square",
    size: 56,
    position: "top-2 left-2 sm:top-4 sm:left-4",
    color: "#ff5b1f",
    driftX: 20,
    driftY: -14,
    rot: 18,
    delay: 0,
  },
  // Top-right: black triangle in the upper-right corner (hidden behind the
  // orange aside on lg+, visible at the corner on smaller widths but small
  // enough not to reach the name)
  {
    shape: "triangle",
    size: 60,
    position: "top-2 right-2 sm:top-4 sm:right-4",
    color: "#0e0e0e",
    driftX: -18,
    driftY: 22,
    rot: 26,
    delay: 1.2,
  },
  // Bottom-left: yellow circle, below the CTA buttons
  {
    shape: "circle",
    size: 68,
    position: "bottom-3 left-3 sm:bottom-5 sm:left-5",
    color: "#ffd23f",
    driftX: -16,
    driftY: 16,
    rot: -22,
    delay: 0.6,
  },
  // Bottom-right: orange cross, bottom-right corner
  {
    shape: "cross",
    size: 58,
    position: "bottom-3 right-3 sm:bottom-5 sm:right-5",
    color: "#ff5b1f",
    driftX: 14,
    driftY: -18,
    rot: -25,
    delay: 1.8,
  },
  // Mid-left: small rose square — only on lg+ where the left column has
  // breathing room next to the buttons
  {
    shape: "square",
    size: 42,
    position: "top-1/2 left-3 -translate-y-1/2 hidden lg:block",
    color: "#ffc1d6",
    driftX: 14,
    driftY: 14,
    rot: 12,
    delay: 2.4,
    hideUnderLg: true,
  },
];

function ShapeSvg({
  shape,
  color,
  size,
}: {
  shape: Shape;
  color: string;
  size: number;
}) {
  if (shape === "square") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <rect
          x="6"
          y="6"
          width="88"
          height="88"
          fill={color}
          stroke="#0e0e0e"
          strokeWidth="6"
        />
      </svg>
    );
  }
  if (shape === "circle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="42" fill={color} stroke="#0e0e0e" strokeWidth="6" />
      </svg>
    );
  }
  if (shape === "triangle") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon
          points="50,8 92,88 8,88"
          fill={color}
          stroke="#0e0e0e"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path
        d="M30 10 L70 10 L70 30 L90 30 L90 70 L70 70 L70 90 L30 90 L30 70 L10 70 L10 30 L30 30 Z"
        fill={color}
        stroke="#0e0e0e"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BackgroundShapes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      target.current.x = (e.clientX - cx) / rect.width;
      target.current.y = (e.clientY - cy) / rect.height;
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      itemsRef.current.forEach((node, i) => {
        if (!node) return;
        const cfg = SHAPES[i];
        const tx = current.current.x * cfg.driftX;
        const ty = current.current.y * cfg.driftY;
        node.style.setProperty("--tx", `${tx}px`);
        node.style.setProperty("--ty", `${ty}px`);
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {SHAPES.map((cfg, i) => (
        <div key={i} className={`absolute ${cfg.position}`}>
          <div
            className="animate-shape-float"
            style={{ animationDelay: `${cfg.delay}s` }}
          >
            <div
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              style={{
                transform:
                  "translate(var(--tx, 0), var(--ty, 0)) rotate(" + cfg.rot + "deg)",
              }}
            >
              <ShapeSvg shape={cfg.shape} color={cfg.color} size={cfg.size} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
