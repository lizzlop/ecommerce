"use client";

import { HeartIcon, ShoppingCartIcon } from "@/components/icons";
import VisibilityIcon from "@/components/icons/VisibilityIcon";
import { Product } from "@/types";
import Image from "next/image";
import { Rating } from "./Rating";

type Props = {
  product: Product;
};

const getFullPrice = (price: number, discount: number) => {
  return Math.round((100 * price) / (100 - discount)).toFixed(2);
};

export const ProductCard = ({ product }: Readonly<Props>) => {
  return (
    <div className="p-6 relative group">
      {/* Image */}
      <Image
        src={product.image ?? ""}
        alt={product.name}
        className="rounded-xs"
        width={250}
        height={250}
      />

      {/* Like button */}
      <button className="absolute top-8 right-8 bg-white/80 rounded-full p-1">
        <HeartIcon fillColor="currentColor" className="h-5 w-5" />
      </button>

      {/* Eye icon button */}
      <button className="absolute top-17 right-8 bg-white/80 rounded-full p-1">
        <VisibilityIcon fillColor="currentColor" className="h-5 w-5" />
      </button>

      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-8 left-8 bg-red-custom text-white text-xs px-3 py-1 rounded">
          -{product.discount}%
        </div>
      )}

      {/* Add to cart badge */}
      <button onClick={() => console.log("Slected product: ", product)}>
        <div className="absolute top-59 left-6 flex bg-black text-white text-xs w-62.5 h-11 justify-center items-center cursor-pointer gap-2 rounded-b opacity-0 group-hover:opacity-100 transition">
          <ShoppingCartIcon fillColor="white" className="h-7 w-7" /> Add To Cart
        </div>
      </button>

      {/* Name and price */}
      <h2 className="text-ml font-bold">{product.name}</h2>
      <div className="flex gap-4">
        <p className="text-ml text-red-custom font-bold">{`$${product.price}`}</p>
        {product.discount ? (
          <p className="text-sm text-gray-500 font-medium line-through">{`$${getFullPrice(product.price, product.discount)}`}</p>
        ) : (
          ""
        )}
      </div>

      {/* Rating */}
      <Rating rating={product.rating} ratingNumber={product.ratingNumber} />
    </div>
  );
};
