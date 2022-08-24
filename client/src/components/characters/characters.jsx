import React from 'react';
import Character from '../character/character';
import styles from './characters.module.css';
const Characters = (props) => {
  const star1 = ['람', '레이', '리마', '미사키', '미소기', '미오', '스즈메',
  '아오이', '아유미', '요리', '유이', '유카리', '카린', '캬루', '콧코로',
  '쿠루미', '페코린느', '히요리'];
  const star2 = ['나나카', '린', '마츠리', '마히루', '미미', '미사토', '미야코',
  '미츠키', '미후유', '스즈나', '시노부', '시오리', '아야네', '아카리', '에리코',
  '유키', '츠무기', '치카', '카오리', '쿠우카', '타마키'];
  const star3 = ['글레어', '네네카', '노조미', '니논', '라비리스타', '란파', '렘',
  '루나', '루카', '리노', '린(데레)', '마코토', '마호', '모니카', '무이미', '밤피',
  '사렌', '셰피', '시즈루', '아리사', '아키노', '안나', '앤', '에밀리아', '우즈키',
  '유니', '이노리', '이리야', '이오', '쥰', '지타', '치에루', '카스미', '카야', '쿄우카',
  '크리스티나', '크레짓타', '클로에', '토모', '하츠네', '호마레'];
  return (
    <div className={styles.charPadding}>
      <span className={styles.star1}>
        {star1.map(character => (<Character char={character}/>))}
      </span>
      <span className={styles.star2}>
        {star2.map(character => (<Character char={character}/>))}
      </span>
      <span className={styles.star3}>
        {star3.map(character => (<Character char={character}/>))}
      </span>
    </div>
  );
};

export default Characters;