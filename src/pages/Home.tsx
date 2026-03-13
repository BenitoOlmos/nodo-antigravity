import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Objectives } from '../components/Objectives';
import { WorkAxes } from '../components/WorkAxes';
import { Institutions } from '../components/Institutions';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Objectives />
      <WorkAxes />
      
      {/* Integrantes Preview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center p-4 bg-[var(--color-esit-cyan)]/10 text-[var(--color-esit-cyan)] rounded-full mb-6">
            <Users size={40} />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            RED DE INTEGRANTES
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-[var(--color-esit-blue)] to-[var(--color-esit-cyan)] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 mb-10">
            Conoce a nuestro amplio grupo de profesionales, académicos e investigadores de diferentes partes de la región trabajando de manera interdisciplinaria.
          </p>
          <Link 
            to="/integrantes"
            className="inline-flex items-center gap-3 bg-[var(--color-esit-blue)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Users size={24} />
            Ver Todos los Integrantes
          </Link>
        </div>
      </section>

      <Institutions />
    </>
  );
}
