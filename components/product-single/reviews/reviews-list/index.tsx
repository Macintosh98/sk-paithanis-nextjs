"use client";
/* eslint-disable @next/next/no-img-element */

import { ReviewType } from "../../../../types";

type ReviewsListType = {
  reviews: ReviewType[];
};

const ReviewsList = ({ reviews }: ReviewsListType) => {
  return (
    <section className="reviews-list">
      {reviews.map((review, index) => (
        <div key={index} className="review-item glasscard animation">
          <div className="review__avatar">
            <img src={review.avatar} alt="avatar" />
          </div>

          <div className="review__content">
            <h3>{review.name}</h3>5 Rateings
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReviewsList;
