import React from 'react';
import styles from './character.module.css';
const Character = ({setGChars, setPChars, char, game}) => {
  let pChars = [];
  let gChars = [];
  const handleSelect = (e) => {
    //e.preventDefault();
    console.log(e.target.alt);
    const selectedChar = e.target.alt;
    if(game === "priconne"){
      setPChars([...pChars, selectedChar]);
    }
    else if(game === "genshin"){
      setGChars([...gChars, selectedChar]);
    }
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