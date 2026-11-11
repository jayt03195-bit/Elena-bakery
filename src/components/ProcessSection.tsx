import React from 'react';
import { ShoppingBag, CalendarClock, Coffee, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/bakeryData';

interface ProcessSectionProps {
  onStartOrder: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartOrder }) => {
  const stepIcons = [
    <ShoppingBag key="shop" className="w-7 h-7 text-[#B88A3E]" />,
    <CalendarClock key="date" className="w-7 h-7 text-[#6F7B4F]" />,
    <Coffee key="enjoy" className="w-7 h-7 text-[#B88A3E]" />,
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-[#FBF7F1] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D0] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Simple 3-Step Ordering</span>
          </div>
          <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#3A2218] leading-[1.2]">
            From Our Oven to Your Table.
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-[#3A2218]/80 leading-[1.6]">
            No complicated apps or uncertain wait times. We make artisan ordering effortless and transparent.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-0.5 border-t-2 border-dashed border-[#A8957A]/40 -translate-y-12 -z-0" />

          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative z-10 bg-[#FBF7F1] rounded-2xl p-8 border border-[#EFE3D0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Step number badge */}
              <div className="w-16 h-16 rounded-2xl bg-[#EFE3D0] border border-[#A8957A]/40 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                {stepIcons[idx]}
              </div>

              <span className="font-serif text-sm font-bold text-[#B88A3E] tracking-widest uppercase mb-1">
                Step {step.step}
              </span>

              <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-[#3A2218] mb-3 leading-tight">
                {step.title}
              </h3>

              <p className="text-[15px] text-[#3A2218]/80 leading-[1.6] mb-4">
                {step.description}
              </p>

              <div className="mt-auto pt-4 border-t border-[#A8957A]/20 w-full text-xs text-[#3A2218]/70 italic">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartOrder}
            className="btn-primary text-base font-semibold shadow-md inline-flex items-center gap-2"
          >
            <span>Start Your Order</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
