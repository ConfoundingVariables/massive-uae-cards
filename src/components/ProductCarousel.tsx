import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ProductCard } from './ProductCard';
import productCard1 from '@/assets/product-card-1.jpg';

// Mock product data
const products = [
  {
    id: '1',
    title: 'Pokémon TCG: Scarlet & Violet Booster Box',
    price: 399,
    originalPrice: 449,
    image: productCard1,
    badge: 'sale' as const,
    rating: 4.8,
    reviewCount: 124,
    inStock: true
  },
  {
    id: '2',
    title: 'Elite Trainer Box - Paldea Evolved',
    price: 179,
    image: productCard1,
    badge: 'new' as const,
    rating: 4.9,
    reviewCount: 89,
    inStock: true
  },
  {
    id: '3',
    title: 'Japanese Booster Pack - Special Art Rare',
    price: 89,
    image: productCard1,
    badge: 'limited' as const,
    rating: 4.7,
    reviewCount: 56,
    inStock: false
  },
  {
    id: '4',
    title: 'Premium Collection - Charizard UPC',
    price: 699,
    image: productCard1,
    rating: 4.9,
    reviewCount: 203,
    inStock: true
  },
  {
    id: '5',
    title: 'Battle Academy - Learn to Play Set',
    price: 129,
    image: productCard1,
    badge: 'new' as const,
    rating: 4.6,
    reviewCount: 78,
    inStock: true
  }
];

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
}

export const ProductCarousel = ({ title, subtitle }: ProductCarouselProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemWidth = 300; // Width of each product card + gap
  const maxScroll = Math.max(0, (products.length * itemWidth) - (4 * itemWidth));

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - itemWidth * 2));
  };

  const scrollRight = () => {
    setScrollPosition(Math.min(maxScroll, scrollPosition + itemWidth * 2));
  };

  return (
    <section className="py-16">
      <div className="container-main">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="heading-2 text-primary-700 mb-2">{title}</h2>
            {subtitle && (
              <p className="body-text text-muted-foreground">{subtitle}</p>
            )}
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              disabled={scrollPosition === 0}
              className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              disabled={scrollPosition >= maxScroll}
              className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Products Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-72">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 transition-colors font-medium"
          >
            View All Products
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};