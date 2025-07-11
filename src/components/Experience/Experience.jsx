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
    <div id= "experience" className="max-w-4xl mx-auto px-4 py-12">
      <h1 className={styles.title}>
  Experiencia 
  </h1>
  

      <div className="space-y-8">
        <TimelineItem 
          title="Desarrollador Full Stack"
          date="Octubre 2024 - Diciembre 2024" 
          description="Durante este período, trabajé en el siguiente proyecto:"
          tasks={[
            "Desarrollo de un foro de discusión, con formato de red social, relacionado al comic, el animé y otros consumos culturales.",
            
          ]}
          icon={Calendar}
        />
        <TimelineItem 
          title="Desarrollador Full Stack"
          date="Noviembre 2024 - Enero 2024" 
          description="Durante este trayecto, he sido responsable de desarrollar una aplicación móvil de índole administrativa, que facilita el registro de empleados en empresas constructoras. La app facilitó la carga y visualización de la información relacionada a la contratación y registro de incidencias laborales. 
          "
          
          tasks={[
            "Desplegar una app orientada a iOS utilizando React Native, Redux, Tailwind CSS",
            "Desarrollar un formulario paginado, con auto-completado, que permite registrar nuevos empleados y/o consultar información",
            "Garantizar la consistencia de los datos manteniendo un comunicación fluida con el equipo de backend."
            
          ]}
          icon={Briefcase}
        />
      </div>
    </div>
  );
}