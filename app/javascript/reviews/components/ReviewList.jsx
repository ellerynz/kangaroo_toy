import React from  'react';
import { Link } from 'react-router-dom';
import ReviewDisplay from './ReviewDisplay';
import AddReviewForm from './AddReviewForm';

class ReviewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        { id: 1, name: 'foo', rating: 3 },
        { id: 2, name: 'bar', rating: 2 },
        { id: 3, name: 'baz', rating: 1 }
      ]
    };
  }

  addReview(name, rating) {
    const lastId = this.state.reviews.length;
    const reviews = [
      ...this.state.reviews,
      {
        id: lastId + 1,
        name: name,
        rating: parseInt(rating, 10)
      }
    ]
    this.setState({reviews});
  }

  removeReview(id) {
    const reviews = this.state.reviews.filter(review => review.id != id);
    this.setState({reviews});
  }

  render() {
    return (
      <div>
        <AddReviewForm onSubmit={this.addReview.bind(this)} />
        <ul>
          {
            this.state.reviews.map(review =>
              <ReviewDisplay
                key={review.id}
                id={review.id}
                name={review.name}
                rating={review.rating}
                onRemove={() => this.removeReview(review.id)}
              />
            )
          }
          <hr />
        </ul>
      </div>
    );
  }
}

export default ReviewList
