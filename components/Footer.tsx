
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <img
                alt="UTPL SMART WATER NETWORK"
                className="h-24 w-auto brightness-0 invert"
                src="/assets/logo-utpl-footer.png"
              />
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-primary"></div>
              <h4 className="text-lg font-bold uppercase tracking-wider">Contactos</h4>
            </div>
            <address className="not-italic text-sm text-gray-400 space-y-3">
              <p className="flex justify-end gap-2 items-start"><span className="text-right">Ecuador</span> <span className="material-icons text-primary text-lg">location_on</span></p>
              <p className="text-right leading-relaxed"><span className="font-semibold text-white">Dirección:</span> Marcelino Champagnat s/n</p>
              <p className="text-right"><span className="font-semibold text-white">Teléfono:</span> +593 3701444</p>
              <p className="text-right underline decoration-primary/50"><span className="font-semibold text-white">Email:</span> hmbenavides@utpl.edu.ec</p>
            </address>
          </div>

          {/* Menu */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-primary"></div>
              <h4 className="text-lg font-bold uppercase tracking-wider">Menu Principal</h4>
            </div>
            <ul className="text-sm text-gray-400 space-y-2">
              {Object.values(Page).map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item)}
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span>•</span> {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-primary"></div>
              <h4 className="text-lg font-bold uppercase tracking-wider">Redes Sociales</h4>
            </div>
            <ul className="text-sm text-gray-400 space-y-2">
              {['Facebook', 'Twitter', 'Instagram', 'Google'].map(social => (
                <li key={social}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span>•</span> {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Copyright © 2026. <span className="text-white">UTPL</span>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
