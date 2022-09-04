import React, { useState } from 'react';
import Character from '../character/character';
import styles from './characters.module.css';
import * as pLib from '../priconne_library';
const PCharacters = ({game}) => {
  const star1 = pLib.characters[0];
  const star2 = pLib.characters[1];
  const star3 = pLib.characters[2];
  const [charState, setCharState] = useState([true, true, true]);
  const handleCharList = (e) => {
    e.preventDefault();
    const ClickedBtn = e.target.value;
    switch(ClickedBtn){
      case "★1": 
        setCharState([true, false, false]);
        break;
      case "★2":
        setCharState([false, true, false]);
        break;
      case "★3":
        setCharState([false, false, true]);
        break;
      default: setCharState([true, true, true]);
    }
  }
  return (
    <>
    <span>분류: </span>
    {pLib.starsBtn.map(star => (<input
      key={star}
      className={styles.button}
      onClick={handleCharList}
      type="button"
      value={star}/>))}
    <div className={styles.charPadding}>
      {charState[0] && <span>
        {star1.map(character => (<Character game={game} char={character} key={character}/>))}
      </span>}
      {charState[1] && <span>
        {star2.map(character => (<Character game={game} char={character} key={character}/>))}
      </span>}
      {charState[2] && <span>
        {star3.map(character => (<Character game={game} char={character} key={character}/>))}
      </span>}
    </div>
    </>
  );
};

export default PCharacters;