import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const ReviewDisplay = ({name, rating, onRate, onRemove}) => {
  return (
    <li>
      <hr />
      <p>{name}</p>
      <StarRating
        starsSelected={rating}
        onRate={onRate}
      />
      <button onClick={onRemove}>Delete</button>
    </li>
  )
}

ReviewDisplay.defaultProps = {
  name: 'Blank',
  rating: 0
}

ReviewDisplay.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  onRemove: PropTypes.func
}

export default ReviewDisplay
