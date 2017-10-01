import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddReviewForm from './ui/AddReviewForm';
import ReviewList from './ui/ReviewList';
import { addReview, rateReview, removeReview } from '../actions';

export const NewReview = connect(
  null,
  dispatch => ({
    onSubmit(name, rating) {
      dispatch(addReview(name, rating));
    }
  })
)(AddReviewForm);

export const Reviews = connect(
  state => ({
    reviews: state.reviews
  }),
  dispatch => ({
    onRate(id, rating) {
      dispatch(rateReview(id, rating));
    },
    onRemove(id) {
      dispatch(removeReview(id));
    }
  })
)(ReviewList);
