
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Investigacion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BUENAS' | 'CONFERENCIAS'>('BUENAS');
  const [filter, setFilter] = useState('ALL');

  const filteredProjects = PROJECTS.filter(p => filter === 'ALL' || p.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <div className="mb-16">
        <div className="w-10 h-1 bg-primary mb-2"></div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Investigación</h1>
      </div>

      {/* Tabs with Vertical Divider and Top Indicator */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center">
          <button 
            onClick={() => setActiveTab('BUENAS')}
            className={`relative px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
              activeTab === 'BUENAS' ? 'text-primary' : 'text-gray-900 dark:text-gray-400'
            }`}
          >
            {activeTab === 'BUENAS' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary"></div>
            )}
            Buenas Prácticas
          </button>
          
          <div className="h-10 w-[1px] bg-gray-300 dark:bg-gray-700"></div>

          <button 
            onClick={() => setActiveTab('CONFERENCIAS')}
            className={`relative px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
              activeTab === 'CONFERENCIAS' ? 'text-primary' : 'text-gray-900 dark:text-gray-400'
            }`}
          >
            {activeTab === 'CONFERENCIAS' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary"></div>
            )}
            Conferencias
          </button>
        </div>
      </div>

      {activeTab === 'BUENAS' ? (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-10 text-gray-600 dark:text-gray-400 max-w-4xl text-lg leading-relaxed">
            <p>
              El grupo de investigación SWAM se dedica al desarrollo de soluciones tecnológicas innovadoras en el ámbito de la gestión de recursos hídricos.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mb-12 border-t border-gray-100 pt-8">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Estado del Proyecto</label>
            <div className="flex gap-4">
              <select 
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm p-2 rounded-md w-56 focus:ring-primary focus:border-primary transition-all shadow-sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="ALL">TODOS</option>
                <option value="FINALIZADO">FINALIZADO</option>
                <option value="EN EJECUCIÓN">EN EJECUCIÓN</option>
              </select>
            </div>
          </div>

          {/* Grid of Projects (Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="flex flex-col bg-white dark:bg-gray-800 rounded-sm overflow-hidden group">
                {/* Image with Status Badge */}
                <div className="aspect-[3/4] overflow-hidden relative mb-6 bg-gray-100 dark:bg-gray-700">
                  <img 
                    src={project.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"} 
                    alt={project.title} 
                    className="w-full h-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg rounded-sm ${
                      project.status === 'FINALIZADO' ? 'bg-green-500 text-white' : 'bg-primary text-gray-900'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex flex-col space-y-4">
                  <div className="w-10 h-0.5 bg-primary"></div>
                  
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 space-y-3 leading-relaxed">
                    <p className="text-justify font-medium italic mb-3 line-clamp-4">{project.description}</p>
                    
                    <div className="space-y-2 pt-2">
                      <div className="flex border-b border-gray-50 dark:border-gray-700 pb-1">
                        <span className="w-20 font-bold uppercase shrink-0">Autores</span>
                        <span className="flex-1 italic">{project.authors}</span>
                      </div>
                      
                      <div className="flex pt-1 items-start">
                        <span className="w-20 font-bold uppercase shrink-0">Archivo</span>
                        <div className="flex-1">
                          <a href="#" className="inline-flex items-center gap-2 text-red-500 font-bold hover:underline">
                            <span className="material-icons text-base">picture_as_pdf</span>
                            <span className="truncate">{project.file}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-12">
            {[
              { 
                tag: 'Martes de Naturaleza', 
                title: 'Conferencia: "Agua y ciudad. Cumplimiento de los ODS"', 
                description: 'Análisis detallado de los desafíos urbanos en la gestión del agua y estrategias para el cumplimiento de los Objetivos de Desarrollo Sostenible (ODS) de la ONU en entornos municipales.',
                date: '20 de Septiembre, 2022', 
                icon: 'event_note' 
              },
              { 
                tag: 'Congreso Internacional', 
                title: 'Ponencia: Tecnologías emergentes en Hidrología', 
                description: 'Exploración de innovaciones tecnológicas como sensores IoT de bajo costo, gemelos digitales y modelos predictivos para la optimización de redes de distribución de agua potable.',
                date: '15 de Noviembre, 2023', 
                icon: 'mic_external_on' 
              }
            ].map((conf, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-8 group hover:shadow-lg transition-all duration-300">
                <div className="md:w-1/3 aspect-video bg-gray-100 dark:bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                  <span className="material-symbols-outlined text-6xl text-gray-300 group-hover:text-primary transition-colors">{conf.icon}</span>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">{conf.tag}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{conf.title}</h3>
                  <p className="text-xs text-gray-400 font-medium mb-3">{conf.date}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                    {conf.description}
                  </p>
                  <div className="pt-6 border-t border-gray-50 dark:border-gray-700 mt-auto">
                    <a href="#" className="flex items-center gap-2 text-red-500 font-bold text-[10px] uppercase hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                      Descargar Ponencia
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Investigacion;
