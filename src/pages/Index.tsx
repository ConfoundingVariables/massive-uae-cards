import { AnnouncementBar } from '@/components/AnnouncementBar';
import { SiteHeader } from '@/components/SiteHeader';
import { HeroCarousel } from '@/components/HeroCarousel';
import { USPBar } from '@/components/USPBar';
import { CollectionGrid } from '@/components/CollectionGrid';
import { ProductCarousel } from '@/components/ProductCarousel';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <SiteHeader />
      
      <main>
        <div className="container-main py-8">
          <HeroCarousel />
        </div>
        
        <USPBar />
        <CollectionGrid />
        
        <ProductCarousel 
          title="New Arrivals" 
          subtitle="Latest releases and hot products just in"
        />
        
        <ProductCarousel 
          title="On Sale" 
          subtitle="Limited time offers you don't want to miss"
        />
        
        <NewsletterSignup />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
