import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.img}>
      <Link to="/genshin">
        <img className={styles.genshin} src="image/link_img/genshin.png" alt="genshin"/>
      </Link>
      <Link to="/priconne">
        <img className={styles.priconne} src="image/link_img/priconne.png" alt="priconne"/>
      </Link>
    </div>
  )
};

export default Home;