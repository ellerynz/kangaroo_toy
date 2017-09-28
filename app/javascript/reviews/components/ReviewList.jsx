import React from  'react';
import { Link } from 'react-router-dom';
import ReviewDisplay from './ReviewDisplay';

class ReviewList extends React.Component {

  constructor() {
    super();
  }

  render() {
    const reviews = [
      { id: 1, name: 'foo', rating: 3 },
      { id: 2, name: 'bar', rating: 2 },
      { id: 3, name: 'baz', rating: 1 }
    ];

    return (
      <ul>
        {
          reviews.map(review =>
            <ReviewDisplay
              key={review.id}
              name={review.name}
              rating={review.rating}
            />
          )
        }
      </ul>
    );
  }

}

export default ReviewList
