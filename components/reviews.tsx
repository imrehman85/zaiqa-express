import { SectionHead } from "./section-head";

// Sample reviews: replace with real customer reviews before launch.
const REVIEWS = [
  { quote: "Ordered on the way home from work and it was ready the minute I walked in. The chicken karahi is the real deal.", name: "Ayesha K." },
  { quote: "Best smash burger in the area, and the kids love the zinger. Ordering online saves so much time.", name: "Usman R." },
  { quote: "Family deal is huge value. Biryani was fragrant, naan was still warm when we got home.", name: "Hamza & Sana" },
];

export function Reviews() {
  return (
    <section className="section-y bg-surface">
      <div className="wrap">
        <SectionHead eyebrow="Loved locally" title="What our regulars say" />
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-[18px] bg-bg p-7">
              <div className="mb-3 tracking-[.15em] text-saffron" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="mb-4 text-[1.02rem]">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="font-bold">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
