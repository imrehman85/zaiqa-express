// Shared Tailwind class sets for buttons and section headings.
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 font-bold no-underline cursor-pointer transition active:translate-y-px active:scale-[.98]";

export const btn = {
  primary: `${btnBase} border-transparent bg-brand text-white shadow-[0_8px_20px_rgba(217,68,28,.3)] hover:bg-brand-dark disabled:bg-disabled disabled:shadow-none disabled:cursor-not-allowed`,
  ghost: `${btnBase} bg-transparent border-ink text-ink hover:bg-ink hover:text-bg`,
  light: `${btnBase} border-transparent bg-white text-[#d9441c] hover:bg-[#fbf6ef]`,
  whatsapp: `${btnBase} border-transparent bg-[#25d366] text-white hover:bg-[#1ebe5b]`,
  md: "px-5 py-2.5",
  lg: "px-6 py-3.5 text-[1.02rem]",
};

export const eyebrow = "mb-2.5 text-[.78rem] font-extrabold uppercase tracking-[.14em] text-brand";
