import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.css';


const CustomSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true, // Permite arrastrar con el mouse
        initialSlide: 0, // Inicia en el primer slide

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className={styles.slider}>

            <div className={styles.group}>
                <strong className={styles.strong}>
                    👨‍💻 Soy desarrollador Full Stack, con orientación hacia el frontend. Disfruto aprendiendo y creando interfaces creativas, amigables e intuitivas para los usuarios. Mis lemas son la simpleza y la funcionalidad.
                    La combinación de mis habilidades en redacción y diseño me permite crear experiencias web efectivas, enfocadas en conectar con el público adecuado🎯
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                    ✍ Durante mi desarrollo profesional he desarrollado una sólida experiencia en redacción multiplataforma, abarcando diversos sectores como el periodístico, marketing digital y redes sociales. Además, poseo un buen criterio para el diseño de piezas gráficas y visuales, como flyers para redes sociales, publicaciones comerciales y branding institucional.
                
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                    🤝 Mi experiencia en ventas y atención al público ha fortalecido mi enfoque centrado en el cliente. Tengo la capacidad de identificar sus problemas y necesidades, lo que se traduce en soluciones tecnológicas que realmente impactan positivamente en la experiencia del usuario y en los objetivos de negocio.
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                🔋 Me apasiona aprender y colaborar con colegas en entornos dinámicos. Tengo experiencia trabajando con metodologías ágiles y actualmente estoy disponible para asumir nuevos desafíos como desarrollador web. Si buscas a un desarrollador comprometido y entusiasta, no dudes en contactarme. 
                </strong>
            </div>


        </Slider>


    );
};

export default CustomSlider;