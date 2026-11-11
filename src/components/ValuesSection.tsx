import React from 'react';
import { Sparkles, Utensils, Star, Bike, CheckCircle2 } from 'lucide-react';
import { VALUES_DATA } from '../data/bakeryData';

export const ValuesSection: React.FC = () => {
  const icons = [
    <Utensils key="scratch" className="w-6 h-6 text-[#6F7B4F]" />,
    <Star key="premium" className="w-6 h-6 text-[#B88A3E]" />,
    <Sparkles key="order" className="w-6 h-6 text-[#6F7B4F]" />,
    <Bike key="delivery" className="w-6 h-6 text-[#B88A3E]" />,
  ];

  return (
    <section className="py-16 md:py-20 bg-[#EFE3D0]/40 border-y border-[#A8957A]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D0] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Why Choose Elena’s Over Store-Bought</span>
          </div>
          <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#3A2218] leading-[1.2]">
            Baked for Taste, Never for Shelf Life.
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-[#3A2218]/80 leading-[1.6]">
            Commercial bakeries prioritize shelf life with preservatives and factory mixes. We prioritize pure flavor, buttery layers, and that warm, just-out-of-the-oven aroma.
          </p>
        </div>

        {/* 4 Icon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES_DATA.map((val, idx) => (
            <div
              key={val.id}
              className="bg-[#FBF7F1] rounded-2xl p-6 border border-[#A8957A]/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EFE3D0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-[11px] font-semibold text-[#6F7B4F] bg-[#6F7B4F]/10 px-2.5 py-1 rounded-full border border-[#6F7B4F]/20">
                    {val.badge}
                  </span>
                </div>
                <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-[#3A2218] mb-2 leading-tight">
                  {val.title}
                </h3>
                <p className="text-[15px] text-[#3A2218]/75 leading-[1.6]">
                  {val.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#A8957A]/20 flex items-center gap-2 text-xs font-medium text-[#B88A3E]">
                <CheckCircle2 className="w-4 h-4 text-[#6F7B4F]" />
                <span>The Brooklyn standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
