
import React from 'react';
import { SOFTWARE_LIST } from '../constants';

const Software: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="mb-16">
        <div className="w-16 h-1 bg-primary mb-4"></div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Software</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
          Herramientas desarrolladas por el grupo de investigación SWAMP.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SOFTWARE_LIST.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="md:w-2/5 bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-8 relative overflow-hidden">
              <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-gray-200 dark:text-gray-600/30 group-hover:scale-125 transition-transform duration-700">
                {item.icon}
              </span>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-contain max-h-48 relative z-10 transform group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-8 md:w-3/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{item.name}</h3>
                <div className="h-1 w-12 bg-primary mb-6 rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify line-clamp-6">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-bold text-sm tracking-widest hover:text-primary-hover uppercase group"
                >
                  ENLACE
                  <span className="material-symbols-outlined ml-2 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Software;
