import React from 'react'
import { Clock, Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Mi Experiencia</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
        
        {/* Experiencia 1 */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white"><Clock className="w-5 h-5" /></h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Experiencia 1</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Enero 2020 - Diciembre 2021
            </p>
            <p className="text-sm mt-2">
              Durante este período, trabajé en varios proyectos clave:
              <ul className="list-disc pl-5 mt-2">
                <li>Desarrollo de una aplicación web de comercio electrónico utilizando React y Node.js</li>
                <li>Implementación de un sistema de gestión de contenidos para una empresa de medios</li>
                <li>Optimización del rendimiento y la accesibilidad de sitios web existentes</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Experiencia 2 */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-secondary shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white"><Briefcase className="w-5 h-5" /></h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Experiencia 2</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Enero 2022 - Presente
            </p>
            <p className="text-sm mt-2 text-white">
              En mi rol actual, he sido responsable de:
              <ul className="list-disc pl-5 mt-2">
                <li>Liderar el desarrollo de una aplicación móvil multiplataforma usando React Native</li>
                <li>Diseñar e implementar una arquitectura de microservicios para mejorar la escalabilidad</li>
                <li>Mentorizar a desarrolladores junior y dirigir sesiones de formación técnica</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}