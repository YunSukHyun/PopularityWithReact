import React from 'react';
import PCharacters from '../characters/p_characters';
import styles from './selecting.module.css';
import GCharaters from '../characters/g_charaters';

const Selecting = ({game}) => {
  const whatGame = (g) => {
    if(g === "priconne")
      return <PCharacters game={g}/>
    else if(g === "genshin")
      return <GCharaters game={g}/>
  }
  return (
    <section className={styles.characters}>
      <h2 className={styles.title}>Character</h2>    
      {whatGame(game)}
    </section>
  )
};
export default Selecting;