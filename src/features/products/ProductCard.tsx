"use client";

import Image from "next/image";
import {
  HeartIcon,
  ShoppingCartIcon,
  VisibilityIcon,
} from "@/components/icons";
import { Product } from "@/types";
import { Rating } from "./Rating";
import { JSX } from "react";

type Props = {
  product: Product;
};

const getFullPrice = (price: number, discount: number): string => {
  return Math.round((100 * price) / (100 - discount)).toFixed(2);
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const ProductCard = ({ product }: Readonly<Props>): JSX.Element => {
  const hasImage = Boolean(product.image);

  return (
    <div className="p-6 relative group flex flex-row min-h-[140px] w-full sm:block sm:w-auto">
      {/* Image */}
      {hasImage ? (
        <Image
          src={product.image as string}
          alt={product.name}
          className="rounded-xs w-50 h-50 object-cover sm:w-[250px] sm:h-[250px]"
          width={250}
          height={250}
        />
      ) : (
        <Image
          src={"/noImageAvailable.svg"}
          alt={product.name}
          className="rounded-xs w-50 h-50 object-cover sm:w-[250px] sm:h-[250px]"
          width={250}
          height={250}
        />
      )}

      {/* Like button */}
      <button
        type="button"
        aria-label={`Add ${product.name} to favorites`}
        className="hidden sm:block absolute top-8 right-8 bg-white/80 rounded-full p-1"
      >
        <HeartIcon fillColor="currentColor" className="h-5 w-5" />
      </button>

      {/* Eye icon button */}
      <button
        type="button"
        aria-label={`Preview ${product.name}`}
        className="hidden sm:block absolute top-17 right-8 bg-white/80 rounded-full p-1"
      >
        <VisibilityIcon fillColor="currentColor" className="h-5 w-5" />
      </button>

      {/* Discount badge */}
      {product.discount && (
        <div className="absolute top-8 left-8 bg-red-custom text-white text-xs px-3 py-1 rounded">
          -{product.discount}%
        </div>
      )}

      {/* Add to cart badge*/}
      <button
        type="button"
        aria-label={`Add ${product.name} to cart`}
        onClick={() => console.log("Selected product: ", product)}
        className="hidden sm:flex absolute top-57.5 left-6 bg-black text-white text-xs w-62.5 h-11 justify-center items-center cursor-pointer gap-2 rounded-b opacity-0 group-hover:opacity-100 transition"
      >
        <ShoppingCartIcon fillColor="white" className="h-7 w-7" /> Add To Cart
      </button>

      {/* Name and price */}
      <div className="ml-3 sm:ml-0 flex flex-col gap-4">
        <h2 className="text-ml font-bold line-clamp-2">{product.name}</h2>
        <div className="flex gap-4">
          <p className="text-xl sm:text-ml text-red-custom font-bold">
            {currencyFormatter.format(product.price)}
          </p>
          {product.discount ? (
            <p className="text-xl sm:text-ml text-gray-500 font-medium line-through">
              {currencyFormatter.format(
                Number(getFullPrice(product.price, product.discount)),
              )}
            </p>
          ) : (
            ""
          )}
        </div>

        {/* Rating */}
        <Rating rating={product.rating} ratingNumber={product.ratingNumber} />

        {/* Like and cart icon for mobile */}
        <div className="flex">
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="block sm:hidden bg-black rounded-full p-2"
          >
            <ShoppingCartIcon fillColor="white" className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to favorites`}
            className="block sm:hidden bg-white/80 rounded-full p-2"
          >
            <HeartIcon fillColor="currentColor" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
