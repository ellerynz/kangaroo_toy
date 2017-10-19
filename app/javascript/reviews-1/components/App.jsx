import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import AddReviewForm from './AddReviewForm';
import ReviewList from './ReviewList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        { id: 1, name: 'It was good', rating: 5 },
        { id: 2, name: 'Can\'t think of anything wrong', rating: 3 },
        { id: 3, name: 'Best thing ever', rating: 1 }
      ]
    };
  }

  addReview(name, rating) {
    const reviews = [
      {
        id: v4(),
        name: name,
        rating: parseInt(rating, 10)
      },
      ...this.state.reviews
    ]
    this.setState({reviews});
  }


  removeReview(id) {
    const reviews = this.state.reviews.filter(review => review.id != id);
    this.setState({reviews});
  }


  rateReview(id, rating) {
    const reviews = this.state.reviews.map(review =>
      review.id === id ? {...review, rating} : review
    );
    this.setState({reviews});
  }

  render() {
    return(
      <div className="app">
        <AddReviewForm onSubmit={this.addReview.bind(this)} />
        <ReviewList
          reviews={this.state.reviews}
          onRemove={this.removeReview.bind(this)}
          onRate={this.rateReview.bind(this)}
        />
      </div>
    );
  }
}

export default App
