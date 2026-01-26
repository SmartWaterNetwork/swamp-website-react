
import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    image: "/assets/hero/slide-1.jpg",
    title: "Smart Water Network Team",
    description: "Investigadores dedicados a la gestión inteligente del agua en la UTPL."
  },
  {
    image: "/assets/hero/slide-2.jpg",
    /*title: "Oportunidades de Investigación",
    description: "Únete a nuestro equipo y participa en proyectos de innovación hídrica."*/
    title: "",
    description: ""
  },
  {
    image: "/assets/hero/slide-3.jpg",
    title: "Tecnología de Medición",
    description: "Equipamiento avanzado para experimentos y monitoreo en tiempo real."
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    title: "Investigación de vanguardia",
    description: "Desarrollando soluciones inteligentes para la gestión del agua."
  }/*,
  {
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1200",
    title: "Tecnología y Sostenibilidad",
    description: "Integrando sensores y análisis de datos en tiempo real."
  }*/
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Main Slider Section */}
      <section className="relative w-full h-[500px] overflow-hidden bg-gray-900 group">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {SLIDES.map((slide, idx) => (
            <div key={idx} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-gray-200 drop-shadow-sm">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Reference Style: Red circles with white arrows) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-lg"
        >
          <span className="material-icons">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-lg"
        >
          <span className="material-icons">chevron_right</span>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Feature Cards Section - Adjusted for centered pattern from reference */}
      <section className="bg-gray-100 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
                Recopilación y el uso de datos
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
                Operaciones de la red de agua ofrecen la promesa de mejores operaciones a través de un mejor conocimiento y un control más estricto de los activos extensos y complejos de la red. La industria del agua no es tradicionalmente una de las primeras en adoptar rápidamente estas soluciones, pero se está adaptando rápidamente a esta nueva necesidad.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
                Redes inteligentes de agua en capas
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
                como cualquier ecosistema de datos, a partir de sensores, control remoto y fuentes de datos empresariales, a través de la recopilación de datos y comunicaciones, gestión y visualización de datos, y hasta fusión y análisis de datos. Este último cubre muchas categorías, desde soporte de decisiones, automatización hasta soluciones analíticas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
                Soluciones de Smart Water Network
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
                Mejoran la <span className="font-bold text-gray-700 dark:text-white">eficiencia, la longevidad y la confiabilidad</span> de la red física de agua subyacente al medir, recopilar, analizar y actuar mejor en una amplia gama de eventos de la red. Esto puede tomar forma en diferentes fases del proceso de servicios públicos, como la supervisión y automatización en tiempo real, la preparación operativa o la planificación de la red.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="block w-12 h-1 bg-primary mb-4"></span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Bienvenido a Smart Water Network</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            <p>
              El Laboratorio de Gestión Inteligente del Agua (Smart Water Network - SWAM) ha sido desarrollado como una herramienta para la educación e investigación en Gestión del Agua. Esta herramienta, interactiva, de acceso libre, permite realizar "Experimentos Virtuales" sin el uso directo de software especializado en simulación del agua.
            </p>
            <p>
              En los experimentos virtuales se describe completamente, el fundamento teórico, objetivos y procedimientos de cada experimento.
            </p>
            <p>
              Espero que disfrute de una grata experiencia en nuestro Laboratorio Virtual. El SWAM actualmente se encuentra en desarrollo. Por favor reporte todos los comentarios, errores, y sugerencias a <a className="text-primary font-bold hover:underline" href="mailto:hmbenavides@utpl.edu.ec">hmbenavides@utpl.edu.ec</a>.
            </p>

            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800/50 border-l-4 border-gray-300 dark:border-gray-700 italic text-sm">
              Advertencia: La UTPL o los autores, no se responsabilizan por los errores o mala interpretación, en la información generada en el SWAM.
            </div>

            <div className="mt-10">
              <p className="font-bold text-xl text-gray-900 dark:text-white">Holger Benavides</p>
              <p className="text-gray-500 uppercase text-xs tracking-widest font-bold">Departamento de Ingeniería Civil - UTPL</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
