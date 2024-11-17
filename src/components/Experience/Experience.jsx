import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const TimelineItem = ({ title, date, description, tasks, icon: Icon }) => (
  <div className="mb-8 last:mb-0 bg-white bg-opacity-60 rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white mr-4 shadow-lg">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <time className="text-sm font-medium text-gray-600">{date}</time>
      </div>
    </div>
    <div className="ml-16">
      <p className="mb-4 text-gray-700">{description}</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        {tasks.map((task, index) => (
          <li key={index} className="text-base">{task}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">
        Mi Experiencia Profesional
      </h2>
      <div className="space-y-8">
        <TimelineItem 
          title="Desarrollador Frontend"
          date="Enero 2020 - Diciembre 2021"
          description="Durante este período, trabajé en varios proyectos clave:"
          tasks={[
            "Desarrollo de una aplicación web de comercio electrónico utilizando React y Node.js",
            "Implementación de un sistema de gestión de contenidos para una empresa de medios",
            "Optimización del rendimiento y la accesibilidad de sitios web existentes"
          ]}
          icon={Calendar}
        />
        <TimelineItem 
          title="Ingeniero de Software Senior"
          date="Enero 2022 - Presente"
          description="En mi rol actual, he sido responsable de:"
          tasks={[
            "Liderar el desarrollo de una aplicación móvil multiplataforma usando React Native",
            "Diseñar e implementar una arquitectura de microservicios para mejorar la escalabilidad",
            "Mentorizar a desarrolladores junior y dirigir sesiones de formación técnica"
          ]}
          icon={Briefcase}
        />
      </div>
    </div>
  );
}