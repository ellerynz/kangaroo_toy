import React from 'react';
import PropTypes from 'prop-types';
import { addReview } from '../actions';

const AddReviewForm = (props, { store }) => {
  let _name, _rating;

  const submit = e => {
    e.preventDefault();
    store.dispatch(addReview(_name.value, _rating.value));
    _name.value = '';
    _rating.value = '';
    _name.focus();
  }

  return (
    <form onSubmit={submit}>
      <input
        ref={input => _name = input}
        type="text"
        placeholder="Name"
        required
      />
      <input
        ref={input => _rating = input}
        type="number"
        placeholder="Rating"
        required
      />
      <input type="submit" />
    </form>
  );

}

AddReviewForm.contextTypes = {
  store: PropTypes.object.isRequired
}

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func
}

export default AddReviewForm
