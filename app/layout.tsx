import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["600", "800"], style: ["normal", "italic"], variable: "--font-fraunces" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Zaiqa Express | Fast Food & Pakistani Takeaway",
  description:
    "Zaiqa Express: smash burgers, crispy chicken, biryani, karahi and BBQ, cooked fresh to order. Order online and collect from our takeaway counter.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#d9441c" },
    { media: "(prefers-color-scheme: dark)", color: "#15100d" },
  ],
};

// Apply the saved (or system) theme before first paint to avoid a flash.
const themeScript = `(function(){var s=null;try{s=localStorage.getItem("zx-theme")}catch(e){}var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.setAttribute("data-theme",d?"dark":"light")})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
