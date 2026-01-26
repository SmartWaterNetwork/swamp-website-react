import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';

const Investigacion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BUENAS PRÁCTICAS' | 'CONFERENCIAS'>('BUENAS PRÁCTICAS');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(p => {
    const tabMatch = p.category === activeTab;
    const statusMatch = statusFilter === 'ALL' || p.status === statusFilter;
    return tabMatch && (activeTab === 'CONFERENCIAS' ? true : statusMatch);
  });

  const handleDownload = (fileUrl: string) => {
    if (fileUrl && fileUrl !== '#') {
      window.open(fileUrl, '_blank');
    }
  };

  if (selectedProject) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in duration-500">
        <button
          onClick={() => setSelectedProject(null)}
          className="flex items-center text-primary font-bold text-sm uppercase tracking-widest mb-12 hover:translate-x-[-8px] transition-transform group"
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          VOLVER A INVESTIGACIÓN
        </button>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <img
                src={selectedProject.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"}
                alt={selectedProject.title}
                className="w-full rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
              />
            </div>
            <div className="md:w-2/3">
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                {selectedProject.title}
              </h1>
              <div className="flex gap-4 items-center">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  {selectedProject.category}
                </span>
                {selectedProject.status && (
                  <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                    {selectedProject.status}
                  </span>
                )}
              </div>
              <div className="mt-8 flex gap-4">
                {selectedProject.file && selectedProject.file !== '#' && (
                  <button
                    onClick={() => handleDownload(selectedProject.file)}
                    className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary/90 transition-all flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm">download</span>
                    DESCARGAR PDF
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 mt-12">
          {selectedProject.mdFile ? (
            <MarkdownRenderer filename={selectedProject.mdFile} />
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              <p>{selectedProject.description}</p>
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Autores</h4>
                <p className="text-gray-600 dark:text-gray-400 italic">{selectedProject.authors}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="w-16 h-1 bg-primary mb-4"></div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Investigación</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
            Proyectos de investigación y participación en conferencias científicas del grupo SWAM.
          </p>
        </div>

        <div className="inline-flex bg-white dark:bg-gray-800 p-1.5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => { setActiveTab('BUENAS PRÁCTICAS'); setStatusFilter('ALL'); }}
            className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'BUENAS PRÁCTICAS'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-gray-500 hover:text-primary'
              }`}
          >
            BUENAS PRÁCTICAS
          </button>
          <button
            onClick={() => { setActiveTab('CONFERENCIAS'); setStatusFilter('ALL'); }}
            className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'CONFERENCIAS'
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'text-gray-500 hover:text-primary'
              }`}
          >
            CONFERENCIAS
          </button>
        </div>
      </div>

      {activeTab === 'BUENAS PRÁCTICAS' && (
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Estado:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            >
              <option value="ALL">Cualquiera</option>
              <option value="FINALIZADO">Finalizado</option>
              <option value="EN EJECUCIÓN">En Ejecución</option>
            </select>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {project.status && (
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold shadow-lg ${project.status === 'FINALIZADO' ? 'bg-green-500 text-white' : 'bg-primary text-white'
                    }`}>
                    {project.status}
                  </span>
                </div>
              )}
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
                {project.tag || project.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-700 flex justify-between items-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline"
                >
                  Información
                </button>
                {project.file && project.file !== '#' && (
                  <button
                    onClick={() => handleDownload(project.file)}
                    className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">download</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investigacion;
