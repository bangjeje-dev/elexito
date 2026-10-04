export interface ProductVariant {
  id: string;
  name: string;
  size?: string;
  description?: string;
  price: number;
  images?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  description: string;
  variants: ProductVariant[];
  price: number; // Base price or "starting from" price
}
