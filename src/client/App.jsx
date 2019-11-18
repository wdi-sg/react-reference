import React from 'react';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <div>
        <Form />
        Welcome.
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default App;
