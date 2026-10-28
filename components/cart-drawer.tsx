"use client";

import { useEffect, useRef, useState } from "react";
import { MENU_BY_ID, SETTINGS, money } from "@/lib/menu";
import { btn } from "@/lib/ui";
import { useCart } from "./cart-context";
import { FoodImage } from "./food-image";

type Step = "cart" | "checkout" | "confirm";

interface Confirmation {
  orderNo: string;
  name: string;
  pickup: string;
  items: number;
  total: string;
  whatsappHref: string;
}

const PHONE_RE = /^(\+92|0)3\d{2}[\s-]?\d{7}$/;

function buildSlots() {
  const start = new Date(Date.now() + 30 * 60000);
  start.setMinutes(Math.ceil(start.getMinutes() / 15) * 15, 0, 0);
  const today = new Date().getDate();
  return Array.from({ length: 16 }, (_, i) => {
    const t = new Date(start.getTime() + i * 15 * 60000);
    const label = t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    return t.getDate() !== today ? `${label} (tomorrow)` : label;
  });
}

const inputClass =
  "w-full rounded-xl border-[1.5px] border-line bg-surface px-3.5 py-3 outline-none transition focus:border-brand focus:ring-3 focus:ring-brand/15";

export function CartDrawer() {
  const { cart, count, total, setQty, clear, drawerOpen, closeDrawer } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [form, setForm] = useState({ name: "", phone: "", when: "asap", slot: "", notes: "" });
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});
  const [slots, setSlots] = useState<string[]>([]);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!drawerOpen) return;
    const t = setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(t); document.removeEventListener("keydown", onKey); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  function close() {
    closeDrawer();
    if (step === "confirm") setStep("cart");
  }

  function goToCheckout() {
    const s = buildSlots();
    setSlots(s);
    setForm((f) => ({ ...f, slot: f.slot && s.includes(f.slot) ? f.slot : s[0] }));
    setStep("checkout");
  }

  function placeOrder() {
    const nextErrors = { name: !form.name.trim(), phone: !PHONE_RE.test(form.phone.trim()) };
    setErrors(nextErrors);
    if (nextErrors.name) return nameRef.current?.focus();
    if (nextErrors.phone) return phoneRef.current?.focus();

    const orderNo = String(Math.floor(1000 + Math.random() * 9000));
    const pickup = form.when === "later" ? form.slot : `ASAP (about ${SETTINGS.prepMinutes.join("–")} min)`;
    const lines = Object.entries(cart).map(([id, q]) => `${q} x ${MENU_BY_ID[id].name} = ${money(MENU_BY_ID[id].price * q)}`);
    const msg = [
      `*New takeaway order #${orderNo}*`,
      "",
      ...lines,
      "",
      `*Total: ${money(total)}* (pay at collection)`,
      `Pickup: ${pickup}`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      ...(form.notes.trim() ? [`Notes: ${form.notes.trim()}`] : []),
    ].join("\n");

    setConfirmation({
      orderNo,
      name: form.name.trim(),
      pickup,
      items: count,
      total: money(total),
      whatsappHref: `https://wa.me/${SETTINGS.whatsapp}?text=${encodeURIComponent(msg)}`,
    });
    clear();
    setForm({ name: "", phone: "", when: "asap", slot: "", notes: "" });
    setStep("confirm");
  }

  const entries = Object.entries(cart);
  const title = step === "confirm" ? "All done" : step === "checkout" ? "Checkout" : "Your order";

  return (
    <>
      {drawerOpen && <div onClick={close} className="fixed inset-0 z-90 animate-fade bg-[rgba(29,22,18,.5)]" />}
      <aside
        aria-label="Your order"
        aria-hidden={!drawerOpen}
        inert={!drawerOpen}
        className={`fixed inset-y-0 right-0 z-100 flex w-full max-w-[440px] flex-col bg-bg shadow-lift transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between border-b border-line bg-surface px-5 pt-5 pb-4">
          <div>
            <h2 className="text-2xl">{title}</h2>
            <p className="mt-0.5 text-[.85rem] font-bold text-green-text">Takeaway · collect from counter</p>
          </div>
          <button ref={closeRef} onClick={close} aria-label="Close" className="grid size-10 cursor-pointer place-items-center rounded-full bg-bg hover:bg-bg-2">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {step === "cart" && (
            entries.length === 0 ? (
              <div className="px-4 py-12 text-center">
                <span aria-hidden className="mb-2 block text-5xl">🍽️</span>
                <p className="font-bold">Your bag is empty</p>
                <p className="mb-4 text-ink-soft">Add something tasty from the menu to get started.</p>
                <a href="#menu" onClick={close} className={`${btn.primary} ${btn.md}`}>Browse the menu</a>
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {entries.map(([id, q]) => {
                  const m = MENU_BY_ID[id];
                  return (
                    <li key={id} className="grid grid-cols-[64px_1fr_auto] items-center gap-3.5 rounded-xl bg-surface p-3">
                      <div className="relative size-16 overflow-hidden rounded-[10px] bg-bg-2">
                        <FoodImage src={m.img} alt={m.name} emoji={m.emoji} sizes="64px" />
                      </div>
                      <div>
                        <h4 className="mb-0.5 text-[.95rem] font-bold">{m.name}</h4>
                        <div className="text-[.88rem] text-ink-soft">{money(m.price * q)}</div>
                      </div>
                      <div className="inline-flex items-center rounded-full border-[1.5px] border-line">
                        <button onClick={() => setQty(id, q - 1)} aria-label={`Remove one ${m.name}`} className="size-8 cursor-pointer font-bold">−</button>
                        <span className="min-w-5 text-center text-[.9rem] font-bold">{q}</span>
                        <button onClick={() => setQty(id, q + 1)} aria-label={`Add one ${m.name}`} className="size-8 cursor-pointer font-bold">+</button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )
          )}

          {step === "checkout" && (
            <form noValidate onSubmit={(e) => { e.preventDefault(); placeOrder(); }}>
              <button type="button" onClick={() => setStep("cart")} className="mb-4 cursor-pointer font-semibold text-ink-soft hover:text-brand">
                ← Back to order
              </button>
              <h3 className="mb-3 text-lg font-bold">Pickup details</h3>

              <label className="mb-4 flex flex-col gap-1.5">
                <span className="text-[.9rem] font-bold">Full name</span>
                <input
                  ref={nameRef}
                  value={form.name}
                  onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: false }); }}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={`${inputClass} aria-invalid:border-brand`}
                />
                {errors.name && <small className="text-brand">Please enter your name.</small>}
              </label>

              <label className="mb-4 flex flex-col gap-1.5">
                <span className="text-[.9rem] font-bold">Mobile number</span>
                <input
                  ref={phoneRef}
                  type="tel"
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: false }); }}
                  autoComplete="tel"
                  placeholder="03XX XXXXXXX"
                  aria-invalid={!!errors.phone}
                  className={`${inputClass} aria-invalid:border-brand`}
                />
                {errors.phone && <small className="text-brand">Enter a valid mobile number, e.g. 0300 1234567.</small>}
              </label>

              <fieldset className="mb-4">
                <legend className="mb-2 text-[.9rem] font-bold">Collection time</legend>
                <div className="mb-2.5 grid grid-cols-2 gap-2">
                  {[["asap", "As soon as possible"], ["later", "Schedule for later"]].map(([v, label]) => (
                    <label key={v} className="relative">
                      <input
                        type="radio"
                        name="when"
                        value={v}
                        checked={form.when === v}
                        onChange={() => setForm({ ...form, when: v })}
                        className="peer absolute opacity-0"
                      />
                      <span className="block cursor-pointer rounded-xl border-[1.5px] border-line bg-surface px-2 py-3 text-center text-[.88rem] font-semibold
                        peer-checked:border-brand peer-checked:bg-tint-red peer-checked:text-brand-dark peer-focus-visible:outline-3 peer-focus-visible:outline-saffron">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
                {form.when === "later" && (
                  <select aria-label="Choose pickup time" value={form.slot} onChange={(e) => setForm({ ...form, slot: e.target.value })} className={inputClass}>
                    {slots.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                )}
              </fieldset>

              <label className="mb-4 flex flex-col gap-1.5">
                <span className="text-[.9rem] font-bold">Notes for the kitchen <em className="font-normal text-ink-soft">(optional)</em></span>
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="E.g. less spicy, no onions"
                  className={inputClass}
                />
              </label>

              <div className="flex flex-col rounded-xl bg-tint-green px-4 py-3.5 text-[.9rem] text-green-text">
                <strong>Pay at collection</strong>
                <span>Cash or card at the counter. Nothing to pay online.</span>
              </div>
              <button type="submit" hidden />
            </form>
          )}

          {step === "confirm" && confirmation && (
            <div className="text-center">
              <div aria-hidden className="mx-auto my-4 grid size-[72px] animate-bump place-items-center rounded-full bg-green text-4xl text-white">✓</div>
              <h3 className="mb-1 text-xl font-bold">Order received!</h3>
              <p className="text-ink-soft">Show this number at the counter when you collect.</p>
              <div className="my-3 font-display text-[2.6rem] font-extrabold text-brand">#{confirmation.orderNo}</div>
              <dl className="mb-4 rounded-xl bg-surface p-4 text-left text-[.92rem]">
                {[["Name", confirmation.name], ["Pickup", confirmation.pickup], ["Items", String(confirmation.items)], ["Pay at counter", confirmation.total]].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-1">
                    <dt className="text-ink-soft">{k}</dt>
                    <dd className="font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              <a href={confirmation.whatsappHref} target="_blank" rel="noopener" className={`${btn.whatsapp} ${btn.md} w-full`}>
                Send order on WhatsApp
              </a>
              <p className="mt-2 text-[.85rem] text-ink-soft">Sending it on WhatsApp gets your order straight to our kitchen.</p>
              <a href="#menu" onClick={close} className={`${btn.ghost} ${btn.md} mt-3`}>Start a new order</a>
            </div>
          )}
        </div>

        {step !== "confirm" && (
          <div className="border-t border-line bg-surface px-5 pt-4 pb-5">
            <div className="mb-1.5 flex justify-between text-ink-soft"><span>Subtotal</span><span>{money(total)}</span></div>
            <div className="mb-4 flex justify-between text-lg font-extrabold"><span>Total</span><span>{money(total)}</span></div>
            <button
              disabled={count === 0}
              onClick={step === "cart" ? goToCheckout : placeOrder}
              className={`${btn.primary} ${btn.lg} w-full`}
            >
              {step === "checkout" ? `Place order · ${money(total)}` : "Continue to pickup details"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
