import { MenuItem, Review, FAQItem, BrooklynNeighborhood } from '../types';

export const STATS = [
  {
    number: '2,850+',
    label: 'Orders Baked',
    detail: 'Across Brooklyn & NYC neighborhoods',
  },
  {
    number: '4.9 ★',
    label: 'Average Rating',
    detail: 'From 340+ verified sweet lovers',
  },
  {
    number: '100%',
    label: 'Baked Fresh Daily',
    detail: 'Never frozen, made to order every morning',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'stuffed-biscoff-nutella-cookies',
    name: 'Stuffed Biscoff & Nutella NYC Cookies',
    category: 'cookies',
    price: 24.00,
    priceNote: 'box of 4 large (or $6.50 ea)',
    description: 'Thick, molten-center cookies stuffed generously with genuine Nutella spread and crunchy Lotus Biscoff speculoos.',
    highlightTag: 'Bestseller',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    ingredients: ['French butter', 'Lotus Biscoff cream', 'Real Nutella', 'Brown sugar', 'Belgian dark chocolate chunks', 'Sea salt flakes'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Soy', 'Tree nuts (Hazelnuts)'],
  },
  {
    id: 'almond-pain-au-chocolat',
    name: 'Almond & Valrhona Pain au Chocolat',
    category: 'pastries',
    price: 8.50,
    priceNote: 'per pastry',
    description: '48-hour slow-laminated French butter pastry filled with double Valrhona chocolate batons and topped with roasted sliced almonds.',
    highlightTag: "Elena's Signature",
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Normandy unsalted butter', 'Valrhona 64% chocolate', 'California toasted almonds', 'Organic unbleached flour', 'Egg wash'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Eggs', 'Tree nuts (Almonds)'],
  },
  {
    id: 'basque-burnt-cheesecake',
    name: 'Signature Basque Burnt Cheesecake',
    category: 'cakes',
    price: 38.00,
    priceNote: '6-inch cake (serves 6-8) or $7.50 slice',
    description: 'Caramelized burnt crust on top with an ultra-creamy, molten center infused with Madagascar bourbon vanilla bean.',
    highlightTag: 'Crowd Favorite',
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Philadelphia cream cheese', 'Heavy cream', 'Madagascar bourbon vanilla', 'Organic sugar', 'Free-range egg yolks'],
    allergens: ['Dairy', 'Eggs'],
  },
  {
    id: 'salted-caramel-pecan-tart',
    name: 'Salted Caramel Roasted Pecan Tart',
    category: 'tarts',
    price: 9.00,
    priceNote: 'individual tart or $34 whole',
    description: 'Crisp buttery pâte sablée crust filled with house-cooked amber caramel, toasted Georgia pecans, and Maldon flaky salt.',
    highlightTag: 'Seasonal Special',
    imageUrl: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Pâte sablée crust', 'House amber caramel', 'Roasted Georgia pecans', 'Fleur de sel', 'Pure cream'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Tree nuts (Pecans)'],
  },
  {
    id: 'pistachio-raspberry-cruffin',
    name: 'Pistachio Cream & Raspberry Cruffin',
    category: 'pastries',
    price: 7.50,
    priceNote: 'per cruffin',
    description: 'Croissant baked in a muffin mold, rolled in vanilla bean sugar, and piped with roasted Sicilian pistachio ganache and tart raspberry puree.',
    highlightTag: 'Morning Must-Have',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Laminated croissant dough', 'Sicilian pistachio paste', 'Fresh raspberry coulis', 'Vanilla sugar dusting'],
    allergens: ['Wheat / Gluten', 'Dairy', 'Tree nuts (Pistachios)'],
  },
];

export const VALUES_DATA = [
  {
    id: 'scratch',
    title: 'Made from Scratch',
    description: 'Zero pre-mixes or artificial bases. Every dough is fermented slowly over 24 to 48 hours for deep flavor and light texture.',
    badge: '100% Homemade',
  },
  {
    id: 'premium',
    title: 'Premium Ingredients',
    description: 'We never cut corners: genuine Nutella, Lotus Biscoff, French Normandy butter, and Valrhona Grand Cru chocolate.',
    badge: 'Real Nutella & Biscoff',
  },
  {
    id: 'made-to-order',
    title: 'Made to Order',
    description: 'Your desserts are baked fresh on the very morning of your delivery or pickup. No stale glass displays ever.',
    badge: 'Morning of Pickup',
  },
  {
    id: 'local-delivery',
    title: 'Local Pickup & Delivery',
    description: 'Pick up warm at our Carroll Gardens kitchen or get hand-delivered across Brooklyn in temperature-controlled boxes.',
    badge: 'Brooklyn Wide',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Choose Your Treat',
    description: 'Explore our weekly menu of cookies, croissants, tarts, and cakes or request a customized dessert box for special occasions.',
    detail: 'Easily customize quantities and dietary preferences in seconds.',
  },
  {
    step: '02',
    title: 'Confirm Date & Fulfillment',
    description: 'Select your preferred morning or afternoon pickup time in Carroll Gardens, or choose doorstep delivery across Brooklyn.',
    detail: 'Standard lead time is 24 hours. Weekend slots fill up fast!',
  },
  {
    step: '03',
    title: 'Enjoy It Warm & Fresh',
    description: 'Unbox freshly baked, still-warm treats crafted that exact morning with care and European butter aromas.',
    detail: 'Packed in eco-friendly, bakery-stamped presentation boxes.',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Maya Lin',
    location: 'Cobble Hill, Brooklyn',
    rating: 5,
    date: '2 days ago',
    text: 'Elena’s Biscoff & Nutella stuffed cookies are completely out of this world. You break them open and the warm center just oozes out. Everyone at my Saturday brunch thought I had imported them straight from Paris.',
    platform: 'google',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    favoriteItem: 'Stuffed Biscoff & Nutella NYC Cookies',
  },
  {
    id: 'rev-2',
    author: 'David Rosenthal',
    location: 'Park Slope, Brooklyn',
    rating: 5,
    date: '1 week ago',
    text: 'Ordered the Basque Burnt Cheesecake for my wife’s 30th birthday. The caramelization on top paired with that silky, custard-like center was pure art. Seamless Carroll Gardens pickup too—Elena even included a sweet handwritten card!',
    platform: 'instagram',
    handle: '@david.eats.bk',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    favoriteItem: 'Signature Basque Burnt Cheesecake',
  },
  {
    id: 'rev-3',
    author: 'Chloe & Marcus V.',
    location: 'DUMBO, Brooklyn',
    rating: 5,
    date: '2 weeks ago',
    text: 'The pain au chocolat has those paper-thin flaky layers that shatter when you bite down. You can immediately taste the quality of the real butter. It’s officially become our Sunday morning ritual.',
    platform: 'google',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    favoriteItem: 'Almond & Valrhona Pain au Chocolat',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-lead-time',
    category: 'Ordering',
    question: 'How far in advance do I need to place my order?',
    answer: 'Because every item is baked from scratch to order, standard orders require a minimum of 24 hours notice. For custom celebration cakes, dessert tables, or catering boxes over 30 pieces, we kindly request 5 to 7 days notice to prepare doughs and artisanal fillings.',
  },
  {
    id: 'faq-delivery-area',
    category: 'Delivery',
    question: 'Which Brooklyn neighborhoods do you deliver to?',
    answer: 'We provide direct doorstep courier delivery throughout Carroll Gardens, Cobble Hill, Boerum Hill, Brooklyn Heights, DUMBO, Park Slope, Prospect Heights, Williamsburg, Greenpoint, and Bushwick. Delivery is flat $6.00 or FREE on orders over $45. Kitchen pickup at our Carroll Gardens space is always free.',
  },
  {
    id: 'faq-custom-cakes',
    category: 'Custom & Events',
    question: 'Can I order custom cakes, corporate gifts, or wedding dessert tables?',
    answer: 'Yes! We love creating bespoke celebration cakes, tiered Basque cheesecakes, mini pastry towers, and individually branded cookie boxes for birthdays, weddings, baby showers, and Brooklyn office events. Use our "Custom Orders & Events" card on the menu to submit your inquiry.',
  },
  {
    id: 'faq-allergens',
    category: 'Ingredients',
    question: 'What if someone in my party has food allergies or dietary restrictions?',
    answer: 'We clearly label all common allergens (wheat/gluten, dairy, eggs, and tree nuts like hazelnuts, pecans, and almonds). While we take extreme sanitation measures in our certified Brooklyn kitchen, please note our equipment processes tree nuts and gluten. Gluten-friendly options like our Basque Cheesecake are prepared in sanitized cycles.',
  },
  {
    id: 'faq-payment',
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, Amex), Apple Pay, Google Pay, and contactless payments at pickup. Invoices for corporate catering and large events can also be settled via Zelle or ACH.',
  },
  {
    id: 'faq-cancellations',
    category: 'Policy',
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'For standard orders, you may reschedule or cancel for a full refund up to 24 hours prior to your scheduled pickup or delivery window. For custom celebration cakes and event orders, cancellations made at least 72 hours in advance receive a full refund or credit.',
  },
];

export const BROOKLYN_NEIGHBORHOODS: BrooklynNeighborhood[] = [
  { name: 'Carroll Gardens (Kitchen Pickup)', deliveryFee: 0, minOrder: 0, deliveryTime: 'Ready in morning slot' },
  { name: 'Cobble Hill & Boerum Hill', deliveryFee: 5, minOrder: 20, deliveryTime: '30-45 mins' },
  { name: 'Park Slope & Prospect Heights', deliveryFee: 6, minOrder: 20, deliveryTime: '35-50 mins' },
  { name: 'Brooklyn Heights & DUMBO', deliveryFee: 6, minOrder: 20, deliveryTime: '30-45 mins' },
  { name: 'Williamsburg & Greenpoint', deliveryFee: 7, minOrder: 25, deliveryTime: '40-60 mins' },
  { name: 'Fort Greene & Clinton Hill', deliveryFee: 6, minOrder: 20, deliveryTime: '35-50 mins' },
  { name: 'Bushwick & Bed-Stuy', deliveryFee: 7, minOrder: 25, deliveryTime: '45-60 mins' },
];
