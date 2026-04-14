import { StarIcon, StarHalfIcon } from "@/components/icons";

type Props = {
  rating: number;
  ratingNumber: number;
};

export const Rating = ({ rating, ratingNumber }: Props) => {
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
    </div>
  );
};
