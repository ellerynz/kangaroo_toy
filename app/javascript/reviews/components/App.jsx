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

App.PropTypes = {
  store: PropTypes.object.isRequired
}

export default App
