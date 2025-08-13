import React, { useState } from 'react';
import { Star, MapPin, Waves, Camera, Heart, ArrowRight, Sparkles, Crown, Gift, Palmtree, Sun, BookOpen, Play, ChevronLeft, ChevronRight, X, Bed, Users, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HotelNavigation from '../components/HotelNavigation';

const AquaparkResortPage: React.FC = () => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const hotelData = {
    name: 'ONE Resort Aquapark & Spa',
    location: 'Monastir, Tunisie',
    description: 'Paradis aquatique familial où l\'aventure rencontre le luxe méditerranéen',
    story: 'Niché sur les rives dorées de Monastir, notre resort aquatique incarne l\'art de vivre méditerranéen. Chaque vague de notre parc aquatique raconte une histoire d\'aventure, chaque soin de notre spa murmure des secrets de bien-être ancestral.',
    rating: 4.8,
    reviews: 2847,
    priceFrom: 180,
    mainImage: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
    gallery: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      { icon: '🏊‍♀️', title: 'Parc Aquatique Géant', description: '5 toboggans, piscine à vagues, rivière paresseuse' },
      { icon: '💆‍♀️', title: 'Spa Oriental Premium', description: 'Soins traditionnels et modernes, hammam authentique' },
      { icon: '👨‍👩‍👧‍👦', title: 'Expérience Famille', description: 'Kids Club, animations, espaces dédiés tous âges' },
      { icon: '🍽️', title: 'Gastronomie Variée', description: '4 restaurants, 3 bars, cuisine internationale' }
    ],
    rooms: [
      {
        type: 'Chambre Standard',
        description: 'Confort moderne avec vue jardin ou piscine',
        amenities: ['Balcon privé', 'Climatisation', 'WiFi gratuit', 'Minibar'],
        capacity: '2 adultes + 1 enfant',
        size: '28 m²',
        price: 180,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        type: 'Suite Familiale',
        description: 'Espace généreux pour familles avec salon séparé',
        amenities: ['2 chambres', 'Salon', 'Kitchenette', 'Terrasse'],
        capacity: '4 adultes + 2 enfants',
        size: '55 m²',
        price: 280,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        type: 'Suite Aqua Premium',
        description: 'Vue directe sur le parc aquatique, accès privilégié',
        amenities: ['Vue parc aquatique', 'Jacuzzi privé', 'Service majordome', 'Accès VIP'],
        capacity: '2 adultes + 2 enfants',
        size: '45 m²',
        price: 350,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    facilities: [
      {
        category: 'Parc Aquatique',
        items: [
          { name: 'Toboggan Kamikaze', description: 'Descente vertigineuse de 18 mètres' },
          { name: 'Piscine à Vagues', description: 'Vagues artificielles toutes les 30 minutes' },
          { name: 'Rivière Paresseuse', description: 'Circuit de 400 mètres pour se détendre' },
          { name: 'Pataugeoire Enfants', description: 'Espace sécurisé avec mini-toboggans' },
          { name: 'Jacuzzis Extérieurs', description: '3 jacuzzis avec hydromassage' }
        ]
      },
      {
        category: 'Spa & Bien-être',
        items: [
          { name: 'Hammam Traditionnel', description: 'Rituel de purification ancestral' },
          { name: 'Sauna Finlandais', description: 'Détente dans la tradition nordique' },
          { name: 'Salles de Massage', description: '8 cabines pour soins personnalisés' },
          { name: 'Piscine Intérieure', description: 'Bassin chauffé toute l\'année' },
          { name: 'Espace Relaxation', description: 'Zone de repos avec tisanerie' }
        ]
      },
      {
        category: 'Restaurants & Bars',
        items: [
          { name: 'Restaurant Principal', description: 'Buffet international avec show-cooking' },
          { name: 'Pizzeria Aqua', description: 'Pizzas artisanales au feu de bois' },
          { name: 'Snack Poolside', description: 'Restauration rapide près des piscines' },
          { name: 'Bar Aquatique', description: 'Cocktails servis dans l\'eau' },
          { name: 'Lounge Sunset', description: 'Bar panoramique avec vue mer' }
        ]
      }
    ],
    activities: [
      { name: 'Aqua Fitness', time: '10h00', description: 'Cours de fitness dans l\'eau' },
      { name: 'Animation Enfants', time: '14h00', description: 'Jeux et activités au Kids Club' },
      { name: 'Spectacle Aquatique', time: '20h30', description: 'Show nocturne dans la piscine principale' },
      { name: 'Tournoi Water-Polo', time: '16h00', description: 'Compétition amicale entre familles' }
    ]
  };

  // Histoires immersives pour le storytelling
  const hotelStories = [
    {
      id: 'aquatic-paradise',
      title: 'Paradis Aquatique',
      subtitle: 'Où l\'eau devient magie',
      narrative: 'Imaginez un monde où chaque goutte d\'eau raconte une histoire d\'aventure. Nos toboggans serpentent comme des rivières mythiques, nos piscines scintillent comme des lagons secrets. Ici, l\'eau n\'est pas seulement un élément, c\'est le cœur battant de votre bonheur familial.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'adventurous' as const,
      details: {
        highlights: [
          'Toboggans géants avec effets spéciaux',
          'Piscine à vagues programmables',
          'Rivière paresseuse de 400 mètres',
          'Zone enfants sécurisée et ludique'
        ],
        experience: 'Plongez dans un univers aquatique où chaque attraction raconte une légende. Des toboggans vertigineux aux piscines apaisantes, chaque espace aquatique est conçu pour créer des souvenirs inoubliables.',
        atmosphere: 'Sons de cascades naturelles, éclairages sous-marins féeriques, et parfums d\'embruns marins créent une ambiance tropicale authentique.'
      }
    },
    {
      id: 'oriental-spa',
      title: 'Sanctuaire Oriental',
      subtitle: 'Rituels millénaires de bien-être',
      narrative: 'Dans les vapeurs parfumées de notre hammam, le temps suspend son vol. Chaque pierre chaude murmure des secrets de beauté ancestraux, chaque soin révèle l\'art du bien-être oriental. Ici, votre corps et votre âme retrouvent leur harmonie primitive.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'serene' as const,
      details: {
        highlights: [
          'Hammam en marbre de Carrare',
          'Rituels de gommage traditionnel',
          'Massages aux huiles d\'argan',
          'Espace méditation zen'
        ],
        experience: 'Laissez-vous porter par des rituels millénaires dans un cadre somptueux. Nos thérapeutes perpétuent les traditions orientales du bien-être avec des produits naturels d\'exception.',
        atmosphere: 'Vapeurs parfumées d\'eucalyptus, musiques orientales apaisantes, et jeux de lumière tamisée créent un cocon de sérénité absolue.'
      }
    },
    {
      id: 'family-universe',
      title: 'Univers Familial',
      subtitle: 'Où chaque génération trouve son bonheur',
      narrative: 'Dans notre resort, les rires d\'enfants se mêlent aux sourires complices des parents. Chaque espace est pensé pour que trois générations puissent partager des moments précieux. Ici, la famille n\'est pas seulement réunie, elle est célébrée.',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'family' as const,
      details: {
        highlights: [
          'Kids Club avec animations thématiques',
          'Espaces dédiés aux adolescents',
          'Activités intergénérationnelles',
          'Service baby-sitting professionnel'
        ],
        experience: 'Chaque membre de la famille vit sa propre aventure tout en partageant des moments magiques ensemble. Nos animateurs créent des liens durables entre les générations.',
        atmosphere: 'Couleurs vives et apaisantes, espaces modulables selon les âges, et ambiances sonores adaptées créent un environnement familial harmonieux.'
      }
    },
    {
      id: 'culinary-journey',
      title: 'Voyage Culinaire',
      subtitle: 'Saveurs du monde en Méditerranée',
      narrative: 'Nos chefs orchestrent une symphonie de saveurs où se rencontrent les traditions culinaires du monde. Chaque plat raconte un voyage, chaque saveur évoque une émotion. Ici, la gastronomie devient art de vivre.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'luxurious' as const,
      details: {
        highlights: [
          'Buffets thématiques quotidiens',
          'Show-cooking en direct',
          'Spécialités tunisiennes authentiques',
          'Menus enfants créatifs'
        ],
        experience: 'Découvrez un univers gastronomique où tradition et innovation se rencontrent. Nos chefs vous emmènent dans un voyage culinaire à travers les continents.',
        atmosphere: 'Arômes envoûtants, présentation artistique des plats, et service attentionné créent une expérience culinaire mémorable.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hotelData.mainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-blue-800/70 to-cyan-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Waves className="w-12 h-12 text-cyan-400" />
              <span className="text-6xl">🏊‍♀️</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              {hotelData.name}
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-cyan-300" />
              <span className="text-xl text-cyan-200">{hotelData.location}</span>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              {hotelData.description}
            </p>
            
            {/* Rating et Prix */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(hotelData.rating) ? 'text-gold-400 fill-current' : 'text-white/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-medium">{hotelData.rating}</span>
                <span className="text-white/80">({hotelData.reviews} avis)</span>
              </div>
              <div className="bg-gold-500 text-white px-6 py-2 rounded-full font-bold">
                À partir de {hotelData.priceFrom} TND/nuit
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver Maintenant
              </Link>
              <Link
                to="/tour"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Visite Virtuelle
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Hébergements */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-100 px-4 py-2 rounded-full mb-6">
                <Bed className="w-5 h-5 text-cyan-600" />
                <span className="text-cyan-700 font-medium">Hébergements Premium</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
                Chambres & Suites
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Découvrez nos hébergements conçus pour votre confort et votre bien-être
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hotelData.rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                onClick={() => setSelectedRoom(`${index}`)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {room.size}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{room.type}</h3>
                    <p className="text-white/90 text-sm">{room.capacity}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-navy-600 mb-4 text-sm">{room.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {room.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-xs text-navy-700">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-cyan-600 font-bold text-lg">
                      À partir de {room.price} TND
                    </div>
                    <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-sm">
                      Voir détails
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Interactive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-100 px-4 py-2 rounded-full mb-6">
                <Camera className="w-5 h-5 text-cyan-600" />
                <span className="text-cyan-700 font-medium">Galerie Immersive</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
                Vivez l'Expérience en Images
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Chaque photo raconte une histoire, chaque moment capture une émotion
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hotelData.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                onClick={() => {
                  setSelectedGalleryImage(image);
                  setCurrentGalleryIndex(index);
                }}
              >
                <img
                  src={image}
                  alt={`Galerie ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Badge Story */}
                <div className="absolute top-2 left-2 bg-cyan-500 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Histoire {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expérience Complète */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-cyan-600" />
                <span className="text-cyan-700 font-medium">Expérience Complète</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Votre Séjour Parfait
              </h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
                De l'arrivée au départ, chaque moment est orchestré pour créer des souvenirs inoubliables
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hébergements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛏️</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Hébergements</h3>
                  <p className="text-navy-600 text-sm">Chambres et suites face à l'aventure</p>
                </div>
                <div className="space-y-3">
                  {hotelData.rooms.map((room, index) => (
                    <div key={index} className="p-3 bg-cyan-50 rounded-lg">
                      <div className="font-semibold text-navy-900 text-sm">{room.type}</div>
                      <div className="text-cyan-600 text-xs">{room.size} • {room.capacity}</div>
                      <div className="text-cyan-700 font-bold text-sm">À partir de {room.price} TND</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Installations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏊‍♀️</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Installations</h3>
                  <p className="text-navy-600 text-sm">Espaces conçus pour l'émerveillement</p>
                </div>
                <div className="space-y-2">
                  {hotelData.facilities.map((facility, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-navy-800 text-sm mb-1">{facility.category}</h4>
                      <div className="text-xs text-navy-600">
                        {facility.items.length} installations premium
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Activités */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Activités</h3>
                  <p className="text-navy-600 text-sm">Programme quotidien d'aventures</p>
                </div>
                <div className="space-y-3">
                  {hotelData.activities.map((activity, index) => (
                    <div key={index} className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-navy-900 text-sm">{activity.name}</div>
                        <div className="text-green-600 text-xs font-bold">{activity.time}</div>
                      </div>
                      <div className="text-green-700 text-xs">{activity.description}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Points Forts Storytelling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-6">
                <Crown className="w-5 h-5 text-gold-600" />
                <span className="text-gold-700 font-medium">Signatures Uniques</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Ce Qui Nous Rend Uniques
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Quatre piliers d'excellence qui définissent notre identité
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {hotelData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{highlight.icon}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {highlight.description}
                  </p>
                  
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <p className="text-2xl text-navy-700 leading-relaxed italic text-center">
              "{hotelData.story}"
            </p>
          </div>
        </div>
      </section>

      {/* Section Restaurants & Bars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-100 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">🍽️</span>
                <span className="text-cyan-700 font-medium">Gastronomie & Bars</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Saveurs & Ambiances
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Découvrez nos restaurants et bars conçus pour éveiller vos sens
              </p>
            </motion.div>
          </div>

          {/* Restaurants */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">Nos Restaurants</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Restaurant Principal Aqua',
                  type: 'Buffet International',
                  description: 'Buffet varié avec show-cooking en direct et spécialités méditerranéennes',
                  specialties: ['Cuisine internationale', 'Spécialités tunisiennes', 'Show-cooking', 'Menu enfants'],
                  hours: '07h00 - 22h00',
                  capacity: 300,
                  image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Notre restaurant principal vous emmène dans un voyage culinaire autour du monde, avec une attention particulière aux saveurs méditerranéennes et aux traditions tunisiennes.'
                },
                {
                  name: 'Pizzeria Aqua',
                  type: 'Cuisine Italienne',
                  description: 'Pizzas artisanales cuites au feu de bois avec ingrédients frais',
                  specialties: ['Pizzas au feu de bois', 'Pâtes fraîches', 'Antipasti', 'Gelato maison'],
                  hours: '12h00 - 23h00',
                  capacity: 80,
                  image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Notre pizzaiolo napolitain perpétue les traditions italiennes avec des pizzas cuites dans notre four en pierre, importé directement de Naples.'
                },
                {
                  name: 'Snack Poolside',
                  type: 'Restauration Rapide',
                  description: 'Collations légères et rafraîchissements près des piscines',
                  specialties: ['Salades fraîches', 'Sandwichs gourmet', 'Smoothies', 'Glaces artisanales'],
                  hours: '10h00 - 18h00',
                  capacity: 60,
                  image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Idéalement situé près du parc aquatique, notre snack vous permet de vous restaurer sans quitter l\'ambiance aquatique.'
                }
              ].map((restaurant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {restaurant.type}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">{restaurant.name}</h4>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-navy-600 mb-4 text-sm leading-relaxed">{restaurant.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-navy-800 text-sm mb-2">Spécialités :</h5>
                      <div className="flex flex-wrap gap-1">
                        {restaurant.specialties.map((specialty, specIndex) => (
                          <span
                            key={specIndex}
                            className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-navy-500">Horaires :</span>
                        <span className="text-navy-900 font-medium">{restaurant.hours}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-navy-500">Capacité :</span>
                        <span className="text-navy-900 font-medium">{restaurant.capacity} personnes</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 mb-4">
                      <p className="text-cyan-700 text-xs italic leading-relaxed">
                        "{restaurant.story}"
                      </p>
                    </div>

                    <Link
                      to="/restaurants"
                      className="w-full bg-cyan-500 text-white py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors duration-300 text-center block text-sm"
                    >
                      Voir Menu
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bars */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">Nos Bars</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Aqua Pool Bar',
                  type: 'Pool Bar',
                  description: 'Bar aquatique avec service dans l\'eau et terrasse panoramique',
                  specialties: ['Cocktails tropicaux', 'Smoothies frais', 'Snacks légers', 'Service dans l\'eau'],
                  hours: '10h00 - 18h00',
                  capacity: 80,
                  image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
                  signature: 'Aqua Splash - Cocktail signature aux fruits de mer',
                  story: 'Unique en son genre, notre bar aquatique vous permet de siroter vos cocktails les pieds dans l\'eau, créant une expérience rafraîchissante inoubliable.'
                },
                {
                  name: 'Sunset Lounge',
                  type: 'Lounge Bar',
                  description: 'Bar lounge avec vue imprenable sur le coucher de soleil',
                  specialties: ['Cocktails premium', 'Vins sélectionnés', 'Tapas gastronomiques', 'Shisha premium'],
                  hours: '17h00 - 01h00',
                  capacity: 60,
                  image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
                  signature: 'Golden Sunset - Mélange exclusif au miel local',
                  story: 'Perché avec vue panoramique, notre lounge devient magique au coucher du soleil, offrant le cadre parfait pour des moments romantiques.'
                },
                {
                  name: 'Beach Club Bar',
                  type: 'Beach Bar',
                  description: 'Bar de plage pieds dans le sable avec ambiance décontractée',
                  specialties: ['Cocktails de plage', 'Bières artisanales', 'Fruits de mer', 'Musique live'],
                  hours: '09h00 - 20h00',
                  capacity: 100,
                  image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
                  signature: 'Mediterranean Breeze - Cocktail aux herbes sauvages',
                  story: 'Les pieds dans le sable fin, savourez nos cocktails face à la Méditerranée dans une ambiance décontractée et authentique.'
                }
              ].map((bar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={bar.image}
                      alt={bar.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {bar.type}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">{bar.name}</h4>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-navy-600 mb-4 text-sm leading-relaxed">{bar.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-navy-800 text-sm mb-2">Spécialités :</h5>
                      <div className="flex flex-wrap gap-1">
                        {bar.specialties.map((specialty, specIndex) => (
                          <span
                            key={specIndex}
                            className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-navy-500">Horaires :</span>
                        <span className="text-navy-900 font-medium">{bar.hours}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-navy-500">Capacité :</span>
                        <span className="text-navy-900 font-medium">{bar.capacity} personnes</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3 mb-4">
                      <h6 className="font-semibold text-orange-700 text-sm mb-1">Cocktail Signature</h6>
                      <p className="text-orange-600 text-xs">{bar.signature}</p>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-3 mb-4">
                      <p className="text-cyan-700 text-xs italic leading-relaxed">
                        "{bar.story}"
                      </p>
                    </div>

                    <Link
                      to="/bars"
                      className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-300 text-center block text-sm"
                    >
                      Découvrir
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Galerie */}
      {selectedGalleryImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            {/* Navigation Galerie */}
            <button
              onClick={() => {
                const prevIndex = (currentGalleryIndex - 1 + hotelData.gallery.length) % hotelData.gallery.length;
                setCurrentGalleryIndex(prevIndex);
                setSelectedGalleryImage(hotelData.gallery[prevIndex]);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => {
                const nextIndex = (currentGalleryIndex + 1) % hotelData.gallery.length;
                setCurrentGalleryIndex(nextIndex);
                setSelectedGalleryImage(hotelData.gallery[nextIndex]);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <img
              src={selectedGalleryImage}
              alt="Galerie"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            
            {/* Compteur */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentGalleryIndex + 1} / {hotelData.gallery.length}
            </div>
          </div>
        </div>
      )}

      {/* Modal Chambre */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={hotelData.rooms[parseInt(selectedRoom)].image}
                alt={hotelData.rooms[parseInt(selectedRoom)].type}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">
                {hotelData.rooms[parseInt(selectedRoom)].type}
              </h3>
              <p className="text-navy-600 mb-4">{hotelData.rooms[parseInt(selectedRoom)].description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Maximize className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm text-navy-700">{hotelData.rooms[parseInt(selectedRoom)].size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm text-navy-700">{hotelData.rooms[parseInt(selectedRoom)].capacity}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-navy-900">Équipements inclus :</h4>
                {hotelData.rooms[parseInt(selectedRoom)].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-cyan-600">
                  À partir de {hotelData.rooms[parseInt(selectedRoom)].price} TND/nuit
                </div>
                <Link
                  to="/booking"
                  onClick={() => setSelectedRoom(null)}
                  className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-cyan-600 transition-colors"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-500 to-navy-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Waves className="w-8 h-8 text-cyan-300" />
              <span className="text-4xl">🏊‍♀️</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Plongez dans l'Aventure Aquatique
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Réservez votre séjour au ONE Resort Aquapark & Spa et vivez des moments magiques en famille
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
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

      {/* Navigation entre Hôtels */}
      <HotelNavigation />
    </div>
  );
};

export default AquaparkResortPage;