import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const ReviewDisplay = ({name, rating, onRemove=f=>f}) => {
  return (
    <li>
      <hr />
      <p>{name}</p>
      <StarRating starsSelected={rating} />
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
  onRemove: PropTypes.func
}

export default ReviewDisplay
