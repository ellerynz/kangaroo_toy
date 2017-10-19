import React from 'react';
import PropTypes from 'prop-types';
import ReviewDisplay from './ReviewDisplay';
import { rateReview, removeReview } from '../actions';

const ReviewList = ({ store }) => {
  const { reviews } = store.getState();

  return (
    <ul>
      {
        reviews.map(review =>
          <ReviewDisplay
            key={review.id}
            id={review.id}
            name={review.name}
            rating={review.rating}
            onRate={rating => store.dispatch(rateReview(review.id, rating))}
            onRemove={() => store.dispatch(removeReview(review.id))}
          />
        )
      }
      <hr />
    </ul>
  );
};

ReviewList.PropTypes = {
  store: PropTypes.object,
};

export default ReviewList;
