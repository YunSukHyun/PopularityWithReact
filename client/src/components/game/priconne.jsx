import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Selecting from '../selecting/selecting';
import styles from './game.module.css';

const Priconne = () => {
  return (
    <section className={styles.main}>
      <Header title={"Princess Connect Re:dive"}/>
        <div className={styles.container}>
          <Selecting game={"priconne"}/>
        </div>
      <Footer/>
    </section>
  )
};

export default Priconne;