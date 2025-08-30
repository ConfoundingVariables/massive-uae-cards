import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/Badge';
import { Price } from '@/components/Price';
import { RatingStars } from '@/components/RatingStars';
import { Heart, Minus, Plus, ShoppingCart, Truck } from 'lucide-react';
import { toast } from 'sonner';

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  currency: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  sku: string;
}

interface BuyBoxProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export const BuyBox = ({ product, quantity, onQuantityChange }: BuyBoxProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(product.stockCount, quantity + delta));
    onQuantityChange(newQuantity);
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    // TODO: Implement actual cart functionality
    // await addToCart({ productId: product.id, quantity });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(`Added ${quantity} item(s) to cart`);
    setIsAddingToCart(false);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // TODO: Implement wishlist functionality
    // if (!isWishlisted) addToWishlist(product.id);
    // else removeFromWishlist(product.id);
    
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="heading-2 text-foreground mb-2">{product.title}</h1>
        <div className="flex items-center gap-3 mb-2">
          <RatingStars rating={product.rating} />
          <span className="caption text-muted-foreground">
            ({product.reviewCount} reviews)
          </span>
        </div>
        <p className="caption text-muted-foreground">SKU: {product.sku}</p>
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <Price 
          price={product.price} 
          originalPrice={product.originalPrice}
          currency={product.currency}
        />
        {product.originalPrice && product.originalPrice > product.price && (
          <Badge variant="sale">Sale</Badge>
        )}
      </div>

      {/* Stock Status */}
      <div className="space-y-2">
        {product.inStock ? (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="caption text-green-400">
              In Stock ({product.stockCount} available)
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="caption text-red-400">Out of Stock</span>
          </div>
        )}
        
        {product.price >= 100 && (
          <div className="flex items-center gap-2 text-accent">
            <Truck size={16} />
            <span className="caption">Free shipping on this item</span>
          </div>
        )}
      </div>

      {/* Quantity Selector */}
      {product.inStock && (
        <div className="space-y-3">
          <label className="caption font-medium text-foreground">Quantity</label>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-lg">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-r-none"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </Button>
              <div className="flex items-center justify-center w-16 h-10 border-x border-border bg-background">
                <span className="font-medium">{quantity}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-l-none"
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stockCount}
              >
                <Plus size={16} />
              </Button>
            </div>
            <span className="caption text-muted-foreground">
              Max: {product.stockCount}
            </span>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          className="w-full"
          size="lg"
          onClick={handleAddToCart}
          disabled={!product.inStock || isAddingToCart}
        >
          {isAddingToCart ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Adding to Cart...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} />
              Add to Cart
            </div>
          )}
        </Button>

        <Button
          variant="secondary"
          className="w-full"
          size="lg"
          onClick={toggleWishlist}
        >
          <Heart 
            size={20} 
            className={isWishlisted ? 'fill-current text-red-500' : ''} 
          />
          {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </Button>
      </div>

      {/* Trust Signals */}
      <div className="p-4 bg-card rounded-lg border border-border space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-400">✓</span>
          <span className="text-foreground">100% Authentic Guarantee</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-400">✓</span>
          <span className="text-foreground">Secure Payment</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-400">✓</span>
          <span className="text-foreground">Fast UAE Delivery</span>
        </div>
      </div>
    </div>
  );
};