import { X, ChevronRight } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer = ({ isOpen, onClose }: MobileDrawerProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300">
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <h2 className="text-xl font-bold text-primary-700">MASSIVE TCG</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-neutral-50 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors text-primary-700">
                English Sets
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors text-primary-700">
                Japanese Sets
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors text-primary-700">
                Best Sellers
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors text-primary-700">
                Deals & Sale
                <ChevronRight size={16} />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-neutral-50 rounded-lg transition-colors text-primary-700">
                Accessories
                <ChevronRight size={16} />
              </a>
            </li>
          </ul>
          
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <a href="#" className="block p-3 text-primary-700 hover:bg-neutral-50 rounded-lg transition-colors">
              Account
            </a>
            <a href="#" className="block p-3 text-primary-700 hover:bg-neutral-50 rounded-lg transition-colors">
              Contact Us
            </a>
            <a href="#" className="block p-3 text-primary-700 hover:bg-neutral-50 rounded-lg transition-colors">
              Store Location
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};