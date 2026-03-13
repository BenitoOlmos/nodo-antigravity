import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoNodo from '../assets/logo-nodo.png';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Link 
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="focus:outline-none focus:ring-2 focus:ring-[var(--color-esit-blue)] rounded-lg transition-transform hover:scale-105"
              aria-label="Ir al inicio"
            >
              <img src={logoNodo} alt="Nodo ESIT Logo" className="h-12 w-auto object-contain" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/#about" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-[var(--color-esit-blue)] transition-colors">Nosotros</Link>
            <Link to="/#objectives" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-[var(--color-esit-red)] transition-colors">Objetivos</Link>
            <Link to="/#axes" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-[var(--color-esit-magenta)] transition-colors">Ejes</Link>
            <Link to="/integrantes" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-[var(--color-esit-cyan)] transition-colors">Integrantes</Link>
            <Link to="/#institutions" className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-[var(--color-esit-green)] transition-colors">Instituciones</Link>
          </nav>
          <button className="md:hidden p-2 text-gray-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
