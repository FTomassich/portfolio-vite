import React, {useState} from 'react'
import styles from './Navbar.module.css';

import menuIcon from '../../assets/menuIcon.png';
import menuClose from '../../assets/menuClose.png';
import cohete12 from '../../assets/cohete12.png';
const Navbar = () => {
const [menuOpen, setMenuOpen]=useState(false)
  return (
    <nav className={styles.navbar}>
      <img className={styles.cohete12} src={cohete12} alt="" />
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
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar