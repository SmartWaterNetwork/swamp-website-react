
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = Object.values(Page);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-sm border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => onNavigate(Page.HOME)}
          >
            <img
              alt="UTPL SMART WATER NETWORK"
              className="h-19 w-auto"
              src="/assets/swam-logo-full.png"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`px-1 pt-1 text-xs font-bold transition-all border-b-2 hover:text-primary ${currentPage === item
                    ? 'border-primary text-gray-900 dark:text-white'
                    : 'border-transparent text-gray-500 dark:text-gray-400'
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-primary focus:outline-none"
            >
              <span className="material-icons">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-bold rounded-md ${currentPage === item
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
