import React from 'react';
import PropTypes from 'prop-types';
import AddReviewForm from './AddReviewForm';
import ReviewList from './ReviewList';

const reviews = [
  { id: 1, name: 'foo', rating: 5 },
  { id: 2, name: 'bar', rating: 3 },
  { id: 3, name: 'baz', rating: 1 }
];

const App = () => {
  return(
    <div className="app">
      <AddReviewForm />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App
