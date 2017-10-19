import { ADD_REVIEW, RATE_REVIEW, REMOVE_REVIEW } from '../constants';

export const review = (state = {}, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        id: action.id,
        name: action.name,
        rating: action.rating,
      };
    case RATE_REVIEW:
      return (
        state.id === action.id ? { ...state, rating: action.rating } : state
      );
    default:
      return state;
  }
};

export const reviews = (state = [], action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return [...state, review({}, action)];
    case RATE_REVIEW:
      return state.map(r => review(r, action));
    case REMOVE_REVIEW:
      return state.filter(r => r.id !== action.id);
    default:
      return state;
  }
};
