import React from 'react';
import { useState, useEffect } from 'react';
import { Search, Phone, Mail, Users, Plus, Minus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Composant pour la sélection des voyageurs
const GuestSelector: React.FC = () => {
  const [showConfig, setShowConfig] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    childrenAges: [] as number[]
  });

  const updateAdults = (increment: boolean) => {
    setGuests(prev => ({
      ...prev,
      adults: increment 
        ? Math.min(8, prev.adults + 1)
        : Math.max(1, prev.adults - 1)
    }));
  };

  const updateChildren = (increment: boolean) => {
    setGuests(prev => {
      const newChildrenCount = increment 
        ? Math.min(6, prev.children + 1)
        : Math.max(0, prev.children - 1);
      
      let newAges = [...prev.childrenAges];
      if (newChildrenCount > prev.children) {
        newAges.push(6); // Âge par défaut
      } else if (newChildrenCount < prev.children) {
        newAges = newAges.slice(0, newChildrenCount);
      }

      return {
        ...prev,
        children: newChildrenCount,
        childrenAges: newAges
      };
    });
  };

  const updateChildAge = (childIndex: number, age: number) => {
    setGuests(prev => ({
      ...prev,
      childrenAges: prev.childrenAges.map((currentAge, index) => 
        index === childIndex ? age : currentAge
      )
    }));
  };

  const getGuestsText = () => {
    let text = `${guests.adults} adulte${guests.adults > 1 ? 's' : ''}`;
    if (guests.children > 0) {
      text += `, ${guests.children} enfant${guests.children > 1 ? 's' : ''}`;
    }
    return text;
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowConfig(!showConfig)}
        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white text-left focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
      >
        {getGuestsText()}
      </button>

      {showConfig && (
        <div className="absolute z-50 top-full left-0 w-full bg-white mt-2 border border-gray-200 rounded-lg p-4 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-navy-800">Configuration</span>
            <button
              onClick={() => setShowConfig(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Adultes */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-navy-700">Adultes</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateAdults(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                disabled={guests.adults <= 1}
              >
                <Minus className="w-4 h-4 text-navy-600" />
              </button>
              <span className="w-8 text-center font-medium text-navy-800">{guests.adults}</span>
              <button
                onClick={() => updateAdults(true)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                disabled={guests.adults >= 8}
              >
                <Plus className="w-4 h-4 text-navy-600" />
              </button>
            </div>
          </div>

          {/* Enfants */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-navy-700">Enfants (-1 à -12 ans)</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateChildren(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                disabled={guests.children <= 0}
              >
                <Minus className="w-4 h-4 text-navy-600" />
              </button>
              <span className="w-8 text-center font-medium text-navy-800">{guests.children}</span>
              <button
                onClick={() => updateChildren(true)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                disabled={guests.children >= 6}
              >
                <Plus className="w-4 h-4 text-navy-600" />
              </button>
            </div>
          </div>

          {/* Âges des enfants */}
          {guests.children > 0 && (
            <div className="space-y-2">
              <span className="text-xs text-navy-600">Âge des enfants :</span>
              {guests.childrenAges.map((age, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-xs text-navy-600">Enfant {index + 1}</span>
                  <select
                    value={age}
                    onChange={(e) => updateChildAge(index, parseInt(e.target.value))}
                    className="px-2 py-1 border border-gray-200 rounded text-xs text-navy-700"
                  >
                    {Array.from({ length: 13 }, (_, i) => (
                      <option key={i} value={i}>
                        {i === 0 ? 'Moins de 1 an' : `${i} an${i > 1 ? 's' : ''}`}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images d'arrière-plan qui changent automatiquement
  const backgroundImages = [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
  ];

  // Changement automatique d'image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen relative">
      {/* Hero Section avec image d'arrière-plan */}
      <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">
        {/* Carrousel d'images d'arrière-plan */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${backgroundImages[currentImageIndex]}')`
            }}
          />
        </AnimatePresence>

        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Contenu principal */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-4xl">
            
            {/* Module de réservation optimisé */}
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 p-4 sm:p-6 shadow-2xl">
              
              {/* Formulaire de réservation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Arrivée
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Départ
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Voyageurs
                  </label>
                  <GuestSelector />
                </div>
              </div>
              
              {/* Bouton SEARCH */}
              <div className="flex justify-center mb-6">
                <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                   SEARCH
                </button>
              </div>
              
              {/* Informations de contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+216 58 406 722</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">contact@resort.com</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Section Détails après la réservation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-serif font-bold text-navy-900 mb-4"
            >
              Découvrez l'Excellence ONE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-navy-600 max-w-2xl mx-auto"
            >
              Trois resorts d'exception en Tunisie pour des expériences inoubliables
            </motion.p>
          </div>

          {/* Grille des resorts */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Découvrir les Hôtels",
                description: "Explorez nos trois resorts d'exception en Tunisie",
                image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: ["ONE Resort Aquapark & Spa", "ONE Resort Premium", "ONE Resort Jockey"],
                link: "/hotels",
                icon: "🏨"
              },
              {
                name: "Découvrir SportHub",
                description: "Fitness premium et padel professionnel",
                image: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: ["Fitness premium", "Courts de padel", "Coaching professionnel"],
                link: "/sporthub",
                icon: "🏆"
              },
              {
                name: "Découvrir Salle Séminaire",
                description: "Espaces business et événements d'entreprise",
                image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
                features: ["Salles modulables", "Équipements high-tech", "Service traiteur"],
                link: "/events",
                icon: "🏢"
              }
            ].map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 text-4xl">{section.icon}</div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{section.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-navy-600 mb-4">{section.description}</p>
                  <div className="space-y-2">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        <span className="text-sm text-navy-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={section.link}
                    className="mt-4 inline-block bg-gold-600 text-white px-4 py-2 rounded-lg hover:bg-gold-700 transition-colors duration-300 text-sm font-medium"
                  >
                    Découvrir
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Services premium */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: "🏨",
                title: "Hébergement Premium",
                description: "Chambres et suites avec vue mer exceptionnelle"
              },
              {
                icon: "🍽️",
                title: "Gastronomie Raffinée",
                description: "Restaurants thématiques et cuisine internationale"
              },
              {
                icon: "💆‍♀️",
                title: "Spa & Bien-être",
                description: "Soins premium et espaces de détente"
              },
              {
                icon: "🎯",
                title: "Activités Variées",
                description: "Sports, animations et divertissements"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-gradient-to-br from-gold-50 to-cream-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-navy-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-gold-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Votre Séjour d'Exception Vous Attend
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Réservez dès maintenant et découvrez l'art de vivre à la tunisienne
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver Maintenant
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Nous Contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;