"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, MENU, TAG_STYLES, money, type CategoryId, type MenuItem } from "@/lib/menu";
import { useCart } from "./cart-context";
import { FoodImage } from "./food-image";
import { SectionHead } from "./section-head";

export function MenuSection() {
  const [cat, setCat] = useState<CategoryId>("all");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.filter((m) => m.cat !== "deal")
      .filter((m) => cat === "all" || m.cat === cat)
      .filter((m) => !q || `${m.name} ${m.desc}`.toLowerCase().includes(q));
  }, [cat, query]);

  return (
    <section id="menu" className="section-y">
      <div className="wrap">
        <SectionHead eyebrow="Our menu" title="What are you craving today?" />

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div role="tablist" aria-label="Menu categories" className="no-scrollbar flex min-w-0 flex-1 gap-2 overflow-x-auto pb-0.5">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={c.id === cat}
                onClick={() => setCat(c.id)}
                className="shrink-0 cursor-pointer whitespace-nowrap rounded-full border-[1.5px] border-line bg-surface px-4 py-2 font-bold transition
                  hover:border-brand hover:text-brand aria-selected:border-ink aria-selected:bg-ink aria-selected:text-bg"
              >
                {c.label}
              </button>
            ))}
          </div>
          <label className="flex w-full items-center gap-2 rounded-full border-[1.5px] border-line bg-surface px-4 py-2 text-ink-soft focus-within:border-brand md:w-[280px]">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value) setCat("all");
              }}
              placeholder="Search the menu"
              aria-label="Search the menu"
              className="w-full bg-transparent text-ink outline-none"
            />
          </label>
        </div>

        <div aria-live="polite" className="grid grid-cols-1 gap-6 sm:grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
          {items.map((m, i) => (
            <DishCard key={m.id} item={m} delay={Math.min(i, 8) * 40} />
          ))}
        </div>
        {items.length === 0 && (
          <p className="py-8 text-center text-ink-soft">Nothing matches that search. Try &ldquo;chicken&rdquo; or &ldquo;biryani&rdquo;.</p>
        )}
      </div>
    </section>
  );
}

function DishCard({ item, delay }: { item: MenuItem; delay: number }) {
  return (
    <article
      style={{ animationDelay: `${delay}ms` }}
      className="group flex animate-fade-up flex-col overflow-hidden rounded-[18px] bg-surface shadow-[0_2px_0_var(--line)] transition duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-2">
        <FoodImage src={item.img} alt={item.name} emoji={item.emoji} className="transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span key={t} className={`rounded-full px-2 py-1 text-[.7rem] font-extrabold uppercase tracking-wide ${TAG_STYLES[t].className}`}>
              {TAG_STYLES[t].label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
        <h3 className="mb-1 text-[1.1rem] font-bold">{item.name}</h3>
        <p className="mb-4 flex-1 text-[.92rem] text-ink-soft">{item.desc}</p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[1.12rem] font-extrabold">{money(item.price)}</span>
          <DishAction item={item} />
        </div>
      </div>
    </article>
  );
}

function DishAction({ item }: { item: MenuItem }) {
  const { cart, add, setQty } = useCart();
  const q = cart[item.id];

  if (!q) {
    return (
      <button
        onClick={() => add(item.id)}
        aria-label={`Add ${item.name}`}
        className="cursor-pointer rounded-full bg-brand px-4 py-2 font-bold text-white transition-colors hover:bg-brand-dark"
      >
        + Add
      </button>
    );
  }
  return (
    <div aria-label={`${item.name} quantity`} className="inline-flex items-center rounded-full bg-ink text-bg">
      <button onClick={() => setQty(item.id, q - 1)} aria-label="Remove one" className="size-9 cursor-pointer text-lg font-bold">−</button>
      <span className="min-w-[22px] text-center font-bold">{q}</span>
      <button onClick={() => setQty(item.id, q + 1)} aria-label="Add one" className="size-9 cursor-pointer text-lg font-bold">+</button>
    </div>
  );
}
