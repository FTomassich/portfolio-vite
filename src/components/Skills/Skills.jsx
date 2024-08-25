
import styles from '../Skills/Skills.module.css';
import React from 'react';
import reactIcon from "../../assets/react.png";
import postgresql from "../../assets/postgresql.png";
import cssIcon from "../../assets/css.png";
import redux from "../../assets/redux.png";
import github from "../../assets/github.png";
import node from "../../assets/node.png";
import javascript from "../../assets/javascript.png";
import git from "../../assets/git.png";
import vite from "../../assets/vite.png";
import html from "../../assets/html.png";
import sequelize from "../../assets/sequelize.png"
import space11 from "../../assets/space11.jpg"


const Skills = () => {
  const icons = [
    { src: reactIcon, alt: "React" },
    { src: github, alt: "GitHub" },
    { src: redux, alt: "Redux" },
    { src: cssIcon, alt: "CSS" },
    { src: postgresql, alt: "PostgreSQL" },
    { src: node, alt: "Node.js" },
    { src: javascript, alt: "JavaScript" },
    { src: git, alt: "Git" },
    { src: vite, alt: "Vite" },
    { src: html, alt: "Html" },
    { src: sequelize, alt: "Sequelize" }

  ];

  return (
    <section className={styles.section} style={{ 
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 90%),linear-gradient(to top, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 1) 90%), radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 1) 80%), 
                        
                        url(${space11})
      `  }}>
      <div >
        <h1 className={styles.title}>Tech Skills</h1>
      </div>
      <div className={styles.carousel}>
        <ul className={styles.techList}>
          {icons.concat(icons).map((icon, index) => (
            <li key={index}>
              <img src={icon.src} alt={icon.alt} className={styles.icon} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h2 className={styles.h2}>FRONT-END</h2>
          <h3 className={styles.h3}>HTML / CSS / REACT / REDUX</h3>
          <strong className={styles.strong}>
            Como desarrollador frontend, disfruto creando interfaces de usuario funcionales y creativas. Mi experiencia combina:<br />
            <br />
            -Desarrollo de aplicaciones escalables utilizando HTML y React<br />
            <br />
            -Diseños web responsivos estilizados con CSS y preprocesadores como Less.<br />
            <br />
            -Manejo de Redux para la gestión del estado.<br />
            <br />
            -Integración de APIs RESTful, mediante operaciones asíncronas con JavaScript<br />
            <br />
            -Gestión de contenido multimedia con Cloudinary.<br />
          </strong>

        </div>
        <div className={styles.item}>
          <h2 className={styles.h2}>BACK-END</h2>
          <h3 className={styles.h3}>EXPRESS/POSTGRESQL/SEQUELIZE</h3>
          <strong className={styles.strong}>
          Mi trayecto se orienta a desarrollar soluciones backend robustas que soportan aplicaciones complejas, con un buen rendimiento. Mi experiencia incluye:
          <br />
          <br />
            -Diagramación y gestión de bases de datos eficientes con PostgreSQL. <br />
            <br />
            -Desarrollo de servidores en Express.js para aplicaciones Node.js.<br />
            <br />
            -Mapeo objeto-relacional con Sequelize ORM, creación de relaciones entre tablas e implementación de índices para mejorar el rendimiento.<br />
            <br /> 
            -Integración de APIs con fetching de datos. <br />
            <br />
            </strong>

        </div>
      </div>
    </section>
  );
};

export default Skills;
