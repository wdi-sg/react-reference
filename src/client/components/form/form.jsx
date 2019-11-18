import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.monkey}</p>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;
