import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../../service/firebase';
import styles from "./home.module.css";

const Home = () => {
  const [user, setUser] = useState();
  const handleLogin = () => {
    login().then(setUser)
  }
  const handleLogout = () => {
    logout().then(setUser)
  }
  useEffect(() => {
    onUserStateChange(user => {
      console.log(user);
      setUser(user);
    })
  }, []);

  return (
    <>
      <div className={styles.img}>
        <Link to="/genshin">
          <img className={styles.genshin} src="image/link_img/genshin.png" alt="genshin"/>
        </Link>
        {!user && <button className={styles.sign} onClick={handleLogin}>Login with Google</button>}
        {user && <button className={styles.sign} onClick={handleLogout}>Logout</button>}
        <Link to="/priconne">
          <img className={styles.priconne} src="image/link_img/priconne.png" alt="priconne"/>
        </Link>
      </div>
     </>
  )
};

export default Home;