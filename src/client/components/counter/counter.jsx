import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      banana: 'sneakers'
    };
  }

  componentDidMount() {
    fetch('/api/pokemon/1')
      .then((response) => response.json())
      .then((myJson) => {
        this.setState({pokemon: [myJson, ...this.state.pokemon]});
      });
  }

  render() {
    console.log(this.state.pokemon);
    return (
      <p className={styles.desc}>
        {this.props.message} : {this.state.banana}
      </p>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired
};

export default Counter;
