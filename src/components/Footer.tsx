import { MapPin, Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="heading-4 mb-6">MASSIVE TCG</h3>
            <p className="caption text-white/80 mb-6">
              UAE's premier destination for authentic Pokémon trading cards. Based in Dubai with fast delivery across the Emirates.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-accent-400 flex-shrink-0" />
                <span className="caption">Dubai Mall, Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent-400 flex-shrink-0" />
                <span className="caption">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-accent-400 flex-shrink-0" />
                <span className="caption">hello@massive-tcg.ae</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="heading-5 mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">English Sets</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Japanese Sets</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Deals & Sale</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="heading-5 mb-6">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Returns</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-5 mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">About Us</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Store Location</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Authenticity</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Careers</a></li>
              <li><a href="#" className="caption hover:text-accent-400 transition-colors">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="caption">Follow Us:</span>
              <div className="flex gap-3">
                <a href="#" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="caption">Secure Payment:</span>
              <div className="flex gap-2 opacity-80">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-primary-700">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-primary-700">MC</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-semibold text-primary-700">AMEX</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4">
              <a href="#" className="caption hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="caption hover:text-accent-400 transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <p className="caption text-white/60">
              © 2024 MASSIVE Trading Cards. All rights reserved. Pokémon and all related characters are trademarks of Nintendo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};