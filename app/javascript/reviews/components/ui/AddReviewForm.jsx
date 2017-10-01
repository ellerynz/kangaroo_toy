import React from 'react';
import PropTypes from 'prop-types';

const AddReviewForm = ({ onSubmit=f=>f }) => {
  let _name, _rating;

  const submit = e => {
    e.preventDefault();
    onSubmit(_name.value, _rating.value);
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

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func
}

export default AddReviewForm
