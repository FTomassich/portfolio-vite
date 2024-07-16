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
                    👨‍💻 Soy Full Stack Developer, recientemente egresado de Henry Bootcamp con una marcada orientación hacia el frontend. Disfruto aprendiendo y creando interfaces creativas, amigables e intuitivas para los usuarios, pero sobre todo FUNCIONALES!
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                    ✍ Tengo sólidos conocimientos en redacción para distintos rubros y plataformas: periodística, marketing digital, y redes sociales. A su vez, puedo diseñar piezas gráficas y visuales, tales como: publicaciones en redes sociales, flyers, revistas, folletos, etc. La combinación de mis habilidades me permite diseñar y crear experiencias web efectivas, orientadas a un público objetivo.
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                    🤝 Mi experiencia en ventas y atención al público ha fortalecido mi enfoque centrado en el cliente. Tengo la capacidad de identificar sus problemas y necesidades, lo que se traduce en soluciones tecnológicas que realmente impactan positivamente en la experiencia del usuario y en los objetivos de negocio.
                </strong>
            </div>
            <div className={styles.group}>
                <strong className={styles.strong}>
                    🔋 Actualmente me encuentro disponible para emprender nuevos desafíos como desarrollador web. Aunque mis mayores fortalezas se encuentran del lado del front-end, actualmente también estoy interesado en fortalecer y aprender habilidades en back-end. Me interesan los procesos de registro y autenticación, y la protección de datos sensibles.
                </strong>
            </div>
            

        </Slider>
        
     
    );
};

export default CustomSlider;