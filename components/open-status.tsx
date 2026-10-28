"use client";

import { useEffect, useState } from "react";
import { SETTINGS } from "@/lib/menu";

function isOpenNow(now = new Date()) {
  const h = now.getHours() + now.getMinutes() / 60;
  const today = SETTINGS.hours[now.getDay()];
  const yesterday = SETTINGS.hours[(now.getDay() + 6) % 7];
  return (h >= today[0] && h < today[1]) || (yesterday[1] > 24 && h < yesterday[1] - 24);
}

export function OpenStatus() {
  // Computed on the client: the static build doesn't know the visitor's time.
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => setOpen(isOpenNow()), []);
  if (open === null) return null;

  return (
    <p className={`flex items-center gap-2 font-bold ${open ? "text-green-text" : "text-brand"}`}>
      <span className="size-2.5 rounded-full bg-current" />
      {open ? "Open now, taking orders" : "Closed now. Opens again at noon"}
    </p>
  );
}

export { isOpenNow };
