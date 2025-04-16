import React from 'react';
import { Piscine } from '../data/piscines';

interface PiscineCardProps {
  piscine: Piscine;
}

const PiscineCard: React.FC<PiscineCardProps> = ({ piscine }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="flex-shrink-0">
        <div 
          className="h-48 w-full object-cover bg-center bg-cover" 
          style={{ 
            backgroundImage: `url(${piscine.image || 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'})` 
          }}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          {piscine.populaire && (
            <p className="mb-2 text-sm font-medium text-blue-600">
              Modèle populaire
            </p>
          )}
          <h3 className="text-xl font-semibold text-gray-900">{piscine.nom}</h3>
          <p className="mt-3 text-base text-gray-600">{piscine.description}</p>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Dimensions disponibles :</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {piscine.dimensions.map((dimension, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
                >
                  {dimension}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Caractéristiques :</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              {piscine.caracteristiques.map((caracteristique, index) => (
                <li key={index} className="flex items-center">
                  <svg className="mr-1.5 h-4 w-4 flex-shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {caracteristique}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="text-lg font-bold text-blue-700">{piscine.prix}</div>
          <div className="ml-4">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Détails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiscineCard;
