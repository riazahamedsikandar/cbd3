"use client";

import React from "react";
import { Star, ShoppingBag, Eye } from "lucide-react";
import { Product } from "../types";
import {
  handleImageError,
  normalizeToCleanAsset,
} from "../utils/imageMatching";

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product, option: string) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
  onAddToCart,
}: ProductCardProps) {
  const imageSrc = normalizeToCleanAsset(product.image, product.category, product.name);
  const isSale = product.isBestSeller || product.price > 35;
  const regularPrice = (Number(product.price) || 29.99);
  const originalPrice = isSale ? (regularPrice * 1.25) : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultOption = product.options[0] || "Standard Pack";
    onAddToCart(product, defaultOption);
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group relative rounded-2xl bg-white border border-[#e1e8db] hover:border-[#13382c] transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer overflow-hidden font-sans"
    >
      {/* Sale Badge matching the Herbalist template in the user screenshot */}
      {isSale && (
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#2d6a4f] text-white tracking-wider uppercase shadow-sm">
            Sale!
          </span>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative w-full aspect-square bg-[#f8faf7] overflow-hidden flex items-center justify-center p-4">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-contain transform group-hover:scale-106 transition-transform duration-500"
          onError={(e) => handleImageError(e, product.category)}
          referrerPolicy="no-referrer"
        />

        {/* Hover Quick Actions */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="p-2.5 rounded-full bg-white text-[#13382c] hover:bg-[#dfaa5b] hover:text-[#13382c] transition-colors shadow-md"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={handleAddToCart}
            className="p-2.5 rounded-full bg-[#13382c] text-white hover:bg-[#dfaa5b] hover:text-[#13382c] transition-colors shadow-md"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details matching Herbalist */}
      <div className="p-5 flex flex-col flex-grow justify-between text-left space-y-2">
        <h3 className="text-sm sm:text-base font-bold text-[#13382c] group-hover:text-[#2d6a4f] transition-colors line-clamp-1">
          {product.name}
        </h3>

        {/* Star Ratings */}
        <div className="flex items-center gap-1 text-[#dfaa5b]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>

        {/* Price Row */}
        <div className="flex items-center justify-between pt-2 border-t border-[#f0f4ed]">
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through font-mono">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-base font-black text-[#13382c] font-mono">
              ${regularPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className="text-xs font-bold text-[#2d6a4f] hover:text-[#13382c] hover:underline transition-colors uppercase tracking-wider"
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}
