"use client";
import React from "react";

interface Ratings {
  rating: number;
}

export const StarRating = ({ rating }: Ratings) => {
  if (typeof rating !== "number" || isNaN(rating)) return null;

  const fiveStarRating = rating / 2;
  const fullStar = Math.floor(fiveStarRating);
  const halfStar = rating % 1 !== 0;
  const emptyStar = Math.max(0, 5 - fullStar - (halfStar ? 1 : 0)); // prevents negative length

  return (
    <>
      <div>
        {[...Array(fullStar)].map((_, i) => (
          <i key={`full-${i}`} className="bx bxs-star text-yellow-400"></i>
        ))}

        {halfStar && <i className="bx bxs-star-half text-yellow-400"></i>}

        {[...Array(emptyStar)].map((_, i) => (
          <i key={`empty-${i}`} className="bx bx-star text-yellow-400"></i>
        ))}
      </div>
    </>
  );
};
