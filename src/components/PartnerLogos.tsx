"use client";

import React from "react";
import { Sparkles, Leaf, Award, ShieldCheck } from "lucide-react";

export default function PartnerLogos() {
  // Real brands carried by CBD American Shaman of Southlake
  const brands = [
    { name: "BARNEY'S BOTANICALS", sub: "FULL SPECTRUM GUMMIES" },
    { name: "WILLIE'S REMEDY", sub: "HEMP INFUSED TONICS" },
    { name: "WYLD HEMP", sub: "REAL FRUIT BOTANICALS" },
    { name: "ENJOY HEMP", sub: "LIVE ROSIN & TERPENES" },
    { name: "HOMETOWN HERO", sub: "TEXAS HEMP CRAFT" },
    { name: "PROLEVE", sub: "CLINICAL GRADE WELLNESS" },
  ];

  return (
    <div className="w-full bg-[#ffffff] border-b border-[#e1e8db] py-5 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 sm:gap-8">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 text-[#13382c] opacity-80 hover:opacity-100 transition-opacity"
          >
            <Leaf className="w-4 h-4 text-[#2d6a4f] shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-serif font-black tracking-wider text-xs sm:text-sm text-[#13382c] leading-none uppercase">
                {brand.name}
              </span>
              <span className="text-[8px] font-mono tracking-widest text-[#52796f] uppercase font-bold mt-0.5">
                {brand.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
