import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import heroBanner1 from '@/assets/hero-banner-1.jpg';
import heroBanner2 from '@/assets/hero-banner-2.jpg';

const slides = [
  {
    image: heroBanner1,
    title: "New Arrivals",
    subtitle: "Latest Pokémon TCG Sets",
    description: "Discover the newest releases and exclusive collections",
    cta: "Shop Now",
    ctaLink: "#"
  },
  {
    image: heroBanner2,
    title: "Premium Collection",
    subtitle: "Holographic & Rare Cards",
    description: "Authentic cards with guaranteed quality",
    cta: "Explore",
    ctaLink: "#"
  },
  {
    image: heroBanner1,
    title: "UAE's #1 TCG Store",
    subtitle: "Based in Dubai",
    description: "Fast delivery across UAE with authenticity guarantee",
    cta: "Visit Store",
    ctaLink: "#"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl mx-4 lg:mx-0">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="heading-1 mb-2">{slide.title}</h2>
              <p className="heading-4 mb-4 text-accent-400">{slide.subtitle}</p>
              <p className="body-text mb-8 opacity-90">{slide.description}</p>
              <a
                href={slide.ctaLink}
                className="btn-hero inline-block"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-white" />}
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};