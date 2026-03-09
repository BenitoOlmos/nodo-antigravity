import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518605368461-1e1252220a4c?q=80&w=2070&auto=format&fit=crop" 
          alt="Latinoamérica" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[var(--color-esit-blue)] font-bold tracking-widest uppercase text-sm md:text-base mb-4">
            Nodo Latinoamericano
          </h2>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 max-w-5xl mx-auto">
            ESTUDIOS SOBRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-esit-magenta)] to-[var(--color-esit-violet)]">INTERDISCIPLINA</span> Y <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-esit-red)] to-[var(--color-esit-yellow)]">TRANSDISCIPLINA</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Promoviendo y fortaleciendo el trabajo colaborativo en el cruce de fronteras entre saberes y disciplinas desde 2018.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#about" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
              Conoce el Nodo
            </a>
            <a href="#objectives" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold uppercase tracking-wider text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-sm">
              Nuestros Objetivos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
