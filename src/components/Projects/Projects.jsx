import React, { useState, useEffect } from 'react';
import styles from '../Projects/Projects.module.css';

import gitt from "../../assets/gitt.png";
import go from '../../assets/go.png';
import person from '../../assets/person.svg';
import planet from '../../assets/planet.png';
import social from '../../assets/social.svg';
import cart from '../../assets/cart.png';
import edit from '../../assets/edit.png'
import proyecto from '../../assets/proyecto.png'

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

 

  return (
    <section id="projects" className={styles.section}>
      <h1 className={styles.title}>Proyectos</h1>
      <div className={styles.container}>
        <div className={`${styles.item} ${activeIndex === 0 ? styles.active : ''}`}>
          <div className={styles.innerItem}>
            <div className={styles.front}>
              <div className={styles.group2}>
                <img className={styles.btn} src={person} alt="" />
                <h1 className={styles.sub}>Quality App</h1>
          
              </div>
              <span className={styles.txt}>APP-GESTIÓN HUMANA</span>
              <img src={edit} className={`${styles.imgSelec} px-6 md:px-0`} alt="Find Dogs App" />
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(0)}>
                Ver más
              </button>
            </div>
            <div className={styles.back}>
            <p className={styles.description}>La APP de Gestión Humana de Quality es una herramienta administrativa funcional y responsiva, diseñada principalmente para iOS, que facilita la gestión, contratación y registro de empleados en empresas constructoras. Stack técnico utilizado: Node, Typescript, React Native, Redux Tool-Kit, Swagger, Postman</p>



              <div className={styles.flex}>
              
             
              <a href="https://drive.google.com/drive/folders/1aob1a3MMSyY6ZA33joAHBKs1QQkBjgLW?usp=drive_link">
                <div className={styles.group}>
                  <img className={styles.btn} src={planet} alt="" />
                  <p>Link </p>
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
              <span className={styles.txt}>E-COMMERCE</span>
              <img src={go} alt="Innova-tech e-commerce" className={styles.img} />
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(1)}>
                Ver más
              </button>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>Innova-Tech es una moderna plataforma e-commerce de productos tecnológicos, que ofrece a sus clientes una experiencia de compra agradable, fluida, eficiente y segura. Algunas tecnologías desplegadas en su desarrollo fueron: Node, React, Redux, Cloudinary, PostgreSQL, Express, Sequelize, JsonWebToken, 0auth, Mercadopago, Insomnia, Postman, Trello.</p>
              
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
                 <img className={styles.btn} src={social} alt="" />
                <h1 className={styles.sub}>O-Zone</h1>
              </div>
              <span className={styles.txt}>FORO INTERACTIVO</span>
              <img  src={proyecto}alt="Foro"  className={`${styles.imgSelec} px-4 md:px-0`}  />
              <button className={styles.seeMoreBtn} onClick={() => handleButtonClick(2)}>
                Ver más
              </button>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>El proyecto O-Zone de la empresa CyberSinn Solutions consistió en el desarrollo de un foro de discusión diseñado para conectar a usuarios apasionados por la cultura del cómic, el animé, el K-pop y otros intereses relacionados. Stack Técnico utilizado: Node, React, Typescript, Tailwind CSS. Express, MongoDB, Trello, Postman.</p>
              
              <div className={styles.flex}>
              <a href="https://drive.google.com/file/d/16Wa81EoFkSZst2wZ2XLA1mLcU--Sx0b4/view?usp=drive_link">
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

       
      </div>
    </section>
  );
};

export default Projects;
