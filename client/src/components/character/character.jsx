import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './character.module.css';
import { gSelect } from './genshinSlice';
import { pSelect } from './priconneSlice';

const Character = ({char, game}) => {
  const pCharSelected = useSelector(state => state.priconne.pCharSelected);
  const gCharSelected = useSelector(state => state.genshin.gCharSelected);
  const dispatch = useDispatch();
  const handleSelect = (e) => {
    console.log(e.target.alt);
    const selectedChar = e.target.alt;
    if(game === 'priconne'){
      dispatch(pSelect(selectedChar));
    }
    else if(game === 'genshin'){
      dispatch(gSelect(selectedChar));
    }
    console.log(pCharSelected);
    console.log(gCharSelected);
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