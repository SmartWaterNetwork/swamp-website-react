
import React from 'react';
import { BLOG_POSTS } from '../constants';

const BlogTecnico: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
      <div className="mb-16">
        <div className="w-16 h-1 bg-primary mb-4"></div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Blog Técnico</h1>
        <div className="mt-6 text-gray-600 dark:text-gray-400 max-w-4xl text-lg leading-relaxed space-y-4">
          <p>
            En esta sección encontrará resultados de trabajos científicos relacionados a la ingeniería hidráulica y temas afines. También encontrará trabajos que plantean preguntas o comentarios a procesos, diseños, especificaciones o sucesos actuales.
          </p>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-sm font-medium">
              Si usted está interesado en participar en el Blog Técnico, por favor envíe su documento a: <a href="mailto:hmbenavides@utpl.edu.ec" className="text-primary font-bold hover:underline">hmbenavides@utpl.edu.ec</a>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {BLOG_POSTS.map((post, idx) => (
          <article
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-gray-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-10 md:w-3/5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <div className="h-1 w-16 bg-primary mb-6 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify mb-8">
                {post.description}
              </p>
              <div className="pt-6 border-t border-gray-50 dark:border-gray-700 mt-auto">
                <button className="flex items-center text-primary font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  LEER MÁS
                  <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogTecnico;
