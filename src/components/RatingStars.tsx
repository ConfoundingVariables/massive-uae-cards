import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: number;
}

export const RatingStars = ({ rating, maxRating = 5, size = 16 }: RatingStarsProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }).map((_, index) => {
        const starRating = index + 1;
        const isFilled = rating >= starRating;
        const isHalfFilled = rating >= starRating - 0.5 && rating < starRating;

        return (
          <Star
            key={index}
            size={size}
            className={`${
              isFilled
                ? 'text-yellow-400 fill-yellow-400'
                : isHalfFilled
                ? 'text-yellow-400 fill-yellow-400/50'
                : 'text-neutral-300'
            }`}
          />
        );
      })}
    </div>
  );
};