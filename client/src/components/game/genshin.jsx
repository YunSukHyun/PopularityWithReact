import React from 'react';
import Selected from '../selected/selected';
import Footer from '../footer/footer';
import Header from '../header/header';
import Selecting from '../selecting/selecting';
import styles from './game.module.css';
import { DarkModeProvider } from '../../context/darkModeContext';

const Genshin = () => {
  return (
    <DarkModeProvider>
    <section className={styles.main}>
      <Header title={"Genshin Impact"}/>
        <div
          className={styles.gContainer}>
          <Selecting game={"genshin"}/>
          <Selected game={"genshin"}/>
        </div>
      <Footer/>
    </section>
    </DarkModeProvider>
  )
};

export default Genshin;