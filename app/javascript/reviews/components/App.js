import React from 'react';
import PropTypes from 'prop-types';
import { NewReview, Reviews } from './containers';


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
    return(
      <div className="app">
        <NewReview />
        <Reviews />
      </div>
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
