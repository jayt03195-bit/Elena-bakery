import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, Clock, MapPin, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, BrooklynNeighborhood } from '../types';
import { BROOKLYN_NEIGHBORHOODS } from '../data/bakeryData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('Carroll Gardens (Kitchen Pickup)');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Date picker: min date is tomorrow (24h lead time)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];
  const [orderDate, setOrderDate] = useState(minDateStr);
  const [orderTimeSlot, setOrderTimeSlot] = useState('09:00 AM - 11:30 AM (Fresh Morning Batch)');

  // Confirmation state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);

  // Delivery fee logic: $0 for pickup, $6 flat for delivery, free delivery over $45
  const deliveryFee = fulfillmentType === 'pickup' ? 0 : subtotal >= 45 ? 0 : 6.00;
  const estimatedTax = subtotal * 0.08875; // NYC sales tax
  const total = subtotal + deliveryFee + estimatedTax;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const generatedOrderNum = `BK-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(generatedOrderNum);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B88A3E', '#6F7B4F', '#EFE3D0', '#3A2218'],
      });
    } catch {
      // fallback
    }
  };

  const handleFinish = () => {
    onClearCart();
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#3A2218]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF7F1] shadow-2xl flex flex-col border-l border-[#EFE3D0]">
          {/* Header */}
          <div className="p-6 bg-[#EFE3D0]/60 border-b border-[#A8957A]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#B88A3E] text-white flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#3A2218] leading-tight">
                  Your Bakery Box
                </h3>
                <p className="text-xs text-[#3A2218]/70">
                  {cart.reduce((n, i) => n + i.quantity, 0)} freshly baked items
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#3A2218] hover:bg-[#EFE3D0] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {isSubmitted ? (
              /* Success screen */
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#6F7B4F]/20 text-[#6F7B4F] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3A2218]">
                  Order Confirmed!
                </h3>
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#EFE3D0] font-mono text-sm font-bold text-[#3A2218] border border-[#A8957A]/30">
                  Order #{orderNumber}
                </div>
                <p className="text-sm text-[#3A2218]/80 leading-[1.6]">
                  Thank you, <strong>{customerName || 'Friend'}</strong>! Elena will bake your order fresh from scratch on the morning of{' '}
                  <span className="font-semibold text-[#B88A3E]">{orderDate}</span>.
                </p>
                <div className="bg-[#EFE3D0]/50 p-4 rounded-xl border border-[#A8957A]/30 text-left text-xs space-y-2 text-[#3A2218]">
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B88A3E]" />
                    <span>Slot: <strong>{orderTimeSlot}</strong></span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B88A3E]" />
                    <span>
                      {fulfillmentType === 'pickup'
                        ? 'Carroll Gardens Kitchen (Clinton St, Brooklyn)'
                        : `Delivery to: ${deliveryAddress || selectedNeighborhood}`}
                    </span>
                  </p>
                  <p className="text-[11px] text-[#3A2218]/70 pt-1 border-t border-[#A8957A]/20">
                    A text confirmation with warm reheating guidelines will be sent to <strong>{customerPhone || '(718) 555-0194'}</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleFinish}
                  className="w-full btn-primary mt-6"
                >
                  Done & Back to Bakery
                </button>
              </div>
            ) : cart.length === 0 ? (
              /* Empty Cart */
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFE3D0] flex items-center justify-center mx-auto text-[#B88A3E]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#3A2218]">
                  Your box is empty
                </h4>
                <p className="text-sm text-[#3A2218]/70 max-w-xs mx-auto">
                  Browse Elena’s stuffed cookies, flaky croissants, and Basque cheesecake to start filling your box!
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-primary text-sm px-6"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              /* Cart Items + Fulfillment Form */
              <form onSubmit={handleCheckout} className="space-y-6">
                {/* List of items */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A8957A]">
                    Selected Treats
                  </p>
                  {cart.map(({ menuItem, quantity }) => (
                    <div
                      key={menuItem.id}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EFE3D0] shadow-2xs"
                    >
                      <img
                        src={menuItem.imageUrl}
                        alt={menuItem.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />
                      <div className="flex-1 px-3 min-w-0">
                        <p className="font-serif font-bold text-sm text-[#3A2218] truncate">
                          {menuItem.name}
                        </p>
                        <p className="text-xs text-[#B88A3E] font-medium">
                          ${menuItem.price.toFixed(2)} ea
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-[#A8957A]/40 rounded-lg bg-[#FBF7F1]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(menuItem.id, -1)}
                            className="p-1 text-[#3A2218] hover:bg-[#EFE3D0] rounded-l-lg"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-[#3A2218]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(menuItem.id, 1)}
                            className="p-1 text-[#3A2218] hover:bg-[#EFE3D0] rounded-r-lg"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(menuItem.id)}
                          className="p-1 text-[#A8957A] hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fulfillment Mode Toggle */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A8957A] block">
                    Fulfillment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#EFE3D0]/60 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setFulfillmentType('pickup')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        fulfillmentType === 'pickup'
                          ? 'bg-[#B88A3E] text-white shadow-xs'
                          : 'text-[#3A2218] hover:text-[#B88A3E]'
                      }`}
                    >
                      Kitchen Pickup (Free)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFulfillmentType('delivery')}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        fulfillmentType === 'delivery'
                          ? 'bg-[#B88A3E] text-white shadow-xs'
                          : 'text-[#3A2218] hover:text-[#B88A3E]'
                      }`}
                    >
                      Brooklyn Delivery {subtotal >= 45 ? '(FREE)' : '($6)'}
                    </button>
                  </div>
                  {subtotal < 45 && fulfillmentType === 'delivery' && (
                    <p className="text-[11px] text-[#6F7B4F] font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Add ${(45 - subtotal).toFixed(2)} more for free Brooklyn courier delivery!
                    </p>
                  )}
                </div>

                {/* Lead Time & Date Selector */}
                <div className="space-y-3 bg-[#EFE3D0]/40 p-4 rounded-xl border border-[#A8957A]/30">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#3A2218]">
                    <Clock className="w-4 h-4 text-[#B88A3E]" />
                    <span>24-Hour Lead Time Guaranteed</span>
                  </div>
                  <div>
                    <label className="block text-xs text-[#3A2218]/80 mb-1">
                      Baking & Delivery/Pickup Date:
                    </label>
                    <input
                      type="date"
                      min={minDateStr}
                      value={orderDate}
                      onChange={(e) => setOrderDate(e.target.value)}
                      required
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218] focus:ring-2 focus:ring-[#B88A3E]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#3A2218]/80 mb-1">
                      Preferred Time Window:
                    </label>
                    <select
                      value={orderTimeSlot}
                      onChange={(e) => setOrderTimeSlot(e.target.value)}
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218] focus:ring-2 focus:ring-[#B88A3E]"
                    >
                      <option>08:30 AM - 10:30 AM (Fresh Morning Batch)</option>
                      <option>11:00 AM - 01:00 PM (Lunch & Brunch Window)</option>
                      <option>02:00 PM - 04:30 PM (Afternoon Treat Batch)</option>
                      <option>04:30 PM - 06:00 PM (Evening Pickups)</option>
                    </select>
                  </div>
                </div>

                {/* Delivery address or Pickup info */}
                {fulfillmentType === 'delivery' ? (
                  <div className="space-y-3">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#A8957A] block">
                      Brooklyn Delivery Details
                    </label>
                    <select
                      value={selectedNeighborhood}
                      onChange={(e) => setSelectedNeighborhood(e.target.value)}
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    >
                      {BROOKLYN_NEIGHBORHOODS.slice(1).map((nh) => (
                        <option key={nh.name} value={nh.name}>
                          {nh.name} ({nh.deliveryTime})
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Street Address, Apt / Floor"
                      value={deliveryAddress}
                      onChange={(e) => setDeliveryAddress(e.target.value)}
                      required
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    />
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-[#FBF7F1] border border-[#A8957A]/30 text-xs text-[#3A2218]">
                    <p className="font-semibold text-[#3A2218] flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B88A3E]" />
                      Carroll Gardens Kitchen Pickup
                    </p>
                    <p className="text-[#3A2218]/70">
                      Clinton St (between 2nd & 3rd Place), Carroll Gardens, Brooklyn NY 11231. We text you as soon as your batch is boxed!
                    </p>
                  </div>
                )}

                {/* Contact Information */}
                <div className="space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#A8957A] block">
                    Contact Information
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      placeholder="Mobile Phone (for texts)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      required
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      required
                      className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                    />
                  </div>
                  <textarea
                    placeholder="Gift card note, allergen note, or gate buzzer code..."
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    rows={2}
                    className="w-full bg-white border border-[#A8957A]/40 rounded-lg p-2.5 text-xs text-[#3A2218]"
                  />
                </div>

                {/* Cost Breakdown */}
                <div className="pt-4 border-t border-[#A8957A]/30 space-y-1.5 text-xs text-[#3A2218]">
                  <div className="flex justify-between">
                    <span className="text-[#3A2218]/80">Fresh Bakes Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#3A2218]/80">Fulfillment</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-[#6F7B4F] font-semibold">FREE</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#3A2218]/80">NYC Sales Tax (8.875%)</span>
                    <span className="font-medium">${estimatedTax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-serif font-bold text-[#3A2218] pt-2 border-t border-[#A8957A]/20">
                    <span>Estimated Total</span>
                    <span className="text-[#B88A3E]">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  className="w-full btn-primary font-semibold text-base shadow-lg"
                >
                  Confirm & Place Order (${total.toFixed(2)})
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
