
import styles from './Hero.module.css';
import gitt from "../../assets/gitt.png"
import atron1 from "../../assets/atron1.png";
import mail from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";
import TypingEffectElement from '@github/typing-effect-element';

const Hero = () => {

  return (
    <section className={styles.container} >
      <div className={styles.content}>
        <typing-effect
          data-character-delay="170"
          className={styles.title}
          data-lines='
    ["Franco","Tomassich"]
    '
        >
          <span data-target="typing-effect.content"  ></span>
          <span data-target="typing-effect.cursor"></span>

        </typing-effect>

        <p className={styles.description}>Desarrollador web Full stack con background en producción de contenidos y comunicación efectiva👨‍💻</p>
      </div>

      <div className={styles.contImage}>
        <img src={atron1} alt='Hero image of me' className={styles.heroImg} />

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