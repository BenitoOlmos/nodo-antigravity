import React from 'react';
import { motion } from 'motion/react';

const axes = [
  {
    number: "01",
    title: "Reflexión y sistematización",
    description: "De aproximaciones teórico – metodológicas sobre interdisciplina y transdisciplina.",
    color: "var(--color-esit-blue)"
  },
  {
    number: "02",
    title: "Indagación sobre prácticas",
    description: "Prácticas colaborativas con una mirada interdisciplinaria y transdisciplinaria.",
    color: "var(--color-esit-magenta)"
  },
  {
    number: "03",
    title: "Estudio de institucionalización",
    description: "De la interdisciplina y la transdisciplina en América Latina y su comparativa con otras regiones.",
    color: "var(--color-esit-yellow)"
  },
  {
    number: "04",
    title: "Educación Superior",
    description: "Avance y desarrollo del abordaje inter y transdisciplinario en términos de políticas universitarias e implementación de programas educativos en sistemas complejos.",
    color: "var(--color-esit-green)"
  },
  {
    number: "05",
    title: "Diseño de políticas públicas",
    description: "Promoción de la interdisciplina y la transdisciplina en el contexto latinoamericano.",
    color: "var(--color-esit-red)"
  }
];

export function WorkAxes() {
  return (
    <section id="axes" className="scroll-mt-20 py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2076&auto=format&fit=crop"
          alt="Cultura e historia latinoamericana"
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            EJES DE TRABAJO
          </h2>
          <div className="w-20 h-2 bg-[var(--color-esit-yellow)] mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {axes.map((axis, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border-l-4 hover:bg-gray-800 transition-colors"
              style={{ borderColor: axis.color }}
            >
              <div className="font-display text-4xl font-bold text-gray-500 mb-4 opacity-50">
                {axis.number}
              </div>
              <h3 className="font-bold text-xl mb-3">{axis.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {axis.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
