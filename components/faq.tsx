import { SETTINGS } from "@/lib/menu";
import { SectionHead } from "./section-head";

const FAQS = [
  ["Can I eat at the restaurant?", "Sorry, no. We're a takeaway-only kitchen and don't have a seating area. Every order is packed to take away."],
  ["Do you deliver?", "We don't run our own delivery. Order here for collection and pick it up from our counter."],
  ["How do I pay?", "You pay when you collect, by cash or card. There's nothing to pay online."],
  ["How long will my order take?", "Most orders are ready in 15–25 minutes. Large or family orders can take a little longer at busy times. You can also schedule a later pickup slot."],
  ["Is your food halal?", "Yes, all our meat is 100% halal."],
  ["Can I change or cancel my order?", `Call us on ${SETTINGS.phone} as soon as possible with your order number and we'll do our best to help.`],
];

export function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHead eyebrow="Good to know" title="Frequently asked questions" align="left" />
        <div>
          {FAQS.map(([q, a]) => (
            <details key={q} className="group mb-3 rounded-xl bg-surface px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold">
                {q}
                <span aria-hidden className="text-2xl leading-none text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-4 text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
