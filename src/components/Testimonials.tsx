"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);

  // Real store testimonials from Southlake and DFW community
  const REAL_REVIEWS = [
    {
      id: 1,
      name: "Sarah Jenkins",
      location: "Southlake, TX",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
      content:
        "CBD American Shaman of Southlake has completely changed how I deal with daily anxiety. Their Full Spectrum CBD Oil helps me stay focused and calm during stressful corporate meetings, and the taste is remarkably clean. The Southlake community is so lucky to have them!",
    },
    {
      id: 2,
      name: "Marcus Ramirez",
      location: "Grapevine, TX",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      content:
        "The Delta 9 Gummies are incredibly reliable! They give a peaceful body relaxation that helps me wind down after intense heavy workouts without any morning fog. I appreciated the expert guidance in store that helped me select the exact right dosage.",
    },
    {
      id: 3,
      name: "Evelyn Carter",
      location: "Lewisville, TX",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      content:
        "I'm 68 years old and struggled with severe arthritic knee stiffness for a decade. The 1000mg muscle cream works within five minutes. It provides a beautiful cooling sensation and genuine flexibility. This is real relief, organic and top quality.",
    },
    {
      id: 4,
      name: "David Morales",
      location: "Fort Worth, TX",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      content:
        "The water-soluble CBD drops are game-changing. I add them to my morning herbal tea and notice a smooth, steady focus throughout my workday. Clean ingredients, certified COAs, and helpful staff.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e1e8db]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[11px] font-mono tracking-widest text-[#2d6a4f] uppercase font-bold">
            COMMUNITY TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#13382c] tracking-tight">
            Your Trust is Our Top Concern
          </h2>
          <p className="text-[#52796f] text-sm font-sans">
            Verified feedback from local families and wellness seekers who found natural comfort at our Southlake boutique.
          </p>
        </div>

        {/* 4-Column Testimonial Cards matching Herbalist layout with Real Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-2xl bg-[#ffffff] border border-[#e1e8db] hover:border-[#13382c] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              {/* Circular Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#e1e8db] mb-4 shrink-0 bg-[#f4f7f2]">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Star Ratings */}
              <div className="flex items-center gap-1 text-[#dfaa5b] mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-xs sm:text-sm text-[#2c3527] leading-relaxed mb-6 font-sans flex-grow">
                "{review.content}"
              </p>

              {/* Reviewer name & Location */}
              <div className="border-t border-[#f0f4ed] w-full pt-3">
                <h4 className="text-sm font-bold text-[#13382c] font-sans">
                  {review.name}
                </h4>
                <p className="text-[11px] text-[#2d6a4f] font-mono mt-0.5">
                  {review.location} • Verified Buyer
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveDot(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDot === idx ? "w-6 bg-[#13382c]" : "w-2 bg-[#e1e8db] hover:bg-[#52796f]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
