"use client";

import { Icon } from "@iconify/react";

interface Tech {
  name: string;
  icon: string;
  tint: "orange" | "sun" | "rose" | "cream";
}

const TECHS: Tech[] = [
  { name: "React",        icon: "simple-icons:react",        tint: "cream"  },
  { name: "Next.js",      icon: "simple-icons:nextdotjs",    tint: "orange" },
  { name: "TypeScript",   icon: "simple-icons:typescript",   tint: "cream"  },
  { name: "Tailwind",     icon: "simple-icons:tailwindcss",  tint: "sun"    },
  { name: "Node.js",      icon: "simple-icons:nodedotjs",    tint: "cream"  },
  { name: "NestJS",       icon: "simple-icons:nestjs",       tint: "rose"   },
  { name: "Express",      icon: "simple-icons:express",      tint: "cream"  },
  { name: "Angular",      icon: "simple-icons:angular",      tint: "rose"   },
  { name: "Laravel",      icon: "simple-icons:laravel",      tint: "orange" },
  { name: "WordPress",    icon: "simple-icons:wordpress",    tint: "cream"  },
  { name: "MongoDB",      icon: "simple-icons:mongodb",      tint: "sun"    },
  { name: "PostgreSQL",   icon: "simple-icons:postgresql",   tint: "cream"  },
  { name: "Docker",       icon: "simple-icons:docker",       tint: "cream"  },
  { name: "Azure DevOps", icon: "simple-icons:azuredevops",  tint: "orange" },
];

const TINT_BG: Record<Tech["tint"], string> = {
  orange: "bg-orange",
  sun: "bg-sun",
  rose: "bg-rose",
  cream: "bg-cream",
};

const Chip = ({ tech }: { tech: Tech }) => (
  <div
    className={`${TINT_BG[tech.tint]} border-3 border-ink px-5 py-3 flex items-center gap-3 shrink-0 transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-[-1deg]`}
  >
    <Icon icon={tech.icon} width={28} height={28} className="text-ink" />
    <span className="text-base sm:text-lg font-bold uppercase tracking-tight whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

export default function Technologies() {
  return (
    <div className="overflow-hidden tech-mask group">
      <div
        className="flex w-max gap-4 py-2 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "55s" }}
      >
        {[...TECHS, ...TECHS].map((t, i) => (
          <Chip key={`${t.name}-${i}`} tech={t} />
        ))}
      </div>

      <style jsx>{`
        .tech-mask {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
        }
      `}</style>
    </div>
  );
}
