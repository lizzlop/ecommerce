import { ProductCard } from "@/features/products/ProductCard";
import products from "@/mocks/products.json";

export default function Products() {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
