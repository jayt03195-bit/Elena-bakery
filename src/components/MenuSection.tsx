import React, { useState } from 'react';
import { Sparkles, Plus, Check, Calendar, Cake } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/bakeryData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onOpenCustomOrderModal: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenCustomOrderModal,
  selectedCategory,
  onSelectCategory,
}) => {
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const categories = [
    { id: 'all', name: 'All Treats' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'cakes', name: 'Basque Cakes' },
    { id: 'tarts', name: 'Tarts' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FBF7F1] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D0] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B88A3E]" />
              <span>Small-Batch Daily Menu</span>
            </div>
            <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#3A2218] leading-[1.2]">
              Made to Order Every Morning
            </h2>
            <p className="mt-2 text-[16px] md:text-[17px] text-[#3A2218]/80 max-w-xl leading-[1.6]">
              Browse our freshly baked rotation. Select your items below to schedule local Brooklyn courier delivery or Carroll Gardens kitchen pickup.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap min-h-[40px] ${
                  selectedCategory === cat.id
                    ? 'bg-[#B88A3E] text-white shadow-sm'
                    : 'bg-[#EFE3D0]/60 text-[#3A2218] hover:bg-[#EFE3D0]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid: 5 Products + 1 Custom Orders Card = 6 Balanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => {
            const isAdded = addedItemIds[item.id];

            return (
              <div
                key={item.id}
                className="bg-[#FBF7F1] rounded-2xl overflow-hidden border border-[#EFE3D0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Photo container */}
                <div className="relative h-60 w-full overflow-hidden bg-[#EFE3D0]/50">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.highlightTag && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#FBF7F1]/95 text-[#3A2218] border border-[#A8957A]/40 shadow-xs backdrop-blur-xs">
                      {item.highlightTag}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-[#B88A3E] text-white shadow-xs">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-[#3A2218] leading-tight">
                        {item.name}
                      </h3>
                    </div>
                    {item.priceNote && (
                      <p className="text-xs font-semibold text-[#B88A3E] tracking-wide mb-2 uppercase">
                        {item.priceNote}
                      </p>
                    )}
                    {/* 1-line description as requested */}
                    <p className="text-[15px] text-[#3A2218]/80 line-clamp-2 leading-[1.5] mb-4">
                      {item.description}
                    </p>

                    {/* Key ingredients pill summary */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {item.ingredients.slice(0, 3).map((ing, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-[#EFE3D0]/70 text-[#3A2218]/80 px-2 py-0.5 rounded-md"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Order Button - min 48px tap height */}
                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className={`w-full min-h-[48px] rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-[#6F7B4F] text-white'
                        : 'bg-[#B88A3E] hover:bg-[#A37730] text-white shadow-sm hover:shadow-md'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Your Box!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Order (${item.price.toFixed(2)})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {/* Card #6: Dedicated "Custom orders & events" card as specified in prompt */}
          <div className="bg-gradient-to-br from-[#EFE3D0] to-[#E5D7BF] rounded-2xl p-6 border-2 border-dashed border-[#B88A3E]/60 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FBF7F1] flex items-center justify-center mb-4 text-[#B88A3E] shadow-xs">
                <Cake className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#B88A3E]/15 text-[#3A2218] text-xs font-semibold mb-2">
                <span>Bespoke & Catering</span>
              </div>
              <h3 className="font-serif text-[24px] md:text-[26px] font-bold text-[#3A2218] leading-tight mb-2">
                Custom Orders & Events
              </h3>
              <p className="text-xs font-semibold text-[#B88A3E] tracking-wide mb-3 uppercase">
                Custom quote • 5-7 days notice
              </p>
              <p className="text-[15px] text-[#3A2218]/85 leading-[1.6] mb-4">
                Planning a Brooklyn wedding, birthday, office gathering, or dessert table? Elena designs tailored Basque cheesecakes, pastry towers, and personalized favor boxes.
              </p>
              <ul className="text-xs space-y-1.5 text-[#3A2218]/80 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F7B4F]" />
                  Custom flavor profiles & personalized toppers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F7B4F]" />
                  Gluten-friendly & nut-safe accommodations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F7B4F]" />
                  White-glove delivery to Brooklyn event venues
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenCustomOrderModal}
              className="w-full min-h-[48px] bg-[#3A2218] hover:bg-[#25150E] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#B88A3E]" />
              <span>Inquire for Events & Cakes</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
