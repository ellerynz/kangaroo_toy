import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ReviewList from './ReviewList';


class App extends React.Component {

  getChildContext() {
    return { store: this.props.store };
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { reviews } = this.props.store.getState();
    return(
      <ReviewList reviews={reviews} />
    );
  }
}

App.PropTypes = {
  store: PropTypes.object.isRequired
}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App
