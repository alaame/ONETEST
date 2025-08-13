import React, { useState } from 'react';
import { Star, Clock, Users, MapPin, Phone, Calendar, Wine, Coffee, Camera, Music, Leaf, Download, FileText, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BarsPage: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState('all');
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const hotels = [
    { id: 'all', name: 'Tous les hôtels', location: 'Tunisie' },
    { id: '1', name: 'ONE Resort Aquapark & Spa', location: 'Monastir' },
    { id: '2', name: 'ONE Resort Premium', location: 'Hammamet' },
    { id: '3', name: 'ONE Resort Jockey', location: 'Monastir' }
  ];

  const bars = [
    {
      id: 1,
      name: 'Aqua Pool Bar',
      hotel: '1',
      type: 'Pool Bar',
      location: 'Piscine principale',
      description: 'Bar aquatique avec service dans l\'eau et terrasse panoramique',
      specialties: ['Cocktails tropicaux', 'Smoothies frais', 'Snacks légers'],
      hours: '10h00 - 18h00',
      capacity: 80,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      ecoFeatures: [
        'Pailles en bambou 100% biodégradables',
        'Gobelets réutilisables en verre',
        'Système de filtration d\'eau sans plastique',
        'Fruits locaux de saison'
      ],
      signature: 'Aqua Splash - Cocktail signature aux fruits de mer'
    },
    {
      id: 2,
      name: 'Sunset Lounge',
      hotel: '1',
      type: 'Lounge Bar',
      location: 'Terrasse panoramique',
      description: 'Bar lounge avec vue imprenable sur le coucher de soleil',
      specialties: ['Cocktails premium', 'Vins sélectionnés', 'Tapas gastronomiques'],
      hours: '17h00 - 01h00',
      capacity: 60,
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      ecoFeatures: [
        'Verres en cristal recyclé',
        'Serviettes en lin bio',
        'Éclairage LED basse consommation',
        'Ingrédients biologiques certifiés'
      ],
      signature: 'Golden Sunset - Mélange exclusif au miel local'
    },
    {
      id: 3,
      name: 'Beach Club Bar',
      hotel: '2',
      type: 'Beach Bar',
      location: 'Plage privée',
      description: 'Bar de plage pieds dans le sable avec ambiance décontractée',
      specialties: ['Cocktails de plage', 'Bières artisanales', 'Fruits de mer'],
      hours: '09h00 - 20h00',
      capacity: 100,
      image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
      ecoFeatures: [
        'Parasols en matériaux recyclés',
        'Contenants compostables',
        'Récupération d\'eau de pluie',
        'Produits de la mer durables'
      ],
      signature: 'Mediterranean Breeze - Cocktail aux herbes sauvages'
    },
    {
      id: 4,
      name: 'Premium Rooftop',
      hotel: '2',
      type: 'Rooftop Bar',
      location: 'Toit de l\'hôtel',
      description: 'Bar sophistiqué avec vue à 360° sur la Méditerranée',
      specialties: ['Cocktails d\'auteur', 'Champagnes', 'Cuisine fusion'],
      hours: '18h00 - 02h00',
      capacity: 45,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      ecoFeatures: [
        'Mobilier en bois certifié FSC',
        'Système de compostage intégré',
        'Énergie solaire pour l\'éclairage',
        'Cocktails zéro déchet'
      ],
      signature: 'Rooftop Royale - Création exclusive du chef barman'
    },
    {
      id: 5,
      name: 'Business Lounge',
      hotel: '3',
      type: 'Business Bar',
      location: 'Hall principal',
      description: 'Bar élégant pour rencontres d\'affaires et détente',
      specialties: ['Whiskies premium', 'Cigares cubains', 'Café d\'exception'],
      hours: '14h00 - 00h00',
      capacity: 35,
      image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
      ecoFeatures: [
        'Mobilier vintage restauré',
        'Verres lavés à l\'eau recyclée',
        'Produits locaux exclusivement',
        'Emballages biodégradables'
      ],
      signature: 'Executive Reserve - Blend de whiskies tunisiens'
    },
    {
      id: 6,
      name: 'Sports Bar',
      hotel: '3',
      type: 'Sports Bar',
      location: 'Zone SportHub',
      description: 'Bar sportif avec écrans géants et ambiance conviviale',
      specialties: ['Bières du monde', 'Cocktails énergisants', 'Snacks sportifs'],
      hours: '12h00 - 23h00',
      capacity: 70,
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      ecoFeatures: [
        'Gobelets réutilisables personnalisés',
        'Tri sélectif intégré',
        'Produits d\'entretien écologiques',
        'Partenariat avec brasseries locales'
      ],
      signature: 'Champion\'s Choice - Cocktail protéiné post-workout'
    }
  ];

  const menus = {
    'Aqua Pool Bar': {
      cocktails: [
        { name: 'Aqua Splash', price: 18, description: 'Rhum blanc, ananas, coco, menthe fraîche' },
        { name: 'Tropical Paradise', price: 16, description: 'Vodka, mangue, passion, citron vert' },
        { name: 'Blue Lagoon', price: 17, description: 'Gin, curaçao bleu, tonic, citron' }
      ],
      smoothies: [
        { name: 'Green Power', price: 12, description: 'Épinards, pomme, gingembre, citron' },
        { name: 'Berry Boost', price: 14, description: 'Fruits rouges, banane, yaourt grec' },
        { name: 'Mango Tango', price: 13, description: 'Mangue, orange, carotte, curcuma' }
      ],
      snacks: [
        { name: 'Club Sandwich', price: 22, description: 'Poulet, avocat, tomate, pain complet' },
        { name: 'Salade César', price: 18, description: 'Laitue, parmesan, croûtons, sauce maison' },
        { name: 'Wrap Végétarien', price: 16, description: 'Légumes grillés, houmous, tortilla' }
      ]
    },
    'Sunset Lounge': {
      cocktails: [
        { name: 'Golden Sunset', price: 25, description: 'Whisky, miel local, citron, thym' },
        { name: 'Mediterranean Mule', price: 22, description: 'Vodka, ginger beer, concombre, menthe' },
        { name: 'Rosé Spritz', price: 20, description: 'Rosé de Provence, Aperol, prosecco' }
      ],
      wines: [
        { name: 'Château Mornag Rouge', price: 35, description: 'Vin rouge tunisien, cépages nobles' },
        { name: 'Sidi Salem Blanc', price: 30, description: 'Vin blanc sec, notes florales' },
        { name: 'Rosé de Kelibia', price: 32, description: 'Rosé fruité, terroir méditerranéen' }
      ],
      tapas: [
        { name: 'Plateau Mezze', price: 28, description: 'Houmous, tapenade, fromages, olives' },
        { name: 'Crevettes Grillées', price: 32, description: 'Crevettes, ail, persil, citron' },
        { name: 'Bruschetta Tunisienne', price: 18, description: 'Tomates, harissa douce, basilic' }
      ]
    },
    'Beach Club Bar': {
      cocktails: [
        { name: 'Mediterranean Breeze', price: 19, description: 'Gin, herbes sauvages, tonic artisanal' },
        { name: 'Sea Salt Margarita', price: 21, description: 'Tequila, sel de mer, citron vert' },
        { name: 'Coral Reef', price: 18, description: 'Rhum, fruits de la passion, grenadine' }
      ],
      beers: [
        { name: 'Celtia Blonde', price: 8, description: 'Bière tunisienne légère et rafraîchissante' },
        { name: 'Stella Artois', price: 10, description: 'Bière belge premium' },
        { name: 'Corona Extra', price: 12, description: 'Bière mexicaine avec citron vert' }
      ],
      seafood: [
        { name: 'Plateau Fruits de Mer', price: 45, description: 'Sélection fraîche du jour' },
        { name: 'Calamars Frits', price: 24, description: 'Anneaux de calamar, sauce tartare' },
        { name: 'Salade de Poulpe', price: 26, description: 'Poulpe grillé, légumes croquants' }
      ]
    }
  };

  const filteredBars = selectedHotel === 'all' 
    ? bars 
    : bars.filter(bar => bar.hotel === selectedHotel);

  const getHotelName = (hotelId: string) => {
    return hotels.find(h => h.id === hotelId)?.name || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-navy-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-gold-800/70 to-navy-800/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Wine className="w-12 h-12 text-gold-400" />
              <span className="text-6xl">🍸</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Bars &
              <span className="block text-gold-400">Cocktails</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Découvrez nos bars d'exception dans chaque resort, avec un engagement éco-responsable
            </p>
            <div className="flex items-center justify-center space-x-2 bg-green-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-green-400/30">
              <Leaf className="w-5 h-5 text-green-300" />
              <span className="text-green-200 font-medium">100% Sans Plastique</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtre par Hôtel */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-navy-600" />
              <h3 className="font-semibold text-navy-900">Filtrer par hôtel</h3>
            </div>
            
            <select
              value={selectedHotel}
              onChange={(e) => setSelectedHotel(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            >
              {hotels.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>
                  {hotel.name}
                  {hotel.location !== 'Tunisie' && ` - ${hotel.location}`}
                </option>
              ))}
            </select>
          </div>
          
          {selectedHotel !== 'all' && (
            <div className="flex items-center space-x-2 text-sm text-navy-600">
              <MapPin className="w-4 h-4" />
              <span>
                Affichage des bars pour {getHotelName(selectedHotel)}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Engagement Éco-responsable */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center space-x-3 bg-green-100 px-6 py-3 rounded-full mb-6">
              <Leaf className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-semibold">Engagement Éco-responsable</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Zéro Plastique, 100% Saveur</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Tous nos bars adoptent une approche durable pour préserver notre environnement méditerranéen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '🌱',
                title: 'Pailles Bambou',
                description: 'Pailles 100% biodégradables en bambou local'
              },
              {
                icon: '♻️',
                title: 'Verres Recyclés',
                description: 'Verrerie en cristal recyclé et réutilisable'
              },
              {
                icon: '🌊',
                title: 'Eau Filtrée',
                description: 'Système de filtration sans bouteilles plastique'
              },
              {
                icon: '🍃',
                title: 'Ingrédients Bio',
                description: 'Fruits et herbes biologiques de producteurs locaux'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-navy-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des Bars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Nos Bars d'Exception</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              {filteredBars.length} bar{filteredBars.length > 1 ? 's' : ''} disponible{filteredBars.length > 1 ? 's' : ''} 
              {selectedHotel !== 'all' && ` dans ${getHotelName(selectedHotel)}`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBars.map((bar, index) => (
              <motion.div
                key={bar.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={bar.image}
                    alt={bar.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Badge Hôtel */}
                  <div className="absolute top-4 left-4 bg-navy-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {getHotelName(bar.hotel)}
                  </div>
                  
                  {/* Badge Type */}
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {bar.type}
                  </div>

                  {/* Badge Éco */}
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Leaf className="w-3 h-3" />
                    <span>Éco-responsable</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {bar.name}
                  </h3>
                  
                  <div className="flex items-center text-navy-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {bar.location}
                  </div>

                  <p className="text-navy-600 mb-4 text-sm">{bar.description}</p>

                  {/* Spécialités */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-800 text-sm mb-2">Spécialités :</h4>
                    <div className="flex flex-wrap gap-1">
                      {bar.specialties.map((specialty, specIndex) => (
                        <span
                          key={specIndex}
                          className="text-xs bg-gold-100 text-gold-700 px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Informations pratiques */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-navy-500 flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Horaires :
                      </span>
                      <span className="text-navy-900 font-medium">{bar.hours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-navy-500 flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Capacité :
                      </span>
                      <span className="text-navy-900 font-medium">{bar.capacity} personnes</span>
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-lg p-3 mb-4">
                    <h5 className="font-semibold text-gold-700 text-sm mb-1">Cocktail Signature</h5>
                    <p className="text-gold-600 text-xs">{bar.signature}</p>
                  </div>

                  {/* Actions éco-responsables */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-green-700 text-sm mb-2 flex items-center">
                      <Leaf className="w-4 h-4 mr-1" />
                      Actions Éco :
                    </h4>
                    <div className="space-y-1">
                      {bar.ecoFeatures.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-navy-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setSelectedMenu(bar.name)}
                      className="flex-1 bg-gold-500 text-white py-2 rounded-lg font-medium hover:bg-gold-600 transition-colors duration-300 text-sm"
                    >
                      Voir Menu
                    </button>
                    <Link
                      to="/booking"
                      className="flex-1 bg-navy-500 text-white py-2 rounded-lg font-medium hover:bg-navy-600 transition-colors duration-300 text-center text-sm"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredBars.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Aucun bar dans cet hôtel</h3>
              <p className="text-navy-600 mb-6">Sélectionnez un autre hôtel pour voir les bars disponibles</p>
              <button
                onClick={() => setSelectedHotel('all')}
                className="bg-gold-500 text-white px-6 py-3 rounded-xl hover:bg-gold-600 transition-colors duration-300"
              >
                Voir tous les bars
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Menu Modal */}
      {selectedMenu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Wine className="w-6 h-6 text-gold-600" />
                <h3 className="text-2xl font-bold text-navy-900">Menu - {selectedMenu}</h3>
              </div>
              <button
                onClick={() => setSelectedMenu(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <span className="text-2xl text-navy-600">×</span>
              </button>
            </div>

            {/* Badge Éco-responsable */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Service 100% Éco-responsable</span>
              </div>
              <p className="text-green-700 text-sm">
                Tous nos cocktails sont servis sans plastique, avec des ingrédients biologiques et locaux
              </p>
            </div>

            {/* Menu Content */}
            {menus[selectedMenu as keyof typeof menus] && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(menus[selectedMenu as keyof typeof menus]).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-lg font-bold text-navy-900 mb-4 capitalize flex items-center space-x-2">
                      <span className="text-2xl">
                        {category === 'cocktails' ? '🍸' : 
                         category === 'wines' ? '🍷' : 
                         category === 'beers' ? '🍺' : 
                         category === 'smoothies' ? '🥤' : 
                         category === 'snacks' ? '🍽️' : 
                         category === 'tapas' ? '🫒' : 
                         category === 'seafood' ? '🦐' : '🍹'}
                      </span>
                      <span>{category}</span>
                    </h4>
                    <div className="space-y-3">
                      {items.map((item: any, itemIndex: number) => (
                        <div key={itemIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                          <div className="flex justify-between items-start mb-1">
                            <h5 className="font-semibold text-navy-800">{item.name}</h5>
                            <span className="text-gold-600 font-bold">{item.price} TND</span>
                          </div>
                          <p className="text-sm text-navy-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSelectedMenu(null)}
                className="flex-1 bg-gray-100 text-navy-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Fermer
              </button>
              <button className="flex-1 bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Télécharger Menu</span>
              </button>
              <Link
                to="/booking"
                className="flex-1 bg-gold-600 text-white py-3 rounded-xl font-medium hover:bg-gold-700 transition-colors text-center"
                onClick={() => setSelectedMenu(null)}
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Section Détails Éco-responsables */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Notre Engagement Environnemental</h2>
              <p className="text-xl text-navy-600">
                Chaque geste compte pour préserver la beauté de la Méditerranée
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Zéro Déchet Plastique</h3>
                  <p className="text-navy-600">Élimination complète du plastique à usage unique</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Pailles en bambou biodégradables</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Gobelets en verre recyclé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Emballages compostables</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Système de consigne</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Sourcing Local</h3>
                  <p className="text-navy-600">Partenariat avec les producteurs tunisiens</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Fruits de saison locaux</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Herbes aromatiques du jardin</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Miel et produits de la ruche</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">Partenaires certifiés bio</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 via-navy-500 to-gold-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Leaf className="w-8 h-8 text-green-300" />
              <span className="text-4xl">🍸</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Savourez Responsable
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Dégustez nos cocktails d'exception dans le respect de l'environnement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-gold-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver votre séjour
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Plus d'informations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BarsPage;