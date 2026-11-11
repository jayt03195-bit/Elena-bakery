import React from 'react';
import { Phone, MessageCircle, Clock, ArrowRight, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOrderNow: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOrderNow }) => {
  return (
    <section className="py-16 md:py-24 bg-[#EFE3D0] relative overflow-hidden">
      {/* Decorative subtle bakery grain backdrop */}
      <div className="absolute inset-0 bg-radial from-white/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF7F1] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#A8957A]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#B88A3E]" />
          <span>Made Fresh Daily in Brooklyn</span>
        </div>

        <h2 className="font-serif text-[32px] md:text-[48px] font-bold text-[#3A2218] leading-[1.2] mb-4">
          Craving Something Sweet? Order Yours Today.
        </h2>

        <p className="text-[16px] md:text-[18px] text-[#3A2218]/85 max-w-xl mx-auto leading-[1.6] mb-8">
          Join hundreds of Brooklyn neighbors enjoying warm, scratch-baked pastries and molten stuffed cookies delivered straight to their doorstep or ready for fresh pickup.
        </p>

        {/* Action row with min 48px tap targets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={onOrderNow}
            className="btn-primary w-full sm:w-auto text-base font-semibold px-8 py-3.5 shadow-lg group flex items-center justify-center gap-2"
          >
            <span>Order Your Box Now</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/17185550194?text=Hi%20Elena!%20I'd%20love%20to%20order%20some%20fresh%20pastries"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto text-base font-medium px-6 py-3.5 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5 text-[#6F7B4F]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+17185550194"
            className="inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-lg text-sm font-semibold text-[#3A2218] hover:text-[#B88A3E] transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-[#B88A3E]" />
            <span>(718) 555-0194</span>
          </a>
        </div>

        {/* Lead time notice as required by specification */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-[#FBF7F1]/90 backdrop-blur-xs px-5 py-3 rounded-xl border border-[#A8957A]/40 text-xs sm:text-sm text-[#3A2218]/85 shadow-xs">
          <div className="flex items-center gap-2 font-medium text-[#3A2218]">
            <Clock className="w-4 h-4 text-[#B88A3E]" />
            <span>Standard orders require 24 hours notice.</span>
          </div>
          <span className="hidden sm:inline text-[#A8957A]">•</span>
          <span className="text-[#3A2218]/70">Custom celebration cakes need 5–7 days.</span>
        </div>
      </div>
    </section>
  );
};
