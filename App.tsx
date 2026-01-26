
import React, { useState, useEffect, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Equipo from './pages/Equipo';
import Software from './pages/Software';
import BlogTecnico from './pages/BlogTecnico';
import Investigacion from './pages/Investigacion';
import RecursosAcademicos from './pages/RecursosAcademicos';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderContent = useCallback(() => {
    switch (currentPage) {
      case Page.HOME: return <Home />;
      case Page.QUIENES_SOMOS: return <QuienesSomos />;
      case Page.EQUIPO: return <Equipo />;
      case Page.SOFTWARE: return <Software />;
      case Page.BLOG_TECNICO: return <BlogTecnico />;
      case Page.INVESTIGACION: return <Investigacion />;
      case Page.R_ACADEMICOS: return <RecursosAcademicos />;
      default: return <Home />;
    }
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>

      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
