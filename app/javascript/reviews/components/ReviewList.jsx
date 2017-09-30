import React from  'react';
import PropTypes from 'prop-types';
import ReviewDisplay from './ReviewDisplay';
import AddReviewForm from './AddReviewForm';

const ReviewList = ({ reviews=[] }) => {
  return (
    <div>
      <AddReviewForm />
      <ul>
        {
          reviews.map(review =>
            <ReviewDisplay
              key={review.id}
              id={review.id}
              name={review.name}
              rating={review.rating}
            />
          )
        }
        <hr />
      </ul>
    </div>
  );
}

ReviewList.PropTypes = {
  reviews: PropTypes.array
}

export default ReviewList
