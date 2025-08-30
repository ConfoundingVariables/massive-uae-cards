import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Product {
  specifications: {
    language: string;
    setName: string;
    totalCards: string;
    packsPerBox: string;
    cardsPerPack: string;
    guarantees: string;
  };
  shipping: {
    freeShippingThreshold: number;
    standardDelivery: string;
    expressDelivery: string;
    dubaiSameDay: string;
  };
}

interface ProductAccordionProps {
  product: Product;
}

export const ProductAccordion = ({ product }: ProductAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="details">
        <AccordionTrigger className="text-left">
          <span className="heading-5">Product Details</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <dt className="caption font-medium text-muted-foreground mb-1">Language</dt>
              <dd className="body-text text-foreground">{product.specifications.language}</dd>
            </div>
            <div>
              <dt className="caption font-medium text-muted-foreground mb-1">Set Name</dt>
              <dd className="body-text text-foreground">{product.specifications.setName}</dd>
            </div>
            <div>
              <dt className="caption font-medium text-muted-foreground mb-1">Total Cards</dt>
              <dd className="body-text text-foreground">{product.specifications.totalCards}</dd>
            </div>
            <div>
              <dt className="caption font-medium text-muted-foreground mb-1">Packs per Box</dt>
              <dd className="body-text text-foreground">{product.specifications.packsPerBox}</dd>
            </div>
            <div>
              <dt className="caption font-medium text-muted-foreground mb-1">Cards per Pack</dt>
              <dd className="body-text text-foreground">{product.specifications.cardsPerPack}</dd>
            </div>
            <div>
              <dt className="caption font-medium text-muted-foreground mb-1">Guarantees</dt>
              <dd className="body-text text-foreground">{product.specifications.guarantees}</dd>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <h4 className="heading-5 text-foreground mb-3">Authenticity Guarantee</h4>
            <p className="body-text text-muted-foreground leading-relaxed">
              All products sold by MASSIVE are 100% authentic and sourced directly from official distributors. 
              Each item comes with our authenticity guarantee and can be verified through our authentication service.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shipping">
        <AccordionTrigger className="text-left">
          <span className="heading-5">Shipping & Returns</span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div>
            <h4 className="heading-5 text-foreground mb-3">Shipping Options</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="body-text text-foreground">Standard Delivery</span>
                <span className="caption text-muted-foreground">{product.shipping.standardDelivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="body-text text-foreground">Express Delivery</span>
                <span className="caption text-muted-foreground">{product.shipping.expressDelivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="body-text text-foreground">Dubai Same Day</span>
                <span className="caption text-muted-foreground">{product.shipping.dubaiSameDay}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <h4 className="heading-5 text-foreground mb-3">Free Shipping</h4>
            <p className="body-text text-muted-foreground">
              Free standard shipping on all orders over AED {product.shipping.freeShippingThreshold} 
              within the UAE. Express delivery available for an additional fee.
            </p>
          </div>

          <div className="pt-4 border-t border-border">
            <h4 className="heading-5 text-foreground mb-3">Returns Policy</h4>
            <div className="space-y-2 body-text text-muted-foreground">
              <p>• 30-day return policy for unopened products</p>
              <p>• Items must be in original packaging and condition</p>
              <p>• Return shipping costs apply unless item is defective</p>
              <p>• Refunds processed within 5-7 business days</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};