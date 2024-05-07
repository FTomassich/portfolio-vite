import React, {useState} from 'react'
import styles from './Navbar.module.css';

import menuIcon from '../../assets/menuIcon.png';

const Navbar = () => {

  

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuIcon} alt="menu-button"/>
        <ul className={styles.menuItems}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#about">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar