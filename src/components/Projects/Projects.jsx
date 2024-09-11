import React, {useEffect} from 'react';
import styles from '../Projects/Projects.module.css';
import fondoxx from "../../assets/fondoxx.jpg";

import go from '../../assets/go.png';
import dogsi from '../../assets/dogsi.png';


const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.4 // Trigger the callback when 30% of the element is visible
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const items = document.querySelectorAll(`.${styles.item}`);

    items.forEach(item => {
      observer.observe(item);
    });

    return () => {
      items.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>
        
        <div className={styles.item}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <h1 className={styles.sub}>Find Dogs App</h1>
              <img src={dogsi} className={styles.imgDogs} alt="Find Dogs App" />
            </div>
            <div className={styles.back}>
              <p className={styles.description}>An app to find dogs by breed with additional details like temperament, origin, and more.</p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <h1 className={styles.sub}>Innovatech | e-commerce</h1>
              <img src={go} alt="Innovatech e-commerce" className={styles.img}/>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>An e-commerce platform for tech products, providing a seamless shopping experience.</p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <h1 className={styles.sub}>Innovatech | e-commerce</h1>
              <img src={go} alt="Innovatech e-commerce" className={styles.img}/>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>An e-commerce platform for tech products, providing a seamless shopping experience.</p>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <h1 className={styles.sub}>Innovatech | e-commerce</h1>
              <img src={go} alt="Innovatech e-commerce" className={styles.img}/>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>An e-commerce platform for tech products, providing a seamless shopping experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



export default Projects