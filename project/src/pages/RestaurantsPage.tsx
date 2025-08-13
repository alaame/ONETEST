import React, { useState } from 'react';
import { Star, Clock, Users, MapPin, Phone, Calendar, Utensils, Wine, Coffee, Camera, ChefHat, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceFilter from '../components/ServiceFilter';

const RestaurantsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('buffet');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('11h-23h');
  const [selectedHotel, setSelectedHotel] = useState('all');
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const restaurantTypes = [
    { id: 'buffet', name: 'Buffet Restaurant', icon: '🍽️' },
    { id: 'carte', name: 'À la Carte', icon: '📜' },
    { id: '24h', name: '24H Express Service', icon: '🕐' },
    { id: 'snacks', name: 'Snacks & Bars', icon: '🍔' }
  ];

  const timeSlots = [
    { id: '11h-23h', name: '11h - 23h', description: 'Service principal' },
    { id: '23h-3h', name: '23h - 3h', description: 'Service nocturne' },
    { id: '3h-11h', name: '3h - 11h', description: 'Service matinal' }
  ];

  const snackThemes = [
    {
      id: 'sweet',
      name: 'ONE Sweet',
      icon: '🍰',
      description: 'Délices sucrés et pâtisseries artisanales',
      specialties: ['Baklava tunisien', 'Makroudh aux dattes', 'Tarte aux figues', 'Mousse au chocolat'],
      story: 'Nos pâtissiers perpétuent les traditions sucrées de la Méditerranée, créant des desserts qui racontent l\'histoire de nos terroirs.'
    },
    {
      id: 'burger',
      name: 'ONE Burger',
      icon: '🍔',
      description: 'Burgers gourmet avec ingrédients locaux premium',
      specialties: ['Burger Carthage', 'Mediterranean Veggie', 'Spicy Harissa Chicken', 'Lamb Merguez Deluxe'],
      story: 'Chaque burger raconte une histoire culinaire, mêlant techniques américaines et saveurs authentiquement tunisiennes.'
    },
    {
      id: 'pasta',
      name: 'ONE Pasta',
      icon: '🍝',
      description: 'Pâtes fraîches et sauces méditerranéennes',
      specialties: ['Spaghetti aux fruits de mer', 'Lasagne aux légumes du soleil', 'Penne all\'arrabbiata', 'Ravioli ricotta-épinards'],
      story: 'Nos chefs italiens transmettent leur passion à travers des pâtes fraîches préparées quotidiennement selon les traditions ancestrales.'
    }
  ];

  const buffetExperiences = [
    {
      name: 'Soirée Noël Magique',
      theme: 'noel',
      description: 'Une soirée féerique célébrant les traditions de Noël avec des saveurs du monde entier',
      story: 'Plongez dans la magie de Noël avec notre buffet exceptionnel. Chaque plat raconte une histoire de tradition et de partage, des spécialités tunisiennes aux délices européens, créant une symphonie de saveurs qui réchauffe les cœurs en cette période festive.',
      dishes: [
        { name: 'Dinde aux épices de Noël', story: 'Marinée 24h dans un mélange secret d\'épices méditerranéennes' },
        { name: 'Bûche de Noël revisitée', story: 'Notre pâtissier français recrée ce classique avec une touche tunisienne' },
        { name: 'Couscous de fête', story: 'Tradition millénaire adaptée pour célébrer l\'universalité de Noël' }
      ],
      hotels: ['1', '2', '3'],
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Célébrations Internationales',
      theme: 'international',
      description: 'Un voyage culinaire à travers les continents pour célébrer la diversité',
      story: 'Embarquez pour un voyage gastronomique extraordinaire où chaque continent révèle ses secrets culinaires. Nos chefs du monde entier collaborent pour créer une expérience unique, mêlant traditions locales et innovations contemporaines.',
      dishes: [
        { name: 'Sushi Bar Live', story: 'Notre maître sushi japonais prépare devant vous des créations fraîches' },
        { name: 'Tajine royal', story: 'Recette ancestrale transmise par les grands-mères de Fès' },
        { name: 'Paella valencienne', story: 'Préparée dans une paella géante par notre chef espagnol' }
      ],
      hotels: ['1', '2'],
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const carteRestaurants = [
    {
      name: 'Fogo de Chao',
      hotel: '1',
      cuisine: 'Brésilienne Premium',
      story: 'Dans l\'ambiance chaleureuse du Brésil, nos gauchos vous transportent dans les pampas avec leur service traditionnel de viandes grillées. Chaque coupe raconte l\'histoire des éleveurs brésiliens et de leur passion pour la perfection.',
      signature: 'Picanha Premium',
      experience: 'Service continu de viandes grillées à la table avec buffet de salades gourmet',
      menu: [
        { dish: 'Picanha', story: 'La reine des viandes brésiliennes, grillée à la perfection' },
        { dish: 'Saumon grillé', story: 'Fraîchement pêché et grillé avec des herbes amazoniennes' },
        { dish: 'Cœur de palmier', story: 'Délicatesse végétale du cœur de la forêt tropicale' }
      ],
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'La Cucina',
      hotel: '1',
      cuisine: 'Italienne Authentique',
      story: 'Notre chef napolitain perpétue les traditions familiales transmises depuis quatre générations. Chaque pâte est pétrie avec amour, chaque sauce mijotée selon les recettes secrètes de sa nonna.',
      signature: 'Osso Buco alla Milanese',
      experience: 'Cuisine ouverte où vous observez la création de vos plats',
      menu: [
        { dish: 'Risotto aux truffes', story: 'Riz Carnaroli cuit lentement avec des truffes d\'Alba' },
        { dish: 'Pizza Margherita', story: 'La première pizza de l\'histoire, créée pour la Reine Margherita' },
        { dish: 'Tiramisu maison', story: 'Recette familiale gardée secrète depuis 1920' }
      ],
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Blue and Blue',
      hotel: '2',
      cuisine: 'Méditerranéenne Fusion',
      story: 'Inspiré par les eaux cristallines de la Méditerranée, notre chef crée une symphonie de saveurs où se rencontrent les traditions culinaires des pays bordant cette mer mythique.',
      signature: 'Loup de mer en croûte de sel',
      experience: 'Terrasse avec vue mer et service sommelier expert',
      menu: [
        { dish: 'Bouillabaisse moderne', story: 'Réinterprétation du classique marseillais avec poissons locaux' },
        { dish: 'Agneau aux herbes de Provence', story: 'Élevé dans les collines tunisiennes, cuit aux herbes sauvages' },
        { dish: 'Tarte au citron de Nabeul', story: 'Citrons de nos jardins transformés en délice acidulé' }
      ],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const expressMenus = {
    '11h-23h': [
      { name: 'Sandwich Club Premium', story: 'Trois étages de saveurs avec poulet fermier et légumes croquants' },
      { name: 'Salade César Revisitée', story: 'Laitue romaine, parmesan 24 mois, croûtons à l\'ail des ours' },
      { name: 'Wrap Méditerranéen', story: 'Tortilla maison garnie de légumes grillés et houmous artisanal' }
    ],
    '23h-3h': [
      { name: 'Burger Midnight', story: 'Création spéciale pour les noctambules avec sauce secrète' },
      { name: 'Pizza Express', story: 'Pâte fine croustillante, garniture généreuse, cuisson rapide' },
      { name: 'Soupe Réconfortante', story: 'Bouillon de légumes mijotés, parfait pour réchauffer la nuit' }
    ],
    '3h-11h': [
      { name: 'Petit-déjeuner Continental', story: 'Viennoiseries fraîches, confitures maison, café d\'exception' },
      { name: 'Omelette du Chef', story: 'Œufs fermiers battus à la perfection avec garniture au choix' },
      { name: 'Pancakes Américains', story: 'Moelleux et dorés, servis avec sirop d\'érable authentique' }
    ]
  };

  const filteredContent = () => {
    if (selectedType === 'buffet') return buffetExperiences;
    if (selectedType === 'carte') return carteRestaurants.filter(r => selectedHotel === 'all' || r.hotel === selectedHotel);
    if (selectedType === '24h') return expressMenus[selectedTimeSlot as keyof typeof expressMenus];
    if (selectedType === 'snacks') return snackThemes;
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-orange-800/70 to-red-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Utensils className="w-12 h-12 text-orange-400" />
              <span className="text-6xl">🍽️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Dining &
              <span className="block text-orange-400">Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Savourez des expériences culinaires d'exception où chaque plat raconte une histoire
            </p>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Type Selection */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {restaurantTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedType === type.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{type.icon}</span>
                <span>{type.name}</span>
              </button>
            ))}
          </div>

          {/* Hotel Filter for À la Carte */}
          {selectedType === 'carte' && (
            <div className="max-w-md mx-auto">
              <ServiceFilter 
                onHotelFilter={setSelectedHotel}
                selectedHotel={selectedHotel}
              />
            </div>
          )}

          {/* Time Slot Selection for 24H Service */}
          {selectedType === '24h' && (
            <div className="flex flex-wrap justify-center gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedTimeSlot(slot.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedTimeSlot === slot.id
                      ? 'bg-navy-500 text-white'
                      : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
                  }`}
                >
                  <div className="text-sm font-bold">{slot.name}</div>
                  <div className="text-xs opacity-75">{slot.description}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content Display */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Buffet Experiences */}
          {selectedType === 'buffet' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Soirées à Thème</h2>
                <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                  Des expériences culinaires uniques qui célèbrent les traditions du monde
                </p>
              </div>

              {buffetExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.name}
                        className="w-full h-full object-cover min-h-96"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-3xl font-serif font-bold mb-2">{experience.name}</h3>
                        <p className="text-white/90">{experience.description}</p>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center space-x-2 mb-6">
                        <Sparkles className="w-6 h-6 text-gold-500" />
                        <span className="text-gold-600 font-semibold">Expérience Signature</span>
                      </div>
                      
                      <p className="text-navy-700 text-lg leading-relaxed mb-8 italic">
                        "{experience.story}"
                      </p>

                      <h4 className="text-xl font-bold text-navy-900 mb-6">Plats Signature</h4>
                      <div className="space-y-4">
                        {experience.dishes.map((dish, dishIndex) => (
                          <div key={dishIndex} className="border-l-4 border-gold-500 pl-4">
                            <h5 className="font-semibold text-navy-900 mb-1">{dish.name}</h5>
                            <p className="text-navy-600 text-sm italic">{dish.story}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <div className="text-sm text-navy-500">
                          Disponible dans {experience.hotels.length} resort{experience.hotels.length > 1 ? 's' : ''}
                        </div>
                        <button
                          onClick={() => setSelectedMenu(experience.name)}
                          className="bg-gold-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gold-700 transition-colors"
                        >
                          Voir Menu
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* À la Carte Restaurants */}
          {selectedType === 'carte' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Restaurants À la Carte</h2>
                <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                  Chaque restaurant raconte une histoire culinaire unique
                </p>
              </div>

              {filteredContent().map((restaurant: any, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="relative overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover min-h-64"
                      />
                      <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {restaurant.cuisine}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-serif font-bold text-navy-900">{restaurant.name}</h3>
                        <div className="flex items-center space-x-2">
                          <ChefHat className="w-5 h-5 text-gold-500" />
                          <span className="text-gold-600 font-medium">Signature</span>
                        </div>
                      </div>

                      <p className="text-navy-700 leading-relaxed mb-6 italic">
                        "{restaurant.story}"
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-navy-900 mb-3">Plat Signature</h4>
                          <div className="bg-gold-50 p-4 rounded-lg">
                            <div className="font-semibold text-gold-700">{restaurant.signature}</div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-navy-900 mb-3">Expérience</h4>
                          <p className="text-navy-600 text-sm">{restaurant.experience}</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-bold text-navy-900 mb-4">Menu Dégustation</h4>
                        <div className="space-y-3">
                          {restaurant.menu.map((item: any, itemIndex: number) => (
                            <div key={itemIndex} className="border-l-4 border-orange-500 pl-4">
                              <h5 className="font-semibold text-navy-900">{item.dish}</h5>
                              <p className="text-navy-600 text-sm italic">{item.story}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          onClick={() => setSelectedMenu(restaurant.name)}
                          className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                        >
                          Voir Menu Complet
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* 24H Express Service */}
          {selectedType === '24h' && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Service Express 24H</h2>
                <p className="text-xl text-navy-600">
                  Menu {selectedTimeSlot} - Chaque plat a son moment parfait
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(filteredContent() as any[]).map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🍽️</div>
                      <h3 className="text-lg font-bold text-navy-900">{item.name}</h3>
                    </div>
                    <p className="text-navy-600 text-sm italic text-center leading-relaxed">
                      "{item.story}"
                    </p>
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-navy-100 text-navy-700 px-3 py-1 rounded-full text-xs font-medium">
                        {selectedTimeSlot}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Snacks Themes */}
          {selectedType === 'snacks' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Nos Thèmes Snacks</h2>
                <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                  Trois univers gourmands pour satisfaire toutes vos envies
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {snackThemes.map((theme, index) => (
                  <motion.div
                    key={theme.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50">
                      <div className="text-6xl mb-4">{theme.icon}</div>
                      <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">{theme.name}</h3>
                      <p className="text-navy-600">{theme.description}</p>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-navy-700 italic mb-6 leading-relaxed">
                        "{theme.story}"
                      </p>

                      <h4 className="font-bold text-navy-900 mb-4">Spécialités</h4>
                      <div className="space-y-2">
                        {theme.specialties.map((specialty, specIndex) => (
                          <div key={specIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-navy-700 text-sm">{specialty}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 text-center">
                        <button 
                          onClick={() => setSelectedMenu(theme.name)}
                          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                        >
                          Voir Menu
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Menu Modal */}
      {selectedMenu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-navy-900">Menu - {selectedMenu}</h3>
              <button
                onClick={() => setSelectedMenu(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <span className="text-2xl text-navy-600">×</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-4">Entrées</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Salade Méditerranéenne</h5>
                      <p className="text-sm text-navy-600">Légumes frais, olives, feta, vinaigrette aux herbes</p>
                    </div>
                    <span className="text-gold-600 font-bold">18 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Houmous Traditionnel</h5>
                      <p className="text-sm text-navy-600">Purée de pois chiches, tahini, pain pita chaud</p>
                    </div>
                    <span className="text-gold-600 font-bold">15 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Brik à l'Œuf</h5>
                      <p className="text-sm text-navy-600">Spécialité tunisienne, œuf, thon, câpres</p>
                    </div>
                    <span className="text-gold-600 font-bold">12 TND</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-navy-900 mb-4 mt-8">Plats Principaux</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Couscous Royal</h5>
                      <p className="text-sm text-navy-600">Agneau, merguez, légumes, bouillon parfumé</p>
                    </div>
                    <span className="text-gold-600 font-bold">35 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Poisson Grillé</h5>
                      <p className="text-sm text-navy-600">Dorade royale, légumes de saison, sauce vierge</p>
                    </div>
                    <span className="text-gold-600 font-bold">42 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Tajine d'Agneau</h5>
                      <p className="text-sm text-navy-600">Mijoté aux pruneaux et amandes, riz parfumé</p>
                    </div>
                    <span className="text-gold-600 font-bold">38 TND</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-4">Desserts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Baklava Maison</h5>
                      <p className="text-sm text-navy-600">Pâte filo, miel, pistaches, amandes</p>
                    </div>
                    <span className="text-gold-600 font-bold">14 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Makroudh aux Dattes</h5>
                      <p className="text-sm text-navy-600">Pâtisserie traditionnelle, dattes fraîches</p>
                    </div>
                    <span className="text-gold-600 font-bold">10 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Mousse au Chocolat</h5>
                      <p className="text-sm text-navy-600">Chocolat noir 70%, chantilly vanille</p>
                    </div>
                    <span className="text-gold-600 font-bold">16 TND</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-navy-900 mb-4 mt-8">Boissons</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Thé à la Menthe</h5>
                      <p className="text-sm text-navy-600">Thé vert, menthe fraîche, tradition tunisienne</p>
                    </div>
                    <span className="text-gold-600 font-bold">8 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Jus de Fruits Frais</h5>
                      <p className="text-sm text-navy-600">Orange, citron, grenade selon saison</p>
                    </div>
                    <span className="text-gold-600 font-bold">12 TND</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-navy-800">Café Turc</h5>
                      <p className="text-sm text-navy-600">Café traditionnel, cardamome, loukoum</p>
                    </div>
                    <span className="text-gold-600 font-bold">10 TND</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setSelectedMenu(null)}
                className="flex-1 bg-gray-100 text-navy-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Fermer
              </button>
              <Link
                to="/booking"
                className="flex-1 bg-gold-600 text-white py-3 rounded-xl font-medium hover:bg-gold-700 transition-colors text-center"
                onClick={() => setSelectedMenu(null)}
              >
                Réserver une table
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-500 to-navy-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Réservez Votre Expérience Culinaire
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Chaque repas devient une histoire, chaque plat une découverte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver une table
              </Link>
              <a
                href="tel:+21670123456"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>+216 70 123 456</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantsPage;