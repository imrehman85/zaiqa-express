import { SectionHead } from "./section-head";

const STEPS = [
  { title: "Browse & build your order", body: "Burgers, broast, biryani, karahi, BBQ and more. Add what you like to your bag.", badge: "bg-brand text-white" },
  { title: "Pick a collection time", body: "Choose “as soon as possible” or a later slot. We start cooking so it’s fresh when you arrive.", badge: "bg-saffron text-coal" },
  { title: "Collect from the counter", body: "Give your order number at the counter, pay by cash or card, and take it home hot.", badge: "bg-green text-white" },
];

export function HowItWorks() {
  return (
    <section id="how" className="section-y bg-surface">
      <div className="wrap">
        <SectionHead eyebrow="Takeaway made simple" title="Three steps to a hot meal">
          We&apos;re a takeaway kitchen with no seating area, so every order is packed to travel and ready to collect.
        </SectionHead>
        <ol className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-[18px] bg-bg p-8">
              <span className={`mb-5 grid size-12 place-items-center rounded-[14px] font-display text-[1.4rem] font-extrabold ${s.badge}`}>{i + 1}</span>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
