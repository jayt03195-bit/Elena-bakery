import React from 'react';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
  onSeeMenu: () => void;
  onFilterCategory: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onSeeMenu, onFilterCategory }) => {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card Container matching the reference design */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#EFE3D0] shadow-sm bg-[#EFE3D0]/30">
          {/* Background Hero Image */}
          <div className="relative h-[520px] md:h-[620px] w-full">
            <img
              src="/assets/aistudio/IMG_1072_31b7ab89.jpeg"
              alt="Artisanal freshly baked breads, croissants, and pastries by Elena in Brooklyn"
              className="w-full h-full object-cover object-center filter saturate-[1.03]"
            />
            {/* Subtle warm ambient gradient overlay to ensure perfect contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A2218]/40 via-transparent to-black/20 md:from-[#3A2218]/30" />

            {/* Frosted Glass Floating Card inspired by the reference design */}
            <div className="absolute top-6 left-6 right-6 md:top-12 md:left-12 md:right-auto md:max-w-lg z-10">
              <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-white/60">
                {/* Local Brooklyn tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3D0] border border-[#A8957A]/40 text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#B88A3E]" />
                  <span>Small-Batch • Carroll Gardens</span>
                </div>

                {/* H1: Mobile 36px, Desktop 56px, line-height 1.2 */}
                <h1 className="font-serif text-[36px] md:text-[56px] text-[#3A2218] font-bold tracking-tight leading-[1.2] mb-4">
                  Fresh-Baked Desserts, Made to Order in Brooklyn.
                </h1>

                {/* One-line subhead on indulgence + freshness */}
                <p className="text-[16px] md:text-[17px] text-[#3A2218]/85 font-normal leading-[1.6] mb-8">
                  Indulgent stuffed cookies, flaky European pastries, and bespoke celebration cakes baked from scratch each morning with pure French butter and zero shortcuts.
                </p>

                {/* Action buttons with minimum 48px tap height */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="button"
                    onClick={onOrderNow}
                    className="btn-primary text-base font-semibold group flex items-center justify-center gap-2"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    type="button"
                    onClick={onSeeMenu}
                    className="btn-secondary text-base font-medium flex items-center justify-center"
                  >
                    See the Menu
                  </button>
                </div>

                {/* Micro reassurance badge */}
                <div className="mt-6 pt-5 border-t border-[#A8957A]/30 flex items-center gap-2 text-xs text-[#3A2218]/75">
                  <Clock className="w-3.5 h-3.5 text-[#B88A3E]" />
                  <span>Baked morning of fulfillment • 24h standard lead time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Category Icons bar right below hero (mirroring reference layout) */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              id: 'cookies',
              label: 'Stuffed Cookies',
              count: 'Molten Centers',
              icon: (
                <svg className="w-6 h-6 text-[#B88A3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 9h.01M16 9h.01M12 13h.01M9 16h.01M15 15h.01" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              id: 'pastries',
              label: 'Laminated Pastries',
              count: 'Normandy Butter',
              icon: (
                <svg className="w-6 h-6 text-[#B88A3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.5 3 6l7-16z" />
                  <path d="M22 12c0-5.5-4.5-10-10-10l7 16c2-1.5 3-3.5 3-6z" />
                  <path d="M8 17c1.5 2 3.5 3 4 3s2.5-1 4-3" />
                </svg>
              ),
            },
            {
              id: 'cakes',
              label: 'Basque Cakes',
              count: 'Vanilla Bean Custard',
              icon: (
                <svg className="w-6 h-6 text-[#B88A3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                  <path d="M4 16s4-1 8 0 8 0 8 0" />
                  <path d="M2 21h20" />
                  <path d="M12 7V4" />
                  <circle cx="12" cy="3" r="1" />
                </svg>
              ),
            },
            {
              id: 'tarts',
              label: 'Seasonal Tarts',
              count: 'Crisp Pâte Sablée',
              icon: (
                <svg className="w-6 h-6 text-[#B88A3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <ellipse cx="12" cy="14" rx="9" ry="5" />
                  <path d="M3 14c0 3 4 5 9 5s9-2 9-5" />
                  <path d="M12 5v4" />
                </svg>
              ),
            },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                onFilterCategory(cat.id);
                const el = document.getElementById('menu');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-[#EFE3D0]/60 hover:bg-[#EFE3D0] border border-[#A8957A]/30 transition-all text-left group hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FBF7F1] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                {cat.icon}
              </div>
              <div>
                <p className="font-serif text-[18px] md:text-[20px] font-semibold text-[#3A2218] group-hover:text-[#B88A3E] transition-colors leading-tight">
                  {cat.label}
                </p>
                <p className="text-xs text-[#3A2218]/70 mt-0.5">{cat.count}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
