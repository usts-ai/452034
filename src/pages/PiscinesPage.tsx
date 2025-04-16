import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PiscineCard from '../components/PiscineCard';
import { piscines } from '../data/piscines';

const PiscinesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Filtrer les piscines en fonction du critère sélectionné
  const filteredPiscines = filter === 'all' 
    ? piscines 
    : filter === 'populaire' 
      ? piscines.filter(p => p.populaire) 
      : piscines.filter(p => !p.populaire);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Nos modèles de piscines
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-blue-100">
            Découvrez notre gamme complète de piscines en coque polyester de haute qualité. 
            Différentes tailles et formes pour s'adapter à tous les espaces.
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-lg font-medium text-gray-900 mb-4 md:mb-0">Filtrer nos modèles</h2>
            <div className="flex space-x-4">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous les modèles
              </button>
              <button
                onClick={() => setFilter('populaire')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'populaire' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Modèles populaires
              </button>
              <button
                onClick={() => setFilter('other')}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  filter === 'other' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Autres modèles
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Piscines Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPiscines.map((piscine) => (
            <PiscineCard key={piscine.id} piscine={piscine} />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:py-16 lg:px-16">
              <div className="md:flex md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Prêt à faire le grand plongeon?</span>
                  </h2>
                  <p className="mt-3 text-lg text-blue-100">
                    Contactez-nous pour obtenir un devis personnalisé et gratuit adapté à votre projet.
                  </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Tout ce que vous devez savoir sur nos piscines en coque.
          </p>
        </div>
        
        <div className="mt-12">
          <dl className="space-y-6 divide-y divide-gray-200">
            <div className="pt-6">
              <dt className="text-lg font-medium text-gray-900">
                Quelle est la durée de vie d'une piscine en coque polyester ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Nos piscines en coque polyester ont une durée de vie exceptionnelle pouvant atteindre 50 ans avec un entretien approprié. Nous offrons une garantie décennale sur la structure et l'étanchéité de nos coques.
              </dd>
            </div>
            
            <div className="pt-6">
              <dt className="text-lg font-medium text-gray-900">
                Combien de temps dure l'installation complète d'une piscine ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                L'installation complète, du terrassement à la mise en eau, prend généralement entre 7 et 10 jours ouvrés, selon la complexité du projet et les conditions météorologiques.
              </dd>
            </div>
            
            <div className="pt-6">
              <dt className="text-lg font-medium text-gray-900">
                Vos piscines sont-elles conformes aux normes de sécurité ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Absolument. Toutes nos installations sont conformes à la législation française en vigueur concernant la sécurité des piscines. Nous proposons différentes solutions de sécurité (alarmes, couvertures, barrières) conformes à la norme NF P 90-308.
              </dd>
            </div>
            
            <div className="pt-6">
              <dt className="text-lg font-medium text-gray-900">
                Est-il possible de personnaliser ma piscine ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Oui, nous offrons de nombreuses options de personnalisation : choix de couleur du revêtement, types d'escaliers, équipements (nage à contre-courant, chauffage, éclairage LED, traitement automatisé) et aménagements périphériques (plages, terrasses).
              </dd>
            </div>
            
            <div className="pt-6">
              <dt className="text-lg font-medium text-gray-900">
                Quelles sont les démarches administratives nécessaires ?
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                L'installation d'une piscine nécessite généralement une déclaration préalable de travaux auprès de votre mairie. Pour les piscines de plus de 100m², un permis de construire est requis. Notre équipe vous accompagne dans toutes ces démarches administratives.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold text-white">Aqua Piscines Hérault</h3>
              <p className="mt-4 text-base text-gray-400">
                Votre spécialiste des piscines en coque polyester dans l'Hérault. Qualité, rapidité et service complet pour votre projet piscine.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/" className="text-base text-gray-300 hover:text-white">Accueil</a></li>
                <li><a href="/piscines" className="text-base text-gray-300 hover:text-white">Nos Piscines</a></li>
                <li><a href="/services" className="text-base text-gray-300 hover:text-white">Nos Services</a></li>
                <li><a href="#contact" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Légal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Mentions légales</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">CGV</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2025 Aqua Piscines Hérault. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PiscinesPage;
