import React from 'react';
import { motion } from 'motion/react';
import { Users, Globe2, Lightbulb } from 'lucide-react';
import { members } from '../data/membersData';

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿QUÉ ES EL NODO ESIT?
            </h2>
            <div className="w-20 h-2 bg-[var(--color-esit-cyan)] mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El Nodo "Estudios sobre Interdisciplina y Transdisciplina" (ESIT) fue creado en el año 2018 como una plataforma para promover y fortalecer el trabajo colaborativo de base interdisciplinaria y transdisciplinaria.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Buscamos la colaboración entre académicos, organizaciones de la sociedad civil, tomadores de decisión, el sector privado y actores locales con el objetivo de desarrollar actividades y proyectos en el cruce de fronteras entre saberes y disciplinas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-[var(--color-esit-blue)]/10 flex items-center justify-center text-[var(--color-esit-blue)] mb-4">
                  <Users size={24} />
                </div>
                <h4 className="font-bold text-3xl text-gray-900 mb-1">{members.length}</h4>
                <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Integrantes</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-[var(--color-esit-green)]/10 flex items-center justify-center text-[var(--color-esit-green)] mb-4">
                  <Globe2 size={24} />
                </div>
                <h4 className="font-bold text-3xl text-gray-900 mb-1">8</h4>
                <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Países</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-[var(--color-esit-magenta)]/10 flex items-center justify-center text-[var(--color-esit-magenta)] mb-4">
                  <Lightbulb size={24} />
                </div>
                <h4 className="font-bold text-3xl text-gray-900 mb-1">Múltiples</h4>
                <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Saberes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop"
                alt="Colaboración diversa en Latinoamérica"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-medium text-lg">
                  Ámbito científico, social, educativo, artístico, público y privado.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--color-esit-yellow)] rounded-full mix-blend-multiply opacity-50 blur-2xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[var(--color-esit-purple)] rounded-full mix-blend-multiply opacity-50 blur-2xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
