import React from 'react';
import { motion } from 'motion/react';

const institutions = [
  "Universidad de la República (Uruguay)",
  "Universidad de Buenos Aires (Argentina)",
  "Universidad de Chile (Chile)",
  "Swiss Federal Institute of Technology (ETH Zurich, Suiza)",
  "Universidad Externado de Colombia",
  "Universidad Nacional de Colombia",
  "Universidad Nacional Autónoma de México",
  "New York University (Estados Unidos)",
  "Universidad Nacional (Costa Rica)",
  "Colectivo 3600 (Chile)",
  "Pontificia Universidad Católica (Argentina)",
  "Universidad de Palermo (Argentina)"
];

export function Institutions() {
  return (
    <section id="institutions" className="scroll-mt-20 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            INSTITUCIONES PARTICIPANTES
          </h2>
          <div className="w-20 h-2 bg-[var(--color-esit-purple)] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Una red global con fuerte presencia en América Latina, uniendo esfuerzos desde diversas latitudes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {institutions.map((inst, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[var(--color-esit-blue)] hover:text-[var(--color-esit-blue)] transition-colors cursor-default shadow-sm"
            >
              {inst}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
