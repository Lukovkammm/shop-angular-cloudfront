export interface Product {
  /** Available count */
  count: number;
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  title: string;
}

export interface ProductCheckout extends Product {
  orderedCount: number;
  /** orderedCount * price */
  totalPrice: number;
}
