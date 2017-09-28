import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ReviewList from './ReviewList'


const App = (props) => (
  <Router>
    <div>
      <Route
        path='/'
        component={ReviewList}
      />
    </div>
  </Router>
)

export default App
