import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Selecting from '../selecting/selecting';
import Selected from '../selected/selected';
import styles from './game.module.css';

const Genshin = (props) => {
  
  return (
    <section className={styles.main}>
    <Header title={"Genshin Impact"}/>
    <div className={styles.container}>
      <Selecting game={"genshin"}/>
      <Selected/>
    </div>
    <Footer/>
  </section>
  )
};

export default Genshin;