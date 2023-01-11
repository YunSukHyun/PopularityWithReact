import React from 'react';
import styles from './selected.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pReset} from '../character/priconneSlice';
import { gReset} from '../character/genshinSlice';
import SelectedChar from '../selectedChar/selectedChar';
import { Link } from 'react-router-dom';
import Legend from '../legend/legend';


const Selected = ({game}) => {
  const pCharSelected = useSelector(state => state.priconne.pCharSelected);
  const gCharSelected = useSelector(state => state.genshin.gCharSelected);
  const dispatch = useDispatch();
  const visible = () => {
    if(game === "genshin")
      return '';
    else{
      return "";
    }
  }
  const showSelected = (rank) => {
    if(game === "priconne"){
      const pLen = pCharSelected.length;
      if(pLen === 0) return;
      switch(rank){
        case 1:
          return <SelectedChar game={game} char={pCharSelected[0]}/>
        case 2:
          return <>
          {pLen >= 2 ? <SelectedChar game={game} char={pCharSelected[1]}/> : ""}
          {pLen >= 3 ? <SelectedChar game={game} char={pCharSelected[2]}/> : ""}
          </>
        case 3:
          return <>
          {pLen >= 4 ? <SelectedChar game={game} char={pCharSelected[3]}/> : ""}
          {pLen >= 5 ? <SelectedChar game={game} char={pCharSelected[4]}/> : ""}
          {pLen >= 6 ? <SelectedChar game={game} char={pCharSelected[5]}/> : ""}
          </>
        default:
          break;
      }
    }
    else if(game === "genshin"){
      const gLen = gCharSelected.length;
      if(gLen === 0) return;
      switch(rank){
        case 1:
          return <SelectedChar game={game} char={gCharSelected[0]}/>
        case 2:
          return <>
          {gLen >= 2 ? <SelectedChar game={game} char={gCharSelected[1]}/> : ""}
          {gLen >= 3 ? <SelectedChar game={game} char={gCharSelected[2]}/> : ""}
          </>
        default:
          break;
      }
    }
  }

  const reset = () => {
    dispatch(pReset());
    dispatch(gReset());
  }

  return (
    <section className={styles.selected}>
      <h2 className={styles.afterSelect}>Selected</h2>
      <Link to='/' className={styles.home}>Home</Link>
      <button onClick={reset}>Reset</button>


      <div className={styles.toServer}>
        <div className={styles.score5}>
          {showSelected(1)}
        </div>
        <div className={styles.score3}>
          {showSelected(2)}
        </div>
        <div className={styles.score1}>
          {visible()}
          {showSelected(3)}
        </div>
      </div>
      <div className={styles.forFun}>
      </div>
      <Legend game={game}/>
      <button className={styles.submit}>submit</button>
    </section>
    
  )
};

export default Selected;
