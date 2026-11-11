export interface MenuItem {
  id: string;
  name: string;
  category: 'cookies' | 'pastries' | 'cakes' | 'tarts';
  price: number;
  priceNote?: string; // e.g. "from $24" or "box of 4"
  description: string;
  highlightTag?: string; // e.g. "Most Popular", "Elena's Signature"
  imageUrl: string;
  ingredients: string[];
  allergens: string[];
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  platform: 'google' | 'instagram';
  handle?: string;
  avatarUrl: string;
  favoriteItem?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface BrooklynNeighborhood {
  name: string;
  deliveryFee: number;
  minOrder: number;
  deliveryTime: string;
}
