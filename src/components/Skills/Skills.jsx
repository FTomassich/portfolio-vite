
import styles from '../Skills/Skills.module.css';
import React from 'react'
import react from "../../assets/react.png";
import postgresql from "../../assets/postgresql.png";
import css from "../../assets/css.png";
import redux from "../../assets/redux.png";
import github from "../../assets/github.png";

const Skills = () => {
  return (

    <section className={styles.section}>
      <div>
        <h1 className={styles.title}> Tech Skills</h1>
        </div>
        
          <ul className={styles.techList}>
            <li><img src={react} alt="" className={styles.icon}/></li>
            <li><img src={github} alt="" className={styles.icon} /></li>
            <li><img src={redux} alt="" className={styles.icon} /></li>
          </ul>
       
    </section>
    
  )
}

export default Skills