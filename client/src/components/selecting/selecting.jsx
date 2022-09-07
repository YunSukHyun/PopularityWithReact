import React, { useState } from 'react';
import PCharacters from '../characters/p_characters';
import styles from './selecting.module.css';
import GCharaters from '../characters/g_charaters';

const Selecting = ({game}) => {
  const [pChars, setPChars] = useState([]);
  const [gChars, setGChars] = useState([]);
  const whatGame = (g) => {
    if(g === "priconne")
      return <PCharacters setPChars={setPChars} game={g}/>
    else if(g === "genshin")
      return <GCharaters setGChars={setGChars} game={g}/>
  }
  const visible = (g) => {
    if(g === "genshin")
      return '';
    else{
      return "3(8점)";
    }
  }
  const showChars = () => {
    console.log(pChars);
    console.log(gChars);
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
          <div className={styles.score10}>1(10점)</div>
          <div className={styles.score9}>2(9점)</div>
          <div className={styles.score8}>{visible(game)}</div>
        </div>
        <button onClick={showChars}>BTN</button>
        <div className={styles.forFun}>

        </div>
      </section>
    </>
  )
};
export default Selecting;
