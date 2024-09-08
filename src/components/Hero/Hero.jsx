
import styles from './Hero.module.css';

import atron1 from "../../assets/atron1.png";
import mail from "../../assets/mail.png";
import TypingEffectElement from '@github/typing-effect-element';

const Hero = () => {
  
  return (
    <section className={styles.container} >
      <div className={styles.content}>
        <typing-effect
        data-character-delay="170"
        class="title" 
        
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
        <a href="mailto:francotomassich@gmail.com" >
          <img className={styles.contactBtn} src={mail} alt="" />
        </a>
        
        </div>
      </div>


    </section>
  )
}

export default Hero