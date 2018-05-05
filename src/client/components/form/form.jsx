import React from 'react';

import styles from './style.scss';

class Form extends React.Component{

  render(){

    return (
      <div>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;
