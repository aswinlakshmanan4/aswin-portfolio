"use client";
import { Icon } from "@iconify/react";
import * as simpleIcons from "simple-icons";
import { useMemo } from "react";

export default function Technologies() {
  const techs = [
    "Frontend",
    "React",
    "Nextdotjs",
    "Angular",
    "Tailwindcss",
    "Typescript",
    "Backend",
    "Nodedotjs",
    "Nestjs",
    "Wordpress",
    "Laravel",
    "Express",
    "Database",
    "Mongodb",
    "Postgresql",
    "Docker",
  ];

  const fallbackColors: Record<string, string> = {
    Nextdotjs: "#000000",
    Express: "#000000",
    Angular: "#dd0031",
  };

  const techData = useMemo(() => {
    return techs.map((name) => {
      const key = "si" + name;
      const iconData = (simpleIcons as Record<string, any>)[key];
      const color =
        fallbackColors[name] ||
        (iconData?.hex ? `#${iconData.hex}` : "#ffffff");

      return {
        name,
        icon: `simple-icons:${name.toLowerCase()}`,
        color,
      };
    });
  }, [fallbackColors, techs]);

  const Row = () => (
    <>
      {techData.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center flex-shrink-0 px-8 justify-center"
        >
          <Icon
            icon={item.icon}
            width={48}
            height={48}
            style={{ color: item.color }}
          />
          <span className="mt-2 text-white text-sm font-medium">
            {item.name.replace(/dotjs/i, ".js")}
          </span>
        </div>
      ))}
    </>
  );

  return (
    <div className="overflow-hidden w-full py-6 group">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row /> {/* exact duplicate for loop */}
      </div>
    </div>
  );
}
