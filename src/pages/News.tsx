import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import imgCongreso from '../assets/news-congreso-iei.png';

export function News() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="relative h-[40vh] min-h-[300px] w-full bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-esit-blue)]/80 to-[var(--color-esit-magenta)]/80 z-10 mix-blend-multiply"></div>
        <img 
          src={imgCongreso} 
          alt="Congreso IEI 2026 Banner" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-bold tracking-widest uppercase mb-4"
          >
            Noticias & Eventos
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-white max-w-4xl mx-auto drop-shadow-lg"
          >
            Congreso IEI 2026<br/>
            Santiago de Chile
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10 relative z-30">
        
        <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors mb-6 absolute -top-16 left-4 lg:left-0 font-medium">
          <ArrowLeft size={20} />
          Volver al Inicio
        </Link>

        <article className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-gray-100">
          
          <div className="flex flex-col sm:flex-row gap-6 border-b border-gray-100 pb-8 mb-8">
            <div className="flex items-center gap-3 text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
              <Calendar className="text-[var(--color-esit-blue)]" />
              <span className="font-semibold">Septiembre 01 - 04, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
              <MapPin className="text-[var(--color-esit-red)]" />
              <span className="font-semibold">Universidad de Chile</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[var(--color-esit-blue)] hover:prose-a:text-blue-800">
            <p className="text-2xl text-gray-800 font-medium leading-normal mb-8">
              El Congreso de Investigación y Educación Superior Interdisciplinaria (IEI) es el evento sobre interdisciplina (ID) y transdisciplina (TD) más concurrido en América Latina y el Caribe. 
            </p>

            <p>
              Realizándose cada dos años en distintos países de la región, constituye una oportunidad fundamental para reflexionar e intercambiar visiones sobre el estudio de problemas contemporáneos cuyo abordaje están mucho más allá del alcance de una sola disciplina aislada.
            </p>

            <p>
              A 10 años de su primera versión, este evento ofrece una instancia para el intercambio de experiencias, la reflexión y el aprendizaje entre investigadores e investigadoras de América Latina y el Caribe. Y, tal como se anunció por el Espacio Interdisciplinario (UDELAR) en el congreso pasado, para la 5° versión que se realizará en el año 2026, la prestigiosa <strong>Universidad de Chile</strong> se convertirá de forma oficial en la institución anfitriona.
            </p>

            <div className="my-10 p-8 bg-[var(--color-esit-cyan)]/10 rounded-2xl border-l-4 border-[var(--color-esit-blue)]">
              <p className="m-0 text-xl text-gray-900 font-medium italic">
                El evento se realizará en modalidad presencial del 01 al 04 de septiembre de 2026 en Santiago de Chile.
              </p>
            </div>

            <h3 className="text-3xl mt-12 mb-6">Lineamientos generales</h3>
            
            <p>
              El congreso tiene como gran objetivo integrar diversas disciplinas científicas —tanto naturales como sociales— junto con las humanidades y las artes, para abordar de manera unificada los desafíos contemporáneos de América Latina desde enfoques interdisciplinares y transdisciplinarios efectivos.
            </p>

            <p>
              Las ciencias naturales y sociales juegan un papel crucial en la confrontación de los graves problemas actuales de la sociedad, pero es igualmente necesario e importante considerar siempre sus implicaciones sociales e incluso éticas. Por su parte, las humanidades y las artes brindan una crítica fundamental al conocimiento científico tradicional, desafiando activamente las narrativas dominantes y los valores implícitos incrustados en la producción de saber.
            </p>

            <p>
              Así, estos enfoques inter y transdisciplinarios no solo se presentan como relevantes para la resolución de problemas lógicos y la investigación aplicada, sino que invitan a toda la comunidad académica a una reflexión profunda e ininterrumpida sobre los verdaderos fines y los efectos resultantes del conocimiento generado. La activa colaboración entre disciplinas resulta finalmente esencial para transformar de lleno los procesos de generación de conocimiento de cada universidad, permitiendo que las instituciones latinoamericanas contribuyan cada vez más al desarrollo de sus propios países y de toda la región.
            </p>

            <p className="font-bold text-[var(--color-esit-magenta)] mt-8">
              Esta necesidad de investigación cruzada se vuelve aún más urgente frente a los fenómenos divergentes y emergentes del siglo XXI.
            </p>
            
          </div>
        </article>
      </div>
    </div>
  );
}
