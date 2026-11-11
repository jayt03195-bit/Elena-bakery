import React from 'react';
import { Star, CheckCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../data/bakeryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#EFE3D0]/40 border-y border-[#A8957A]/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D0] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-[#B88A3E] text-[#B88A3E]" />
              <span>Real Brooklyn Neighbors & Foodies</span>
            </div>
            <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#3A2218] leading-[1.2]">
              Loved by Brooklyn, Shared by Sweet Lovers.
            </h2>
            <p className="mt-2 text-[16px] md:text-[17px] text-[#3A2218]/80 max-w-xl leading-[1.6]">
              Real feedback from people who ordered for family weekend brunches, birthdays, and mid-week treats.
            </p>
          </div>

          {/* Social rating aggregate pill */}
          <div className="bg-[#FBF7F1] p-4 rounded-2xl border border-[#A8957A]/30 shadow-xs flex items-center gap-4 shrink-0">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#B88A3E]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B88A3E]" />
                ))}
              </div>
              <span className="font-serif text-lg font-bold text-[#3A2218] mt-0.5">
                4.9 out of 5.0
              </span>
            </div>
            <div className="h-10 w-px bg-[#A8957A]/30" />
            <div className="text-xs text-[#3A2218]/75">
              <p className="font-semibold text-[#3A2218]">340+ Verified Reviews</p>
              <p>Google & Instagram</p>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FBF7F1] rounded-2xl p-6 sm:p-7 border border-[#A8957A]/30 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              {/* Quote mark decoration */}
              <div className="font-serif text-5xl leading-none text-[#B88A3E]/20 select-none mb-1">
                “
              </div>

              {/* Review Text */}
              <p className="text-[15px] md:text-[16px] text-[#3A2218] italic leading-[1.6] mb-6 relative z-10">
                {review.text}
              </p>

              {/* Author & platform meta */}
              <div className="pt-4 border-t border-[#A8957A]/20">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#B88A3E]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B88A3E]" />
                    ))}
                  </div>
                  {/* Platform verification tag */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6F7B4F] bg-[#6F7B4F]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 text-[#6F7B4F]" />
                    {review.platform === 'google' ? 'Google Verified' : 'Instagram Tag'}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={review.avatarUrl}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#B88A3E]/40"
                  />
                  <div>
                    <h4 className="font-serif text-[17px] font-bold text-[#3A2218] leading-tight">
                      {review.author}
                    </h4>
                    <p className="text-xs text-[#3A2218]/70">
                      {review.handle ? review.handle : review.location} • {review.date}
                    </p>
                  </div>
                </div>

                {review.favoriteItem && (
                  <div className="mt-3 text-[11px] bg-[#EFE3D0]/60 text-[#3A2218]/80 px-2.5 py-1 rounded-md">
                    <span className="font-semibold text-[#B88A3E]">Favorite:</span> {review.favoriteItem}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Quote banner reminiscent of the reference image */}
        <div className="mt-10 bg-[#FBF7F1] rounded-2xl p-6 sm:p-8 border border-[#A8957A]/30 text-center max-w-3xl mx-auto shadow-xs">
          <div className="text-2xl text-[#B88A3E] font-serif mb-1">“</div>
          <p className="font-serif text-[20px] md:text-[24px] italic text-[#3A2218] leading-[1.4] max-w-2xl mx-auto mb-3">
            Elena’s croissants and Biscoff cookies have become our Brooklyn weekend tradition. You can taste the genuine slow fermentation in every bite.
          </p>
          <p className="text-xs font-semibold tracking-wider uppercase text-[#3A2218]">
            — Sarah & Marcus L., Cobble Hill • Regular Weekend Subscribers
          </p>
          <div className="flex items-center justify-center gap-1 text-[#B88A3E] mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#B88A3E]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
