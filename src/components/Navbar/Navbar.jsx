import React, {useState} from 'react'
import styles from './Navbar.module.css';

import menuIcon from '../../assets/menuIcon.png';
import menuClose from '../../assets/menuClose.png';
import cohete13 from '../../assets/cohete13.png';
const Navbar = () => {
const [menuOpen, setMenuOpen]=useState(false)
  return (
    <nav className={styles.navbar}>
      <img className={styles.cohete13} src={cohete13} alt="" />
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
            <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Tech Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar