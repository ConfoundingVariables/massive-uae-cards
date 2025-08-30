import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Badge } from './Badge';
import { Price } from './Price';
import { RatingStars } from './RatingStars';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: 'new' | 'sale' | 'limited';
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
}

export const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  image,
  badge,
  rating,
  reviewCount,
  inStock
}: ProductCardProps) => {
  // TODO: Generate proper product URLs from product data
  const productUrl = `/product/${id}`;

  return (
    <div className="product-card group relative">
      {/* Image Container */}
      <Link to={productUrl} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badge */}
          {badge && (
            <div className="absolute top-3 left-3">
              <Badge variant={badge} />
            </div>
          )}
        </div>
      </Link>

      {/* Quick Add to Cart - positioned outside the link */}
      <button
        className="absolute bottom-[140px] right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-lg"
        disabled={!inStock}
        aria-label="Add to cart"
        onClick={(e) => {
          e.preventDefault();
          // TODO: Implement quick add to cart functionality
          console.log('Quick add to cart:', id);
        }}
      >
        <ShoppingCart size={16} className="text-primary-700" />
      </button>

      {/* Content */}
      <div className="p-4">
        <Link to={productUrl}>
          <h3 className="heading-5 text-primary-700 mb-2 line-clamp-2 group-hover:text-accent-500 transition-colors">
            {title}
          </h3>
        </Link>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-2 mb-3">
            <RatingStars rating={rating} />
            {reviewCount && (
              <span className="caption text-muted-foreground">({reviewCount})</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <Price price={price} originalPrice={originalPrice} />
          {!inStock && (
            <span className="caption text-destructive font-medium">Out of Stock</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            inStock
              ? 'bg-primary text-primary-foreground hover:opacity-90'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};