"use client";

import React from "react";
import { CategoryItem, Product } from "../types";
import { CURATED_CATEGORIES } from "../curatedCategories";

interface CategoriesProps {
  setView: (view: string) => void;
  setSelectedCategory: (category: string) => void;
  categories?: CategoryItem[];
  products?: Product[];
}

export default function Categories({
  setView,
  setSelectedCategory,
  categories = CURATED_CATEGORIES,
  products = [],
}: CategoriesProps) {
  // Use the authentic store categories from the old website
  const activeCategories = (categories && categories.length > 0 ? categories : CURATED_CATEGORIES)
    .filter((c) => c.showInMenu !== false);

  const getCategoryImage = (cat: CategoryItem) => {
    if (cat.image && (cat.image.startsWith("http") || cat.image.startsWith("data:"))) {
      return cat.image;
    }
    const catId = (cat.id || "").toLowerCase();
    if (catId.includes("tincture") || catId.includes("oil")) {
      return "/images/categories/tinctures.jpg";
    }
    if (catId.includes("edible") || catId.includes("gumm")) {
      return "/images/categories/edibles-and-gummies.jpg";
    }
    if (catId.includes("drink") || catId.includes("beverage")) {
      return "/images/categories/drinks.jpg";
    }
    if (catId.includes("topical") || catId.includes("cream")) {
      return "/images/categories/topicals.jpg";
    }
    if (catId.includes("pet")) {
      return "/images/categories/pet.jpg";
    }
    return "/images/categories/tinctures.jpg";
  };

  const getProductCount = (catId: string) => {
    if (!products || products.length === 0) {
      // Default counts from old website catalog
      const defaults: Record<string, number> = {
        drinks: 12,
        "edibles-and-gummies": 18,
        pet: 6,
        tinctures: 14,
        topicals: 8,
      };
      return defaults[catId.toLowerCase()] || 10;
    }
    const lowerId = catId.toLowerCase();
    const count = products.filter((p) => {
      const pCat = (p.category || "").toLowerCase();
      const pCats = (p.categories || []).map((c) => String(c).toLowerCase());
      return pCat === lowerId || pCats.includes(lowerId);
    }).length;
    return count > 0 ? count : 8;
  };

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setView("shop");
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-white border-b border-[#e1e8db]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-2 mb-10 max-w-xl mx-auto font-sans">
          <span className="text-[11px] font-mono tracking-widest text-[#2d6a4f] uppercase font-bold">
            STOREFRONT CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#13382c] tracking-tight">
            Browse Authentic Herbal Wellness
          </h2>
          <p className="text-xs sm:text-sm text-[#52796f]">
            Lab-tested, Farm Bill compliant formulations available for local pickup in Southlake, TX
          </p>
        </div>

        {/* Category Items Row matching Herbalist design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-center">
          {activeCategories.map((cat) => {
            const count = getProductCount(cat.id);
            const imgSrc = getCategoryImage(cat);
            const cleanTitle = (cat.title || cat.id || "Wellness").replace(/[-_]/g, " ");

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="group flex flex-col items-center text-center cursor-pointer transition-all duration-300 focus:outline-none"
              >
                {/* Crisp High-Res Thumbnail Container */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-[#f4f7f2] border-2 border-[#e1e8db] group-hover:border-[#13382c] group-hover:shadow-lg transition-all duration-300 p-2 flex items-center justify-center">
                  <img
                    src={imgSrc}
                    alt={cleanTitle}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/product-image-fallback.svg";
                    }}
                  />
                </div>

                {/* Title & Count */}
                <div className="mt-3.5 flex flex-col items-center gap-0.5 font-sans">
                  <span className="text-xs sm:text-sm font-bold text-[#13382c] group-hover:text-[#2d6a4f] transition-colors leading-tight capitalize">
                    {cleanTitle}
                  </span>
                  <span className="text-xs font-semibold text-[#2d6a4f]">
                    ({count} items)
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
