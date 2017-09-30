import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { rateReview, removeReview } from '../actions';

const ReviewDisplay = ({id, name, rating}, {store}) => {
  return (
    <li>
      <hr />
      <p>{name}</p>
      <StarRating
        starsSelected={rating}
        onRate={rating => store.dispatch(rateReview(id, rating))}
      />
      <button onClick={() => store.dispatch(removeReview(id))}>Delete</button>
    </li>
  )
}

ReviewDisplay.contextTypes = {
  store: PropTypes.object
}

ReviewDisplay.defaultProps = {
  name: 'Blank',
  rating: 0
}

ReviewDisplay.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func
}

export default ReviewDisplay
