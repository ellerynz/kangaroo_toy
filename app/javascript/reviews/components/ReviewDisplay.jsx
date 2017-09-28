import React from 'react';
import PropTypes from 'prop-types';

class ReviewDisplay extends React.Component {

  constructor () {
    super();
  }

  render() {
    return (
      <li>
        <hr />
        <p>{this.props.name}</p>
        <p>{this.props.rating}</p>
      </li>
    );
  }

}

ReviewDisplay.defaultProps = {
  name: 'Blank',
  rating: 0
}

ReviewDisplay.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number
}

export default ReviewDisplay
