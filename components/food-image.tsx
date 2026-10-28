"use client";

import Image from "next/image";
import { useState } from "react";

// A photo that falls back to a warm gradient tile with an emoji if it can't load.
export function FoodImage({ src, alt, emoji, className = "", sizes, priority }: {
  src: string;
  alt: string;
  emoji: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="grid size-full place-items-center bg-gradient-to-br from-[#f7c873] to-[#e2622f] text-[clamp(1.5rem,6vw,3.5rem)]" role="img" aria-label={alt}>
        {emoji}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(max-width: 640px) 100vw, 400px"}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
