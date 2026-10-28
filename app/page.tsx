import { CartProvider } from "@/components/cart-context";
import { Header, NoticeBar } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { MenuSection } from "@/components/menu-section";
import { DealBand } from "@/components/deal-band";
import { Pickup } from "@/components/pickup";
import { Reviews } from "@/components/reviews";
import { Faq } from "@/components/faq";
import { FinalCta, Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { MobileCartBar, Toast } from "@/components/floating";

export default function Home() {
  return (
    <CartProvider>
      <NoticeBar />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <MenuSection />
        <DealBand />
        <Pickup />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCartBar />
      <CartDrawer />
      <Toast />
    </CartProvider>
  );
}
