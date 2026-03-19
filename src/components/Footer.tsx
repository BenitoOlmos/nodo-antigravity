import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[var(--color-esit-blue)] mix-blend-screen opacity-80 -mr-3"></div>
                <div className="w-6 h-6 rounded-full bg-[var(--color-esit-red)] mix-blend-screen opacity-80 -mr-3"></div>
                <div className="w-6 h-6 rounded-full bg-[var(--color-esit-yellow)] mix-blend-screen opacity-80"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white ml-2">ESIT</span>
            </div>
            
            <div className="flex gap-4 mt-2">
              <a href="mailto:nodoesit@gmail.com" className="text-gray-400 hover:text-[var(--color-esit-cyan)] transition-colors inline-flex items-center gap-2 text-sm">
                <Mail size={18} />
                nodoesit@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nodo-esit-231005384" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-esit-blue)] transition-colors inline-flex items-center gap-2 text-sm">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="text-sm text-center md:text-right mt-4 md:mt-0">
            <p>© {new Date().getFullYear()} Nodo Latinoamericano de Estudios sobre Interdisciplina y Transdisciplina.</p>
            <p className="mt-1">Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
