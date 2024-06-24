import React from 'react'
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>About</h1>
            <div className={styles.box}>
            <div className={styles.group}>
                <strong className={styles.strong}>👨‍💻Soy Full Stack Developer, recientemente egresado de Henry Bootcamp
                    con una marcada orientación hacia el frontend. Disfruto aprendiendo y creando interfaces creativas, amigables e intuitivas para los usuarios, pero sobre todo FUNCIONALES!
                </strong>
            </div>
            <div className={styles.group}>

                <strong className={styles.strong}>
                    ✍Mi formación en comunicación, y mi impronta personal me brindaron sólidos conocimientos en redacción para distintas plataformas y soportes: periodística , marketing digital, y redes sociales. A su vez, cuento con criterio y conocimiento para planificar y ejecutar piezas gráficas y visuales, tales como: publicaciones en redes sociales, flyers, revistas, folletos. Esta combinación de habilidades me permite, desde una perspectiva integral, diseñar y crear experiencias web atractivas, funcionales y orientadas a un público objetivo.
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                    🤝Mi experiencia en ventas y atención al público ha fortalecido mi enfoque centrado en el cliente. Tengo la capacidad de identificar sus problemas y necesidades, lo que se traduce en soluciones tecnológicas que realmente impactan positivamente en la experiencia del usuario y en los objetivos de negocio.
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                    🔋Actualmente me encuentro disponible para emprender nuevos desafíos como desarrollador web. Aunque mis mayores fortalezas se encuentran del lado del front-end, actualmente también estoy interesado en fortalecer y aprender habilidades en back-end. Me interesan los procesos de registro y autenticación, y la protección de datos sensibles.

                </strong>
            </div>
            </div>
        </section>
    )
}

export default About