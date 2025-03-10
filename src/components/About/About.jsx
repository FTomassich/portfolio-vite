import React from 'react';
import styles from './About.module.css';
import CustomSlider from '../Slider/Slider';


const About = () => {
    return (
        <section id="about" className={styles.container} >
            <div className={styles.duo}>
                <h1 className="text-5xl font-extrabold text-center mb-12 text-white-700">Sobre mí</h1>
                <p className={styles.subt}>🖐😀Hola! Me da gusto recibirte en mi portfolio. En estas slides te comentaré brevemente acerca de mi perfil profesional</p>
                
            </div>
            <CustomSlider />
        </section>
    );
};

export default About;