import React, { useState } from 'react';
import { Play, Camera, MapPin, ArrowRight, X } from 'lucide-react';

const VirtualTourPage: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const tours = [
    {
      id: 'resort-overview',
      title: 'Vue d\'ensemble du Resort',
      description: 'Découvrez l\'architecture exceptionnelle et les espaces communs',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5 min'
    },
    {
      id: 'suites',
      title: 'Suites & Chambres',
      description: 'Explorez nos hébergements de luxe avec vue panoramique',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8 min'
    },
    {
      id: 'restaurants',
      title: 'Restaurants & Bars',
      description: 'Visitez nos espaces gastronomiques d\'exception',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '6 min'
    },
    {
      id: 'spa',
      title: 'Spa & Wellness',
      description: 'Plongez dans un univers de détente et de bien-être',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '7 min'
    },
    {
      id: 'activities',
      title: 'Activités & Loisirs',
      description: 'Découvrez nos installations sportives et de divertissement',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '10 min'
    },
    {
      id: 'beach',
      title: 'Plage & Piscines',
      description: 'Explorez nos espaces aquatiques et notre plage privée',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '4 min'
    }
  ];

  const handleTourStart = (tourId: string) => {
    setSelectedTour(tourId);
    // Ici, vous pourriez intégrer une vraie solution de visite virtuelle
    // comme Matterport, 360° viewer, etc.
  };

  const closeTour = () => {
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Visite Virtuelle
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Explorez nos resorts d'exception depuis chez vous. Une expérience immersive 
              qui vous transportera dans l'univers du luxe.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-300">
              <Camera className="w-5 h-5" />
              <span>Technologie 360° haute définition</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Choisissez votre parcours
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sélectionnez les espaces que vous souhaitez découvrir et laissez-vous 
            guider dans une expérience immersive unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-slate-700">
                  {tour.duration}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{tour.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {tour.description}
                </p>
                
                <button
                  onClick={() => handleTourStart(tour.id)}
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-slate-700 hover:to-slate-600 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Commencer la visite
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Une expérience immersive complète
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Qualité 4K</h3>
              <p className="text-slate-600">
                Images haute résolution pour une expérience visuelle exceptionnelle
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Navigation intuitive</h3>
              <p className="text-slate-600">
                Déplacez-vous librement dans tous les espaces du resort
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Contenu interactif</h3>
              <p className="text-slate-600">
                Points d'intérêt et informations détaillées sur chaque espace
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-slate-800">
                {tours.find(t => t.id === selectedTour)?.title}
              </h3>
              <button
                onClick={closeTour}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-16 h-16 text-slate-400" />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-4">
                Visite virtuelle en cours de développement
              </h4>
              <p className="text-slate-600 mb-6">
                Cette fonctionnalité sera bientôt disponible avec une expérience 
                immersive complète en 360°.
              </p>
              <button
                onClick={closeTour}
                className="bg-slate-800 text-white px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualTourPage;