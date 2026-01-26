import React, { useState } from 'react';
import { ACADEMIC_RESOURCES, ACADEMIC_VIDEOS } from '../constants';
import { AcademicResource, AcademicVideo } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';

const RecursosAcademicos: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PUBLICACIONES' | 'VIDEOS'>('PUBLICACIONES');
  const [selectedItem, setSelectedItem] = useState<AcademicResource | AcademicVideo | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('Cualquiera');
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handleDownload = (pdfUrl?: string) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  const getEmbedUrl = (url?: string) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : url;
  };

  const handleVideoLink = (videoUrl?: string) => {
    if (videoUrl) {
      setPlayingVideo(getEmbedUrl(videoUrl));
    }
  };

  const filteredResources = ACADEMIC_RESOURCES.filter(r =>
    categoryFilter === 'Cualquiera' || r.category === categoryFilter
  );

  const filteredVideos = ACADEMIC_VIDEOS.filter(v =>
    categoryFilter === 'Cualquiera' || v.category === categoryFilter
  );

  const categories = activeTab === 'PUBLICACIONES'
    ? ['Cualquiera', ...Array.from(new Set(ACADEMIC_RESOURCES.map(r => r.category)))]
    : ['Cualquiera', ...Array.from(new Set(ACADEMIC_VIDEOS.map(v => v.category)))];

  if (selectedItem) {
    const isResource = 'image' in selectedItem;

    return (
      <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in duration-500">
        <button
          onClick={() => setSelectedItem(null)}
          className="flex items-center text-primary font-bold text-sm uppercase tracking-widest mb-12 hover:translate-x-[-8px] transition-transform group"
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          VOLVER A RECURSOS
        </button>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <img
                src={isResource ? (selectedItem as AcademicResource).image : (selectedItem as AcademicVideo).thumbnail}
                alt={selectedItem.title}
                className="w-full rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700"
              />
            </div>
            <div className="md:w-2/3">
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                {selectedItem.title}
              </h1>
              <div className="flex gap-4 items-center">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  {selectedItem.category}
                </span>
                {isResource && (selectedItem as AcademicResource).year && (
                  <span className="text-gray-400 text-xs font-bold">{(selectedItem as AcademicResource).year}</span>
                )}
              </div>
              <div className="mt-8 flex gap-4">
                {isResource && (selectedItem as AcademicResource).pdfFile && (
                  <button
                    onClick={() => handleDownload((selectedItem as AcademicResource).pdfFile)}
                    className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary/90 transition-all flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm">download</span>
                    DESCARGAR PDF
                  </button>
                )}
                {!isResource && (selectedItem as AcademicVideo).videoUrl && (
                  <button
                    onClick={() => handleVideoLink((selectedItem as AcademicVideo).videoUrl)}
                    className="px-6 py-2 bg-red-600 text-white text-xs font-bold rounded-full hover:bg-red-700 transition-all flex items-center"
                  >
                    <span className="material-symbols-outlined mr-2 text-sm">play_circle</span>
                    REPRODUCIR VIDEO
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 mt-12">
          {selectedItem.mdFile && (
            <MarkdownRenderer filename={selectedItem.mdFile} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      {/* Video Modal */}
      {playingVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setPlayingVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              onClick={() => setPlayingVideo(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <iframe
              src={playingVideo}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="w-16 h-1 bg-primary mb-4"></div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Recursos Académicos</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
            Material educativo y de investigación compartido para la comunidad académica y profesional.
          </p>
        </div>

        <div className="inline-flex bg-white dark:bg-gray-800 p-1.5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <button
            onClick={() => { setActiveTab('PUBLICACIONES'); setCategoryFilter('Cualquiera'); }}
            className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'PUBLICACIONES'
              ? 'bg-primary text-white shadow-lg shadow-primary/20'
              : 'text-gray-500 hover:text-primary'
              }`}
          >
            PUBLICACIONES
          </button>
          <button
            onClick={() => { setActiveTab('VIDEOS'); setCategoryFilter('Cualquiera'); }}
            className={`px-8 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'VIDEOS'
              ? 'bg-primary text-white shadow-lg shadow-primary/20'
              : 'text-gray-500 hover:text-primary'
              }`}
          >
            VÍDEOS
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Filtrar por:</span>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="text-xs text-gray-400 font-medium italic">
          Mostrando {activeTab === 'PUBLICACIONES' ? filteredResources.length : filteredVideos.length} resultados
        </div>
      </div>

      {activeTab === 'PUBLICACIONES' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
                  {resource.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-snug">
                  {resource.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 line-clamp-3">
                  {resource.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 dark:border-gray-700 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedItem(resource)}
                    className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline"
                  >
                    Información
                  </button>
                  {resource.pdfFile && (
                    <button
                      onClick={() => handleDownload(resource.pdfFile)}
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
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div
                className="relative h-48 cursor-pointer"
                onClick={() => handleVideoLink(video.videoUrl)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl scale-0 group-hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined text-2xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded text-[10px] font-bold">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">
                  {video.category}
                </span>
                <h3 className="text-md font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-snug">
                  {video.title}
                </h3>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedItem(video)}
                    className="text-primary font-bold text-[10px] uppercase tracking-widest hover:underline"
                  >
                    Ver Detalle
                  </button>
                  <button
                    onClick={() => handleVideoLink(video.videoUrl)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <span className="material-symbols-outlined">play_circle</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecursosAcademicos;
