import React, { useEffect } from 'react';
import styles from '../Projects/Projects.module.css';

import gitt from "../../assets/gitt.png"
import go from '../../assets/go.png';
import dogsi from '../../assets/dogsi.png';
import planet from '../../assets/planet.png';
import dog from '../../assets/dog.png';
import cart from '../../assets/cart.png';


const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
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
    <section id="projects" className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <div className={styles.group2}><img className={styles.btn} src={dog} alt="" /><h1 className={styles.sub}>Find Dogs App</h1></div>
              
              
              <img src={dogsi} className={styles.imgDogs} alt="Find Dogs App" />
            </div>
            <div className={styles.back}>
              <p className={styles.description}>Una app en la que podrás buscar perros por raza, ordenarlos y filtrarlos según características adicionales como temperamento, peso y estatura. Además podrás crear nuevos registros en la base de datos con el formulario controlado. Visítala y conoce a tu próximo amigo de cuatro patas. Tecnologías implicadas en el desarrollo: React, Redux, PostgreSQL, Express js, Sequelize.</p>
              <a href="https://github.com/FTomassich/PI-Dogs"><div className={styles.group}><img className={styles.btn} src={gitt} alt="" />
                <p>GITHUB</p>
              </div></a>
              <a href="https://pi-dogs-sage-three.vercel.app/"><div className={styles.group}><img className={styles.btn} src={planet} alt="" /><p>DEPLOY</p></div></a>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <div className={styles.group2}><img className={styles.btn} src={cart} alt="" /><h1 className={styles.sub}>Innova-tech</h1></div>
              <img src={go} alt="Innovatech e-commerce" className={styles.img} />
            </div>
            <div className={styles.back}>
              <p className={styles.description}>Innova-Tech es una moderna plataforma e-commerce de productos tecnológicos, que ofrece a sus clientes una experiencia de compra agradable, fluida, eficiente y segura. Algunas tecnologías desplegadas en su desarrollo fueron: React, Redux, Cloudinary, PostgreSQL, Express, Sequelize, JsonWebToken, 0auth, Mercadopago.</p>
              <a href="https://github.com/Vrmoya/innovatech-front"><div className={styles.group}><img className={styles.btn} src={gitt} alt="" />
                <p>GITHUB</p>
              </div></a>
              <a href="https://innovatechok.vercel.app/"><div className={styles.group}><img className={styles.btn} src={planet} alt="" /><p>DEPLOY</p></div></a>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <h1 className={styles.sub}>Innovatech | e-commerce</h1>
              <img src={go} alt="Innovatech e-commerce" className={styles.img} />
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
              <img src={go} alt="Innovatech e-commerce" className={styles.img} />
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