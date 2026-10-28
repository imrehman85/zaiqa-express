import { SETTINGS } from "@/lib/menu";
import { btn } from "@/lib/ui";
import { Brand } from "./header";

export function FinalCta() {
  return (
    <section className="bg-brand py-[clamp(3rem,6vw,4.5rem)] text-white">
      <div className="wrap flex flex-wrap items-center justify-between gap-6">
        <h2 className="max-w-[680px] text-[clamp(1.6rem,3.4vw,2.4rem)]">Hungry? Your order can be ready in 20 minutes.</h2>
        <a href="#menu" className={`${btn.primary} ${btn.lg} bg-dark! shadow-none! hover:bg-black!`}>Start your order</a>
      </div>
    </section>
  );
}

const heading = "mb-2 text-[.95rem] font-bold uppercase tracking-[.08em] text-white";
const link = "no-underline hover:text-saffron";

export function Footer() {
  return (
    <footer className="bg-dark pt-14 pb-24 text-[#e8dccf] md:pb-6">
      <div className="wrap grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Brand inverted />
          <p className="mt-3 text-[#b3a395]">Fast food &amp; Pakistani cuisine. Takeaway only.</p>
        </div>
        <div>
          <h4 className={heading}>Visit</h4>
          <p>{SETTINGS.address[0]}<br />{SETTINGS.address[1]}</p>
        </div>
        <div className="space-y-1.5">
          <h4 className={heading}>Contact</h4>
          <p><a className={link} href={SETTINGS.phoneHref}>{SETTINGS.phone}</a></p>
          <p><a className={link} href={`https://wa.me/${SETTINGS.whatsapp}`} target="_blank" rel="noopener">WhatsApp us</a></p>
        </div>
        <div className="space-y-1.5">
          <h4 className={heading}>Explore</h4>
          <p><a className={link} href="#menu">Menu</a></p>
          <p><a className={link} href="#pickup">Pickup &amp; hours</a></p>
          <p><a className={link} href="#faq">FAQ</a></p>
        </div>
      </div>
      <div className="wrap mt-10 flex flex-wrap justify-between gap-4 border-t border-[#3a2e27] pt-5 text-[.85rem] text-[#a8988a]">
        <span>© {new Date().getFullYear()} {SETTINGS.name}. All rights reserved.</span>
        <span>Prices include tax.</span>
      </div>
    </footer>
  );
}
