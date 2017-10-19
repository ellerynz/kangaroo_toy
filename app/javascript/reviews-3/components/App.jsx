import React from 'react';
import PropTypes from 'prop-types';
import AddReviewForm from './AddReviewForm';
import ReviewList from './ReviewList';

class App extends React.Component {
  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  componentWillMount() {
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    const { reviews } = this.props.store.getState();

    return (
      <div className="app">
        <AddReviewForm />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}


App.propTypes = {
  store: PropTypes.object.isRequired,
};

App.childContextTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
