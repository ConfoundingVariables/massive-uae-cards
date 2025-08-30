import { ArrowRight } from 'lucide-react';
import englishSet from '@/assets/english-set.jpg';
import japaneseSet from '@/assets/japanese-set.jpg';
import accessories from '@/assets/accessories.jpg';
import heroBanner2 from '@/assets/hero-banner-2.jpg';

const collections = [
  {
    title: "New Arrivals",
    description: "Latest releases and hot sets",
    image: heroBanner2,
    link: "#",
    featured: true
  },
  {
    title: "English Sets",
    description: "Premium English TCG collections",
    image: englishSet,
    link: "#"
  },
  {
    title: "Japanese Sets",
    description: "Exclusive Japanese imports",
    image: japaneseSet,
    link: "#"
  },
  {
    title: "Accessories",
    description: "Sleeves, deck boxes & more",
    image: accessories,
    link: "#"
  }
];

export const CollectionGrid = () => {
  return (
    <section className="py-16">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4 text-primary-700">Featured Collections</h2>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium Pokémon TCG products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <a
              key={index}
              href={collection.link}
              className={`group relative overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 ${
                collection.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative ${collection.featured ? 'h-80' : 'h-64'}`}>
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className={`${collection.featured ? 'heading-2' : 'heading-4'} mb-2`}>
                    {collection.title}
                  </h3>
                  <p className="caption opacity-90 mb-4">{collection.description}</p>
                  
                  <div className="flex items-center text-accent-400 group-hover:text-accent-300 transition-colors">
                    <span className="caption font-medium">Shop Collection</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};