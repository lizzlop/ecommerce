export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
};

export type cart = Product & {
  quantity: number;
};

export type Category = {
  id: string;
  name: string;
};
