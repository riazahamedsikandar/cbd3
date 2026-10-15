"use client";

import React, { useState } from "react";
import { ShoppingBag, Menu, X, Clock, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react";
import { CategoryItem } from "../types";
const logoImg = "/brand-logo.png";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  cartItemsCount: number;
  toggleCart: () => void;
  openContactModal: () => void;
  settings?: {
    phone: string;
    email: string;
    hours: string;
    location: string;
  };
  categories?: CategoryItem[];
  setSelectedCategory?: (category: string) => void;
  onSelectFilter?: (filter: { top: string; level1?: string; level2?: string } | null) => void;
  onOpenInfoModal?: (topic: string) => void;
}

export default function Header({
  currentView,
  setView,
  cartItemsCount,
  toggleCart,
  settings = {
    phone: "+1 (817) 494-3335",
    email: "info@cbdhurst.com",
    hours: "Mon - Fri: 10:30 AM - 7:30 PM | Sat: 10:30 AM - 6:30 PM | Sun: 11:00 AM - 6:00 PM",
    location: "730 W Pipeline Rd, Hurst, TX 76053"
  },
  categories = [],
  setSelectedCategory,
  onSelectFilter,
  onOpenInfoModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Track open sections in mobile menu
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [mobileSubExpandedSection, setMobileSubExpandedSection] = useState<string | null>(null);

  const handleCategoryClick = (catId: string) => {
    if (setSelectedCategory) {
      setSelectedCategory(catId);
    }
    if (onSelectFilter) {
      onSelectFilter(null);
    }
    setView("shop");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // Define complete menu layout structured perfectly
  const MENU_STRUCTURE = [
    {
      top: "Shop All",
      hasMega: true,
      submenus: [
        {
          label: "Gummies",
          items: ["Delta 9 Gummies", "CBD Gummies", "Sleep Gummies", "All Gummies"]
        },
        {
          label: "Drinks & Seltzers",
          items: ["THC Drinks", "CBD Drinks", "Shots & Cocktails"]
        },
        {
          label: "Tinctures & Oils",
          items: ["CBD Tinctures", "Delta 9 Tinctures"]
        },
        {
          label: "Vapes & Disposables",
          items: ["Disposables", "Cartridges"]
        },
        {
          label: "Edibles",
          items: []
        },
        {
          label: "Topicals",
          items: []
        },
        {
          label: "Smoke & Accessories",
          items: []
        }
      ]
    },
    {
      top: "Deals",
      submenus: [
        { label: "New Arrivals" },
        { label: "On Sale" },
        { label: "Bundle Deals" }
      ]
    },
    {
      top: "Learn",
      submenus: [
        { label: "CBD Gummies" },
        { label: "CBD Tinctures" },
        { label: "CBD Capsules" },
        { label: "CBD Topicals" }
      ]
    },
    {
      top: "About / More",
      submenus: [
        { label: "About Our Store" },
        { label: "Contact / Visit Us" }
      ]
    }
  ];

  const handleAction = (top: string, level1?: string, level2?: string) => {
    setMobileMenuOpen(false);
    
    // 1. Direct Non-Shop Section Handlers
    if (top === "Blogs") {
      setView("blogs");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (top === "Learn") {
      if (level1 === "Blog" || level1 === "Blogs") {
        setView("blogs");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (level1 === "FAQ") {
        setView("faq");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      // Open informative education overlay or specific landing page
      if (onOpenInfoModal && level1) {
        onOpenInfoModal(level1);
      }
      return;
    }

    if (top === "About / More") {
      if (level1 === "About Our Store" || !level1) {
        setView("about");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      if (level1 === "Contact / Visit Us") {
        setView("contact");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      if (onOpenInfoModal && level1) {
        onOpenInfoModal(level1);
      }
      return;
    }

    // 2. Main E-commerce Shop Filter Trigger Handlers
    if (setSelectedCategory) {
      setSelectedCategory("all");
    }
    setView("shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    if (onSelectFilter) {
      onSelectFilter({ top, level1, level2 });
    }
  };

  const resetAllFiltersToGoHome = () => {
    if (onSelectFilter) {
      onSelectFilter(null);
    }
    setView("home");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="w-full z-40 border-b border-[#1e493c] sticky top-0 bg-[#13382c]">
      {/* Top Banner Bar */}
      <div className="w-full bg-[#f4f7f2] py-2 px-4 text-xs font-sans text-[#52796f] border-b border-[#e1e8db] flex flex-col md:flex-row gap-2 justify-between items-center">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#13382c]" />
            <span>{settings.hours}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 border-l border-[#cbd5c2] pl-4">
            <Phone className="w-3.5 h-3.5 text-[#13382c]" />
            <span>{settings.phone}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {settings.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#13382c]" />
              <span>{settings.email}</span>
            </div>
          )}
          <span className="hidden md:inline px-2 py-0.5 rounded text-[10px] bg-white text-[#13382c] border border-[#e1e8db] font-mono tracking-wider font-bold">
            {settings.location.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="w-full bg-[#13382c] py-3.5 px-4 sm:px-6 md:px-8 flex items-center justify-between transition-all duration-300 border-b border-[#1e493c]">
        {/* Logo */}
        <button
          onClick={resetAllFiltersToGoHome}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-20 sm:w-24 h-14 sm:h-16 overflow-hidden flex items-center justify-center transition-all duration-300">
            <img
              src={logoImg}
              alt="CBD American Shaman of Hurst"
              className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/brand-feather.png";
              }}
            />
          </div>
          <span className="max-w-[120px] text-[11px] sm:text-xs leading-tight font-serif font-bold text-[#dfaa5b]">
            CBD American Shaman of Hurst
          </span>
        </button>

        {/* Desktop Sophisticated Navigation dropdowns */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 font-sans text-sm">
          {/* Home Button */}
          <button
            onClick={resetAllFiltersToGoHome}
            className={`transition-all duration-300 py-1 uppercase tracking-wide text-xs font-bold ${
              currentView === "home" ? "text-[#dfaa5b]" : "text-white/85 hover:text-[#dfaa5b]"
            } cursor-pointer`}
          >
            Home
          </button>

          {MENU_STRUCTURE.map((menu) => (
            <React.Fragment key={menu.top}>
              <div className="relative group py-3">
                <button
                  onClick={() => handleAction(menu.top)}
                  className="flex items-center gap-1 transition-all duration-300 py-1 uppercase tracking-wide text-xs font-bold text-white/85 group-hover:text-[#dfaa5b] cursor-pointer"
                >
                  <span>{menu.top}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-white/55 group-hover:text-[#dfaa5b] transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Mega Menu Dropdown for Shop All */}
                {menu.hasMega ? (
                  <div className="absolute left-1/2 -translate-x-[45%] top-[98%] pt-2 hidden group-hover:block z-50 animate-fadeIn">
                    <div className="bg-white border border-[#e1e8db] shadow-2xl rounded-2xl p-5 min-w-[600px] max-w-[660px] flex flex-col gap-4">
                      <div className="flex items-center justify-between border-b border-[#edf2e8] pb-3">
                        <span className="text-xs font-mono font-bold uppercase text-[#13382c] tracking-wider">
                          Categories
                        </span>
                        <button
                          onClick={() => handleCategoryClick("all")}
                          className="text-xs font-sans font-bold text-[#2c3527] hover:text-[#13382c] transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>View All Products</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                        {categories.filter(c => c.showInMenu !== false).map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => handleCategoryClick(cat.id)}
                            className="text-left font-sans text-xs text-[#52796f] hover:text-[#13382c] hover:bg-[#f4f7f2] p-2.5 rounded-xl font-semibold transition-all border border-[#edf2e8] flex items-center justify-between group/cat cursor-pointer"
                          >
                            <span className="truncate">{cat.title}</span>
                            <ChevronRight className="w-3 h-3 text-[#cbd5c2] group-hover/cat:text-[#13382c] shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard Vertical Dropdown */
                  <div className="absolute left-0 top-[98%] pt-3 hidden group-hover:block z-50 animate-fadeIn min-w-[200px]">
                    <div className="bg-white border border-[#e1e8db] shadow-2xl rounded-xl p-3 flex flex-col gap-1">
                      {menu.submenus?.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleAction(menu.top, sub.label)}
                          className="w-full text-left px-3 py-2 text-xs font-bold text-[#52796f] hover:text-[#13382c] rounded-lg hover:bg-[#f4f7f2] transition-colors cursor-pointer"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {menu.top === "Learn" && (
                <button
                  onClick={() => {
                    setView("blogs");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`transition-all duration-300 py-1 uppercase tracking-wide text-xs font-bold ${
                    currentView === "blogs" || currentView === "blog-article"
                      ? "text-[#dfaa5b]"
                      : "text-white/85 hover:text-[#dfaa5b]"
                  } cursor-pointer`}
                >
                  Blogs
                </button>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4 font-sans">
          {/* Cart Trigger */}
          <button
            onClick={toggleCart}
            className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center relative transition-all duration-300 text-white hover:text-[#dfaa5b] hover:border-[#dfaa5b] hover:bg-white/10 focus:outline-none cursor-pointer"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4.5 h-4.5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#dfaa5b] text-[#13382c] text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Call to Action Button */}
          <button
            onClick={() => handleAction("Shop All")}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#dfaa5b] hover:bg-[#c99547] text-[#13382c] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Order Now
          </button>

          {/* Mobile/Tablet Drawer Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 lg:hidden rounded-full border border-white/25 flex items-center justify-center text-white hover:text-[#dfaa5b] hover:border-[#dfaa5b] focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Side Drawer Menu for Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fadeIn">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 p-6 flex flex-col justify-between animate-slideLeft border-l border-[#e1e8db] overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#e1e8db] mb-6">
                <button onClick={resetAllFiltersToGoHome} className="text-left">
                  <span className="text-lg font-serif font-black tracking-tight text-[#13382c]">
                    CBD American Shaman
                  </span>
                  <p className="text-[10px] font-mono tracking-widest text-[#52796f] uppercase">
                    Hurst, TX
                  </p>
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full border border-[#e1e8db] flex items-center justify-center text-[#52796f] hover:text-[#13382c] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1.5">
                <button
                  onClick={resetAllFiltersToGoHome}
                  className={`w-full text-left py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer text-xs uppercase tracking-wider font-extrabold border-b border-[#edf2e8] ${
                    currentView === "home" ? "bg-[#f4f7f2] text-[#13382c]" : "text-[#2c3527] hover:bg-[#f4f7f2]"
                  }`}
                >
                  Home
                </button>

                {MENU_STRUCTURE.map((menu) => {
                  const isExpanded = mobileExpandedSection === menu.top;
                  return (
                    <React.Fragment key={menu.top}>
                      <div className="border-b border-[#edf2e8] pb-1.5 mb-1.5">
                        <button
                          onClick={() => setMobileExpandedSection(isExpanded ? null : menu.top)}
                          className={`w-full text-left py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between text-xs uppercase tracking-wider font-extrabold ${
                            isExpanded ? "bg-[#f4f7f2] text-[#13382c]" : "text-[#2c3527] hover:bg-[#f4f7f2]"
                          }`}
                        >
                          <span>{menu.top}</span>
                          <ChevronDown className={`w-4 h-4 text-[#52796f] transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#13382c]" : ""}`} />
                        </button>

                        {isExpanded && (
                          <div className="pl-4 pr-2 py-2 flex flex-col gap-1 animate-fadeIn">
                            <button
                              onClick={() => handleCategoryClick("all")}
                              className="text-left py-1.5 px-3 rounded-lg text-xs font-bold text-[#13382c] bg-[#f4f7f2] transition-colors"
                            >
                              Shop All Products →
                            </button>

                            {menu.top === "Shop All" ? (
                              <div className="flex flex-col gap-1 mt-1">
                                {categories.filter(c => c.showInMenu !== false).map((cat) => (
                                  <button
                                    key={cat.id}
                                    onClick={() => handleCategoryClick(cat.id)}
                                    className="w-full text-left py-2 px-3 rounded-lg text-xs font-bold text-[#52796f] hover:text-[#13382c] hover:bg-[#f4f7f2] transition-colors cursor-pointer"
                                  >
                                    {cat.title}
                                  </button>
                                ))}
                              </div>
                            ) : (
                              menu.submenus?.map((sub) => (
                                <button
                                  key={sub.label}
                                  onClick={() => handleAction(menu.top, sub.label)}
                                  className="w-full text-left py-2 px-3 rounded-lg text-xs font-bold text-[#52796f] hover:text-[#13382c] cursor-pointer"
                                >
                                  {sub.label}
                                </button>
                              ))
                            )}
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e1e8db] font-sans mt-8 shrink-0">
              <button
                onClick={() => handleAction("Shop All")}
                className="w-full py-3.5 bg-[#13382c] hover:bg-[#1e493c] text-white text-center text-xs font-bold uppercase tracking-wider rounded-full transition-colors shadow-md cursor-pointer block"
              >
                Shop Premium Products
              </button>
              <p className="text-center text-[10px] text-[#52796f] font-mono mt-4 uppercase tracking-widest">
                Hurst, TX • 21+ Required
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
