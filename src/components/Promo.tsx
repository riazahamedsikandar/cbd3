"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Tag } from "lucide-react";

interface PromoProps {
  onShopClick?: () => void;
}

export default function Promo({ onShopClick }: PromoProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 2,
    minutes: 43,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e1e8db] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, description, countdown, and Shop Now CTA */}
          <div className="lg:col-span-6 space-y-6 text-left font-sans">
            <div className="space-y-3">
              <span className="text-[11px] font-mono tracking-widest text-[#2d6a4f] uppercase font-bold">
                LIMITED STOREFRONT PROMOTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#13382c] tracking-tight leading-[1.15]">
                Full Spectrum Tinctures &amp; Targeted Relief
              </h2>
              <p className="text-[#2c3527] text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                Experience our signature water-soluble hemp drops, restorative nighttime sleep formulas, and rich organic botanicals. Every batch is verified by ISO-certified third-party laboratories.
              </p>
            </div>

            {/* Countdown Boxes matching Herbalist layout */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2">
              <div className="w-16 h-18 sm:w-20 sm:h-22 rounded-xl border border-[#2d6a4f]/30 bg-[#f4f7f2] flex flex-col items-center justify-center p-2 shadow-xs">
                <span className="text-xl sm:text-2xl font-black text-[#13382c] font-mono leading-none">
                  {formatNumber(timeLeft.days)}
                </span>
                <span className="text-[10px] font-bold text-[#52796f] uppercase tracking-wider mt-1">
                  Days
                </span>
              </div>

              <div className="w-16 h-18 sm:w-20 sm:h-22 rounded-xl border border-[#2d6a4f]/30 bg-[#f4f7f2] flex flex-col items-center justify-center p-2 shadow-xs">
                <span className="text-xl sm:text-2xl font-black text-[#13382c] font-mono leading-none">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-[10px] font-bold text-[#52796f] uppercase tracking-wider mt-1">
                  Hours
                </span>
              </div>

              <div className="w-16 h-18 sm:w-20 sm:h-22 rounded-xl border border-[#2d6a4f]/30 bg-[#f4f7f2] flex flex-col items-center justify-center p-2 shadow-xs">
                <span className="text-xl sm:text-2xl font-black text-[#13382c] font-mono leading-none">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-[10px] font-bold text-[#52796f] uppercase tracking-wider mt-1">
                  Minutes
                </span>
              </div>

              <div className="w-16 h-18 sm:w-20 sm:h-22 rounded-xl border border-[#2d6a4f]/30 bg-[#f4f7f2] flex flex-col items-center justify-center p-2 shadow-xs">
                <span className="text-xl sm:text-2xl font-black text-[#13382c] font-mono leading-none">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-[10px] font-bold text-[#52796f] uppercase tracking-wider mt-1">
                  Seconds
                </span>
              </div>
            </div>

            {/* Shop Now CTA Button & Promo Tag */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (onShopClick) {
                    onShopClick();
                  } else {
                    window.location.href = "/shop";
                  }
                }}
                className="px-8 py-3.5 rounded-full bg-[#dfaa5b] hover:bg-[#c99547] text-[#13382c] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#f4f7f2] border border-[#e1e8db] text-xs font-mono text-[#13382c]">
                <Tag className="w-3.5 h-3.5 text-[#2d6a4f]" />
                <span>Use Code: <strong>BUDZ20</strong> for 20% off</span>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Composition Image matching Herbalist */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#e1e8db] group">
              <img
                src="/images/spotlight_serum_capsules_1791967589317.jpg"
                alt="CBD American Shaman organic capsules, tinctures, and botanical extracts"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
