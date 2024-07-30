import React from 'react';
import styles from './About.module.css';
import CustomSlider from '../Slider/Slider';
import about from "../../assets/about.jpg"

const About = () => {
    return (
        <section className={styles.container} style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(${about})` }}>
            <div className={styles.duo}>
                <h1 className={styles.title}>About</h1>
                {/* Puedes agregar más contenido aquí si es necesario */}
            </div>
            <CustomSlider />
        </section>
    );
};

export default About;