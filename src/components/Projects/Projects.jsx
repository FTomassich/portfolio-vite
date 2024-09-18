import React, { useState, useEffect } from 'react';
import styles from '../Projects/Projects.module.css';

import gitt from "../../assets/gitt.png";
import go from '../../assets/go.png';
import dogsi from '../../assets/dogsi.png';
import planet from '../../assets/planet.png';
import dog from '../../assets/dog.png';
import cart from '../../assets/cart.png';
import selectoras from '../../assets/selectoras.png'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

 

  return (
    <section id="projects" className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.container}>
        <div className={`${styles.item} ${activeIndex === 0 ? styles.active : ''}`}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <div className={styles.group2}>
                <img className={styles.btn} src={dog} alt="" />
                <h1 className={styles.sub}>Find Dogs App</h1>
          
              </div>
              <span className={styles.txt}>WEB DEVELOPMENT</span>
              <img src={dogsi} className={styles.imgDogs} alt="Find Dogs App" />
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(0)}>
                Ver más
              </button>
            </div>
            <div className={styles.back}>
            <p className={styles.description}>Una app en la que podrás buscar perros por raza, ordenarlos y filtrarlos según características adicionales como temperamento, peso y estatura. Además podrás crear nuevos registros en la base de datos con el formulario controlado. Visítala y conoce a tu próximo amigo de cuatro patas. Tecnologías implicadas en el desarrollo: React, Redux, PostgreSQL, Express js, Sequelize.</p>



              <div className={styles.flex}>
              <a href="https://github.com/FTomassich/PI-Dogs">
                <div className={styles.group}>
                  <img className={styles.btn} src={gitt} alt="" />
                  <p>GITHUB</p>
                </div>
              </a>
             
              <a href="https://pi-dogs-sage-three.vercel.app/">
                <div className={styles.group}>
                  <img className={styles.btn} src={planet} alt="" />
                  <p>DEPLOY</p>
                </div>
              </a>
              </div>
             
             
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(null)}>
                Ver menos
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.item} ${activeIndex === 1 ? styles.active : ''}`}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <div className={styles.group2}>
                <img className={styles.btn} src={cart} alt="" />
                <h1 className={styles.sub}>Innova-tech</h1>
              </div>
              <span className={styles.txt}>WEB DEVELOPMENT</span>
              <img src={go} alt="Innova-tech e-commerce" className={styles.img} />
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(1)}>
                Ver más
              </button>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>Innova-Tech es una moderna plataforma e-commerce de productos tecnológicos, que ofrece a sus clientes una experiencia de compra agradable, fluida, eficiente y segura. Algunas tecnologías desplegadas en su desarrollo fueron: React, Redux, Cloudinary, PostgreSQL, Express, Sequelize, JsonWebToken, 0auth, Mercadopago.</p>
              
              <div className={styles.flex}>
              <a href="https://github.com/Vrmoya/innovatech-front">
                <div className={styles.group}>
                  <img className={styles.btn} src={gitt} alt="" />
                  <p>GITHUB</p>
                </div>
              </a>
              <a href="https://innovatechok.vercel.app/">
                <div className={styles.group}>
                  <img className={styles.btn} src={planet} alt="" />
                  <p>DEPLOY</p>
                </div>
              </a>
              </div>
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(null)}>
                Ver menos
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.item} ${activeIndex === 2 ? styles.active : ''}`}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <div className={styles.group2}>
                <img className={styles.btn} src={cart} alt="" />
                <h1 className={styles.sub}>Repuestos Córdoba</h1>
              </div>
              <span className={styles.txt}>PROYECTO COMERCIAL</span>
              <img src={selectoras} alt="Innova-tech e-commerce" className={styles.imgSelec} />
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(2)}>
                Ver más
              </button>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>Pagina comercial de Facebook en Argentina. Venta de repuestos de automóviles de todo tipo. Si bien se trata de un proyecto en constante mejora, ya cuenta con un buen engagement, generado por sus más de tres mil amigos, posee más de tres mil setescientas publicaciones activas en marketplace y cientos de clientes satisfechos a lo largo y ancho de Argentina.</p>
              
              <div className={styles.flex}>
              <a href="">
                <div className={styles.groupx}>
                  <img className={styles.btn} src={planet} alt="" />
                  <p>LINK</p>
                </div>
              </a>
              
              </div>
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(null)}>
                Ver menos
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.item} ${activeIndex === 3 ? styles.active : ''}`}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <h1 className={styles.sub}>Project 4</h1>
              <img src={go} alt="Project 4" className={styles.img} />
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(3)}>
                See More
              </button>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>Description for project 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
