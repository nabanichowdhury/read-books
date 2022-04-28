import React, { useEffect, useState } from "react";
import useReview from "../../hooks/useReview";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="reviews">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
