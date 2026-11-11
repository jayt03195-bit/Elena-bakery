import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/bakeryData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-lead-time');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FBF7F1] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE3D0] text-[#6F7B4F] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B88A3E]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif text-[28px] md:text-[40px] font-bold text-[#3A2218] leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[16px] md:text-[17px] text-[#3A2218]/80 leading-[1.6]">
            Everything you need to know about lead times, delivery coverage, allergens, and custom baking.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-[#FBF7F1] rounded-2xl border border-[#EFE3D0] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full min-h-[56px] px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#EFE3D0]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B88A3E]/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-[18px] md:text-[20px] font-bold text-[#3A2218]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#EFE3D0] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#B88A3E] text-white' : 'text-[#3A2218]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[15px] md:text-[16px] text-[#3A2218]/85 leading-[1.6] border-t border-[#A8957A]/15 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions helper block */}
        <div className="mt-10 p-6 rounded-2xl bg-[#EFE3D0]/60 border border-[#A8957A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#FBF7F1] flex items-center justify-center shrink-0 text-[#B88A3E]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-[#3A2218]">Have a special dietary question or request?</p>
              <p className="text-xs text-[#3A2218]/70">Elena replies personally to all inquiries within a couple hours.</p>
            </div>
          </div>
          <a
            href="https://wa.me/17185550194?text=Hi%20Elena!%20I%20have%20a%20question%20about%20your%20baked%20goods"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs uppercase tracking-wider font-semibold whitespace-nowrap min-h-[44px]"
          >
            Ask Elena Directly
          </a>
        </div>
      </div>
    </section>
  );
};
