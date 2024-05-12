
import styles from './Hero.module.css';

import React from 'react'

const Hero = () => {
  return (
    <section>
        <div><h1>Hi, I'm Franco</h1>
        <p>I'm a full stack developer with experience in React, Node Js, Express, PostgreSQL</p>
        <a href="mailto:francotomassich@gmail.com">Contact me</a>
        </div>
        <img src={getImageUrl}/>
    </section>
  )
}

export default Hero