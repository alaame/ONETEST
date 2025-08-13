import React, { useState } from 'react';
import { Star, MapPin, Crown, Camera, Heart, ArrowRight, Sparkles, Gift, Palmtree, Sun, BookOpen, Play, ChevronLeft, ChevronRight, X, Bed, Users, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HotelNavigation from '../components/HotelNavigation';

const PremiumResortPage: React.FC = () => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const hotelData = {
    name: 'ONE Resort Premium',
    location: 'Hammamet, Tunisie',
    description: 'Élégance méditerranéenne et raffinement absolu face à la mer',
    story: 'Sur la côte dorée d\'Hammamet, notre resort Premium incarne l\'art de vivre méditerranéen dans sa forme la plus raffinée. Chaque détail architectural dialogue avec la beauté naturelle, chaque service reflète notre quête d\'excellence absolue.',
    rating: 4.9,
    reviews: 1892,
    priceFrom: 250,
    mainImage: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920',
    gallery: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      { icon: '👑', title: 'Service Royal', description: 'Majordome personnel, conciergerie 24h/24' },
      { icon: '🏖️', title: 'Plage Privée', description: '300 mètres de sable fin, eaux cristallines' },
      { icon: '🍽️', title: 'Gastronomie Étoilée', description: 'Chef étoilé Michelin, cuisine d\'exception' },
      { icon: '💎', title: 'Spa Impérial', description: 'Soins de luxe, produits premium exclusifs' }
    ],
    rooms: [
      {
        type: 'Chambre Deluxe Vue Mer',
        description: 'Élégance contemporaine avec panorama méditerranéen',
        amenities: ['Balcon vue mer', 'Marbre italien', 'Linge Frette', 'Minibar premium'],
        capacity: '2 adultes',
        size: '35 m²',
        price: 250,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        type: 'Suite Junior Premium',
        description: 'Espace généreux avec salon et terrasse privée',
        amenities: ['Salon séparé', 'Terrasse 15m²', 'Jacuzzi', 'Service majordome'],
        capacity: '2 adultes + 1 enfant',
        size: '65 m²',
        price: 380,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        type: 'Suite Présidentielle',
        description: 'Summum du luxe avec piscine privée et majordome',
        amenities: ['Piscine privée', 'Majordome 24h', 'Cuisine équipée', 'Terrasse 50m²'],
        capacity: '4 adultes + 2 enfants',
        size: '120 m²',
        price: 650,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    facilities: [
      {
        category: 'Plage & Piscines',
        items: [
          { name: 'Plage Privée Premium', description: '300m de sable fin avec service personnalisé' },
          { name: 'Piscine Infinity', description: 'Vue mer panoramique, effet miroir' },
          { name: 'Piscine Adultes Only', description: 'Espace tranquille réservé aux adultes' },
          { name: 'Cabanas VIP', description: 'Espaces privatifs avec service dédié' },
          { name: 'Beach Club', description: 'Restaurant et bar les pieds dans l\'eau' }
        ]
      },
      {
        category: 'Spa Impérial',
        items: [
          { name: 'Suites de Soins VIP', description: '6 suites avec terrasse privée' },
          { name: 'Hammam Royal', description: 'Marbre de Carrare, rituel traditionnel' },
          { name: 'Piscine Thalasso', description: 'Eau de mer chauffée, jets massants' },
          { name: 'Salon de Beauté', description: 'Coiffure, manucure, soins esthétiques' },
          { name: 'Espace Méditation', description: 'Jardin zen avec fontaine apaisante' }
        ]
      },
      {
        category: 'Gastronomie Premium',
        items: [
          { name: 'Restaurant Étoilé', description: 'Cuisine gastronomique par chef Michelin' },
          { name: 'Grill Méditerranéen', description: 'Poissons et viandes grillés vue mer' },
          { name: 'Bar Panoramique', description: 'Cocktails d\'auteur, vue 360°' },
          { name: 'Cave à Vins', description: 'Sélection de grands crus, sommelier' },
          { name: 'Service en Chambre 24h', description: 'Menu gastronomique disponible 24h/24' }
        ]
      }
    ],
    activities: [
      { name: 'Yoga Sunrise', time: '07h00', description: 'Séance de yoga face au lever du soleil' },
      { name: 'Cours de Cuisine', time: '10h30', description: 'Atelier avec notre chef étoilé' },
      { name: 'Dégustation Vins', time: '18h00', description: 'Découverte des terroirs tunisiens' },
      { name: 'Concert Lounge', time: '21h00', description: 'Musique live au bar panoramique' }
    ]
  };

  // Histoires immersives pour le storytelling
  const hotelStories = [
    {
      id: 'mediterranean-elegance',
      title: 'Élégance Méditerranéenne',
      subtitle: 'L\'art de vivre à la française',
      narrative: 'Sur cette côte dorée d\'Hammamet, chaque pierre raconte l\'histoire du raffinement méditerranéen. Nos architectes ont capturé l\'essence de l\'élégance française pour créer un sanctuaire où le luxe devient naturel, où chaque détail murmure l\'excellence.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'luxurious' as const,
      details: {
        highlights: [
          'Architecture inspirée des palais français',
          'Matériaux nobles importés d\'Europe',
          'Jardins à la française redessinés',
          'Service à l\'européenne personnalisé'
        ],
        experience: 'Vivez l\'art de vivre français dans un cadre méditerranéen exceptionnel. Chaque espace respire l\'élégance, chaque service reflète notre quête de perfection.',
        atmosphere: 'Parfums de lavande et de jasmin, musiques classiques en sourdine, et éclairages dorés créent une ambiance de palace parisien.'
      }
    },
    {
      id: 'royal-service',
      title: 'Service Royal',
      subtitle: 'L\'excellence dans chaque geste',
      narrative: 'Nos majordomes ne sont pas de simples employés, ce sont les gardiens de votre bonheur. Formés dans les plus grandes écoles d\'hôtellerie européennes, ils anticipent vos désirs avant même que vous les exprimiez. Ici, le service devient art.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'luxurious' as const,
      details: {
        highlights: [
          'Majordome personnel 24h/24',
          'Conciergerie experte en expériences',
          'Service en chambre gastronomique',
          'Attention aux détails personnalisés'
        ],
        experience: 'Chaque demande devient une mission, chaque sourire une récompense. Notre équipe transforme votre séjour en une expérience sur mesure inoubliable.',
        atmosphere: 'Discrétion absolue, anticipation parfaite, et élégance naturelle définissent notre approche du service d\'exception.'
      }
    },
    {
      id: 'private-beach',
      title: 'Plage Privée',
      subtitle: 'Votre coin de paradis exclusif',
      narrative: 'Ces 300 mètres de sable fin ne sont pas qu\'une plage, c\'est votre territoire privé sur la Méditerranée. Chaque grain de sable a été choisi, chaque parasol positionné pour créer votre havre de paix personnel face à l\'infini bleu.',
      image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'serene' as const,
      details: {
        highlights: [
          'Sable fin importé des Maldives',
          'Cabanas VIP avec service dédié',
          'Activités nautiques premium',
          'Beach club gastronomique'
        ],
        experience: 'Votre plage privée devient votre salon en plein air. Service personnalisé, confort absolu, et intimité garantie pour des moments précieux.',
        atmosphere: 'Bruit des vagues apaisantes, parfums iodés, et service silencieux créent une bulle de tranquillité absolue.'
      }
    },
    {
      id: 'michelin-gastronomy',
      title: 'Gastronomie Étoilée',
      subtitle: 'Quand l\'art culinaire devient légende',
      narrative: 'Notre chef étoilé Michelin ne cuisine pas, il compose des symphonies gustatives. Chaque plat est une œuvre d\'art, chaque saveur une émotion. Dans ses mains, les produits locaux se transforment en créations d\'exception qui marquent les palais pour l\'éternité.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'luxurious' as const,
      details: {
        highlights: [
          'Chef étoilé Michelin résident',
          'Produits locaux d\'exception',
          'Cave à vins de 500 références',
          'Dîners gastronomiques privés'
        ],
        experience: 'Chaque repas devient un voyage culinaire où tradition tunisienne et techniques françaises se marient dans une harmonie parfaite.',
        atmosphere: 'Service à la française, présentation artistique, et dégustation dans un cadre raffiné avec vue mer panoramique.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-amber-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hotelData.mainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-gold-800/70 to-amber-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Crown className="w-12 h-12 text-gold-400" />
              <span className="text-6xl">👑</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              {hotelData.name}
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-gold-300" />
              <span className="text-xl text-gold-200">{hotelData.location}</span>
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
                className="bg-gradient-to-r from-gold-500 to-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
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
      <section className="py-20 bg-gradient-to-r from-gold-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-6">
                <Crown className="w-5 h-5 text-gold-600" />
                <span className="text-gold-700 font-medium">Suites d'Exception</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
                Hébergements Premium
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Vivez l'excellence dans nos suites et chambres de prestige
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
                  <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        <span className="text-xs text-navy-700">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gold-600 font-bold text-lg">
                      À partir de {room.price} TND
                    </div>
                    <button className="bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition-colors text-sm">
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
              <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-6">
                <Camera className="w-5 h-5 text-gold-600" />
                <span className="text-gold-700 font-medium">Galerie Premium</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
                L'Élégance en Images
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Découvrez le raffinement de notre resort à travers notre galerie exclusive
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
                
                {/* Badge Premium */}
                <div className="absolute top-2 left-2 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Premium {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expérience Premium */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-6">
                <Crown className="w-5 h-5 text-gold-600" />
                <span className="text-gold-700 font-medium">Excellence Premium</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                L'Art du Raffinement
              </h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
                Chaque détail de votre séjour est orchestré pour créer une expérience d'exception
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hébergements Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛏️</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Suites d'Exception</h3>
                  <p className="text-navy-600 text-sm">Hébergements de prestige avec vue mer</p>
                </div>
                <div className="space-y-3">
                  {hotelData.rooms.map((room, index) => (
                    <div key={index} className="p-3 bg-gold-50 rounded-lg">
                      <div className="font-semibold text-navy-900 text-sm">{room.type}</div>
                      <div className="text-gold-600 text-xs">{room.size} • {room.capacity}</div>
                      <div className="text-gold-700 font-bold text-sm">À partir de {room.price} TND</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Installations Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👑</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Installations Royales</h3>
                  <p className="text-navy-600 text-sm">Espaces conçus pour l'excellence</p>
                </div>
                <div className="space-y-2">
                  {hotelData.facilities.map((facility, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-navy-800 text-sm mb-1">{facility.category}</h4>
                      <div className="text-xs text-navy-600">
                        {facility.items.length} espaces d'exception
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Expériences Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Expériences Exclusives</h3>
                  <p className="text-navy-600 text-sm">Activités raffinées sur mesure</p>
                </div>
                <div className="space-y-3">
                  {hotelData.activities.map((activity, index) => (
                    <div key={index} className="p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-navy-900 text-sm">{activity.name}</div>
                        <div className="text-purple-600 text-xs font-bold">{activity.time}</div>
                      </div>
                      <div className="text-purple-700 text-xs">{activity.description}</div>
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
              <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="text-amber-700 font-medium">Signatures Premium</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                L'Excellence dans Chaque Détail
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Quatre piliers d'excellence qui définissent notre art de recevoir
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
                  <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{highlight.icon}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {highlight.description}
                  </p>
                  
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
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
              <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">🍽️</span>
                <span className="text-gold-700 font-medium">Gastronomie d'Exception</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Art Culinaire & Cocktails
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Savourez l'excellence gastronomique dans nos restaurants étoilés
              </p>
            </motion.div>
          </div>

          {/* Restaurants */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">Restaurants Gastronomiques</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Le Méditerranéen',
                  type: 'Restaurant Étoilé Michelin',
                  description: 'Cuisine gastronomique par notre chef étoilé avec vue panoramique sur la mer',
                  specialties: ['Cuisine étoilée', 'Produits de la mer', 'Menu dégustation', 'Accord mets-vins'],
                  hours: '19h00 - 23h00',
                  capacity: 60,
                  image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Notre chef étoilé Michelin sublime les produits locaux dans des créations d\'exception, offrant une expérience gastronomique inoubliable face à la Méditerranée.',
                  signature: 'Loup de mer en croûte de sel aux herbes de Provence'
                },
                {
                  name: 'Blue and Blue',
                  type: 'Cuisine Méditerranéenne Fusion',
                  description: 'Restaurant fusion alliant traditions méditerranéennes et techniques modernes',
                  specialties: ['Fusion méditerranéenne', 'Poissons grillés', 'Terrasse vue mer', 'Carte des vins premium'],
                  hours: '12h00 - 15h00 • 19h00 - 23h00',
                  capacity: 80,
                  image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Inspiré par les eaux cristallines de la Méditerranée, notre chef crée une symphonie de saveurs où se rencontrent les traditions culinaires des pays bordant cette mer mythique.',
                  signature: 'Bouillabaisse moderne aux poissons locaux'
                },
                {
                  name: 'Grill Premium',
                  type: 'Grill & Viandes',
                  description: 'Spécialiste des grillades avec viandes premium et légumes du jardin',
                  specialties: ['Viandes premium', 'Grillades au charbon', 'Légumes bio', 'Sauces maison'],
                  hours: '18h00 - 23h00',
                  capacity: 70,
                  image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Notre maître grilleur sélectionne les meilleures pièces de viande et les sublime sur notre grill au charbon de bois, révélant des saveurs authentiques.',
                  signature: 'Côte de bœuf Black Angus aux épices berbères'
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
                    <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                            className="text-xs bg-gold-100 text-gold-700 px-2 py-1 rounded-full"
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

                    <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-lg p-3 mb-4">
                      <h6 className="font-semibold text-gold-700 text-sm mb-1">Plat Signature</h6>
                      <p className="text-gold-600 text-xs">{restaurant.signature}</p>
                    </div>

                    <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-lg p-3 mb-4">
                      <p className="text-gold-700 text-xs italic leading-relaxed">
                        "{restaurant.story}"
                      </p>
                    </div>

                    <Link
                      to="/restaurants"
                      className="w-full bg-gold-500 text-white py-2 rounded-lg font-medium hover:bg-gold-600 transition-colors duration-300 text-center block text-sm"
                    >
                      Réserver Table
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bars Premium */}
          <div className="mt-16">
            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">Bars d'Exception</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Premium Rooftop',
                  type: 'Rooftop Bar',
                  description: 'Bar sophistiqué avec vue à 360° sur la Méditerranée',
                  specialties: ['Cocktails d\'auteur', 'Champagnes', 'Cuisine fusion', 'Vue panoramique'],
                  hours: '18h00 - 02h00',
                  capacity: 45,
                  image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
                  signature: 'Rooftop Royale - Création exclusive du chef barman',
                  story: 'Perché au sommet de notre resort, ce bar offre une vue imprenable sur Hammamet et la baie, créant l\'ambiance parfaite pour des soirées d\'exception.'
                },
                {
                  name: 'Cave à Vins Premium',
                  type: 'Wine Bar',
                  description: 'Cave à vins avec sélection de grands crus et dégustations privées',
                  specialties: ['Grands crus', 'Vins tunisiens', 'Dégustations', 'Fromages affinés'],
                  hours: '16h00 - 00h00',
                  capacity: 30,
                  image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
                  signature: 'Cuvée Premium - Sélection exclusive du sommelier',
                  story: 'Notre sommelier expert vous guide dans un voyage œnologique exceptionnel, découvrant les trésors viticoles de la Méditerranée et du monde.'
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
                    <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                            className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
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

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 mb-4">
                      <h6 className="font-semibold text-purple-700 text-sm mb-1">Signature</h6>
                      <p className="text-purple-600 text-xs">{bar.signature}</p>
                    </div>

                    <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-lg p-3 mb-4">
                      <p className="text-gold-700 text-xs italic leading-relaxed">
                        "{bar.story}"
                      </p>
                    </div>

                    <Link
                      to="/bars"
                      className="w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors duration-300 text-center block text-sm"
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
                  <Maximize className="w-4 h-4 text-gold-600" />
                  <span className="text-sm text-navy-700">{hotelData.rooms[parseInt(selectedRoom)].size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gold-600" />
                  <span className="text-sm text-navy-700">{hotelData.rooms[parseInt(selectedRoom)].capacity}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-navy-900">Équipements inclus :</h4>
                {hotelData.rooms[parseInt(selectedRoom)].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gold-600">
                  À partir de {hotelData.rooms[parseInt(selectedRoom)].price} TND/nuit
                </div>
                <Link
                  to="/booking"
                  onClick={() => setSelectedRoom(null)}
                  className="bg-gold-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-gold-600 transition-colors"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Crown className="w-8 h-8 text-gold-200" />
              <span className="text-4xl">👑</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Vivez l'Excellence Premium
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Réservez votre séjour au ONE Resort Premium et découvrez le summum du raffinement méditerranéen
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

      {/* Navigation entre Hôtels */}
      <HotelNavigation />
    </div>
  );
};

export default PremiumResortPage;