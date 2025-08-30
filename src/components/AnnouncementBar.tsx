import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const announcements = [
  "🚚 Free shipping on orders AED 100+ across UAE",
  "✅ 100% Authenticity Guaranteed on all products",
  "🎯 Use code MASSIVE10 for 10% off your first order",
  "⚡ Same-day delivery available in Dubai",
];

export const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm relative">
      <div className="container-main">
        <p className="font-medium">{announcements[currentIndex]}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
};