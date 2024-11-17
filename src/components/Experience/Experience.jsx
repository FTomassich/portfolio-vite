import React from 'react'
import { Calendar, Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Experiencia 1",
      date: "Enero 2020 - Diciembre 2021",
      description: "Durante este período, trabajé en varios proyectos clave:",
      tasks: [
        "Desarrollo de una aplicación web de comercio electrónico utilizando React y Node.js",
        "Implementación de un sistema de gestión de contenidos para una empresa de medios",
        "Optimización del rendimiento y la accesibilidad de sitios web existentes"
      ],
      icon: Calendar
    },
    {
      title: "Experiencia 2",
      date: "Enero 2022 - Presente",
      description: "En mi rol actual, he sido responsable de:",
      tasks: [
        "Liderar el desarrollo de una aplicación móvil multiplataforma usando React Native",
        "Diseñar e implementar una arquitectura de microservicios para mejorar la escalabilidad",
        "Mentorizar a desarrolladores junior y dirigir sesiones de formación técnica"
      ],
      icon: Briefcase
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Mi Experiencia</h2>
      <div className="relative border-l-2 border-gray-200 ml-3">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary rounded-full ring-8 ring-white">
              <exp.icon className="w-3 h-3 text-white" />
            </span>
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                {exp.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {exp.date}
              </time>
              <p className="mb-2 text-base font-normal text-gray-500">
                {exp.description}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}