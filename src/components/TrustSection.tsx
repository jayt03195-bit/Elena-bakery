import React from 'react';
import { ShieldCheck, Award, AlertCircle, RefreshCw, Check } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#EFE3D0]/50 border-y border-[#A8957A]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D0] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Our Quality & Safety Standard</span>
          </div>
          <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#3A2218] leading-[1.2]">
            Our Uncompromising Promise to You.
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-[#3A2218]/80 leading-[1.6]">
            Every recipe is developed with obsessive standards for food safety, ingredient integrity, and allergen transparency.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Ingredient Promise */}
          <div className="bg-[#FBF7F1] p-6 rounded-2xl border border-[#A8957A]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EFE3D0] flex items-center justify-center mb-4 text-[#B88A3E]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-[#3A2218] mb-2 leading-tight">
                Ingredient Promise
              </h3>
              <p className="text-sm text-[#3A2218]/80 leading-[1.6] mb-3">
                100% pure Normandy butter, unbleached non-GMO flours, cage-free eggs, and brand-name favorites: real Nutella and Lotus Biscoff. Zero corn syrups or artificial shelf extenders.
              </p>
            </div>
            <div className="pt-3 border-t border-[#A8957A]/20 flex items-center gap-1.5 text-xs text-[#6F7B4F] font-semibold">
              <Check className="w-4 h-4" />
              <span>Clean labels & real ingredients</span>
            </div>
          </div>

          {/* 2. NYC Food Permit / Hygiene Badge */}
          <div className="bg-[#FBF7F1] p-6 rounded-2xl border border-[#A8957A]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EFE3D0] flex items-center justify-center mb-4 text-[#6F7B4F]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#6F7B4F]/15 text-[#6F7B4F] mb-2">
                NYC Certified
              </div>
              <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-[#3A2218] mb-2 leading-tight">
                NYC DOH Food Safety
              </h3>
              <p className="text-sm text-[#3A2218]/80 leading-[1.6] mb-3">
                Elena holds an active NYC Department of Health Food Protection Certificate (#NYC-FPC-8841). All prep, proofing, and baking follow rigorous commercial hygiene protocols.
              </p>
            </div>
            <div className="pt-3 border-t border-[#A8957A]/20 flex items-center gap-1.5 text-xs text-[#6F7B4F] font-semibold">
              <Check className="w-4 h-4" />
              <span>Sanitized daily kitchen</span>
            </div>
          </div>

          {/* 3. Allergen Note */}
          <div className="bg-[#FBF7F1] p-6 rounded-2xl border border-[#A8957A]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EFE3D0] flex items-center justify-center mb-4 text-[#B88A3E]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-[#3A2218] mb-2 leading-tight">
                Allergen Transparency
              </h3>
              <p className="text-sm text-[#3A2218]/80 leading-[1.6] mb-3">
                Full transparency on all batches. Common items contain dairy, gluten, eggs, and tree nuts. Dedicated sanitized cycles are reserved for our flourless Basque cheesecakes.
              </p>
            </div>
            <div className="pt-3 border-t border-[#A8957A]/20 flex items-center gap-1.5 text-xs text-[#B88A3E] font-semibold">
              <Check className="w-4 h-4 text-[#6F7B4F]" />
              <span>Full ingredient cards provided</span>
            </div>
          </div>

          {/* 4. Freshness Guarantee */}
          <div className="bg-[#FBF7F1] p-6 rounded-2xl border border-[#A8957A]/30 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EFE3D0] flex items-center justify-center mb-4 text-[#6F7B4F]">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-[#3A2218] mb-2 leading-tight">
                100% Freshness Guarantee
              </h3>
              <p className="text-sm text-[#3A2218]/80 leading-[1.6] mb-3">
                If your bake is not the freshest, most delicious dessert you’ve experienced this week, let Elena know within 24 hours for an immediate re-bake or full refund.
              </p>
            </div>
            <div className="pt-3 border-t border-[#A8957A]/20 flex items-center gap-1.5 text-xs text-[#6F7B4F] font-semibold">
              <Check className="w-4 h-4" />
              <span>Zero-risk sweet satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
