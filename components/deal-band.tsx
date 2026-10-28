"use client";

import { MENU_BY_ID, money } from "@/lib/menu";
import { btn, eyebrow } from "@/lib/ui";
import { useCart } from "./cart-context";

export function DealBand() {
  const { add } = useCart();
  const deal = MENU_BY_ID["family-deal"];

  return (
    <section className="bg-[linear-gradient(120deg,var(--dark)_0%,#3a1f12_100%)] py-[clamp(2.5rem,5vw,3.5rem)] text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-8">
        <div>
          <p className={`${eyebrow} text-saffron!`}>Family deal</p>
          <h2 className="mb-1.5 text-[clamp(1.5rem,3vw,2.2rem)]">Biryani + Karahi + 4 Naan + 1.5L drink</h2>
          <p className="text-[#d9c8b8]">Feeds 4–5. Perfect for a night in.</p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-between gap-5 sm:w-auto">
          <span className="font-display text-[2.2rem] font-extrabold text-saffron">{money(deal.price)}</span>
          <button onClick={() => add(deal.id)} className={`${btn.light} ${btn.lg}`}>Add to order</button>
        </div>
      </div>
    </section>
  );
}
