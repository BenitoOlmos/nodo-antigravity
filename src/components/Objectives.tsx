import React from 'react';
import { motion } from 'motion/react';
import { Search, BookOpen, Building2, Network } from 'lucide-react';

const objectives = [
  {
    icon: <Search size={32} />,
    title: "Estudio y Reflexión",
    description: "Estudiamos cómo se hace, se piensa y se proyectan la interdisciplina y la transdisciplina en América Latina.",
    color: "var(--color-esit-blue)"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Práctica y Fomento",
    description: "Practicamos y fomentamos las actividades de investigación, enseñanza y extensión interdisciplinarias y transdisciplinarias.",
    color: "var(--color-esit-red)"
  },
  {
    icon: <Building2 size={32} />,
    title: "Políticas Públicas",
    description: "Apoyamos el desarrollo de políticas públicas y universitarias que aboguen por el trabajo de corte colaborativo.",
    color: "var(--color-esit-green)"
  },
  {
    icon: <Network size={32} />,
    title: "Redes Globales",
    description: "Buscamos fortalecer la colaboración con otras redes e iniciativas similares en América Latina, Norteamérica, Europa y Asia.",
    color: "var(--color-esit-violet)"
  }
];

export function Objectives() {
  return (
    <section id="objectives" className="scroll-mt-20 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            NUESTROS OBJETIVOS
          </h2>
          <div className="w-20 h-2 bg-[var(--color-esit-red)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Trabajamos para consolidar un panorama comparativo sobre el quehacer interdisciplinario y transdisciplinario a nivel global, con fuerte arraigo en nuestra identidad latinoamericana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((obj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col sm:flex-row gap-6"
            >
              <div className="shrink-0 w-16 h-16 rounded-2xl relative flex items-center justify-center" style={{ color: obj.color }}>
                <div className="absolute inset-0 opacity-10 rounded-2xl" style={{ backgroundColor: obj.color }}></div>
                <div className="relative z-10">{obj.icon}</div>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{obj.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
