
import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import MarkdownRenderer from '../components/MarkdownRenderer';

const Equipo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in duration-500">
      <div className="mb-12">
        <div className="w-10 h-1 bg-primary mb-2"></div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Equipo</h1>
      </div>

      <div className="space-y-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            {/* Left Column: Fixed Width Image and Bio Data */}
            <div className="md:w-64 p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-50 dark:border-gray-700">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-md border-2 border-gray-100 dark:border-gray-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1 leading-tight">
                {member.name}
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                {member.role}
              </p>

              {/* standardized Contact Icons */}
              <div className="flex gap-4 justify-center">
                <a
                  href={`mailto:${member.email}`}
                  title="Correo electrónico"
                  className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="material-icons text-lg">email</span>
                </a>
                <a
                  href={member.linkedin || member.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Enlace"
                  className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="material-icons text-lg">link</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bio Text from Markdown */}
            <div className="flex-1 p-8 flex items-center">
              <div className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed text-justify font-medium w-full">
                {member.mdFile ? (
                  <MarkdownRenderer filename={member.mdFile} noProse />
                ) : (
                  member.description
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;
