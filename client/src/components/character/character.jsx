import React from 'react';
import styles from './character.module.css';
const Character = ({char}) => {
  const handleSelect = (e) => {

  }
  return (
    <div className={styles.imgBox}>
      <img
        src={`image\\priconne_img\\${char}.png`}
        className={styles.item}
        onClick={handleSelect}
        alt={`${char}`}/>
      <div className={styles.decBox}>{char}</div>
    </div>
  );
};

export default Character;