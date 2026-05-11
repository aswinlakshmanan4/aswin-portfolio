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
    <header className="border-b-3 border-ink bg-cream">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        <Link
          href="/home"
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 bg-orange border-3 border-ink font-bold text-ink text-lg group-hover:rotate-12 transition-transform duration-300">
            AL
          </span>
          <span className="text-xl font-bold tracking-tight uppercase">
            Aswin<span className="text-orange">.</span>
          </span>
        </Link>
        <ul className="flex items-center gap-6 text-base">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={isActive}
                  className="brut-link font-semibold uppercase tracking-wide text-ink"
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="mailto:aswin.lakshmanan@alferix.com"
              className="hidden sm:inline-block bg-ink text-cream border-3 border-ink px-4 py-2 font-bold uppercase tracking-wide brut-press"
            >
              Hire me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
