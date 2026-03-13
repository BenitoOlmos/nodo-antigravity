import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgCongreso from '../assets/news-congreso-iei.png';

export function NewsPreview() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[var(--color-esit-magenta)]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-gray-100 pb-6">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              ÚLTIMAS NOTICIAS
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-esit-magenta)] to-[var(--color-esit-red)] rounded-full"></div>
          </div>
          <Link 
            to="/noticias" 
            className="hidden md:inline-flex items-center gap-2 text-[var(--color-esit-blue)] font-bold hover:text-blue-800 transition-colors"
          >
            Ver todas las noticias <ChevronRight size={20} />
          </Link>
        </div>

        {/* Featured News Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-300"
        >
          {/* Image Side */}
          <div className="md:w-2/5 md:min-h-[400px] overflow-hidden relative bg-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10"></div>
            <img 
              src={imgCongreso} 
              alt="Congreso IEI 2026" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content Side */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-4 text-sm text-[var(--color-esit-blue)] font-bold mb-4">
              <span className="bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider text-xs">Destacado</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[var(--color-esit-magenta)] transition-colors">
              Congreso IEI 2026 - SANTIAGO DE CHILE
            </h3>
            
            <p className="text-gray-600 mb-8 line-clamp-3 text-lg leading-relaxed">
              El Congreso de Investigación y Educación Superior Interdisciplinaria (IEI) es el evento sobre interdisciplina y transdisciplina más concurrido en América Latina y el Caribe, ofreciendo una oportunidad para reflexionar sobre problemas complejos de la región.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm font-medium text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-[var(--color-esit-red)]" />
                <span>01 al 04 de septiembre, 2026</span>
              </div>
              <div className="hidden sm:block text-gray-300">•</div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[var(--color-esit-yellow)]" />
                <span>Universidad de Chile, Santiago</span>
              </div>
            </div>

            <div>
              <Link 
                to="/noticias" 
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-esit-magenta)] text-white px-8 py-3 rounded-xl font-bold hover:bg-fuchsia-700 transition-all hover:pr-6 hover:pl-10"
              >
                Leer artículo completo <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/noticias" 
            className="inline-flex items-center justify-center gap-2 text-[var(--color-esit-blue)] font-bold w-full p-4 border rounded-xl hover:bg-gray-50"
          >
            Ver todas las noticias <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
