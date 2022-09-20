import React from 'react';
import PCharacters from '../characters/p_characters';
import styles from './selecting.module.css';
import GCharacters from '../characters/g_characters';


const Selecting = ({game}) => {

  const whatGame = () => {
    if(game === "priconne")
      return <PCharacters game={game}/>
    else if(game === "genshin")
      return <GCharacters game={game}/>
  }

  return (
    <section className={styles.unselected}>
      <h2 className={styles.beforeSelect}>UnSelected</h2>    
      {whatGame()}
    </section>
  )
};
export default Selecting;
