import React from 'react';
import styles from './star_select_button.module.css';
const StarSelectButton = (props) => {
  return (
    <div>
      <span>분류: </span>
      <input className={styles.button} type="button" value="All" />
      <input className={styles.button} type="button" value="★3" />
      <input className={styles.button} type="button" value="★2" />
      <input className={styles.button} type="button" value="★1" />
    </div>
  )
};

export default StarSelectButton;