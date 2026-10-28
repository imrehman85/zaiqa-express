import { SETTINGS } from "@/lib/menu";
import { eyebrow } from "@/lib/ui";
import { OpenStatus } from "./open-status";

const card = "rounded-[18px] bg-surface p-5";
const cardTitle = "mb-2 text-base font-bold uppercase tracking-[.06em] text-brand";
const link = "font-bold text-ink no-underline hover:text-brand";

export function Pickup() {
  const mapQ = encodeURIComponent(SETTINGS.mapQuery);

  return (
    <section id="pickup" className="section-y">
      <div className="wrap grid items-stretch gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className={eyebrow}>Collection point</p>
          <h2 className="mb-4 text-[clamp(1.9rem,3.6vw,2.6rem)]">Where to pick up your order</h2>
          <p className="rounded-r-xl border-l-4 border-saffron bg-tint-warn px-4 py-3.5">
            <strong>Please note:</strong> we&apos;re a takeaway-only counter with no tables or seating. All orders are packed to go.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className={card}>
              <h3 className={cardTitle}>Address</h3>
              <p className="mb-2">{SETTINGS.address[0]}<br />{SETTINGS.address[1]}</p>
              <a className={link} href={`https://maps.google.com/?q=${mapQ}`} target="_blank" rel="noopener">Get directions →</a>
            </div>
            <div className={`${card} md:row-span-2`}>
              <h3 className={cardTitle}>Opening hours</h3>
              <ul className="mb-4">
                {SETTINGS.hoursLabel.map(([d, h]) => (
                  <li key={d} className="flex justify-between gap-4 border-b border-dashed border-line py-2 text-[.93rem]">
                    <span className="font-semibold">{d}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <OpenStatus />
            </div>
            <div className={card}>
              <h3 className={cardTitle}>Questions about an order?</h3>
              <p className="mb-1"><a className={link} href={SETTINGS.phoneHref}>{SETTINGS.phone}</a></p>
              <p className="text-ink-soft">Call or WhatsApp us any time during opening hours.</p>
            </div>
          </div>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-[18px] bg-bg-2 shadow-soft">
          <iframe
            title="Map showing Zaiqa Express location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
            className="block size-full min-h-[360px] border-0 dark:[filter:invert(.9)_hue-rotate(180deg)_brightness(.95)]"
          />
        </div>
      </div>
    </section>
  );
}
