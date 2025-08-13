import React from 'react';
import { Star, MapPin, ArrowRight, Crown, Waves, Trophy, Camera, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HotelsPage: React.FC = () => {
  const resorts = [
    {
      id: 'aquapark',
      name: 'ONE Resort Aquapark & Spa',
      location: 'Monastir, Tunisie',
      description: 'Paradis aquatique familial où l\'aventure rencontre le luxe méditerranéen',
      concept: 'Famille & Aventure Aquatique',
      story: 'Un univers aquatique magique où petits et grands vivent des aventures inoubliables. Toboggans géants, piscines à vagues et spa oriental créent une symphonie de plaisirs pour toute la famille.',
      highlights: ['Parc aquatique géant', 'Spa oriental premium', 'Kids Club thématique', '5 restaurants'],
      rating: 4.8,
      reviews: 2847,
      priceFrom: 180,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: '🏊‍♀️',
      color: 'cyan',
      path: '/aquapark-resort',
      gallery: [
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 'premium',
      name: 'ONE Resort Premium',
      location: 'Hammamet, Tunisie',
      description: 'Élégance méditerranéenne et raffinement absolu face à la mer',
      concept: 'Luxe & Raffinement',
      story: 'L\'incarnation du raffinement méditerranéen où chaque détail respire l\'élégance. Service royal, gastronomie étoilée et spa impérial composent une symphonie de luxe authentique.',
      highlights: ['Plage privée 300m', 'Chef étoilé Michelin', 'Spa impérial', 'Service majordome'],
      rating: 4.9,
      reviews: 1892,
      priceFrom: 250,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: '👑',
      color: 'gold',
      path: '/premium-resort',
      gallery: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 'jockey',
      name: 'ONE Resort Jockey',
      location: 'Monastir, Tunisie',
      description: 'Fusion parfaite entre business moderne et détente méditerranéenne',
      concept: 'Business & Sport',
      story: 'L\'alliance parfaite entre performance et détente. Centre d\'affaires ultramoderne, ONE SportHub avec courts de padel professionnels, et espaces de relaxation créent l\'équilibre idéal.',
      highlights: ['ONE SportHub premium', 'Centre d\'affaires', 'Courts de padel pro', 'Rooftop lounge'],
      rating: 4.7,
      reviews: 1654,
      priceFrom: 220,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: '🏆',
      color: 'blue',
      path: '/jockey-resort',
      gallery: [
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: 'from-cyan-500 to-blue-600',
      gold: 'from-gold-500 to-amber-600',
      blue: 'from-blue-500 to-gray-600'
    };
    return colors[color] || 'from-gold-500 to-amber-600';
  };

  const getBgColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: 'from-cyan-50 to-blue-50',
      gold: 'from-gold-50 to-amber-50',
      blue: 'from-gray-50 to-blue-50'
    };
    return colors[color] || 'from-gold-50 to-amber-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-gold-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-gold-800/75 to-navy-800/85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Crown className="w-5 h-5 text-gold-400" />
              <span className="font-medium tracking-wide">Collection Exclusive</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight">
              Nos
              <span className="block text-gold-400 font-medium">Resorts</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-6">
                Trois Univers • Trois Expériences • Une Excellence
              </p>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                Découvrez nos trois resorts d'exception, chacun avec sa personnalité unique et son art de vivre distinctif
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver Maintenant
              </Link>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Plus d'Informations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Présentation des Resorts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light text-navy-900 mb-6">
                Trois Expériences <span className="text-gold-600 font-medium">Uniques</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto font-light leading-relaxed">
                Chaque resort raconte une histoire différente, chaque séjour devient une aventure personnelle
              </p>
            </motion.div>
          </div>

          <div className="space-y-16">
            {resorts.map((resort, index) => (
              <motion.div
                key={resort.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group"
              >
                <div className={`bg-gradient-to-r ${getBgColorClass(resort.color)} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700`}>
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={resort.image}
                        alt={resort.name}
                        className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Badge Concept */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-sm font-medium text-navy-800">{resort.concept}</span>
                      </div>

                      {/* Galerie Miniature */}
                      <div className="absolute bottom-6 right-6 flex space-x-2">
                        {resort.gallery.slice(0, 3).map((img, imgIndex) => (
                          <div key={imgIndex} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/80">
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                        <div className="w-12 h-12 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center text-white text-xs font-bold">
                          +{resort.gallery.length - 3}
                        </div>
                      </div>

                      {/* Icon Principal */}
                      <div className="absolute top-6 right-6 text-6xl">
                        {resort.icon}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getColorClass(resort.color)} rounded-full flex items-center justify-center text-white text-2xl`}>
                          {resort.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-900">
                            {resort.name}
                          </h3>
                          <div className="flex items-center space-x-2 text-navy-600">
                            <MapPin className="w-4 h-4" />
                            <span>{resort.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg md:text-xl text-navy-700 mb-6 leading-relaxed">
                        {resort.description}
                      </p>

                      {/* Histoire */}
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-6">
                        <p className="text-navy-700 italic leading-relaxed">
                          "{resort.story}"
                        </p>
                      </div>

                      {/* Points Forts */}
                      <div className="mb-6">
                        <h4 className="font-bold text-navy-900 mb-4">Points Forts :</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {resort.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                              <span className="text-sm text-navy-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Rating et Prix */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(resort.rating) ? 'text-gold-500 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-medium text-navy-900">{resort.rating}</span>
                          <span className="text-navy-600 text-sm">({resort.reviews} avis)</span>
                        </div>
                        <div className={`bg-gradient-to-r ${getColorClass(resort.color)} text-white px-4 py-2 rounded-full font-bold`}>
                          À partir de {resort.priceFrom} TND
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          to={resort.path}
                          className={`flex-1 bg-gradient-to-r ${getColorClass(resort.color)} text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center space-x-2`}
                        >
                          <span>Découvrir ce Resort</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          to="/booking"
                          className="flex-1 bg-white border-2 border-gray-200 text-navy-700 py-3 rounded-xl font-medium hover:border-gold-300 hover:bg-gold-50 transition-all duration-300 text-center"
                        >
                          Réserver
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison Rapide */}
      <section className="py-20 bg-gradient-to-r from-navy-50 to-gold-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Comparaison de nos Resorts
            </h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Trouvez le resort qui correspond parfaitement à vos attentes
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-navy-500 to-gold-500 text-white">
                  <tr>
                    <th className="p-4 text-left font-bold">Caractéristiques</th>
                    <th className="p-4 text-center font-bold">Aquapark & Spa</th>
                    <th className="p-4 text-center font-bold">Premium</th>
                    <th className="p-4 text-center font-bold">Jockey</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-navy-900">Concept Principal</td>
                    <td className="p-4 text-center text-cyan-600">Famille & Aquatique</td>
                    <td className="p-4 text-center text-gold-600">Luxe & Raffinement</td>
                    <td className="p-4 text-center text-blue-600">Business & Sport</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="p-4 font-semibold text-navy-900">Prix à partir de</td>
                    <td className="p-4 text-center font-bold text-cyan-600">180 TND</td>
                    <td className="p-4 text-center font-bold text-gold-600">250 TND</td>
                    <td className="p-4 text-center font-bold text-blue-600">220 TND</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-semibold text-navy-900">Spécialité</td>
                    <td className="p-4 text-center text-sm">Parc Aquatique</td>
                    <td className="p-4 text-center text-sm">Plage Privée</td>
                    <td className="p-4 text-center text-sm">SportHub & Padel</td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="p-4 font-semibold text-navy-900">Clientèle Cible</td>
                    <td className="p-4 text-center text-sm">Familles</td>
                    <td className="p-4 text-center text-sm">Couples & Luxe</td>
                    <td className="p-4 text-center text-sm">Business & Sport</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-navy-900">Note Moyenne</td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 text-gold-500 fill-current" />
                        <span className="font-bold">4.8</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 text-gold-500 fill-current" />
                        <span className="font-bold">4.9</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 text-gold-500 fill-current" />
                        <span className="font-bold">4.7</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Services Communs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
              Services Communs à Tous nos Resorts
            </h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              L'excellence ONE dans chaque détail, quel que soit votre choix
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌐', title: 'WiFi Gratuit', description: 'Connexion haut débit dans tout le resort' },
              { icon: '🚗', title: 'Parking Gratuit', description: 'Stationnement sécurisé pour votre véhicule' },
              { icon: '🏊‍♀️', title: 'Piscines Chauffées', description: 'Baignade confortable toute l\'année' },
              { icon: '👨‍👩‍👧‍👦', title: 'Kids Club', description: 'Animation professionnelle pour enfants' },
              { icon: '🍽️', title: 'Restaurants Variés', description: 'Cuisine internationale et locale' },
              { icon: '💆‍♀️', title: 'Spa & Wellness', description: 'Soins et détente dans chaque resort' },
              { icon: '🎭', title: 'Animations', description: 'Programme d\'activités quotidiennes' },
              { icon: '📞', title: 'Conciergerie 24h', description: 'Service client disponible en permanence' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-gradient-to-br from-cream-50 to-gold-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-navy-900 mb-2">{service.title}</h3>
                <p className="text-navy-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy-900 via-gold-800 to-navy-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Crown className="w-5 h-5 text-gold-400" />
              <span className="text-gold-200 font-medium">Collection ONE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Choisissez Votre
              <span className="block text-gold-400 font-medium">Expérience Parfaite</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Trois resorts, trois personnalités, une promesse commune : 
              vous offrir des moments d'exception qui marquent les cœurs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-12 py-6 rounded-full font-semibold text-xl hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center justify-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Réserver Maintenant</span>
              </Link>
              
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-full font-semibold text-xl hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Nous Contacter</span>
              </Link>
            </div>

            <div className="mt-16 text-white/60">
              <p className="italic bg-black/20 backdrop-blur-sm rounded-2xl p-6 inline-block text-lg">
                "Trois resorts • Trois univers • Une excellence • Des souvenirs pour la vie"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HotelsPage;