import React from 'react';
import PropTypes from 'prop-types';

const AddReviewForm = ({ onSubmit }) => {
  let name;
  let rating;

  const submit = (e) => {
    e.preventDefault();
    onSubmit(name.value, rating.value);
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

AddReviewForm.defaultProps = {
  onSubmit: f => f,
};

AddReviewForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddReviewForm;
