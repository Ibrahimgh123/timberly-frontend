export type ProductCategory =
  | "living-room"
  | "bedroom"
  | "dining"
  | "kitchen"
  | "tables";

export type Product = {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  price: number;
  currency: string;
  category: ProductCategory;
  badge?: "bestseller" | "custom" | "new";
};