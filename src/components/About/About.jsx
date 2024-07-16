import React from 'react';
import styles from './About.module.css';
import CustomSlider from '../Slider/Slider';

const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.duo}>
                <h1 className={styles.title}>About</h1>
                {/* Puedes agregar más contenido aquí si es necesario */}
            </div>
            <CustomSlider />
        </section>
    );
};

export default About;