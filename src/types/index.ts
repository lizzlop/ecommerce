export type Product = {
  id: number;
  name: string;
  image: string | null;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  discount: number | null;
  rating: number;
  ratingNumber: number;
};

export type cart = Product & {
  quantity: number;
};

export type Category = {
  id: string;
  name: string;
};
