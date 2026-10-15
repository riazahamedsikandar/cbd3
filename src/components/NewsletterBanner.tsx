"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#13382c]">
      {/* Background Cannabis Leaves with soft overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/newsletter_leaf_bg_1791967589759.jpg"
          alt="Cannabis leaves texture"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13382c]/95 via-[#13382c]/85 to-[#13382c]/95"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight">
            Sign Up for Our Newsletter
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            Receive the latest strain releases, exclusive offers, third-party lab certificates, and 10% welcome discount.
          </p>
        </div>

        {submitted ? (
          <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-sm font-semibold animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Thank you for subscribing! Your 10% promo code is on its way.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white text-[#13382c] text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#dfaa5b] shadow-md"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#dfaa5b] hover:bg-[#c99547] text-[#13382c] text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
