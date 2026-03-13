import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, MapPin, Building, UserCircle } from 'lucide-react';

const members = [
  { name: "Alejandro", surname: "Martinez", country: "Colombia", institution: "Universidad Externado de Colombia", link: "https://www.uexternado.edu.co/profesores/alejandro-martinez-rodriguez/" },
  { name: "Amalia", surname: "Stuhldreher", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://exportcvuy.anii.org.uy/CvEstatico/?urlId=7047bc207102cc22041de4edd9774c0f6d4c3e0dc4837b36bc45e554d4fb72b2b5da3a0ff3c260b7efd3b09c2cb8985bffdf32ee157c75de140663a6cc077fc0&formato=pdf&convocatoria=21" },
  { name: "Ana", surname: "Casnati Guberna", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://uruguay.academia.edu/AnaMar%C3%ADaCasnatiGuberna" },
  { name: "Armando", surname: "Fernández Guillemet", country: "Argentina", institution: "CONICET Argentina", link: "https://www.conicet.gov.ar/new_scp/detalle.php?id=20588&datos_academicos=yes" },
  { name: "Benjamín", surname: "Suárez Isla", country: "Chile", institution: "Universidad de Chile", link: "https://portafolio-academico.uchile.cl/perfil/4667-Benjamin-Alvaro-Manuel-Suarez-Isla" },
  { name: "Benito", surname: "Olmos Mondaca", country: "Chile", institution: "Colectivo 360º", link: "" },
  { name: "Bianca", surname: "Vienni-Baptista", country: "Suiza", institution: "Swiss Federal Institute of Technology (ETH Zurich)", link: "https://tdlab.usys.ethz.ch/team/person-detail.bianca-vienni.html" },
  { name: "Cecilia", surname: "Marrero", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://fic.edu.uy/docente/cecilia-marrero" },
  { name: "Cecilia", surname: "Hidalgo", country: "Argentina", institution: "Universidad de Buenos Aires", link: "https://antropologia.institutos.filo.uba.ar/integrante/hidalgo-cecilia" },
  { name: "Damián", surname: "Berridy", country: "Argentina", institution: "Universidad Nacional de Cuyo", link: "https://sites.google.com/view/grupodeestudiosinterdisciplina/equipo/dami%C3%A1n-berridy" },
  { name: "Daniel", surname: "Marín Vanegas", country: "Colombia", institution: "Universidad Nacional de Colombia", link: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000086030" },
  { name: "Diana", surname: "Soler Osuna", country: "Colombia", institution: "Universidad Externado de Colombia", link: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001506219" },
  { name: "Erika", surname: "Mena Morales", country: "Chile", institution: "Colectivo 360º", link: "" },
  { name: "Francisco", surname: "Crespo", country: "Chile", institution: "Universidad de Chile", link: "" },
  { name: "Gabriela", surname: "Nogueira", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://exportcvuy.anii.org.uy/cv/?476e907a9f82b702ad15369da184945e" },
  { name: "Gilda", surname: "Wolf", country: "Colombia", institution: "Universidad Nacional de Colombia", link: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000218804" },
  { name: "Gustavo", surname: "Ferreira", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://exportcvuy.anii.org.uy/cv/?71d44e79173946077905a8368a6a7719d902e32505d6814a8fc2e1cd6ab0a23f37ab31281ebabd5bbad51f09d5acea925287d472314cd73c1df2bc2b7c48a132" },
  { name: "Gustavo", surname: "Giulano", country: "Argentina", institution: "Pontificia Universidad Católica Argentina", link: "https://scholar.google.com/citations?user=fodfqosAAAAJ&hl=es" },
  { name: "Hernán", surname: "Martinez", country: "Colombia", institution: "Universidad Autónoma Latinoamericana", link: "http://scienti.colciencias.gov.co:8081/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001471723" },
  { name: "Horacio", surname: "Garcia Bossio", country: "Argentina", institution: "Pontificia Universidad Católica Argentina", link: "https://global.coneau.gob.ar/docentes/curriculum/coneau/abm-p1.aspx" },
  { name: "Inta", surname: "Rivas Faure", country: "Chile", institution: "Universidad de Chile", link: "" },
  { name: "Isabel", surname: "Bortagaray", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://citinde.ei.udelar.edu.uy/integrante/isabel-bortagaray/" },
  { name: "Jaqueline", surname: "Meriño Vergara", country: "Chile", institution: "Universidad de Chile", link: "https://orcid.org/0000-0002-9756-6718" },
  { name: "Juan", surname: "Gelacio", country: "Colombia", institution: "Universidad Autónoma Latinoamericana", link: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001540755" },
  { name: "Juan Carlos", surname: "Villa Soto", country: "México", institution: "Centro de Investigaciones Interdisciplinarias en Ciencias y Humanidades. UNAM", link: "https://www.researchgate.net/profile/Juan-Carlos-Soto-2" },
  { name: "Juan Gastón", surname: "Burlot", country: "Argentina", institution: "Universidad Nacional de Cuyo", link: "https://www.flacsoandes.edu.ec/buscador/Author/Home?author=Burlot%2C+Juan+Gast%C3%B3n&" },
  { name: "Kirsi", surname: "Cheas", country: "Finlandia y EU", institution: "Universidad de Helsinki & New York University", link: "https://orcid.org/0000-0001-9312-2784" },
  { name: "Lucrecia", surname: "D’Agostino", country: "Argentina", institution: "Universidad Nacional de Cuyo", link: "https://www.revistaanfibia.com/autor/lucrecia-dagostino/" },
  { name: "Luis Diego", surname: "Soto Kiewit", country: "Costa Rica", institution: "Universidad Nacional de Costa Rica (UNA)", link: "https://orcid.org/0000-0002-0810-2736" },
  { name: "Maria", surname: "Goñi Mazzitelli", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://export.cvuy.uy/cvsni/?urlId=cc0a7cfb17f28759b12312aae159a1dc00730dfc8366c124cd4061d527d695de749d2a6997981672c7b237171fc37a9350e8ded282d993763fafdf353cb27b72&formato=html&convocatoria=21" },
  { name: "María Belén", surname: "Echegaray", country: "Argentina", institution: "Universidad Nacional de Cuyo", link: "" },
  { name: "María Haydeé", surname: "García Bravo", country: "México", institution: "Universidad Nacional Autónoma de México (UNAM)", link: "https://posgrado.unam.mx/artesydiseno/cuerpo-tutor/tutores/77/maria-haydee-garcia-bravo" },
  { name: "Miguel", surname: "Sierra Pereiro", country: "Uruguay", institution: "Innovación y Comunicación de INIA de Uruguay", link: "https://citinde.ei.udelar.edu.uy/integrante/miguel-sierra-pereiro/" },
  { name: "Natalia", surname: "Martínez Mondaca", country: "Chile", institution: "Universidad de Talca", link: "" },
  { name: "Pablo", surname: "Riveros Argel", country: "Chile", institution: "Universidad de Chile", link: "https://orcid.org/0000-0002-5239-7957" },
  { name: "Raphael", surname: "Ferbas", country: "Colombia/Austria", institution: "Universidad Externado de Colombia", link: "https://www.researchgate.net/profile/Raphael-Ferbas" },
  { name: "Ricardo", surname: "Benavides", country: "Colombia", institution: "Universidad de San Buenaventura", link: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001563238" },
  { name: "Rodolfo", surname: "Franco", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "" },
  { name: "Virginia", surname: "Morales Olmos", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://exportcvuy.anii.org.uy/cv/?bf0e9f52fa55f6e6b13d3eab0833f3e029d259e759223a59ad399aa3e2f190e0f09493d37ffd05e6eb25c28297a095f1043592246277e2566e1a899763ee4ccf" },
  { name: "Pablo", surname: "López Garnica", country: "Colombia", institution: "Universidad Nacional de Colombia", link: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000151419" },
  { name: "Yuri", surname: "Aguilar Hernández", country: "México", institution: "Universidad Nacional Autónoma de México (UNAM)", link: "http://blogs.fad.unam.mx/asignatura/yuri_aguilar/?page_id=51" },
  { name: "Ronald", surname: "Salas", country: "Costa Rica", institution: "Universidad Nacional de Costa Rica (UNA)", link: "https://scholar.google.com/citations?user=OljQMWMAAAAJ&hl=es" },
  { name: "Rafael", surname: "Miranda Garrido", country: "México", institution: "Instituto Politécnico Nacional (IPN)", link: "https://www.incomplex.org/paises/mexico/name/rafael-miranda-garrido/" },
  { name: "Julio", surname: "Sayes", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "" },
  { name: "Jonathan", surname: "Gordillo Sánchez", country: "Colombia", institution: "Pontificia Universidad Javeriana", link: "https://scholar.google.com/citations?user=V2ocFfoAAAAJ&hl=es" },
  { name: "Patricia", surname: "Iribarne", country: "Uruguay", institution: "Universidad de la República, Uruguay", link: "https://export.cvuy.uy/cv/?c857c85bbeb9576f5060021e43a79272f1cea064092dd7f65aea76852dbc5ed7e6382e5fda7973c6a8448de57251eb2ad47564f79fce0dcb9e83ef03ed7bd437" },
  { name: "Andrea", surname: "Núñez Romero", country: "Chile", institution: "Universidad Austral de Chile", link: "https://www.linkedin.com/in/andrea-n%C3%BA%C3%B1ez-romero-92005976/" },
  { name: "Isabel", surname: "Calvo González", country: "Costa Rica", institution: "Universidad Nacional de Costa Rica (UNA)", link: "https://orcid.org/0000-0002-9622-5874" },
  { name: "Claudio", surname: "Martínez Debat", country: "Uruguay", institution: "Facultad de Ciencias, Universidad de la República", link: "https://export.cvuy.uy/cv/?87a4b70d1e132edd3c635e6907e1e2d75027e5037fcf71987052a6a7ecf357c6aeee2948fd522252c08547250eddae5e091a759be5acd08b3e462d6c67ccb8ab" },
  { name: "Oscar", surname: "Juarez", country: "Costa Rica", institution: "Universidad Nacional de Costa Rica (UNA)", link: "https://orcid.org/0000-0002-4799-0350" },
  { name: "Josefina", surname: "Rodriguez", country: "México", institution: "Universidad Autónoma de Coahuila", link: "https://riicca.org/team/ada-ross-2-2-2-2-2-2-2-2-2/" },
  { name: "Margarita", surname: "Manosalva", country: "Ecuador", institution: "FLACSO Ecuador", link: "https://orcid.org/0000-0002-6083-6307" },
  { name: "Edilson", surname: "Soldevilla", country: "Perú", institution: "Universidad Nacional Agraria La Molina", link: "https://orcid.org/0009-0007-8042-5373" },
  { name: "Guadalupe", surname: "Peres-Cajías", country: "Bolivia", institution: "Universidad Católica Boliviana", link: "https://guadaperescajias.com/" },
  { name: "Rebeca", surname: "Silva Roquefort", country: "Chile", institution: "Universidad de Chile", link: "https://orcid.org/0000-0002-1733-4168" },
  { name: "Silvia", surname: "Argüello Vargas", country: "Costa Rica", institution: "Universidad Nacional de Costa Rica (UNA)", link: "https://orcid.org/0000-0002-3832-1323" },
  { name: "Viviana", surname: "Salgado Silva", country: "Costa Rica", institution: "Universidad Nacional de Costa Rica (UNA)", link: "https://www.rectoria-adjunta.una.ac.cr/index.php/personalra/67-m-sc-viviana-salgado-silva" },
  { name: "Gilda", surname: "Wolf Amaya", country: "Colombia", institution: "Universidad Nacional de Colombia", link: "https://scholar.google.com/citations?user=yKo3nT4AAAAJ&hl=es" },
  { name: "Luciano", surname: "Villalba", country: "Argentina", institution: "Universidad Nacional del Centro de la Provincia de Buenos Aires", link: "https://www.researchgate.net/profile/Luciano-Villalba" },
  { name: "Pía", surname: "Torres", country: "Chile", institution: "Universidad de Chile", link: "https://orcid.org/0009-0004-3777-949X" }
].sort((a, b) => a.surname.localeCompare(b.surname)); // Ordenado alfabéticamente por apellido

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
