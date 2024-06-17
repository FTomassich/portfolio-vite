
import styles from './Hero.module.css';

import atron from "../../assets/atron.png";
import fondo from "../../assets/fondo.jpg"



const Hero = () => {
  return (
    <section className={styles.container} style={{ backgroundImage: `url(${fondo})` }}>
 <div className={styles.content}>
        <h1 className={styles.title}>Franco Tomassich</h1>
        <p className={styles.description}>Full stack developer with experience in HTML, CSS, React, Redux, Express, Sequelize, PostgreSQL, 🚀</p>
      </div>
      
      <div className={styles.contImage}>
        <img src={atron} alt='Hero image of me' className={styles.heroImg} />
        <a href="mailto:francotomassich@gmail.com" className={styles.contactBtn}>Contact me</a>
      </div>
     
      
    </section>
  )
}

export default Hero