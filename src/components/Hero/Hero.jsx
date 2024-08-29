
import styles from './Hero.module.css';

import atron1 from "../../assets/atron1.png";
import fondo from "../../assets/fondo.jpg"
import spacex from "../../assets/spacex.jpg"
import TypingEffectElement from '@github/typing-effect-element';



const Hero = () => {
  
   
  return (
    <section className={styles.container} style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 85%, rgba(0, 0, 0, 1) 100%),linear-gradient(to top, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 90%), radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 80%), 
                         url(${spacex})`}}>
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
      
        <p className={styles.description}>Desarrollador web Full stack con habilidades en producción de contenidos multiplataforma y comunicación efectiva👨‍💻</p>
      </div>

      <div className={styles.contImage}>
        <img src={atron1} alt='Hero image of me' className={styles.heroImg} />
        <a href="mailto:francotomassich@gmail.com" className={styles.contactBtn}>Send E-Mail</a>
      </div>


    </section>
  )
}

export default Hero