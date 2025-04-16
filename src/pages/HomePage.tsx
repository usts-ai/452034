import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PiscineCard from '../components/PiscineCard';
import ServiceCard from '../components/ServiceCard';
import { piscines } from '../data/piscines';
import { services } from '../data/services';

const HomePage: React.FC = () => {
  // Récupérer les piscines populaires
  const piscinesPopulaires = piscines.filter(piscine => piscine.populaire);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Section Hero */}
      <div className="pt-16">
        <Hero />
      </div>
      
      {/* Section Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Bienvenue chez Aqua Piscines Hérault</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Votre spécialiste piscine dans l'Hérault
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            Depuis plus de 15 ans, nous concevons, installons et entretenons des piscines en coque de haute qualité pour des clients exigeants dans toute la région.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="px-4 py-5 sm:p-6 text-center">
              <div className="rounded-md bg-blue-50 p-3 mx-auto inline-flex">
                <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Qualité garantie</h3>
              <p className="mt-2 text-base text-gray-500">
                Nos piscines en coque sont fabriquées avec les meilleurs matériaux et couvertes par une garantie de 10 ans.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="px-4 py-5 sm:p-6 text-center">
              <div className="rounded-md bg-blue-50 p-3 mx-auto inline-flex">
                <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Installation rapide</h3>
              <p className="mt-2 text-base text-gray-500">
                Du terrassement à la mise en eau, votre piscine est installée en seulement 7 jours ouvrés.
              </p>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="px-4 py-5 sm:p-6 text-center">
              <div className="rounded-md bg-blue-50 p-3 mx-auto inline-flex">
                <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Service complet</h3>
              <p className="mt-2 text-base text-gray-500">
                Nous nous occupons de tout : conception, permis, terrassement, installation et finitions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Piscines Populaires */}
      <div id="piscines" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nos modèles phares</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Découvrez nos piscines les plus populaires
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Des designs modernes qui s'intègrent parfaitement dans tous les jardins
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {piscinesPopulaires.map(piscine => (
              <PiscineCard key={piscine.id} piscine={piscine} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="/piscines"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Voir tous nos modèles
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Section Services */}
      <div id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nos prestations</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Des services complets pour votre projet piscine
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Du premier coup de pelle à la touche finale de votre aménagement extérieur
            </p>
          </div>
          
          <div className="space-y-12">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Découvrir tous nos services
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Section Contact */}
      <div id="contact" className="bg-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-200 tracking-wide uppercase">Contactez-nous</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Prêt à réaliser votre projet de piscine ?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
              Demandez un devis gratuit et sans engagement. Notre équipe vous répondra sous 24h.
            </p>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 sm:p-10">
                <h3 className="text-lg font-medium text-gray-900">Formulaire de contact</h3>
                <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                      Nom complet
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="nom"
                        id="nom"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="telephone"
                        id="telephone"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="projet" className="block text-sm font-medium text-gray-700">
                      Votre projet
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="projet"
                        name="projet"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Envoyer ma demande
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="bg-blue-50 p-6 sm:p-10">
                <h3 className="text-lg font-medium text-gray-900">Nos coordonnées</h3>
                <dl className="mt-8 space-y-6">
                  <dt><span className="sr-only">Adresse</span></dt>
                  <dd className="flex text-base text-gray-500">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="ml-3">
                      123 Avenue des Piscines<br />
                      34000 Montpellier
                    </span>
                  </dd>
                  <dt><span className="sr-only">Téléphone</span></dt>
                  <dd className="flex text-base text-gray-500">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="ml-3">
                      +33 4 67 XX XX XX
                    </span>
                  </dd>
                  <dt><span className="sr-only">Email</span></dt>
                  <dd className="flex text-base text-gray-500">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="ml-3">
                      contact@aquapiscines-herault.fr
                    </span>
                  </dd>
                  <dt><span className="sr-only">Horaires</span></dt>
                  <dd className="flex text-base text-gray-500">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-3">
                      Du lundi au vendredi : 9h - 18h<br />
                      Samedi : 9h - 12h<br />
                      Dimanche : Fermé
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
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
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Accueil</a></li>
                <li><a href="#piscines" className="text-base text-gray-300 hover:text-white">Nos Piscines</a></li>
                <li><a href="#services" className="text-base text-gray-300 hover:text-white">Nos Services</a></li>
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

export default HomePage;
