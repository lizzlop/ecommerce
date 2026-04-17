import { StarIcon, StarHalfIcon } from "@/components/icons";
import { JSX } from "react";

type Props = {
  rating: number;
  ratingNumber: number;
  showStock?: boolean;
  hasStock?: boolean;
};

export const Rating = ({
  rating,
  ratingNumber,
  showStock = false,
  hasStock,
}: Props): JSX.Element => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const starValue = i + 1;
        if (rating >= starValue) {
          return (
            <StarIcon key={starValue} fillColor="#FFAD33" className="h-5 w-5" />
          );
        }
        if (rating >= starValue - 0.5) {
          return (
            <StarHalfIcon
              key={starValue}
              fillColor="#FFAD33"
              className="h-5 w-5"
            />
          );
        }
        return (
          <StarIcon key={starValue} fillColor="#BFBFBF" className="h-5 w-5" />
        );
      })}

      <p className="text-sm text-gray-400 font-bold">{`(${ratingNumber})`}</p>

      <div className="ml-4 flex gap-4">
        <span className="text-gray-400">|</span>
        {showStock && hasStock ? (
          <span className="text-green-600">In Stock</span>
        ) : (
          <span className="text-gray-400">Out of Stock</span>
        )}
      </div>
    </div>
  );
};
