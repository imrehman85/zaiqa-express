import { unsplash } from "@/lib/menu";
import { btn, eyebrow } from "@/lib/ui";
import { FoodImage } from "./food-image";

const FACTS = [
  ["15–25 min", "Typical prep time"],
  ["Pay at pickup", "Cash or card"],
  ["Halal", "100% halal meat"],
];

export function Hero() {
  return (
    <section className="overflow-hidden pt-[clamp(2.5rem,6vw,5rem)] pb-[clamp(3rem,7vw,6rem)]">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className={eyebrow}>Fast food meets desi flavour</p>
          <h1 className="mb-4 text-[clamp(2.3rem,5.2vw,4.1rem)]">
            Smash burgers to sizzling karahi, <em className="text-brand">ready when you are.</em>
          </h1>
          <p className="max-w-[34rem] text-[1.12rem] text-ink-soft">
            Everything is cooked fresh to order in our kitchen. Pick your favourites online, choose a pickup time, and grab your
            food from the counter. No queue, no waiting around.
          </p>
          <div className="mt-7 mb-9 flex flex-wrap gap-3">
            <a href="#menu" className={`${btn.primary} ${btn.lg}`}>Order for pickup</a>
            <a href="#how" className={`${btn.ghost} ${btn.lg}`}>How it works</a>
          </div>
          <ul className="flex flex-wrap gap-5 sm:gap-8">
            {FACTS.map(([title, sub]) => (
              <li key={title} className="flex flex-col">
                <strong className="text-[1.05rem]">{title}</strong>
                <span className="text-[.88rem] text-ink-soft">{sub}</span>
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden className="relative aspect-square w-full max-w-[400px] justify-self-center lg:max-w-[540px]">
          <div className="absolute inset-[6%_0_0_8%] rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--saffron),var(--brand)_70%)] opacity-90" />
          <div className="absolute inset-[10%_6%_6%_14%] animate-float overflow-hidden rounded-full border-8 border-bg shadow-lift">
            <FoodImage src={unsplash("1563379091339-03b21ab4a4f8", 900)} alt="" emoji="🍛" priority sizes="540px" />
          </div>
          <div className="absolute bottom-[2%] left-0 aspect-square w-[38%] animate-float overflow-hidden rounded-full border-8 border-bg shadow-lift [animation-delay:-3s]">
            <FoodImage src={unsplash("1568901346375-23c9450c58cd")} alt="" emoji="🍔" priority sizes="220px" />
          </div>
          <div className="absolute top-[4%] right-0 flex items-center gap-2.5 rounded-2xl bg-surface px-3 py-2.5 text-[.78rem] leading-snug shadow-soft sm:px-4 sm:py-3 sm:text-[.85rem]">
            <span className="text-[1.6rem]">🛍️</span>
            <span>
              <strong className="block text-[.95rem]">Order ahead</strong>Skip the wait at the counter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
