export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_SZopvUkvd8qwDR',
    priceId: 'price_1RefC82YyuPygjK3rIhoKj1d',
    name: 'CHAT GPT DETAILED VIDEO COURSE',
    description: 'A FULL AI COURSE BY PRAKHAR',
    mode: 'subscription',
  },
];

export function getProductById(id: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.id === id);
}

export function getProductByPriceId(priceId: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.priceId === priceId);
}