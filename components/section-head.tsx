import { eyebrow as eyebrowClass } from "@/lib/ui";

export function SectionHead({ eyebrow, title, children, align = "center" }: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto mb-11 max-w-[640px] text-center" : "text-left"}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className="mb-3 text-[clamp(1.9rem,3.6vw,2.8rem)]">{title}</h2>
      {children && <p className="text-ink-soft">{children}</p>}
    </div>
  );
}
