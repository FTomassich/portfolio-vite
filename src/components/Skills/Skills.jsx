
// import styles from '../Skills/Skills.module.css';
// import React from 'react'
// import react from "../../assets/react.png";
// import postgresql from "../../assets/postgresql.png";
// import css from "../../assets/css.png";
// import redux from "../../assets/redux.png";
// import github from "../../assets/github.png";
// import node from "../../assets/node.png";
// import javascript from "../../assets/javascript.png";
// import git from "../../assets/git.png";
// import vite from "../../assets/vite.png";

// const Skills = () => {
//   return (

//     <section className={styles.section}>
//       <div>
//         <h1 className={styles.title}> Tech Skills</h1>
//         </div>
        
//           <ul className={styles.techList}>
//             <li><img src={react} alt="" className={styles.icon}/></li>
//             <li><img src={github} alt="" className={styles.icon} /></li>
//             <li><img src={redux} alt="" className={styles.icon} /></li>
//             <li><img src={css} alt="" className={styles.icon} /></li>
//             <li><img src={postgresql} alt="" className={styles.icon} /></li>
//             <li><img src={node} alt="" className={styles.icon} /></li>
//             <li><img src={javascript} alt="" className={styles.icon} /></li>
//             <li><img src={git} alt="" className={styles.icon} /></li>
//             <li><img src={vite} alt="" className={styles.icon} /></li>
//           </ul>
       
//     </section>
    
//   )
// }

// export default Skills

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
    <section className={styles.section}>
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
          <h3 className={styles.h3}>HTML/CSS/REACT/REDUX</h3>
        
        </div>
        <div className={styles.item}>
          <h2 className={styles.h2}>BACK-END</h2>
          <h3 className={styles.h3}>EXPRESS/POSTGRESQL/SEQUELIZE</h3>
        
        </div>
      </div>
    </section>
  );
};

export default Skills;