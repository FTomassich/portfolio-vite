
import styles from './Hero.module.css';

import atron from "../../assets/atron.png";



const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Franco Tomassich</h1>
        <p className={styles.description}>Full stack developer with experience in HTML, CSS, React, Redux, Express, Sequelize, PostgreSQL, 🚀</p>
        <a href="mailto:francotomassich@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={atron} alt='Hero image of me' className={styles.heroImg}/>
        
        
     
        <div className={styles.topBlur}/>
        <div className={styles.bottonBlur}/>
   
    </section>
  )
}

export default Hero