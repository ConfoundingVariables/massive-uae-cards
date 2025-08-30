import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';
import { ProductGallery } from '@/components/ProductGallery';
import { BuyBox } from '@/components/BuyBox';
import { ProductAccordion } from '@/components/ProductAccordion';
import { RelatedProducts } from '@/components/RelatedProducts';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowLeft } from 'lucide-react';

// TODO: Replace with actual product data from API/CMS
const SAMPLE_PRODUCT = {
  id: 'pokemon-tcg-scarlet-violet-base-set-booster-box',
  title: 'Pokémon TCG: Scarlet & Violet Base Set Booster Box',
  price: 599.99,
  originalPrice: 649.99,
  currency: 'AED',
  inStock: true,
  stockCount: 12,
  category: 'English Sets',
  subcategory: 'Booster Boxes',
  rating: 4.8,
  reviewCount: 234,
  sku: 'PSV-BB-001',
  barcode: '820650856556',
  description: 'Experience the latest Pokémon adventure with the Scarlet & Violet Base Set Booster Box. Contains 36 booster packs with 11 cards each, featuring new Pokémon from the Paldea region.',
  images: [
    '/placeholder.svg?height=600&width=600&text=Scarlet+Violet+Box+Front',
    '/placeholder.svg?height=600&width=600&text=Scarlet+Violet+Box+Back',
    '/placeholder.svg?height=600&width=600&text=Booster+Pack+Sample',
    '/placeholder.svg?height=600&width=600&text=Card+Sample+1',
    '/placeholder.svg?height=600&width=600&text=Card+Sample+2'
  ],
  specifications: {
    language: 'English',
    setName: 'Scarlet & Violet Base Set',
    totalCards: '198 + Secret Rares',
    packsPerBox: '36',
    cardsPerPack: '11',
    guarantees: '1 rare or better per pack'
  },
  shipping: {
    freeShippingThreshold: 100,
    standardDelivery: '2-3 business days',
    expressDelivery: '1-2 business days',
    dubaiSameDay: 'Available for Dubai orders before 2 PM'
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // TODO: Implement actual product fetching based on productId
  // const { data: product, isLoading } = useQuery(['product', productId], () => fetchProduct(productId));
  
  const product = SAMPLE_PRODUCT;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      
      <main className="container-main py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight size={16} />
          <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
          <ChevronRight size={16} />
          <span className="text-foreground">{product.title}</span>
        </nav>

        {/* Back to category link */}
        <Link 
          to={`/category/${product.category.toLowerCase().replace(' ', '-')}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to {product.category}
        </Link>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Gallery */}
          <ProductGallery images={product.images} title={product.title} />
          
          {/* Buy Box */}
          <BuyBox 
            product={product}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />
        </div>

        {/* Product Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Short Description */}
            <div className="mb-8">
              <p className="text-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Accordion Sections */}
            <ProductAccordion product={product} />
          </div>

          {/* Related Products */}
          <div className="lg:col-span-1">
            <RelatedProducts 
              currentProductId={product.id}
              category={product.category}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;