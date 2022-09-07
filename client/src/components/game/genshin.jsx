import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Selecting from '../selecting/selecting';
import styles from './game.module.css';

const Genshin = () => {
  return (
    <section className={styles.main}>
      <Header title={"Genshin Impact"}/>
        <div className={styles.container}>
          <Selecting game={"genshin"}/>
        </div>
      <Footer/>
    </section>
  )
};

export default Genshin;