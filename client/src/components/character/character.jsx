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
      const pLen = pCharSelected.length;
      if(pLen >= 6){
        alert("6개이상 선택할 수 없음\nCan't select more than 6");
        return;
      }
      for(let i = 0; i < pLen; i++){
        if(pCharSelected[i] === selectedChar){
          alert("중복 선택 불가\nCan't select same character twice");
          return;
        }
      }
      dispatch(pSelect(selectedChar));
    }
    else if(game === 'genshin'){
      const gLen = gCharSelected.length;
      if(gLen >= 3){
        alert("3개이상 선택할 수 없음\nCan't select more than 3");
        return;
      }
      for(let i = 0; i < gLen; i++){
        if(gCharSelected[i] === selectedChar){
          alert("중복 선택 불가\nCan't select same character twice");
          return;
        }
      }
      dispatch(gSelect(selectedChar));
    }
    console.log(pCharSelected);
    console.log(gCharSelected);
    // console.log(e.target.nextSibling.nextSibling);
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