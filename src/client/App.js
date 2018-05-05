import React from 'react';
import {hot} from 'react-hot-loader';

import Counter from './components/counter/counter.jsx';
import Form from './components/form/form.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        Hello World?
        <Counter />
      </div>
    );
  }
}

export default hot(module)(App);
