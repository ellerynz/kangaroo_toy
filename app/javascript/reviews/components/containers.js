import PropTypes from 'prop-types';
import AddReviewForm from './ui/AddReviewForm';
import ReviewList from './ui/ReviewList';
import { addReview, rateReview, removeReview } from '../actions';

export const NewReview = (props, { store }) => {
  return (
    <AddReviewForm onSubmit={(name, rating) => store.dispatch(addReview(name, rating))} />
  );
}

NewReview.contextTypes = {
  store: PropTypes.object.isRequired
}

export const Reviews = (props, { store }) => {
  const { reviews } = store.getState();
  return (
    <ReviewList
      reviews={reviews}
      onRate={(id, rating) => store.dispatch(rateReview(id, rating))}
      onRemove={id => store.dispatch(removeReview(id))}
    />
  );
}

Reviews.contextTypes = {
  store: PropTypes.object.isRequired
}
