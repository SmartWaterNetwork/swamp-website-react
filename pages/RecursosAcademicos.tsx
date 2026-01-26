
import React, { useState } from 'react';
import { ACADEMIC_RESOURCES, ACADEMIC_VIDEOS } from '../constants';

const RecursosAcademicos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PUBLICACIONES' | 'VIDEOS'>('PUBLICACIONES');
  const [category, setCategory] = useState('- Cualquiera -');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredResources = ACADEMIC_RESOURCES.filter(r => 
    category === '- Cualquiera -' || r.category === category
  );

  const filteredVideos = ACADEMIC_VIDEOS.filter(v =>
    category === '- Cualquiera -' || v.category === category
  );

  const currentList = activeTab === 'PUBLICACIONES' ? filteredResources : filteredVideos;
  const hasMore = currentList.length > visibleCount;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleTabChange = (tab: 'PUBLICACIONES' | 'VIDEOS') => {
    setActiveTab(tab);
    setCategory('- Cualquiera -');
    setVisibleCount(6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <div className="mb-12">
        <div className="w-10 h-1 bg-primary mb-2"></div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Recursos Academicos</h1>
      </div>

      {/* Tabs Layout */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center">
          <button 
            onClick={() => handleTabChange('PUBLICACIONES')}
            className={`relative px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
              activeTab === 'PUBLICACIONES' ? 'text-primary' : 'text-gray-900 dark:text-gray-400'
            }`}
          >
            {activeTab === 'PUBLICACIONES' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary"></div>
            )}
            PUBLICACIONES
          </button>
          
          <div className="h-10 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2"></div>

          <button 
            onClick={() => handleTabChange('VIDEOS')}
            className={`relative px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
              activeTab === 'VIDEOS' ? 'text-primary' : 'text-gray-900 dark:text-gray-400'
            }`}
          >
            {activeTab === 'VIDEOS' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary"></div>
            )}
            VIDEOS
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mb-12 border-t border-gray-100 pt-8">
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Categoría</label>
        <div className="flex gap-4">
          <select 
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm p-2 rounded-md w-56 focus:ring-primary focus:border-primary transition-all shadow-sm"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setVisibleCount(6);
            }}
          >
            <option>- Cualquiera -</option>
            {activeTab === 'PUBLICACIONES' ? (
              <>
                <option>Artículos</option>
                <option>Libros</option>
                <option>Revistas</option>
                <option>Manuales</option>
              </>
            ) : (
              <>
                <option>Software</option>
                <option>Tutoriales</option>
                <option>Conferencias</option>
                <option>Proyecto de vinculación</option>
              </>
            )}
          </select>
          <button className="bg-primary text-gray-900 px-8 py-2 rounded-sm font-bold text-xs uppercase hover:bg-primary-hover transition-all shadow-md">
            Aplicar
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-2">
        {activeTab === 'PUBLICACIONES' ? (
          filteredResources.slice(0, visibleCount).map((resource, idx) => (
            <div key={idx} className="flex flex-col bg-white dark:bg-gray-800 rounded-sm overflow-hidden group">
              {/* Image with Category Badge (Style from Videos) */}
              <div className="aspect-[3/4] overflow-hidden relative mb-6">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover shadow-sm group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-gray-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg rounded-sm">
                    {resource.type || resource.category}
                  </span>
                </div>
              </div>

              {/* Standardized Pattern Block */}
              <div className="flex flex-col space-y-4">
                <div className="w-10 h-0.5 bg-primary"></div>
                
                {/* Title */}
                <h3 className="text-sm font-bold text-gray-800 dark:text-white leading-snug">
                  {resource.title}
                </h3>
                
                {/* Pattern: Description -> Autores -> Año -> Archivo */}
                <div className="text-[10px] text-gray-500 dark:text-gray-400 space-y-3 leading-relaxed">
                  {resource.description && (
                    <p className="text-justify font-medium italic mb-3 line-clamp-4">{resource.description}</p>
                  )}
                  
                  <div className="space-y-2 pt-2">
                    {/* Authors */}
                    <div className="flex border-b border-gray-50 dark:border-gray-700 pb-1">
                      <span className="w-20 font-bold uppercase shrink-0">Autores</span>
                      <span className="flex-1 italic">{resource.authors || 'Sin especificar'}</span>
                    </div>
                    
                    {/* Year */}
                    <div className="flex border-b border-gray-50 dark:border-gray-700 pb-1">
                      <span className="w-20 font-bold uppercase shrink-0">Año</span>
                      <span className="flex-1">{resource.year || resource.publishedAt || 'N/A'}</span>
                    </div>

                    {/* File (Last element as requested) */}
                    <div className="flex pt-1 items-start">
                      <span className="w-20 font-bold uppercase shrink-0">Archivo</span>
                      <div className="flex-1">
                        <a href="#" className="inline-flex items-center gap-2 text-red-500 font-bold hover:underline group/file">
                          <span className="material-icons text-base">picture_as_pdf</span>
                          <span className="truncate">{resource.fileName || 'Descargar archivo.pdf'}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          filteredVideos.slice(0, visibleCount).map((video, idx) => (
            <div key={idx} className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden bg-gray-900 relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-500" 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-icons text-white text-5xl drop-shadow-lg">play_circle</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[9px] font-bold px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-gray-900 text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg rounded-sm">
                    {video.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-2 leading-snug group-hover:text-primary transition-colors mb-3">
                  {video.title}
                </h3>
                <div className="w-8 h-0.5 bg-gray-100 dark:bg-gray-700"></div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={handleShowMore}
            className="flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg active:scale-95"
          >
            Mostrar más resultados
            <span className="material-icons text-sm">add_circle_outline</span>
          </button>
        </div>
      )}

      {/* Content Counter */}
      <div className="mt-8 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        Mostrando {Math.min(visibleCount, currentList.length)} de {currentList.length} elementos
      </div>
    </div>
  );
};

export default RecursosAcademicos;
