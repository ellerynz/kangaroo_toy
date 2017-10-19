import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';


const store = createStore(
  reducer,
  {
    reviews: [
      { id: 1, name: 'foo', rating: 5 },
      { id: 2, name: 'bar', rating: 5 },
      { id: 3, name: 'baz', rating: 5 }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.querySelector('#reviews')
  )
});
