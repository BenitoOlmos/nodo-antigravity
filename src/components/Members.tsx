import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MapPin, Building, UserCircle } from 'lucide-react';

import { members } from '../data/membersData';

export function Members() {
  return (
    <section id="integrantes" className="scroll-mt-20 py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 bg-[var(--color-esit-cyan)]/10 text-[var(--color-esit-cyan)] rounded-full mb-6"
          >
            <UserCircle size={32} />
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            RED DE INTEGRANTES
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-esit-blue)] to-[var(--color-esit-cyan)] mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600">
            Nuestra red está conformada por un amplio grupo de profesionales, académicos e investigadores de diferentes partes de la región trabajando de manera interdisciplinaria y transdisciplinaria.
          </p>
        </div>

        {/* Grid Responsive de Integrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-esit-blue)]/5 to-transparent rounded-bl-full -z-0"></div>
              
              <div className="flex-1 relative z-10">
                <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight group-hover:text-[var(--color-esit-blue)] transition-colors">
                  {member.name} {member.surname}
                </h3>
                
                <div className="flex items-center gap-2 mt-4 text-sm text-gray-500 mb-2">
                  <MapPin size={16} className="text-[var(--color-esit-red)] shrink-0" />
                  <span className="font-medium">{member.country}</span>
                </div>
                
                <div className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                  <Building size={16} className="text-[var(--color-esit-yellow)] shrink-0 mt-0.5" />
                  <span className="line-clamp-3">{member.institution}</span>
                </div>
              </div>

              {member.link && (
                <div className="mt-6 pt-4 border-t border-gray-50 relative z-10">
                  <a 
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-esit-blue)] hover:text-blue-800 transition-colors"
                  >
                    Ver Perfil <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
