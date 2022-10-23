import React, { useState } from 'react';
import Character from '../character/character';
import styles from './characters.module.css';
import * as gLib from '../genshin_library';
const GCharacters = ({game}) => {
  const male = gLib.gender[0];
  const female = gLib.gender[1];
  const [charState, setCharState] = useState([true, true]);
  const handleCharList = (e) => {
    e.preventDefault();
    const ClickedBtn = e.target.value;
    switch(ClickedBtn){
      case "male": 
        setCharState([true, false]);
        break;
      case "female":
        setCharState([false, true]);
        break;
      default: setCharState([true, true, true]);
    }
  }
  return (
    <>
    <span className={styles.classify}>Classify: </span>
    {gLib.genderBtn.map(gender => (<input
      key={gender}
      className={styles.button}
      onClick={handleCharList}
      type="button"
      value={gender}/>))}
    <div className={styles.charPadding}>
      {charState[0] && <span>
        {male.map(character => 
          (<Character
            game={game}
            char={character}
            key={character}/>
          ))}
      </span>}
      {charState[1] && <span>
        {female.map(character => 
          (<Character
            game={game}
            char={character}
            key={character}/>
          ))}
      </span>}
    </div>
    </>
  );
};

export default GCharacters;