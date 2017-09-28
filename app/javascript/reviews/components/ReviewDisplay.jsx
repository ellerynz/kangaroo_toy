import React from 'react';

class ReviewDisplay extends React.Component {

  constructor () {
    super();
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.rating}</p>
      </div>
    );
  }

}

ReviewDisplay.defaultProps = {
  name: 'Blank',
  rating: 0
}

export default ReviewDisplay
