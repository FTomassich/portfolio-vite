
import styles from './Hero.module.css';
import me from '../../assets/me.jpg'

import React from 'react'

const Hero = () => {
  return (
    <section>
        <div><h1>Hi, I'm Franco</h1>
        <p>I'm a full stack developer with experience in React, Node Js, Express, PostgreSQL</p>
        <a href="mailto:francotomassich@gmail.com">Contact me</a>
        </div>
        <img src={me} alt='Hero image of me'/>
        <div className={styles.topBlur}/>
        <div className={styles.bottonBlur}/>
   
    </section>
  )
}

export default Hero