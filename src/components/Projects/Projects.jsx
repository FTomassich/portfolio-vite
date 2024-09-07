import React from 'react';
import styles from '../Projects/Projects.module.css';
import fondoxx from "../../assets/fondoxx.jpg";
import dogggg from '../../assets/dogggg.png';
import go from '../../assets/go.png';


const Projects = () => {
  return (
    <section className={styles.section} >

      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.sub}>Find Dogs App</h1>
          <div className={styles.img} style={{
            backgroundImage: `url(${dogggg})
        `  }}></div>
        </div>

        <div className={styles.item}>
          <h1 className={styles.sub}>Innovatech | e-commerce</h1>
          <img src={go} alt="" className={styles.img}/>
        </div>
        <div className={styles.item}>
          3        </div>
        <div className={styles.item}>
          4
        </div>

      </div>

    </section >
  )
}

export default Projects