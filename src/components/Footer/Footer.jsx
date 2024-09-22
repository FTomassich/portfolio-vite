import React from 'react';
import styles from '../Footer/Footer.module.css';
import gitt from "../../assets/gitt.png"
import sobre from "../../assets/sobre.png";
import linkedin from "../../assets/linkedin.png";
import footer from "../../assets/footer.jpg";



const Footer = () => {
  return (
    <section className={styles.section}>
        
        <div className={styles.group}>
        
          
          <a href="https://www.linkedin.com/in/franco-tomassich-227446271/">
            <img className={styles.linkedinBtn} src={linkedin} alt="" />Linkedin
          </a>
          <a href="https://github.com/FTomassich">
            <img className={styles.githubBtn} src={gitt} alt="" />GitHub
          </a>
          <a href="mailto:francotomassich@gmail.com" 
        >
            <img className={styles.contactBtn} src={sobre} alt="" />Mail
          </a>
        </div>
        <img className={styles.footer} src={footer} alt="" />
        
    </section>
    
  )
}

export default Footer
