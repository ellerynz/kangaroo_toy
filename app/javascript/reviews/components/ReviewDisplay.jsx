import React from 'react';
import PropTypes from 'prop-types';

const ReviewDisplay = ({name, rating, onRemove=f=>f}) => {
  return (
    <li>
      <hr />
      <p>{name}</p>
      <p>{rating}</p>
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
