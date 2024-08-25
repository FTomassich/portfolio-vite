
import styles from './Hero.module.css';

import atron from "../../assets/atron.png";
import fondo from "../../assets/fondo.jpg"
import spacex from "../../assets/spacex.jpg"



const Hero = () => {
  return (
    <section className={styles.container} style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 90%), url(${spacex})`}}>
      <div className={styles.content}>
        <h1 className={styles.title}>Franco Tomassich</h1>
        <p className={styles.description}>Desarrollador Full stack con experiencia en React, Redux, Express, Sequelize, PostgreSQL 🚀</p>
      </div>

      <div className={styles.contImage}>
        <img src={atron} alt='Hero image of me' className={styles.heroImg} />
        <a href="mailto:francotomassich@gmail.com" className={styles.contactBtn}>Contact me</a>
      </div>


    </section>
  )
}

export default Hero