import React, { useState } from 'react';
import { X, Cake, Sparkles, CheckCircle2, Calendar, Users, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CustomOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomOrderModal: React.FC<CustomOrderModalProps> = ({ isOpen, onClose }) => {
  const [eventType, setEventType] = useState('Birthday Celebration');
  const [guestCount, setGuestCount] = useState('25-40 guests');
  const [targetDate, setTargetDate] = useState('');
  const [treatPreference, setTreatPreference] = useState('Signature Basque Burnt Cheesecake Tower');
  const [flavorNotes, setFlavorNotes] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#B88A3E', '#6F7B4F', '#EFE3D0'],
      });
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-[#3A2218]/60 backdrop-blur-xs transition-opacity"
          onClick={handleClose}
        />

        {/* Modal container */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-[#FBF7F1] rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full border border-[#EFE3D0]">
          {/* Header */}
          <div className="p-6 bg-[#EFE3D0]/60 border-b border-[#A8957A]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B88A3E] text-white flex items-center justify-center">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#3A2218] leading-tight">
                  Custom Orders & Events
                </h3>
                <p className="text-xs text-[#3A2218]/70">
                  Weddings, milestone birthdays & Brooklyn corporate catering
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="p-2 rounded-lg text-[#3A2218] hover:bg-[#EFE3D0] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#6F7B4F]/20 text-[#6F7B4F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#3A2218]">
                  Inquiry Received!
                </h4>
                <p className="text-sm text-[#3A2218]/85 max-w-md mx-auto leading-[1.6]">
                  Thank you, <strong>{clientName}</strong>! Elena has received your event details for {targetDate ? `the week of ${targetDate}` : 'your celebration'}. She will reach out within 24 hours via phone/email with design options, tasting box info, and an itemized quote.
                </p>
                <div className="p-3 bg-[#EFE3D0]/50 rounded-xl text-xs text-[#3A2218]/80 max-w-sm mx-auto">
                  Need an urgent reply? You can also message Elena directly on WhatsApp at <strong>(718) 555-0194</strong>.
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-primary mt-4 text-sm"
                >
                  Back to Bakeshop
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-[#EFE3D0]/40 p-3.5 rounded-xl text-xs text-[#3A2218]/80 flex items-center gap-2 border border-[#A8957A]/20">
                  <Sparkles className="w-4 h-4 text-[#B88A3E] shrink-0" />
                  <span>Custom events require 5–7 days advance booking. Tasting sample boxes available!</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8957A] mb-1">
                      Event Occasion
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    >
                      <option>Birthday Celebration</option>
                      <option>Wedding or Rehearsal Dinner</option>
                      <option>Baby / Bridal Shower</option>
                      <option>Corporate Catering & Office Event</option>
                      <option>Dinner Party Dessert Table</option>
                      <option>Other Special Gathering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8957A] mb-1">
                      Guest Count
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    >
                      <option>10-20 guests</option>
                      <option>25-40 guests</option>
                      <option>50-75 guests</option>
                      <option>80-120 guests</option>
                      <option>120+ guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8957A] mb-1">
                      Target Date
                    </label>
                    <input
                      type="date"
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      required
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8957A] mb-1">
                      Dessert Vision
                    </label>
                    <select
                      value={treatPreference}
                      onChange={(e) => setTreatPreference(e.target.value)}
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    >
                      <option>Signature Basque Burnt Cheesecake Tower</option>
                      <option>Assorted Molten Stuffed Cookie Favor Boxes</option>
                      <option>Mini European Pastry & Cruffin Grazing Table</option>
                      <option>Tiered Celebration Cake + Tartlets</option>
                      <option>Custom Mix of All Elena’s Specialties</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A8957A] mb-1">
                    Flavor Notes & Dietary Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="E.g. Real Nutella & Biscoff lovers, need 5 gluten-friendly portions, vanilla bean cream, custom cake message..."
                    value={flavorNotes}
                    onChange={(e) => setFlavorNotes(e.target.value)}
                    className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                  />
                </div>

                <div className="pt-2 border-t border-[#A8957A]/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A8957A] mb-2">
                    Your Contact Information
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      required
                      className="bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      required
                      className="bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      required
                      className="bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary font-semibold text-sm mt-4 min-h-[48px]"
                >
                  Submit Event Inquiry to Elena
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
