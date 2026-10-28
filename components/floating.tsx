"use client";

import { money } from "@/lib/menu";
import { useCart } from "./cart-context";

export function MobileCartBar() {
  const { count, total, drawerOpen, openDrawer } = useCart();
  if (count === 0 || drawerOpen) return null;

  return (
    <button
      onClick={openDrawer}
      className="fixed inset-x-4 bottom-4 z-40 flex cursor-pointer items-center justify-between gap-4 rounded-full bg-brand px-6 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(217,68,28,.4)] md:hidden"
    >
      <span>{count} {count === 1 ? "item" : "items"}</span>
      <strong>View order · {money(total)}</strong>
    </button>
  );
}

export function Toast() {
  const { toast } = useCart();
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-none fixed bottom-24 left-1/2 z-[120] max-w-[calc(100%-32px)] -translate-x-1/2 truncate rounded-full bg-ink px-5 py-3 text-[.92rem] font-semibold text-bg transition-all duration-300 ${
        toast ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {toast}
    </div>
  );
}
