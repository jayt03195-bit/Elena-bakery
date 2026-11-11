import React from 'react';
import { X, Shield, FileText, AlertTriangle } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'allergens' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-[#3A2218]/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-[#FBF7F1] rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full border border-[#EFE3D0]">
          {/* Header */}
          <div className="p-6 bg-[#EFE3D0]/60 border-b border-[#A8957A]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B88A3E] text-white flex items-center justify-center">
                {type === 'privacy' && <Shield className="w-5 h-5" />}
                {type === 'terms' && <FileText className="w-5 h-5" />}
                {type === 'allergens' && <AlertTriangle className="w-5 h-5" />}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#3A2218]">
                {type === 'privacy' && 'Privacy Policy'}
                {type === 'terms' && 'Terms & Fulfillment Policy'}
                {type === 'allergens' && 'Allergen Information & Kitchen Practices'}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#3A2218] hover:bg-[#EFE3D0]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto text-sm text-[#3A2218]/85 space-y-4 leading-[1.6]">
            {type === 'privacy' && (
              <>
                <p>
                  Elena’s Bakeshop values your privacy as much as our ingredients. We collect your name, phone number, email address, and delivery location strictly to fulfill your bakery orders, coordinate pickup or courier dispatch, and provide receipts.
                </p>
                <h4 className="font-bold text-[#3A2218]">No Third-Party Data Selling</h4>
                <p>
                  We will never sell, rent, or trade your personal information to third-party data brokers or marketing lists.
                </p>
                <h4 className="font-bold text-[#3A2218]">SMS Notifications</h4>
                <p>
                  Order status text messages are sent solely regarding your scheduled bake time, courier departure, and Carroll Gardens kitchen pickup readiness.
                </p>
              </>
            )}

            {type === 'terms' && (
              <>
                <h4 className="font-bold text-[#3A2218]">Lead Times & Fresh Baking</h4>
                <p>
                  All menu items are prepared from scratch on the morning of scheduled fulfillment. Standard orders must be submitted at least 24 hours prior to the requested window. Custom wedding cakes and large catering events require 5–7 calendar days notice.
                </p>
                <h4 className="font-bold text-[#3A2218]">Cancellations & Rescheduling</h4>
                <p>
                  Standard retail orders can be rescheduled or refunded with 24 hours written notice. Because artisan doughs undergo a 24–48 hour fermentation process, cancellations made less than 24 hours in advance are non-refundable.
                </p>
                <h4 className="font-bold text-[#3A2218]">Courier Delivery Protocol</h4>
                <p>
                  Couriers attempt delivery during your selected time window. If the recipient is unavailable, the order will be placed in a protected vestibule or lobby with photo confirmation.
                </p>
              </>
            )}

            {type === 'allergens' && (
              <>
                <div className="p-3 bg-[#EFE3D0]/60 rounded-xl border border-[#A8957A]/40 text-xs">
                  <strong>Notice:</strong> While we practice strict sanitation, all items are produced in a facility that stores wheat flour, tree nuts (hazelnuts, almonds, pecans, pistachios), dairy, and eggs.
                </div>
                <h4 className="font-bold text-[#3A2218]">Nut Products</h4>
                <p>
                  We proudly use real Nutella (contains hazelnuts), Sicilian pistachios, California roasted almonds, and Georgia pecans in select recipes. These are clearly tagged on every product card.
                </p>
                <h4 className="font-bold text-[#3A2218]">Gluten-Friendly Options</h4>
                <p>
                  Our Signature Basque Burnt Cheesecake is naturally wheat-free. Dedicated sanitized pans and spatulas are reserved for its production to minimize airborne flour exposure.
                </p>
              </>
            )}
          </div>

          <div className="p-4 bg-[#EFE3D0]/40 border-t border-[#A8957A]/20 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn-primary text-xs px-5 py-2 min-h-[40px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
