import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles, MapPin } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenOrder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenOrder }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top micro-announcement bar */}
      <div className="bg-[#EFE3D0] text-[#3A2218] text-xs md:text-sm py-2 px-4 border-b border-[#A8957A]/30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#6F7B4F] animate-pulse"></span>
            <span className="font-medium text-[#3A2218]">Fresh batch baking daily in Carroll Gardens, Brooklyn</span>
            <span className="hidden sm:inline text-[#A8957A]">•</span>
            <span className="hidden sm:inline text-[#6F7B4F] font-medium flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 inline" /> Free Brooklyn delivery on orders $45+
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-[#3A2218]/80">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B88A3E]" /> Carroll Gardens, Brooklyn, NY
            </span>
            <span className="text-[#B88A3E]">Tue–Sun 7:30am–6pm</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF7F1]/95 backdrop-blur-md shadow-sm border-b border-[#EFE3D0]'
            : 'bg-[#FBF7F1] border-b border-[#EFE3D0]/60'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B88A3E] rounded-lg p-1"
            >
              <div className="w-11 h-11 rounded-full border border-[#B88A3E]/40 flex items-center justify-center bg-[#EFE3D0]/70 group-hover:bg-[#EFE3D0] transition-colors">
                <svg
                  className="w-6 h-6 text-[#B88A3E]"
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
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#3A2218]">
                  Elena’s Bakeshop
                </span>
                <span className="text-[11px] tracking-widest uppercase text-[#B88A3E] font-medium">
                  Brooklyn, NY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-[#3A2218]/80 hover:text-[#B88A3E] transition-colors py-2 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B88A3E] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full text-[#3A2218] hover:bg-[#EFE3D0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B88A3E]"
                aria-label={`View cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-[#3A2218]" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#B88A3E] text-white text-[11px] font-bold flex items-center justify-center animate-scaleIn">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Sticky Order Now Button - min 48px tap target */}
              <button
                type="button"
                onClick={onOpenOrder}
                className="hidden sm:inline-flex btn-primary text-sm font-semibold tracking-wide uppercase shadow-md"
              >
                Order Now
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg text-[#3A2218] hover:bg-[#EFE3D0] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FBF7F1] border-b border-[#EFE3D0] px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-[#3A2218] hover:bg-[#EFE3D0] hover:text-[#B88A3E]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full btn-primary text-base"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
