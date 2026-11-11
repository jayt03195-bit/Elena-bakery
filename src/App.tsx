import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { MenuSection } from './components/MenuSection';
import { TrustSection } from './components/TrustSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { CTASection } from './components/CTASection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OrderDrawer } from './components/OrderDrawer';
import { CustomOrderModal } from './components/CustomOrderModal';
import { PolicyModal } from './components/PolicyModal';
import { MenuItem, CartItem } from './types';
import { MENU_ITEMS } from './data/bakeryData';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'allergens' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { menuItem: item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.menuItem.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.menuItem.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenOrderWithFirstItem = () => {
    if (cart.length === 0) {
      // Default to best-selling cookie box if cart is empty
      const bestseller = MENU_ITEMS[0];
      setCart([{ menuItem: bestseller, quantity: 1 }]);
    }
    setIsOrderDrawerOpen(true);
  };

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F1] text-[#3A2218] selection:bg-[#B88A3E]/20 selection:text-[#3A2218]">
      {/* 1. Header: logo, anchor links, sticky "Order Now" button */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
        onOpenOrder={handleOpenOrderWithFirstItem}
      />

      <main className="flex-1">
        {/* 2. Hero: H1, subhead, buttons, hero photo */}
        <Hero
          onOrderNow={handleOpenOrderWithFirstItem}
          onSeeMenu={handleScrollToMenu}
          onFilterCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 3. Stats banner: 3 real proof points */}
        <StatsBanner />

        {/* 4. About us: Elena's short story (2-3 sentences), why she bakes, Brooklyn roots */}
        <AboutSection />

        {/* 5. Value/Benefits: 4 icon cards */}
        <ValuesSection />

        {/* 6. Services/Menu: 5 product cards + "Custom orders & events" card */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenCustomOrderModal={() => setIsCustomModalOpen(true)}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* 7. Trust: ingredient promise, NYC hygiene food permit badge, allergen note, freshness guarantee */}
        <TrustSection />

        {/* 8. Process: 3 steps */}
        <ProcessSection onStartOrder={handleOpenOrderWithFirstItem} />

        {/* 9. Social proof: 3 real customer reviews with names, Instagram/Google verification tags */}
        <ReviewsSection />

        {/* 10. CTA: "Craving something sweet? Order yours today." */}
        <CTASection onOrderNow={handleOpenOrderWithFirstItem} />

        {/* 11. FAQ (5-6): lead time, delivery area, custom cakes, allergens, payment, cancellations */}
        <FAQSection />
      </main>

      {/* 12. Footer: name, Brooklyn service area, phone, hours, Instagram, privacy/terms */}
      <Footer onOpenPolicy={(type) => setPolicyType(type)} />

      {/* Interactive Order & Checkout Slide-Over Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Custom Orders & Events Inquiry Modal */}
      <CustomOrderModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      />

      {/* Policy Modal (Privacy / Terms / Allergens) */}
      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      {/* Mobile Sticky Order Bar (always accessible CTA on small screens) */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-30">
        <button
          type="button"
          onClick={() => setIsOrderDrawerOpen(true)}
          className="w-full btn-primary shadow-2xl flex items-center justify-between px-5 min-h-[52px]"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-semibold text-sm">
              {totalCartCount > 0 ? `Your Box (${totalCartCount})` : 'Order Fresh Bakes'}
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded font-bold">
            Order Now →
          </span>
        </button>
      </div>
    </div>
  );
}
