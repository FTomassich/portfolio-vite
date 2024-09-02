import React from 'react';
import styles from '../Projects/Projects.module.css';
import space2020 from "../../assets/space2020.jpg"


const Projects = () => {
  return (
    <section className={styles.section} style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 90%),linear-gradient(to top, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 90%), radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 80%), 
                          url(${space2020})
        `  }}>
        <h1>Projects</h1>

    </section>
  )
}

export default Projects