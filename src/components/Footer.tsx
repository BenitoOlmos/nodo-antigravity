import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[var(--color-esit-blue)] mix-blend-screen opacity-80 -mr-3"></div>
              <div className="w-6 h-6 rounded-full bg-[var(--color-esit-red)] mix-blend-screen opacity-80 -mr-3"></div>
              <div className="w-6 h-6 rounded-full bg-[var(--color-esit-yellow)] mix-blend-screen opacity-80"></div>
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-white ml-2">ESIT</span>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Nodo Latinoamericano de Estudios sobre Interdisciplina y Transdisciplina.</p>
            <p className="mt-1">Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
