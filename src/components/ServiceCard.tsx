import React from 'react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  isReversed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isReversed = false }) => {
  return (
    <div className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} overflow-hidden bg-white rounded-lg shadow-lg my-10`}>
      <div className="md:w-1/2">
        <div 
          className="h-64 md:h-full w-full bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${service.image || 'https://images.unsplash.com/photo-1588350588428-909bbe839dc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'})` 
          }}
        />
      </div>
      <div className="p-8 md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.titre}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <h4 className="font-semibold text-gray-900 mb-3">Ce que nous proposons :</h4>
        <ul className="space-y-2">
          {service.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 mt-0.5 mr-2 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
