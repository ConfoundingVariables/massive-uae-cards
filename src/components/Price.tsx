interface PriceProps {
  price: number;
  originalPrice?: number;
  currency?: string;
}

export const Price = ({ price, originalPrice, currency = 'AED' }: PriceProps) => {
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'code'
    }).format(amount);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="heading-5 text-primary-700">
        {formatPrice(price)}
      </span>
      {originalPrice && originalPrice > price && (
        <span className="caption text-muted-foreground line-through">
          {formatPrice(originalPrice)}
        </span>
      )}
    </div>
  );
};