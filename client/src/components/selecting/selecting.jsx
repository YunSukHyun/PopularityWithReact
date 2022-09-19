import React from 'react';
import PCharacters from '../characters/p_characters';
import styles from './selecting.module.css';
import GCharacters from '../characters/g_characters';
import { useDispatch, useSelector } from 'react-redux';
import Character from '../character/character';
import { pReset } from '../character/priconneSlice';
import { gReset } from '../character/genshinSlice';

const Selecting = ({game}) => {
  const pCharSelected = useSelector(state => state.priconne.pCharSelected);
  const gCharSelected = useSelector(state => state.genshin.gCharSelected);
  const dispatch = useDispatch();
  const whatGame = g => {
    if(g === "priconne")
      return <PCharacters game={g}/>
    else if(g === "genshin")
      return <GCharacters game={g}/>
  }
  const visible = (g) => {
    if(g === "genshin")
      return '';
    else{
      return "3(score+8)";
    }
  }
  const showSelected = (g, rank) => {
    if(g === "priconne"){
      const pLen = pCharSelected.length;
      if(pLen === 0) return;
      switch(rank){
        case 1:
          return <Character game={g} char={pCharSelected[0]}/>
        case 2:
          return <>
          {pLen >= 2 ? <Character game={g} char={pCharSelected[1]}/> : ""}
          {pLen >= 3 ? <Character game={g} char={pCharSelected[2]}/> : ""}
          </>
        case 3:
          return <>
          {pLen >= 4 ? <Character game={g} char={pCharSelected[3]}/> : ""}
          {pLen >= 5 ? <Character game={g} char={pCharSelected[4]}/> : ""}
          {pLen >= 6 ? <Character game={g} char={pCharSelected[5]}/> : ""}
          </>
        default:
          break;
      }
    }
    else if(g === "genshin"){
      const gLen = gCharSelected.length;
      if(gLen === 0) return;
      switch(rank){
        case 1:
          return <Character game={g} char={gCharSelected[0]}/>
        case 2:
          return <>
          {gLen >= 2 ? <Character game={g} char={gCharSelected[1]}/> : ""}
          {gLen >= 3 ? <Character game={g} char={gCharSelected[2]}/> : ""}
          </>
        default:
          break;
      }
    }
  }
  const showChars = () => {
    console.log(pCharSelected);
    console.log(gCharSelected);
  }
  const reset = () => {
    dispatch(pReset());
    dispatch(gReset());
  }
  return (
    <>
      <section className={styles.unselected}>
        <h2 className={styles.beforeSelect}>UnSelected</h2>    
        {whatGame(game)}
      </section>
      <section className={styles.selected}>
        <h2 className={styles.afterSelect}>Selected</h2>
        <div className={styles.toServer}>
          <div className={styles.score10}>
            1(score+10)
            {showSelected(game, 1)}
          </div>
          <div className={styles.score9}>
            2(score+9)
            {showSelected(game, 2)}
          </div>
          <div className={styles.score8}>
            {visible(game)}
            {showSelected(game, 3)}
          </div>
        </div>
        <button onClick={showChars}>BTN</button>
        <button onClick={reset}>Reset</button>
        <div className={styles.forFun}>

        </div>
      </section>
    </>
  )
};
export default Selecting;
