import React from 'react';
import styles from './About.module.css';
import CustomSlider from '../Slider/Slider';
import stars from "../../assets/stars.png"

const About = () => {
    return (
        <section className={styles.container} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(${stars})` }}>
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