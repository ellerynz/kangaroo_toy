import React from 'react';
import PropTypes from 'prop-types';
import AddReviewForm from './AddReviewForm';
import ReviewList from './ReviewList';

const App = ({ store }) => (
  <div className="app">
    <AddReviewForm store={store} />
    <ReviewList reviews={reviews} store={store} />
  </div>
);

export default App;
