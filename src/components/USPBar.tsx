import { Truck, Shield, Zap, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders AED 100+ across UAE"
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Guaranteed genuine cards only"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Same-day delivery in Dubai"
  },
  {
    icon: CreditCard,
    title: "Secure Checkout",
    description: "Safe payment processing"
  }
];

export const USPBar = () => {
  return (
    <div className="bg-white py-12 border-y border-neutral-200">
      <div className="container-main">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-xl mb-4">
                <feature.icon size={24} className="text-accent-500" />
              </div>
              <h3 className="heading-5 mb-2 text-primary-700">{feature.title}</h3>
              <p className="caption text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};