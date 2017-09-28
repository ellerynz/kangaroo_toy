import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({starsSelected=0, totalStars=5}) => {
  return (
    <div className="rating">
      {[...Array(totalStars)].map((n, i) =>
        <Star
          key={i}
          selected={i < starsSelected}
        />
      )}
    </div>
  )
}

StarRating.PropTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number
}

export default StarRating
