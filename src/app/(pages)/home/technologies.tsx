"use client";

import { Icon } from "@iconify/react";

interface Tech {
  name: string;
  icon: string;
}

const TECHS: Tech[] = [
  { name: "React",        icon: "simple-icons:react"        },
  { name: "Next.js",      icon: "simple-icons:nextdotjs"    },
  { name: "TypeScript",   icon: "simple-icons:typescript"   },
  { name: "Tailwind",     icon: "simple-icons:tailwindcss"  },
  { name: "Node.js",      icon: "simple-icons:nodedotjs"    },
  { name: "NestJS",       icon: "simple-icons:nestjs"       },
  { name: "Express",      icon: "simple-icons:express"      },
  { name: "Angular",      icon: "simple-icons:angular"      },
  { name: "Laravel",      icon: "simple-icons:laravel"      },
  { name: "WordPress",    icon: "simple-icons:wordpress"    },
  { name: "MongoDB",      icon: "simple-icons:mongodb"      },
  { name: "PostgreSQL",   icon: "simple-icons:postgresql"   },
  { name: "Docker",       icon: "simple-icons:docker"       },
  { name: "Azure DevOps", icon: "simple-icons:azuredevops"  },
];

const Chip = ({ tech }: { tech: Tech }) => (
  <div className="glass glass-hover rounded-full px-5 py-3 flex items-center gap-3 shrink-0 transition-all duration-300 hover:-translate-y-px">
    <Icon icon={tech.icon} width={22} height={22} className="text-white" />
    <span className="text-sm sm:text-base font-medium tracking-tight text-white whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

export default function Technologies() {
  return (
    <div className="overflow-hidden marquee-mask group">
      <div className="flex w-max gap-3 py-2 animate-marquee group-hover:[animation-play-state:paused]">
        {[...TECHS, ...TECHS].map((t, i) => (
          <Chip key={`${t.name}-${i}`} tech={t} />
        ))}
      </div>
    </div>
  );
}
