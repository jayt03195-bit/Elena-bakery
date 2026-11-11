import React from 'react';
import { Users, Sparkles, Star } from 'lucide-react';
import { STATS } from '../data/bakeryData';

export const StatsBanner: React.FC = () => {
  const icons = [
    <Users key="users" className="w-6 h-6 text-[#B88A3E]" />,
    <Sparkles key="fresh" className="w-6 h-6 text-[#6F7B4F]" />,
    <Star key="rating" className="w-6 h-6 text-[#B88A3E] fill-[#B88A3E]" />,
  ];

  return (
    <section className="py-8 bg-[#EFE3D0]/70 border-y border-[#A8957A]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#A8957A]/40 gap-6 md:gap-0">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center ${
                idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8 pt-6 md:pt-0' : 'md:pl-8 pt-6 md:pt-0'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FBF7F1] flex items-center justify-center mb-3 shadow-xs">
                {icons[idx]}
              </div>
              <div className="font-serif text-[32px] md:text-[38px] font-bold text-[#3A2218] tracking-tight leading-none mb-1">
                {stat.number}
              </div>
              <div className="text-[15px] font-semibold text-[#3A2218] tracking-wide mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-[#3A2218]/70 max-w-[240px]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
