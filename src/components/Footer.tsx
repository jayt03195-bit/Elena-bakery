import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Heart, Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'allergens') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const neighborhoods = [
    'Carroll Gardens',
    'Cobble Hill',
    'Boerum Hill',
    'Park Slope',
    'Brooklyn Heights',
    'DUMBO',
    'Williamsburg',
    'Greenpoint',
    'Fort Greene',
    'Bushwick',
  ];

  return (
    <footer className="bg-[#3A2218] text-[#FBF7F1] pt-16 pb-12 border-t-4 border-[#B88A3E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#A8957A]/40">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#B88A3E] flex items-center justify-center bg-[#EFE3D0]/10">
                <svg
                  className="w-5 h-5 text-[#B88A3E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14a8 8 0 0 1 16 0" />
                  <path d="M2 14c0 3 3 5 10 5s10-2 10-5" />
                  <path d="M9 10a4 4 0 0 1 6 0" />
                  <path d="M12 4v4" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  Elena’s Bakeshop
                </span>
                <p className="text-[11px] uppercase tracking-widest text-[#B88A3E]">Brooklyn, New York</p>
              </div>
            </div>

            <p className="text-sm text-[#FBF7F1]/80 leading-[1.6] mb-6">
              Small-batch artisanal bakery handcrafting molten stuffed cookies, slow-laminated French pastries, and Basque burnt cheesecakes made to order every morning in Carroll Gardens.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FBF7F1]/10 hover:bg-[#B88A3E] flex items-center justify-center transition-colors text-white"
                aria-label="Follow Elena on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#FBF7F1]/80 font-medium">@elenasbakerybk</span>
            </div>
          </div>

          {/* Col 2: Brooklyn Service Area (Local SEO) (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#B88A3E]" />
              Brooklyn Service Area
            </h4>
            <p className="text-xs text-[#FBF7F1]/70 mb-3">
              Daily doorstep delivery & local kitchen pickup across:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {neighborhoods.map((n) => (
                <span
                  key={n}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#FBF7F1]/10 text-[#FBF7F1]/90 hover:bg-[#B88A3E]/30 transition-colors"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: Hours & Kitchen Location (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#B88A3E]" />
              Baking Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#FBF7F1]/80">
              <p className="font-semibold text-white">Tuesday – Saturday</p>
              <p>7:30 AM – 6:00 PM</p>
              <p className="font-semibold text-white pt-1">Sunday</p>
              <p>8:00 AM – 4:00 PM</p>
              <p className="text-[#A8957A] pt-1">Mondays: Closed for sourdough prep</p>
            </div>
          </div>

          {/* Col 4: Contact & Verification (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#B88A3E]" />
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs text-[#FBF7F1]/85 mb-4">
              <p className="flex items-center gap-2">
                <span className="text-[#B88A3E] font-semibold">Phone/Text:</span>
                <a href="tel:+17185550194" className="hover:text-[#B88A3E] underline">
                  (718) 555-0194
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#B88A3E] font-semibold">Kitchen:</span>
                <span>Clinton St, Carroll Gardens, NY 11231</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#B88A3E] font-semibold">Email:</span>
                <a href="mailto:hello@elenasbakerybk.com" className="hover:text-[#B88A3E] underline">
                  hello@elenasbakerybk.com
                </a>
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-[#FBF7F1]/5 border border-[#A8957A]/30 flex items-center gap-2 text-[11px] text-[#FBF7F1]/80">
              <ShieldCheck className="w-4 h-4 text-[#6F7B4F] shrink-0" />
              <span>NYC DOH Food Protection Certificate #NYC-FPC-8841</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FBF7F1]/65 gap-4">
          <p>© {new Date().getFullYear()} Elena’s Bakeshop LLC. Handcrafted fresh in Brooklyn, NY.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors underline"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors underline"
            >
              Terms & Fulfillment
            </button>
            <button
              type="button"
              onClick={() => onOpenPolicy('allergens')}
              className="hover:text-white transition-colors underline"
            >
              Allergen Guide
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
