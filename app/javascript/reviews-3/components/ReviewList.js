import React from  'react';
import PropTypes from 'prop-types';
import ReviewDisplay from './ReviewDisplay';

const ReviewList = ({reviews=[]}) => {
  return (
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
  );
}

ReviewList.PropTypes = {
  reviews: PropTypes.array
}

export default ReviewList
