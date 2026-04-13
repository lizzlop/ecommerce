import StarHalfIcon from "@/components/icons/StarHalfIcon";
import StarIcon from "@/components/icons/StarIcon";

type Props = {
  rating: number;
  ratingNumber: number;
};

export const Rating = ({ rating, ratingNumber }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1;
        if (rating >= starValue) {
          return <StarIcon key={i} fillColor="#FFAD33" className="h-5 w-5" />;
        }
        if (rating >= starValue - 0.5) {
          return (
            <StarHalfIcon key={i} fillColor="#FFAD33" className="h-5 w-5" />
          );
        }
        return <StarIcon key={i} fillColor="#BFBFBF" className="h-5 w-5" />;
      })}

      <p className="text-sm text-gray-400 font-bold">{`(${ratingNumber})`}</p>
    </div>
  );
};
