"use client";

import React from "react";
import { ShieldCheck, RotateCcw, Lock, Headphones, ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  setView: (view: string) => void;
  settings?: any;
}

export default function Hero({ setView, settings }: HeroProps) {
  const heading1 = settings?.heroHeadingLine1 || "Earthy Purity.";
  const heading2 = settings?.heroHeadingLine2 || "Crafted Wellness & Relief.";
  const paragraph =
    settings?.heroParagraph ||
    "Welcome to CBD American Shaman of Southlake (cbdsouthlaketx), your trusted local destination for lab-tested CBD, Delta 9, artisanal tinctures, and targeted comfort.";
  const buttonPrimaryText = settings?.heroButtonPrimary || "EXPLORE PRODUCTS";
  const buttonSecondaryText = settings?.heroButtonSecondary || "OUR STORY";

  return (
    <div className="relative bg-[#13382c] text-white overflow-hidden font-sans">
      {/* Hero Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f2d23] border border-[#dfaa5b]/40 text-[11px] font-mono font-bold tracking-widest text-[#dfaa5b] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ORGANIC HEMP &amp; CANNABIS WELLNESS • SOUTHLAKE TX</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-[1.1]">
                {heading1} <br />
                <span className="text-[#dfaa5b]">{heading2}</span>
              </h1>
            </div>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
              {paragraph}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setView("shop");
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                className="px-8 py-3.5 rounded-full bg-[#dfaa5b] hover:bg-[#c99547] text-[#13382c] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2"
              >
                <span>{buttonPrimaryText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setView("about");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-8 py-3.5 rounded-full border-2 border-white/40 hover:border-white hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              >
                {buttonSecondaryText}
              </button>
            </div>
          </div>

          {/* Right Column: High Resolution Botanical Studio Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group bg-[#0f2d23]">
              <img
                src="/images/hero_botanical_oil_1791967587839.jpg"
                alt="CBD American Shaman of Southlake botanical oils and organic wellness"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13382c]/75 via-transparent to-transparent pointer-events-none"></div>

              {/* Badge overlay on image */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0f2d23]/95 border border-white/30 text-white flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-[#dfaa5b] uppercase font-bold">
                    Tested &amp; Certified
                  </p>
                  <p className="text-xs font-bold text-white">
                    Full Spectrum &amp; Delta 9 Lab Verified
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#dfaa5b] text-[#13382c] text-[10px] font-black uppercase tracking-wider">
                  100% Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Perks Strip matching the Herbalist elementor kit layout */}
      <div className="border-t border-white/20 bg-[#0f2d23] py-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white font-sans">
          {/* Perk 1 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#dfaa5b]">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Returns</h4>
              <p className="text-[11px] text-white/80">30-Day satisfaction policy</p>
            </div>
          </div>

          {/* Perk 2 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#dfaa5b]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Guarantee</h4>
              <p className="text-[11px] text-white/80">100% third-party lab tested</p>
            </div>
          </div>

          {/* Perk 3 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#dfaa5b]">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">100% Secure</h4>
              <p className="text-[11px] text-white/80">Encrypted payment gateway</p>
            </div>
          </div>

          {/* Perk 4 */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#dfaa5b]">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Online Support</h4>
              <p className="text-[11px] text-white/80">Direct Southlake herbalists team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
