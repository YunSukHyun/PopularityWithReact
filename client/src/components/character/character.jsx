import React from 'react';
import styles from './character.module.css';
const Character = ({char, game}) => {
  const handleSelect = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.imgBox}>
      <img
        src={`image\\${game}_img\\${char}.png`}
        className={styles.item}
        onClick={handleSelect}
        alt={`${char}`}/>
      <div className={styles.decBox}>{char}</div>
    </div>
  );
};

export default Character;