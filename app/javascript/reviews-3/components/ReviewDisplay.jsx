import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import { rateReview, removeReview } from '../actions';

class ReviewDisplay extends React.Component {
  render() {
    const { id, name, rating } = this.props;
    const { store } = this.context;

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
    );
  }
}

ReviewDisplay.contextTypes = {
  store: PropTypes.object,
};

ReviewDisplay.defaultProps = {
  name: 'Blank',
  rating: 0,
};

ReviewDisplay.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
};

export default ReviewDisplay;
