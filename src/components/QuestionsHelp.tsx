"use client";

import React from "react";
import { MapPin, Phone, Check } from "lucide-react";

interface QuestionsHelpProps {
  settings?: {
    location?: string;
    phone?: string;
    hours?: string;
  };
}

export default function QuestionsHelp({ settings }: QuestionsHelpProps) {
  const location = settings?.location || "730 W Pipeline Rd, Hurst, TX 76053";
  const phone = settings?.phone || "+1 (817) 494-3335";

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e1e8db]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#13382c] tracking-tight">
            Have Any Questions?
          </h2>
          <p className="text-[#52796f] text-sm sm:text-base font-sans">
            Our certified herbalists and cannabinoid consultants are here to help you navigate wellness.
          </p>
        </div>

        {/* 3-Card Grid matching Herbalist design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch font-sans">
          {/* Card 1: Office Location */}
          <div className="p-8 rounded-2xl bg-[#ffffff] border border-[#e1e8db] hover:border-[#13382c] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#13382c]">
                Our Office Location
              </h3>
              <div className="flex items-start gap-3 text-sm text-[#2c3527]">
                <MapPin className="w-5 h-5 text-[#13382c] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#13382c]">{location}</p>
                  <p className="text-xs text-[#2c3527] mt-1 font-medium">Convenient storefront with free dedicated customer parking.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#2c3527] mt-6 pt-4 border-t border-[#f0f4ed] leading-relaxed">
              Serving the Hurst, Euless, Bedford, and greater Dallas-Fort Worth metroplex with premium hemp.
            </p>
          </div>

          {/* Card 2: Featured Dark Green Card - How Can We Help? */}
          <div className="p-8 rounded-2xl bg-[#13382c] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#dfaa5b]">
                How Can We Help?
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#dfaa5b] shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-white/90">Third-party lab certificates (COA) with transparent batch tests</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#dfaa5b] shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-white/90">Personalized dosing guidance for sleep, focus, and recovery</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#dfaa5b] shrink-0 mt-0.5 stroke-[3]" />
                  <span className="text-white/90">Curbside local pickup and fast, discreet Texas-wide shipping</span>
                </li>
              </ul>
            </div>
            <p className="text-xs text-white/70 mt-6 pt-4 border-t border-white/10 leading-relaxed font-sans">
              100% Federally Compliant under the 2018 Farm Bill (&lt; 0.3% Delta-9 THC).
            </p>
          </div>

          {/* Card 3: Our Phone */}
          <div className="p-8 rounded-2xl bg-[#ffffff] border border-[#e1e8db] hover:border-[#13382c] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-bold text-[#13382c]">
                Our Phone
              </h3>
              <div className="flex items-start gap-3 text-sm text-[#2c3527]">
                <Phone className="w-5 h-5 text-[#13382c] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="font-bold text-base text-[#13382c] hover:text-[#dfaa5b] transition-colors block"
                  >
                    {phone}
                  </a>
                  <p className="text-xs text-[#2c3527] mt-1 font-medium">Available Mon–Sat during regular business hours</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-[#2c3527] mt-6 pt-4 border-t border-[#f0f4ed] leading-relaxed font-medium">
              Have a question about tinctures, gummies, or topicals? Call our store directly to speak with an herbal specialist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
