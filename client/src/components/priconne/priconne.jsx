import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Selecting from '../selecting/selecting';
import Selected from '../selected/selected';
import styles from './priconne.module.css';
const Priconne = (props) => {
  return (
    <section className={styles.main}>
      <Header title={"Princess Connect Re:dive"}/>
      <div className={styles.container}>
        <Selecting/>
        <Selected/>
      </div>
      <Footer/>
    </section>
  )
};

export default Priconne;