import { ProductCard } from '@/components/ProductCard';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

// TODO: Replace with actual related products API call
const SAMPLE_RELATED_PRODUCTS = [
  {
    id: 'pokemon-tcg-sv-booster-pack',
    title: 'Pokémon TCG: Scarlet & Violet Single Pack',
    price: 18.99,
    originalPrice: 21.99,
    image: '/placeholder.svg?height=300&width=300&text=SV+Single+Pack',
    badge: 'sale' as const,
    rating: 4.7,
    inStock: true
  },
  {
    id: 'pokemon-tcg-sv-etb',
    title: 'Pokémon TCG: Scarlet & Violet Elite Trainer Box',
    price: 199.99,
    image: '/placeholder.svg?height=300&width=300&text=SV+ETB',
    badge: 'new' as const,
    rating: 4.9,
    inStock: true
  },
  {
    id: 'pokemon-tcg-sv-premium',
    title: 'Pokémon TCG: Scarlet & Violet Premium Collection',
    price: 89.99,
    originalPrice: 99.99,
    image: '/placeholder.svg?height=300&width=300&text=SV+Premium',
    badge: 'limited' as const,
    rating: 4.8,
    inStock: false
  }
];

export const RelatedProducts = ({ currentProductId, category }: RelatedProductsProps) => {
  // TODO: Implement actual related products fetching
  // const { data: relatedProducts } = useQuery(
  //   ['relatedProducts', currentProductId, category],
  //   () => fetchRelatedProducts(currentProductId, category)
  // );

  const relatedProducts = SAMPLE_RELATED_PRODUCTS.filter(p => p.id !== currentProductId);

  return (
    <div className="space-y-4">
      <h3 className="heading-4 text-foreground">You might also like</h3>
      
      <div className="space-y-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="transform scale-90 origin-left">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-border">
        <p className="caption text-muted-foreground text-center">
          Looking for more from this category?
        </p>
        <button className="w-full mt-2 text-accent hover:text-accent-foreground transition-colors caption font-medium">
          View all {category} →
        </button>
      </div>
    </div>
  );
};