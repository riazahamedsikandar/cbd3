"use client";

import React from "react";
import { Leaf, MapPin, Phone, Clock, Mail } from "lucide-react";
import PartnerLogos from "./PartnerLogos";

interface FooterProps {
  setView: (view: string) => void;
  setSelectedCategory: (category: string) => void;
  openContactModal: () => void;
  onSelectTopic?: (topic: string) => void;
  onOpenAdmin?: () => void;
  settings?: {
    phone: string;
    email: string;
    hours: string;
    location: string;
  };
}

export default function Footer({
  setView,
  setSelectedCategory,
  onSelectTopic,
  settings = {
    phone: "+1 (817) 494-3335",
    email: "info@cbdhurst.com",
    hours: "Mon - Fri: 10:30 AM - 7:30 PM | Sat: 10:30 AM - 6:30 PM | Sun: 11:00 AM - 6:00 PM",
    location: "730 W Pipeline Rd, Hurst, TX 76053",
  },
}: FooterProps) {
  // 6 Gallery thumbnail images matching the Herbalist elementor kit
  const GALLERY_IMAGES = [
    "/images/hero_botanical_oil_1791967587839.jpg",
    "/images/cannabis_wellness_body_1791967588992.jpg",
    "/images/spotlight_serum_capsules_1791967589317.jpg",
    "/images/newsletter_leaf_bg_1791967589759.jpg",
    "/images/hero_botanical_oil_1791967587839.jpg",
    "/images/cannabis_wellness_body_1791967588992.jpg",
  ];

  return (
    <footer className="bg-[#0f2b22] text-white font-sans">
      {/* Brand Partners Strip at Top of Footer */}
      <PartnerLogos />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Mission & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#dfaa5b] flex items-center justify-center text-[#13382c] shadow-sm">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-serif font-black tracking-tight text-white">
                CBD American Shaman
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              CBD American Shaman of Hurst delivers transparently certified organic wellness. We help modern Texas families explore legal plant-based cannabinoids safely and effectively.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#dfaa5b] hover:text-[#13382c] flex items-center justify-center transition-colors text-white text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#dfaa5b] hover:text-[#13382c] flex items-center justify-center transition-colors text-white text-xs font-bold"
                aria-label="WhatsApp"
              >
                wa
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#dfaa5b] hover:text-[#13382c] flex items-center justify-center transition-colors text-white text-xs font-bold"
                aria-label="Twitter"
              >
                x
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#dfaa5b] hover:text-[#13382c] flex items-center justify-center transition-colors text-white text-xs font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li>
                <button
                  onClick={() => {
                    setView("shop");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-[#dfaa5b] transition-colors text-left cursor-pointer"
                >
                  Shop All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setView("blogs");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-[#dfaa5b] transition-colors text-left cursor-pointer"
                >
                  Educational Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setView("about");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-[#dfaa5b] transition-colors text-left cursor-pointer"
                >
                  About Our Store
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setView("contact");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-[#dfaa5b] transition-colors text-left cursor-pointer"
                >
                  Contact &amp; Storefront
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setView("faq");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-[#dfaa5b] transition-colors text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Storefront Hours & Location (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Working Hours
            </h4>
            <div className="space-y-2 text-xs text-white/80 leading-relaxed">
              <p className="font-semibold text-white">Monday to Friday:</p>
              <p>10:30 AM - 7:30 PM</p>
              <p className="font-semibold text-white pt-1">Saturday:</p>
              <p>10:30 AM - 6:30 PM</p>
              <p className="font-semibold text-white pt-1">Sunday:</p>
              <p>11:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Column 4: Instagram / Gallery Grid (3 Cols) matching Herbalist */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider">
              Photo Gallery
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-xl overflow-hidden bg-white/10 border border-white/10 group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal */}
      <div className="border-t border-white/10 py-6 px-4 text-xs text-white/60 text-center font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 CBD American Shaman of Hurst. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setView("terms");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-[#dfaa5b] transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setView("privacy");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-[#dfaa5b] transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
