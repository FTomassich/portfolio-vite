
import styles from './Hero.module.css';
import me from '../../assets/me.jpg'

import React from 'react'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Franco</h1>
        <p className={styles.description}>I'm a full stack developer with experience in React, Node Js, Express, PostgreSQL🚀</p>
        <a href="mailto:francotomassich@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={me} alt='Hero image of me' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottonBlur}/>
   
    </section>
  )
}

export default Hero