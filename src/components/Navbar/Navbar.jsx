import React, {useState} from 'react'
import styles from './Navbar.module.css';

import menuIcon from '../../assets/menuIcon.png';
import menuClose from '../../assets/menuClose.png';
const Navbar = () => {
const [menuOpen, setMenuOpen]=useState(false)
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={
          menuOpen
        ? menuClose
         : menuIcon
        } 
          
          alt="menu-button"
          onClick={()=> setMenuOpen(!menuOpen)}
          />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={()=> setMenuOpen(false)}>
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