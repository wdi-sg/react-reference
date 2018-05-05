import React from 'react';

import PropTypes from 'prop-types';

import styles from './style.scss';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      banana: 'world'
    };
  }

  render() {
    return (
      <p className={styles.desc}>
        {this.props.message} : {this.state.banana} : hello 898
      </p>
    );
  }
}

Counter.propTypes = {
  message: PropTypes.string.isRequired
};

export default Counter;
