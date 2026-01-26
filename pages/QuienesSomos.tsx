
import React from 'react';

const QuienesSomos: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 relative">
        <span className="absolute -top-6 left-0 w-12 h-1 bg-primary"></span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Quiénes Somos</h1>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">
          Innovación y desarrollo para la sostenibilidad del ciclo urbano y rural del agua
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
          <div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Epígrafe</span>
            <p className="text-xl font-bold text-gray-900 dark:text-white">I+D SMART WATER NETWORK</p>
          </div>
          <div>
            <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Acrónimo</span>
            <p className="text-xl font-bold text-gray-900 dark:text-white">ImDSCURA</p>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-12 text-justify">
          El Grupo humano de Investigación que conforman "I+D Smart water network" tienen entre sus propósitos apoyar la gestión sostenible del agua -ciclo urbano y rural-, en el marco de la gestión integral del recurso hídrico (GIRH), de tal manera que los usos consuntivos y no consuntivos se desarrollen apropiadamente.
        </p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary pl-4 uppercase tracking-widest">Objetivos</h3>
        <div className="space-y-6">
          <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">1</div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Enriquecer el acervo científico y tecnológico referido a la sostenibilidad del ciclo urbano y rural del agua, en el marco de la gestión integral del recurso hídrico.
            </p>
          </div>
          <div className="flex gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-lg">2</div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Transferir tecnologías a las organizaciones encargadas de gestionar los recursos hídricos a nivel de abastecimientos para consumo humano, saneamiento, riego y drenajes.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-primary relative overflow-hidden group">
          <span className="material-icons absolute top-4 right-4 text-6xl text-gray-100 dark:text-gray-700/50 group-hover:scale-110 transition-transform">science</span>
          <h4 className="inline-block bg-primary text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-6">Líneas de Investigación</h4>
          <ul className="space-y-3 relative z-10">
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Sostenibilidad del ciclo urbano y rural</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary"></span> Gestión Integral del Recurso Hídrico</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-l-4 border-primary relative overflow-hidden group">
          <span className="material-icons absolute top-4 right-4 text-6xl text-gray-100 dark:text-gray-700/50 group-hover:scale-110 transition-transform">water_drop</span>
          <h4 className="inline-block bg-primary text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-6">Campos de Estudio</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 relative z-10 columns-1">
            <li>• Áreas protegidas y deforestación.</li>
            <li>• Fotocatálisis y tratamiento de agua.</li>
            <li>• Gobernanza ambiental.</li>
            <li>• Hidráulica computacional.</li>
            <li>• Sensores y tecnologías inteligentes.</li>
            <li>• Drenajes viales y control de escurrimientos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
