import React from 'react';
import styles from './About.module.css';
import CustomSlider from '../Slider/Slider';


const About = () => {
    return (
        <section className={styles.container} >
            <div className={styles.duo}>
                <h1 className={styles.title}>About</h1>
                <h2 className={styles.subt}>🖐Hola! Me da gusto recibirte en mi portfolio. En estas slides te comentaré brevemente acerca de mi perfil profesional</h2>
                {/* Puedes agregar más contenido aquí si es necesario */}
            </div>
            <CustomSlider />
        </section>
    );
};

export default About;