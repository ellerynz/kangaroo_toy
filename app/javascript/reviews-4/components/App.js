import React from 'react';
import PropTypes from 'prop-types';
import { NewReview, Reviews } from './containers';

const App = () => {
  return(
    <div className="app">
      <NewReview />
      <Reviews />
    </div>
  );
}

export default App
