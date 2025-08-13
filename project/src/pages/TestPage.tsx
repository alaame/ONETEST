import React, { useState } from 'react';
import { Star, Clock, Users, Calendar, Trophy, Target, Sparkles, Crown, Wand2, Gamepad2, Music, MapPin, Camera, Compass, Utensils, Waves, Mountain, Sun, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TestPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('hotel');
  const [selectedDestination, setSelectedDestination] = useState('tunis');

  // 3 sections principales : À l'hôtel, Extérieur, Moyen de transport
  const sections = [
    {
      id: 'hotel',
      name: 'À l\'Hôtel',
      description: 'Vivez la Tunisie sans quitter votre resort',
      color: 'gold',
      icon: '🏨',
      story: 'Découvrez l\'authenticité tunisienne recréée avec passion dans nos espaces dédiés, où tradition et luxe se rencontrent.'
    },
    {
      id: 'exterior',
      name: 'Extérieur',
      description: 'Explorez les merveilles de la Tunisie',
      color: 'blue',
      icon: '🌍',
      story: 'Partez à la découverte des trésors cachés de la Tunisie, de la médina de Tunis aux dunes dorées du Sahara.'
    },
    {
      id: 'transport',
      name: 'Moyen de Transport',
      description: 'Voyagez avec style et confort',
      color: 'green',
      icon: '🚗',
      story: 'Nos services de transport premium vous emmènent vers les plus beaux sites avec élégance et sécurité.'
    }
  ];

  // Destinations par région
  const destinations = [
    {
      id: 'tunis',
      name: 'Tunis - Capitale Culturelle',
      region: 'Nord',
      description: 'Cœur battant de la Tunisie, entre tradition et modernité',
      color: 'purple',
      icon: '🏛️',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1920',
      experiences: [
        'Balade guidée dans la Médina UNESCO',
        'Dégustation de cuisine tunisienne authentique',
        'Visite du Musée du Bardo',
        'Shopping dans les souks traditionnels',
        'Découverte de Sidi Bou Saïd',
        'Exploration de Carthage antique'
      ],
      highlights: [
        { name: 'Médina de Tunis', type: 'UNESCO', description: 'Site du patrimoine mondial' },
        { name: 'Mosquée Zitouna', type: 'Religieux', description: 'Joyau architectural islamique' },
        { name: 'Palais du Bardo', type: 'Musée', description: 'Mosaïques romaines exceptionnelles' }
      ]
    },
    {
      id: 'hammamet',
      name: 'Hammamet - Perle du Golfe',
      region: 'Est',
      description: 'Station balnéaire mythique aux eaux cristallines',
      color: 'cyan',
      icon: '🏖️',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920',
      experiences: [
        'Croisière en mer Méditerranée',
        'Visite des marchés artisanaux',
        'Balade dans la médina d\'Hammamet',
        'Excursion à Nabeul (poterie)',
        'Plongée sous-marine',
        'Cours de cuisine méditerranéenne'
      ],
      highlights: [
        { name: 'Marina de Hammamet', type: 'Port', description: 'Port de plaisance moderne' },
        { name: 'Médina d\'Hammamet', type: 'Historique', description: 'Forteresse face à la mer' },
        { name: 'Nabeul', type: 'Artisanat', description: 'Capitale de la poterie tunisienne' }
      ]
    },
    {
      id: 'sousse',
      name: 'Sousse & Monastir - Héritage Historique',
      region: 'Centre',
      description: 'Cités millénaires aux trésors archéologiques',
      color: 'amber',
      icon: '🏰',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
      experiences: [
        'Visite de la Médina de Sousse (UNESCO)',
        'Exploration du Ribat de Monastir',
        'Dégustation de spécialités locales',
        'Balade dans le port de plaisance',
        'Visite des catacombes de Sousse',
        'Shopping dans les souks authentiques'
      ],
      highlights: [
        { name: 'Médina de Sousse', type: 'UNESCO', description: 'Patrimoine mondial exceptionnel' },
        { name: 'Ribat de Monastir', type: 'Forteresse', description: 'Architecture militaire islamique' },
        { name: 'Musée de Sousse', type: 'Archéologie', description: 'Mosaïques et antiquités' }
      ]
    },
    {
      id: 'djerba',
      name: 'Djerba - Île aux Mille Couleurs',
      region: 'Sud',
      description: 'Paradis insulaire aux traditions préservées',
      color: 'orange',
      icon: '🏝️',
      image: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1920',
      experiences: [
        'Excursion 4x4 dans le désert',
        'Découverte des villages berbères',
        'Visite de la synagogue de la Ghriba',
        'Exploration des marchés de Houmt Souk',
        'Balade à dos de chameau',
        'Nuit sous les étoiles du désert'
      ],
      highlights: [
        { name: 'Houmt Souk', type: 'Marché', description: 'Marché traditionnel authentique' },
        { name: 'Synagogue de la Ghriba', type: 'Religieux', description: 'Lieu de pèlerinage millénaire' },
        { name: 'Musée du Patrimoine', type: 'Culture', description: 'Traditions et artisanat local' }
      ]
    },
    {
      id: 'sahara',
      name: 'Sahara - Grand Sud Mystique',
      region: 'Désert',
      description: 'Immensité dorée et oasis verdoyantes',
      color: 'yellow',
      icon: '🐪',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1920',
      experiences: [
        'Expédition dans les dunes de sable',
        'Visite des oasis de montagne',
        'Rencontre avec les nomades',
        'Observation des étoiles',
        'Randonnée dans les canyons',
        'Découverte de l\'artisanat berbère'
      ],
      highlights: [
        { name: 'Douz', type: 'Oasis', description: 'Porte du Sahara tunisien' },
        { name: 'Tozeur', type: 'Palmeraie', description: 'Oasis aux mille palmiers' },
        { name: 'Chott el Jérid', type: 'Lac salé', description: 'Mirages et cristaux de sel' }
      ]
    },
    {
      id: 'kairouan',
      name: 'Kairouan - Ville Sainte',
      region: 'Centre',
      description: 'Quatrième ville sainte de l\'Islam',
      color: 'emerald',
      icon: '🕌',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1920',
      experiences: [
        'Visite de la Grande Mosquée',
        'Découverte des bassins des Aghlabides',
        'Exploration des souks de tapis',
        'Atelier de calligraphie arabe',
        'Dégustation de makroudh',
        'Visite des mausolées saints'
      ],
      highlights: [
        { name: 'Grande Mosquée', type: 'UNESCO', description: 'Premier sanctuaire de l\'Occident musulman' },
        { name: 'Bassins des Aghlabides', type: 'Hydraulique', description: 'Prouesse technique du IXe siècle' },
        { name: 'Bir Barouta', type: 'Puits', description: 'Puits sacré légendaire' }
      ]
    }
  ];

  // Expériences à l'hôtel
  const hotelExperiences = [
    {
      id: 'souk',
      name: 'Souk & Médina Recréés',
      description: 'Ambiance authentique des souks tunisiens',
      color: 'gold',
      icon: '🏪',
      details: [
        'Reproduction fidèle d\'un souk traditionnel',
        'Artisans locaux en démonstration',
        'Produits authentiques à découvrir',
        'Ambiance sonore et visuelle immersive',
        'Dégustation de thé à la menthe',
        'Ateliers d\'artisanat participatifs'
      ]
    },
    {
      id: 'journee',
      name: 'Journée Tunisienne Complète',
      description: 'Immersion culturelle totale',
      color: 'blue',
      icon: '🎭',
      details: [
        'Décoration traditionnelle des espaces',
        'Menu 100% cuisine tunisienne',
        'Costumes traditionnels pour le personnel',
        'Musique et danses folkloriques',
        'Ateliers de henné et calligraphie',
        'Contes et légendes tunisiennes'
      ]
    },
    {
      id: 'restaurant',
      name: 'Restaurant Thématique Tunisien',
      description: 'Voyage culinaire authentique',
      color: 'red',
      icon: '🍽️',
      details: [
        'Décor de maison traditionnelle tunisienne',
        'Spécialités régionales authentiques',
        'Service en costume traditionnel',
        'Spectacle de cuisine en direct',
        'Dégustation de vins tunisiens',
        'Soirée musicale avec oud et darbouka'
      ]
    },
    {
      id: 'animations',
      name: 'Animations Culturelles',
      description: 'Arts et traditions vivantes',
      color: 'purple',
      icon: '🎨',
      details: [
        'Spectacles de danse traditionnelle',
        'Concerts de musique malouf',
        'Ateliers de poterie de Nabeul',
        'Démonstrations de tissage',
        'Cours de cuisine tunisienne',
        'Exposition d\'art contemporain tunisien'
      ]
    }
  ];

  // Moyens de transport
  const transportOptions = [
    {
      id: 'luxury-car',
      name: 'Voiture de Luxe avec Chauffeur',
      description: 'Confort premium pour vos excursions',
      color: 'navy',
      icon: '🚗',
      features: [
        'Véhicules Mercedes classe S',
        'Chauffeur guide multilingue',
        'Climatisation et WiFi',
        'Eau et rafraîchissements',
        'Itinéraires personnalisés',
        'Service porte-à-porte'
      ]
    },
    {
      id: 'minibus',
      name: 'Minibus Groupe Premium',
      description: 'Voyages en groupe dans le confort',
      color: 'blue',
      icon: '🚐',
      features: [
        'Capacité 8-15 personnes',
        'Guide touristique professionnel',
        'Système audio-vidéo',
        'Sièges cuir climatisés',
        'Arrêts photos illimités',
        'Assurance tous risques'
      ]
    },
    {
      id: 'helicopter',
      name: 'Hélicoptère Panoramique',
      description: 'Vue aérienne exceptionnelle',
      color: 'gold',
      icon: '🚁',
      features: [
        'Survol des sites emblématiques',
        'Pilote expérimenté',
        'Casques audio commentés',
        'Photos et vidéos incluses',
        'Champagne à bord',
        'Atterrissage sur sites privés'
      ]
    }
  ];

  // Fêtes nationales et événements spéciaux
  const nationalEvents = [
    { 
      day: 'Janvier', 
      event: 'Nouvel An Berbère (Yennayer)', 
      description: 'Célébration du nouvel an amazigh avec traditions ancestrales',
      type: 'Culturel'
    },
    { 
      day: 'Mars', 
      event: 'Fête de l\'Indépendance', 
      description: 'Commémoration de l\'indépendance tunisienne avec défilés et festivités',
      type: 'National'
    },
    { 
      day: 'Avril', 
      event: 'Festival des Roses de Kelaat M\'Gouna', 
      description: 'Célébration de la récolte des roses avec danses et parfums',
      type: 'Régional'
    },
    { 
      day: 'Mai', 
      event: 'Fête du Travail & Festival de Carthage', 
      description: 'Événements culturels dans l\'amphithéâtre antique',
      type: 'Culturel'
    },
    { 
      day: 'Juillet', 
      event: 'Festival International de Hammamet', 
      description: 'Théâtre, musique et arts dans un cadre historique exceptionnel',
      type: 'International'
    },
    { 
      day: 'Août', 
      event: 'Festival de Tabarka Jazz', 
      description: 'Musique jazz internationale dans un cadre méditerranéen',
      type: 'Musical'
    },
    { 
      day: 'Octobre', 
      event: 'Festival des Dattes de Tozeur', 
      description: 'Célébration de la récolte dans les oasis du Sud',
      type: 'Gastronomique'
    }
  ];

  const currentSection = sections.find(section => section.id === selectedSection);
  const currentDestination = destinations.find(dest => dest.id === selectedDestination);

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      gold: 'bg-gold-500 text-white',
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
      purple: 'bg-purple-500 text-white',
      cyan: 'bg-cyan-500 text-white',
      amber: 'bg-amber-500 text-white',
      orange: 'bg-orange-500 text-white',
      yellow: 'bg-yellow-500 text-white',
      emerald: 'bg-emerald-500 text-white',
      navy: 'bg-navy-500 text-white',
      red: 'bg-red-500 text-white'
    };
    return colors[color] || 'bg-gray-500 text-white';
  };

  const getEventTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Culturel': 'bg-purple-100 text-purple-700',
      'National': 'bg-red-100 text-red-700',
      'Régional': 'bg-blue-100 text-blue-700',
      'International': 'bg-green-100 text-green-700',
      'Musical': 'bg-yellow-100 text-yellow-700',
      'Gastronomique': 'bg-orange-100 text-orange-700'
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-800/70 to-gold-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Compass className="w-12 h-12 text-gold-400" />
              <span className="text-6xl">🇹🇳</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              ONE
              <span className="block text-gold-400">Discover</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Découvrez les trésors de la Tunisie : culture millénaire, paysages époustouflants et traditions authentiques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-gold-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver votre découverte
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Guide personnalisé
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sélection des 3 Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Choisissez Votre Expérience</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Trois façons uniques de découvrir la richesse culturelle tunisienne
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`cursor-pointer group ${
                  selectedSection === section.id ? 'ring-4 ring-gold-400' : ''
                }`}
                onClick={() => setSelectedSection(section.id)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`text-center p-8 ${getColorClass(section.color)} bg-opacity-90`}>
                    <div className="text-6xl mb-4">{section.icon}</div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{section.name}</h3>
                    <p className="text-white/90">{section.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-navy-700 italic leading-relaxed">
                      "{section.story}"
                    </p>
                    
                    {selectedSection === section.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-4 flex items-center justify-center space-x-2 text-gold-600"
                      >
                        <Crown className="w-5 h-5" />
                        <span className="font-semibold">Expérience Sélectionnée</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Détails de la Section Sélectionnée */}
      {currentSection && (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto px-6">
            <motion.div
              key={selectedSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-6xl mb-4">{currentSection.icon}</div>
                <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">{currentSection.name}</h3>
                <p className="text-xl text-navy-600 mb-6">{currentSection.description}</p>
                <div className="bg-gradient-to-r from-gold-50 to-purple-50 rounded-2xl p-6">
                  <p className="text-navy-700 italic text-lg leading-relaxed">
                    "{currentSection.story}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Contenu selon la section sélectionnée */}
      {selectedSection === 'exterior' && (
        <>
          {/* Sélection des Destinations */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Expériences par Région</h2>
                <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                  Sélectionnez une région pour découvrir ses merveilles
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {destinations.map((destination) => (
                  <button
                    key={destination.id}
                    onClick={() => setSelectedDestination(destination.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                      selectedDestination === destination.id
                        ? getColorClass(destination.color)
                        : 'bg-white text-navy-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span className="text-lg">{destination.icon}</span>
                    <span>{destination.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Aperçu de la Destination */}
          {currentDestination && (
            <section className="py-16 bg-gradient-to-r from-purple-50 to-gold-50">
              <div className="container mx-auto px-6">
                <motion.div
                  key={selectedDestination}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-6xl mx-auto"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`text-6xl p-4 rounded-2xl ${getColorClass(currentDestination.color)} bg-opacity-20`}>
                          {currentDestination.icon}
                        </div>
                        <div>
                          <h3 className="text-3xl font-serif font-bold text-navy-900">{currentDestination.name}</h3>
                          <p className="text-xl text-navy-600">{currentDestination.description}</p>
                          <span className="inline-block bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-medium mt-2">
                            Région {currentDestination.region}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-navy-900 mb-6 flex items-center space-x-2">
                        <Wand2 className="w-6 h-6 text-gold-500" />
                        <span>Expériences à Vivre</span>
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {currentDestination.experiences.map((experience, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${getColorClass(currentDestination.color)}`}>
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-sm font-medium text-navy-800">{experience}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Points d'Intérêt */}
                      <div className="mt-8">
                        <h4 className="text-lg font-bold text-navy-900 mb-4 flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-gold-500" />
                          <span>Points d'Intérêt</span>
                        </h4>
                        <div className="space-y-3">
                          {currentDestination.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                              <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center">
                                <Camera className="w-5 h-5 text-gold-600" />
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-navy-900">{highlight.name}</div>
                                <div className="text-sm text-navy-600">{highlight.description}</div>
                              </div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                highlight.type === 'UNESCO' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                              }`}>
                                {highlight.type}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-2xl">
                      <h4 className="text-2xl font-bold text-navy-900 mb-6 text-center">Aperçu de la Destination</h4>
                      <div className="relative overflow-hidden rounded-2xl mb-6">
                        <img
                          src={currentDestination.image}
                          alt={currentDestination.name}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h5 className="text-xl font-bold">{currentDestination.name}</h5>
                          <p className="text-white/90">{currentDestination.region}</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-6xl mb-4">{currentDestination.icon}</div>
                        <p className="text-navy-600 italic">{currentDestination.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Expériences à l'hôtel */}
      {selectedSection === 'hotel' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Vivre la Tunisie sans Quitter l'Hôtel</h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Immersion culturelle authentique dans le confort de nos resorts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hotelExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`text-center p-6 ${getColorClass(experience.color)} bg-opacity-90`}>
                    <div className="text-5xl mb-4">{experience.icon}</div>
                    <h3 className="text-xl font-serif font-bold mb-2">{experience.name}</h3>
                    <p className="text-white/90">{experience.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-navy-900 mb-4">Inclus dans l'expérience :</h4>
                    <div className="space-y-2">
                      {experience.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          <span className="text-sm text-navy-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Moyens de transport */}
      {selectedSection === 'transport' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Voyagez avec Style</h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Services de transport premium pour vos excursions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {transportOptions.map((transport, index) => (
                <motion.div
                  key={transport.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`text-center p-6 ${getColorClass(transport.color)} bg-opacity-90`}>
                    <div className="text-5xl mb-4">{transport.icon}</div>
                    <h3 className="text-xl font-serif font-bold mb-2">{transport.name}</h3>
                    <p className="text-white/90">{transport.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-navy-900 mb-4">Services inclus :</h4>
                    <div className="space-y-2">
                      {transport.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          <span className="text-sm text-navy-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-4 bg-gold-500 text-white py-3 rounded-xl font-medium hover:bg-gold-600 transition-colors">
                      Réserver ce service
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calendrier des Fêtes Nationales et Événements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Calendrier Culturel Tunisien</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Fêtes nationales et événements culturels tout au long de l'année
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gold-500 to-amber-500 text-white">
                  <tr>
                    <th className="p-4 text-left font-bold">Période</th>
                    <th className="p-4 text-left font-bold">Événement</th>
                    <th className="p-4 text-left font-bold">Description</th>
                    <th className="p-4 text-left font-bold">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {nationalEvents.map((event, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gold-50 transition-colors duration-300`}
                    >
                      <td className="p-4 font-bold text-navy-900 border-r border-gray-200">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gold-500" />
                          <span>{event.day}</span>
                        </div>
                      </td>
                      <td className="p-4 text-navy-700 border-r border-gray-200">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-500" />
                          <span className="font-semibold">{event.event}</span>
                        </div>
                      </td>
                      <td className="p-4 text-navy-700 border-r border-gray-200">
                        <span className="text-sm">{event.description}</span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Carte Interactive (Simulation) */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Carte Interactive de la Tunisie</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Explorez les destinations et points d'intérêt
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Carte de la Tunisie"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              
              {/* Points d'intérêt simulés */}
              {destinations.slice(0, 4).map((dest, index) => (
                <motion.button
                  key={dest.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  onClick={() => setSelectedDestination(dest.id)}
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg hover:scale-125 transition-transform duration-300 ${getColorClass(dest.color)}`}
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + index * 15}%`
                  }}
                >
                  {index + 1}
                </motion.button>
              ))}
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm text-navy-700 font-medium">
                  Cliquez sur les points pour découvrir chaque région
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-gold-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-5xl mb-6">🇹🇳</div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Votre Aventure Tunisienne Vous Attend
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Découvrez la richesse culturelle et naturelle de la Tunisie avec ONE Discover
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver votre découverte
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Guide personnalisé
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestPage;