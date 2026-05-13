"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/home", label: "Work" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="relative z-20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-10 py-6 flex justify-between items-center">
        <Link
          href="/home"
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full glass text-white text-[13px] font-semibold tracking-tight transition-transform duration-300 group-hover:scale-105">
            AL
          </span>
          <span className="text-[15px] font-medium tracking-tight text-white">
            Aswin Lakshmanan
          </span>
        </Link>

        <div className="hidden sm:flex items-center gap-2 glass rounded-full p-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/65 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          href="mailto:maswinlakshmanan4@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-bg text-sm font-medium tracking-tight transition-all duration-200 hover:bg-white/90 hover:-translate-y-px"
        >
          Hire me →
        </a>

        {/* Mobile: compact nav links */}
        <div className="sm:hidden flex items-center gap-1 glass rounded-full p-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  isActive ? "bg-white/10 text-white" : "text-white/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Header;
