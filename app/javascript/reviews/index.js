import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  { reviews: [{ id: 3, name: 'woop', rating: 5 }] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.React = React;
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.querySelector('#reviews')
  );
});
