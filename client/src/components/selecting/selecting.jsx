import React from 'react';
import Characters from '../characters/characters';
import StarSelectButton from '../star_select_button/star_select_button';
import styles from './selecting.module.css';
const Selecting = (props) => {
  
  return (
    <section className={styles.characters}>
      <h2 className={styles.title}>Char</h2>
      <StarSelectButton/>    
      <Characters/>
    </section>
  )
};
export default Selecting;