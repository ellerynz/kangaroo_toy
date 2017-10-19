import React from 'react';
import PropTypes from 'prop-types';
import ReviewDisplay from './ReviewDisplay';

const ReviewList = ({ reviews = [], onRate = f => f, onRemove = f => f }) => (
  <ul>
    {
      reviews.map(review =>
        <ReviewDisplay
          key={review.id}
          id={review.id}
          name={review.name}
          rating={review.rating}
          onRate={rating => onRate(review.id, rating)}
          onRemove={() => onRemove(review.id)}
        />)
      }
    <hr />
  </ul>
);

ReviewList.defaultProps = {
  reviews: [],
  onRate: f => f,
  onRemove: f => f,
};

ReviewList.PropTypes = {
  reviews: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
};

export default ReviewList;
