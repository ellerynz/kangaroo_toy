import React from 'react';
import PropTypes from 'prop-types';

const Star = ({selected=false, onClick=f=>f}) => {
  return (
    <span onClick={onClick}>{selected ? '★' : '☆'}</span>
  )
}

Star.PropTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

export default Star
