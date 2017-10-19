import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers/index';


const store = createStore(
  reducer,
  {
    reviews: [
      { id: 1, name: 'It was good', rating: 5 },
      { id: 2, name: 'Can\'t think of anything wrong', rating: 3 },
      { id: 3, name: 'Best thing ever', rating: 1 }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.querySelector('#reviews')
  )
}

store.subscribe(render);

document.addEventListener('DOMContentLoaded', () => {
  render();
});
