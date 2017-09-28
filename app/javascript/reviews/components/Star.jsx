import React from 'react';
import PropTypes from 'prop-types';

const Star = ({selected=false}) => {
  return (
    <span>{selected ? '★' : '☆'}</span>
  )
}

Star.PropTypes = {
  selected: PropTypes.bool
}

export default Star
