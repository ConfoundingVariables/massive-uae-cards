export const MegaMenu = () => {
  return (
    <div className="absolute top-full left-0 w-screen bg-white text-primary-700 shadow-xl border-t border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
      <div className="container-main py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent-500">Booster Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Booster Boxes</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Single Packs</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Bundle Deals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent-500">Premium Collections</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Elite Trainer Boxes</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Premium Collections</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Special Sets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent-500">Single Cards</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Rare Cards</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Holographic Cards</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Promotional Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent-500">Popular Sets</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent-500 transition-colors">Scarlet & Violet</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Paldea Evolved</a></li>
              <li><a href="#" className="hover:text-accent-500 transition-colors">Crown Zenith</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};