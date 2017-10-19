import React from 'react';
import PropTypes from 'prop-types';
import { addReview } from '../actions';

const AddReviewForm = ({ store }) => {
  let name;
  let rating;

  const submit = (e) => {
    e.preventDefault();
    store.dispatch(addReview(name.value, rating.value));
    name.value = '';
    rating.value = '';
    name.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={input => name = input}
        type="text"
        placeholder="Name"
        required
      />
      <input
        ref={input => rating = input}
        type="number"
        placeholder="Rating"
        required
      />
      <input type="submit" />
    </form>
  );
};

AddReviewForm.propTypes = {
  store: PropTypes.object,
};

export default AddReviewForm;
