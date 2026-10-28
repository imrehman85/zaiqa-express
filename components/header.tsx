"use client";

import { useEffect, useState } from "react";
import { useCart } from "./cart-context";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#how", label: "How it works" },
  { href: "#pickup", label: "Pickup & hours" },
  { href: "#faq", label: "FAQ" },
];

export function NoticeBar() {
  return (
    <div role="note" className="flex flex-wrap items-center justify-center gap-3 bg-dark px-4 py-2 text-center text-[.8rem] text-[#f6e9da] sm:text-[.88rem]">
      <span className="rounded-full bg-saffron px-2.5 py-0.5 text-[.72rem] font-extrabold uppercase tracking-[.08em] text-coal">Takeaway only</span>
      <span>No dine-in seating. Order online, then collect your food hot from our counter.</span>
    </div>
  );
}

export function Brand({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5 no-underline" aria-label="Zaiqa Express home">
      <span aria-hidden className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-saffron font-display text-[1.35rem] font-extrabold text-white">
        Z
      </span>
      <span className={`font-display text-[1.15rem] font-extrabold tracking-tight sm:text-[1.35rem] ${inverted ? "text-white" : ""}`}>
        Zaiqa<span className="ml-1 text-brand">Express</span>
      </span>
    </a>
  );
}

export function Header() {
  const { count, openDrawer, bumpKey } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b bg-header backdrop-blur-md backdrop-saturate-150 transition ${
        scrolled ? "border-line shadow-[0_4px_20px_rgba(60,30,10,.06)]" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Brand />

        <nav
          aria-label="Main"
          className={`${navOpen ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col border-b border-line bg-bg px-4 pb-4 pt-2
            md:static md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0`}
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setNavOpen(false)}
              className="border-b border-line py-3.5 font-semibold text-ink-soft no-underline transition-colors hover:text-brand md:border-0 md:py-0"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={openDrawer}
            aria-label="Open your order"
            className="flex cursor-pointer items-center gap-2 rounded-full bg-ink px-4 py-2.5 font-bold text-bg transition-opacity hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-1 13H7L6 7Zm3 0V5a3 3 0 0 1 6 0v2" />
            </svg>
            <span className="hidden md:inline">Your order</span>
            <span key={bumpKey} className={`grid h-[22px] min-w-[22px] place-items-center rounded-full bg-brand px-1.5 text-[.78rem] text-white ${bumpKey ? "animate-bump" : ""}`}>
              {count}
            </span>
          </button>
          <button
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            className="group flex size-[42px] cursor-pointer flex-col justify-center gap-[5px] p-[9px] md:hidden"
          >
            <span className="h-0.5 rounded bg-ink transition group-aria-expanded:translate-y-[7px] group-aria-expanded:rotate-45" />
            <span className="h-0.5 rounded bg-ink transition group-aria-expanded:opacity-0" />
            <span className="h-0.5 rounded bg-ink transition group-aria-expanded:-translate-y-[7px] group-aria-expanded:-rotate-45" />
          </button>
        </div>
      </div>
    </header>
  );
}
