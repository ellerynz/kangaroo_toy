import { ADD_REVIEW, RATE_REVIEW, REMOVE_REVIEW } from './constants';
import { v4 } from 'uuid';

export const addReview = (name, rating) => ({
  type: ADD_REVIEW,
  id: v4(),
  name,
  rating: parseInt(rating, 10)
});

export const rateReview = (id, rating) => ({
  type: RATE_REVIEW,
  id,
  rating
});

export const removeReview = (id) => ({
  type: REMOVE_REVIEW,
  id
});
