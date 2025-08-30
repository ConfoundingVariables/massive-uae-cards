import { useState } from 'react';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { MobileDrawer } from './MobileDrawer';

export const SiteHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // TODO: Connect to user authentication system
  // TODO: Connect to cart state management  
  // TODO: Implement search functionality

  return (
    <header className="bg-header-bg text-white sticky top-0 z-50 shadow-lg">
      <div className="container-main">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-wider">MASSIVE</h1>
            <span className="text-xs ml-2 text-accent-400">TCG</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="hover:text-accent-400 transition-colors font-medium">
                English Sets
              </button>
              <MegaMenu />
            </div>
            <button className="hover:text-accent-400 transition-colors font-medium">
              Japanese Sets
            </button>
            <button className="hover:text-accent-400 transition-colors font-medium">
              Best Sellers
            </button>
            <button className="hover:text-accent-400 transition-colors font-medium">
              Deals & Sale
            </button>
            <button className="hover:text-accent-400 transition-colors font-medium">
              Accessories
            </button>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl p-4 text-primary-700">
                  <input
                    type="text"
                    placeholder="Search cards, sets, accessories..."
                    className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Account */}
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Account">
              <User size={20} />
            </button>

            {/* Cart */}
            <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};