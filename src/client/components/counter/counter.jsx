import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: 'sneakers',
    };
  }

  render() {
    return (
      <p>
        {this.props.message} : {this.state.banana}
      </p>
    );
  }
}

export default Counter;
