
import styles from './Hero.module.css';
import gitt from "../../assets/gitt.png"
import ft from "../../assets/ft.png";
import mail from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";


const Hero = () => {

  return (
    
    <section id="home" className={styles.container} >
      
      <div className={styles.content}>
       <div>
        <p className={styles.name}>Franco</p>
       <p className={styles.name2}>Tomassich</p>
       </div>
        <p className={styles.description}>Desarrollador web Full stack con background en producción de contenidos</p>
      </div>

      <div className={styles.contImage}>
        <div className={styles.box}>
        <img src={ft} alt='Hero image of me' className={styles.heroImg} />
        </div>
<p className={styles.connect}>💡¿Conectamos ideas? ¡Estoy a solo un click de distancia!</p>
        
        <div className={styles.group}>
          <a href="https://github.com/FTomassich">
            <img className={styles.githubBtn} src={gitt} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/franco-tomassich-227446271/">
            <img className={styles.linkedinBtn} src={linkedin} alt="" />
          </a>
          <a href="mailto:francotomassich@gmail.com" >
            <img className={styles.contactBtn} src={mail} alt="" />
          </a>
        </div>
      </div>


    </section>
  )
}

export default Hero