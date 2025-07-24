import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';
import styles from '../Skills/Skills.module.css';

const TimelineItem = ({ title, date, description, tasks, icon: Icon }) => (
  <div className="mb-8 last:mb-0 bg-[rgba(255,255,255,0.1)] rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mr-4 shadow-lg">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <time className="text-sm font-medium text-white">{date}</time>
      </div>
    </div>
    <div className="ml-16">
      <p className="mb-4 text-white">{description}</p>
      <ul className="list-disc pl-5 space-y-2 text-white">
        {tasks.map((task, index) => (
          <li key={index} className="text-base">{task}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Timeline() {
  return (
    <div id= "experience" className="max-w-4xl mx-auto px-4 py-20">
      <h1 className={styles.title}>
  Experiencia 
  </h1>
  

      <div className="space-y-8">
        <TimelineItem 
          title="Desarrollador Frontend en CyberSinn Solutions"
          date="Octubre 2024 - Diciembre 2024" 
          description="Durante este período, trabajé en el desarrollo de un foro de discusión, con formato de red social, relacionado al comic, el animé y otros consumos culturales. Mis tareas en este rol fueron:"
          tasks={[
            "Diseñar y desarrollar vistas web intuitivas, basadas en principios sólidos de UX/UI, asegurando una experiencia de usuario fluida y atractiva.",
            "Implementación de interfaces de usuario dinámicas y componentes responsivos mediante el uso de Typescript, React y Tailwind CSS, optimizando la adaptabilidad en diferentes dispositivos.",
            "Colaboración en la planificación y gestión del proyecto utilizando herramientas como Trello, fomentando un flujo de trabajo organizado y eficiente en el marco de las metodologías ágiles."
          ]}
          icon={Calendar}
        />
        <TimelineItem 
          title="Desarrollador Frontend en Quality Soft Services"
          date="Noviembre 2024 - Enero 2024" 
          description="Durante este trayecto, he sido responsable de desarrollar una aplicación móvil de índole administrativa, que facilita el registro de empleados en empresas constructoras. La app facilitó la carga y visualización de la información relacionada a la contratación y registro de incidencias laborales. Mi aporte consistió en:
          "
          
          tasks={[
            "Desplegar una app orientada a iOS utilizando React Native, Redux, Tailwind CSS",
            "Desarrollo de un formulario paginado en formato carrousel, con funciones de autocompletado, para el registro de nuevos empleados y consulta de datos del personal existente.",
            "Integración de múltiples endpoints, asegurando una gestión eficiente y fluida de los datos.",
            "Colaborar estrechamente con el equipo de backend para garantizar la consistencia y precisión en los procesos de activación y registro."
            
          ]}
          icon={Briefcase}
        />
      </div>
    </div>
  );
}