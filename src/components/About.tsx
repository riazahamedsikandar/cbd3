import { useState } from "react";
import {
  Check,
  Verified,
  Award,
} from "lucide-react";
import { IMAGES } from "../data";
import { handleImageError } from "../utils/imageMatching";

export default function About() {
  const [showManifesto, setShowManifesto] = useState(false);

  const trustMetrics = [
    { title: "Texas Hemp Regulation Compliance", percent: 100 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-white border-b border-[#e1e8db]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Overlapping Visual Mockups representing high purity */}
        <div className="lg:col-span-5 relative grid grid-cols-12 gap-4">
          <div className="col-span-8 rounded-2xl overflow-hidden border border-[#e1e8db] shadow-2xl relative group">
            <img
              src="/images/hero_botanical_oil_1791967587839.jpg"
              alt="Premium Raw Flower & Oils"
              onError={(e) => handleImageError(e, "tinctures")}
              className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#13382c]/10 mix-blend-multiply"></div>
          </div>
          <div className="col-span-4 rounded-2xl overflow-hidden border border-[#e1e8db] shadow-2xl relative self-end -mb-6 sm:-mb-10 -ml-12 sm:-ml-16 z-10 group bg-white">
            <img
              src="/images/spotlight_serum_capsules_1791967589317.jpg"
              alt="Organic Extract Drops"
              onError={(e) => handleImageError(e, "gummies")}
              className="w-full h-[180px] sm:h-[224px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#13382c]/10 mix-blend-multiply"></div>
          </div>
          {/* Gold badge overlap */}
          <div className="absolute top-4 left-4 z-20 bg-white border border-[#e1e8db] p-3 rounded-xl flex items-center gap-2 shadow-xl">
            <Award className="w-5 h-5 text-[#dfaa5b]" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#13382c] font-bold">
              Texas Premium Seal
            </span>
          </div>
        </div>

        {/* Right Column: Copy about Sourcing & Purity */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 font-sans lg:pl-6">
          <div className="inline-flex items-center gap-1 text-[11px] font-mono tracking-widest text-[#2d6a4f] uppercase font-bold">
            <span>WE'RE USING QUALITY HEMP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-[#13382c] leading-tight">
            CBD American Shaman of Southlake: <span className="text-[#2d6a4f]">Cultivating Trusted Relief</span>
          </h2>

          <p className="text-[#52796f] text-sm leading-relaxed">
            In Southlake, Texas, our store (cbdsouthlaketx) is committed to helping customers explore clean, legal, hemp-derived products. We source from licensed USA hemp cultivators and prioritize transparent third party lab testing.
          </p>

          {/* Interactive Trust Metric Bars */}
          <div className="w-full space-y-4 my-2">
            {trustMetrics.map((metric) => (
              <div key={metric.title} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#13382c]">
                  <span>{metric.title}</span>
                  <span className="font-mono text-[#2d6a4f]">
                    {metric.percent}%
                  </span>
                </div>
                <div className="h-2 w-full bg-[#f4f7f2] rounded-full overflow-hidden border border-[#e1e8db]">
                  <div
                    className="h-full bg-gradient-to-r from-[#13382c] to-[#2d6a4f] rounded-full transition-all duration-1000"
                    style={{ width: `${metric.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Core Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#13382c]/10 border border-[#13382c]/20 flex items-center justify-center text-[#13382c] shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-xs text-[#52796f] leading-relaxed">
                100% farm compliant less than 0.3% THC ratio
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#13382c]/10 border border-[#13382c]/20 flex items-center justify-center text-[#13382c] shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-xs text-[#52796f] leading-relaxed">
                Expert, warm, fully personalized in-store support
              </span>
            </div>
          </div>

          <div className="mt-4">
            <button
              onClick={() => showManifesto ? setShowManifesto(false) : setShowManifesto(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#e1e8db] hover:border-[#13382c] bg-white text-xs font-bold text-[#52796f] hover:text-[#13382c] uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
            >
              {showManifesto
                ? "Close Our Manifesto"
                : "Read Our Full Manifesto"}
            </button>
          </div>

          {/* Expandable Manifesto */}
          {showManifesto && (
            <div className="p-6 rounded-xl bg-[#f4f7f2] border border-[#e1e8db] text-xs text-[#52796f] space-y-3 leading-relaxed mt-4 animate-fadeIn w-full shadow-md">
              <p className="font-semibold text-[#13382c] text-sm flex items-center gap-1.5 uppercase tracking-wide">
                <Verified className="w-4 h-4 text-[#2d6a4f]" />
                <span>Our Sacred Standards</span>
              </p>
              <p>
                At CBD American Shaman of Southlake (cbdsouthlaketx), we refuse to cut corners. We recognize that
                cannabidiol and natural industrial hemp variants represent
                active botanical systems. Therefore, our soil enrichment,
                crop extraction filters, and molecular curing represent
                precision focus.
              </p>
              <p>
                Whether you walk into our physical Southlake store or place an order
                online, we treat you like family. Our guidance models are
                structured logically behind real certifications, dose advisory
                tracks, and genuine science to bring balance to your body, mind,
                and home.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
