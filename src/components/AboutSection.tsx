import React from 'react';
import { Heart, Sparkles, MapPin, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-[#FBF7F1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual column: Elena's kitchen craft */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 bg-[#EFE3D0] rounded-2xl transform rotate-1 -z-10 border border-[#A8957A]/40" />

              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#EFE3D0]">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
                  alt="Elena baking handmade pastries from scratch in her Brooklyn kitchen"
                  className="w-full h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3A2218]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                  <p className="font-serif text-lg font-semibold tracking-wide">Elena Vance</p>
                  <p className="text-xs text-white/80">Founder & Head Pastry Baker • Carroll Gardens, BK</p>
                </div>
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-[#FBF7F1] p-3.5 rounded-xl border border-[#A8957A]/40 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE3D0] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#B88A3E]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#3A2218]">Brooklyn Born & Baked</p>
                  <p className="text-[11px] text-[#3A2218]/70">Zero factory mixes or shortcuts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text content column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE3D0] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-3">
              <Heart className="w-3.5 h-3.5 fill-[#6F7B4F]" />
              <span>Our Story & Mission</span>
            </div>

            <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#3A2218] mb-6 leading-[1.2]">
              Rooted in Brooklyn, Inspired by European Patisserie.
            </h2>

            {/* Elena's short story (2-3 sentences) as requested */}
            <div className="space-y-4 text-[16px] md:text-[17px] text-[#3A2218]/85 leading-[1.6]">
              <p>
                Born out of a sunlit brownstone kitchen on Clinton Street in Carroll Gardens, Elena started baking to bring the soul-warming aromas of slow-fermented European pastries and decadent stuffed cookies directly to her Brooklyn neighbors.
              </p>
              <p>
                She believes desserts should never sit cold under glass display cases for days: every order is mixed, rolled, and baked on the very morning you receive it, using rich Normandy butter, real Nutella, and Valrhona Grand Cru chocolate.
              </p>
              <p>
                When you open a box from our kitchen, you aren’t just tasting dessert—you’re sharing in a tradition of patience, craftsmanship, and pure celebration.
              </p>
            </div>

            {/* Highlights row */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#A8957A]/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6F7B4F]" />
                <span className="text-sm font-medium text-[#3A2218]">Carroll Gardens Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#B88A3E]" />
                <span className="text-sm font-medium text-[#3A2218]">Small-Batch Exclusively</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#6F7B4F]" />
                <span className="text-sm font-medium text-[#3A2218]">Doorstep Delivery</span>
              </div>
            </div>

            {/* Signature block */}
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-2xl text-[#3A2218] font-bold">Elena Vance</p>
                <p className="text-xs text-[#A8957A] uppercase tracking-wider font-medium">Head Baker & Owner</p>
              </div>
              <a
                href="#menu"
                className="text-sm font-semibold text-[#B88A3E] hover:text-[#A37730] flex items-center gap-1.5 underline underline-offset-4"
              >
                Explore Today’s Bakes →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
