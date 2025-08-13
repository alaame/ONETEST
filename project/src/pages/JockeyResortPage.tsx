import React, { useState } from 'react';
import { Star, MapPin, Trophy, Camera, Heart, ArrowRight, Sparkles, Target, Gift, Zap, Dumbbell, BookOpen, Play, ChevronLeft, ChevronRight, X, Bed, Users, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HotelNavigation from '../components/HotelNavigation';

const JockeyResortPage: React.FC = () => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const hotelData = {
    name: 'ONE Resort Jockey',
    location: 'Monastir, Tunisie',
    description: 'Fusion parfaite entre business moderne et détente méditerranéenne',
    story: 'Au cœur de Monastir, notre resort Jockey redéfinit l\'art de l\'hospitalité urbaine. Ici, l\'efficacité du monde des affaires rencontre la sérénité méditerranéenne, créant un équilibre parfait entre productivité et bien-être.',
    rating: 4.7,
    reviews: 1654,
    priceFrom: 220,
    mainImage: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920',
    gallery: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      { icon: '🏢', title: 'Business Center', description: 'Espaces de travail modernes, salles de réunion' },
      { icon: '🏆', title: 'ONE SportHub', description: 'Fitness premium et courts de padel professionnels' },
      { icon: '🍸', title: 'Rooftop Lounge', description: 'Bar panoramique avec vue sur Monastir' },
      { icon: '🎯', title: 'Événements Pro', description: 'Salles de conférence et espaces événementiels' }
    ],
    rooms: [
      {
        type: 'Chambre Business',
        description: 'Espace de travail intégré, connectivité premium',
        amenities: ['Bureau ergonomique', 'WiFi haute vitesse', 'Imprimante', 'Coffre-fort'],
        capacity: '2 adultes',
        size: '32 m²',
        price: 220,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        type: 'Suite Executive',
        description: 'Salon de réception, accès lounge exécutif',
        amenities: ['Salon privé', 'Accès lounge', 'Service concierge', 'Minibar premium'],
        capacity: '2 adultes + 1 enfant',
        size: '55 m²',
        price: 320,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        type: 'Penthouse SportHub',
        description: 'Accès privé au SportHub, terrasse panoramique',
        amenities: ['Accès VIP SportHub', 'Terrasse 40m²', 'Coach personnel', 'Jacuzzi privé'],
        capacity: '4 adultes',
        size: '85 m²',
        price: 480,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    facilities: [
      {
        category: 'ONE SportHub',
        items: [
          { name: 'Salle de Fitness Premium', description: 'Équipements Technogym dernière génération' },
          { name: 'Courts de Padel Pro', description: '4 courts professionnels avec éclairage' },
          { name: 'Studio Cours Collectifs', description: 'Yoga, Pilates, CrossFit avec coachs certifiés' },
          { name: 'Espace Cardio-Training', description: 'Machines connectées avec programmes personnalisés' },
          { name: 'Zone Récupération', description: 'Sauna, hammam, bains froids' }
        ]
      },
      {
        category: 'Business & Événements',
        items: [
          { name: 'Centre d\'Affaires', description: 'Bureaux privés, salles de réunion équipées' },
          { name: 'Amphithéâtre', description: '200 places, équipement audiovisuel complet' },
          { name: 'Salles Modulables', description: 'Espaces configurables selon vos besoins' },
          { name: 'Terrasse Événementielle', description: 'Espace extérieur pour cocktails et réceptions' },
          { name: 'Service Traiteur Pro', description: 'Restauration d\'entreprise haut de gamme' }
        ]
      },
      {
        category: 'Détente & Loisirs',
        items: [
          { name: 'Rooftop Lounge', description: 'Bar panoramique avec vue 360° sur Monastir' },
          { name: 'Piscine Infinity', description: 'Bassin à débordement avec vue mer' },
          { name: 'Spa Urbain', description: 'Soins express pour professionnels actifs' },
          { name: 'Bibliothèque Lounge', description: 'Espace lecture avec cheminée' },
          { name: 'Terrasse Zen', description: 'Jardin japonais pour méditation' }
        ]
      }
    ],
    activities: [
      { name: 'Cours de Padel', time: '08h00', description: 'Initiation et perfectionnement avec pro' },
      { name: 'Business Breakfast', time: '07h30', description: 'Petit-déjeuner networking' },
      { name: 'Fitness Challenge', time: '18h00', description: 'Entraînement en groupe motivant' },
      { name: 'Rooftop Sunset', time: '19h30', description: 'Cocktails avec vue panoramique' }
    ]
  };

  // Histoires immersives pour le storytelling
  const hotelStories = [
    {
      id: 'business-excellence',
      title: 'Excellence Business',
      subtitle: 'Où performance rime avec élégance',
      narrative: 'Dans le monde des affaires modernes, l\'efficacité ne suffit plus. Il faut de l\'inspiration, de l\'innovation, de l\'excellence. Notre centre d\'affaires n\'est pas qu\'un lieu de travail, c\'est un catalyseur de réussite où vos idées prennent vie dans un cadre d\'exception.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'business' as const,
      details: {
        highlights: [
          'Salles de réunion high-tech',
          'Espaces de coworking premium',
          'Service de conciergerie business',
          'Équipements audiovisuels dernière génération'
        ],
        experience: 'Transformez vos réunions en expériences mémorables. Nos espaces business allient technologie de pointe et confort absolu pour stimuler votre créativité.',
        atmosphere: 'Design contemporain, éclairage naturel optimal, et acoustique parfaite créent l\'environnement idéal pour vos succès professionnels.'
      }
    },
    {
      id: 'sporthub-universe',
      title: 'Univers SportHub',
      subtitle: 'Temple moderne du bien-être sportif',
      narrative: 'ONE SportHub n\'est pas qu\'une salle de sport, c\'est un temple dédié au dépassement de soi. Chaque équipement Technogym raconte une histoire de performance, chaque court de padel résonne des échos de victoires partagées. Ici, le sport devient passion.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'adventurous' as const,
      details: {
        highlights: [
          'Équipements Technogym dernière génération',
          '4 courts de padel professionnels',
          'Coachs personnels certifiés',
          'Programmes d\'entraînement sur mesure'
        ],
        experience: 'Découvrez une nouvelle dimension du fitness dans un environnement premium. Nos coachs vous accompagnent vers l\'excellence physique et mentale.',
        atmosphere: 'Musiques motivantes, éclairages dynamiques, et espaces aérés créent l\'énergie parfaite pour vos entraînements.'
      }
    },
    {
      id: 'rooftop-lifestyle',
      title: 'Lifestyle Rooftop',
      subtitle: 'Monastir à vos pieds',
      narrative: 'Perché au sommet de notre resort, notre rooftop lounge offre bien plus qu\'une vue : c\'est une perspective sur la vie. Ici, les couchers de soleil deviennent spectacles privés, les cocktails se transforment en moments d\'éternité, et Monastir se révèle dans toute sa splendeur.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'romantic' as const,
      details: {
        highlights: [
          'Vue panoramique 360° sur Monastir',
          'Bar à cocktails signature',
          'Espaces lounge privatisables',
          'Service majordome exclusif'
        ],
        experience: 'Élevez vos soirées au niveau supérieur. Notre rooftop devient votre salon privé avec vue imprenable sur la ville historique.',
        atmosphere: 'Éclairages tamisés, musiques lounge, et service discret créent l\'ambiance parfaite pour vos moments privilégiés.'
      }
    },
    {
      id: 'urban-wellness',
      title: 'Bien-être Urbain',
      subtitle: 'Oasis de sérénité en ville',
      narrative: 'Au cœur de l\'effervescence urbaine, nous avons créé un sanctuaire de paix. Notre spa urbain réinvente les codes du bien-être moderne : efficace, raffiné, et parfaitement intégré à votre rythme de vie. Ici, la détente devient performance.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920',
      mood: 'serene' as const,
      details: {
        highlights: [
          'Soins express pour professionnels',
          'Espaces de méditation zen',
          'Programmes de récupération sportive',
          'Rituels de bien-être personnalisés'
        ],
        experience: 'Rechargez vos batteries dans un environnement conçu pour l\'homme moderne. Efficacité et sérénité se rencontrent pour votre bien-être optimal.',
        atmosphere: 'Design épuré, parfums apaisants, et technologies de pointe créent un cocon de régénération urbaine.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hotelData.mainImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-gray-800/70 to-blue-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Trophy className="w-12 h-12 text-blue-400" />
              <span className="text-6xl">🏆</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              {hotelData.name}
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span className="text-xl text-blue-200">{hotelData.location}</span>
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
              <div className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold">
                À partir de {hotelData.priceFrom} TND/nuit
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-blue-500 to-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
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
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Trophy className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Hébergements Business</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
                Chambres & Suites
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Espaces conçus pour allier performance professionnelle et confort absolu
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
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-navy-700">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 font-bold text-lg">
                      À partir de {room.price} TND
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
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
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Camera className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Galerie Business & Sport</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">
                L'Excellence en Action
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Découvrez nos espaces modernes et sophistiqués
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
                
                {/* Badge Business */}
                <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Business {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expérience Business & Sport */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Trophy className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-medium">Performance & Détente</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                L'Équilibre Parfait
              </h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
                Business le jour, sport l'après-midi, détente le soir : votre journée parfaite
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Hébergements Business */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🛏️</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Hébergements Business</h3>
                  <p className="text-navy-600 text-sm">Chambres conçues pour les professionnels</p>
                </div>
                <div className="space-y-3">
                  {hotelData.rooms.map((room, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-navy-900 text-sm">{room.type}</div>
                      <div className="text-blue-600 text-xs">{room.size} • {room.capacity}</div>
                      <div className="text-blue-700 font-bold text-sm">À partir de {room.price} TND</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Installations Business & Sport */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Installations Pro</h3>
                  <p className="text-navy-600 text-sm">Équipements de niveau international</p>
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

              {/* Programme Champion */}
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
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">Programme Champion</h3>
                  <p className="text-navy-600 text-sm">Activités pour atteindre l'excellence</p>
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
              <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Signatures Business</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                L'Esprit Champion
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Quatre piliers qui définissent notre approche unique du business hospitality
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
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{highlight.icon}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {highlight.description}
                  </p>
                  
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl"
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
              <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">🍽️</span>
                <span className="text-blue-700 font-medium">Business Dining</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">
                Restaurants & Bars Business
              </h2>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Espaces gastronomiques adaptés au rythme des affaires
              </p>
            </motion.div>
          </div>

          {/* Restaurants */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">Restaurants d'Affaires</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Executive Dining',
                  type: 'Restaurant Business',
                  description: 'Restaurant élégant pour déjeuners d\'affaires et dîners clients',
                  specialties: ['Cuisine internationale', 'Menus express', 'Salons privés', 'Service rapide'],
                  hours: '06h30 - 23h00',
                  capacity: 120,
                  image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Conçu pour les professionnels exigeants, notre restaurant executive allie efficacité et raffinement pour vos rendez-vous d\'affaires.',
                  signature: 'Menu déjeuner express en 30 minutes'
                },
                {
                  name: 'SportHub Café',
                  type: 'Café Sportif',
                  description: 'Café moderne intégré au SportHub avec nutrition sportive',
                  specialties: ['Smoothies protéinés', 'Salades énergétiques', 'Café premium', 'Snacks healthy'],
                  hours: '05h30 - 22h00',
                  capacity: 50,
                  image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
                  story: 'Parfaitement intégré à notre SportHub, ce café propose une nutrition adaptée aux sportifs et aux professionnels actifs.',
                  signature: 'Power Smoothie - Boost énergétique post-workout'
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
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
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

                    <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-3 mb-4">
                      <h6 className="font-semibold text-blue-700 text-sm mb-1">Service Signature</h6>
                      <p className="text-blue-600 text-xs">{restaurant.signature}</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-blue-700 text-xs italic leading-relaxed">
                        "{restaurant.story}"
                      </p>
                    </div>

                    <Link
                      to="/restaurants"
                      className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 text-center block text-sm"
                    >
                      Voir Menu
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bars Business */}
          <div className="mt-16">
            <h3 className="text-3xl font-serif font-bold text-navy-900 mb-8 text-center">Bars & Lounges</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Business Lounge',
                  type: 'Business Bar',
                  description: 'Bar élégant pour rencontres d\'affaires et détente professionnelle',
                  specialties: ['Whiskies premium', 'Cigares cubains', 'Café d\'exception', 'Espaces privés'],
                  hours: '14h00 - 00h00',
                  capacity: 35,
                  image: 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800',
                  signature: 'Executive Reserve - Blend de whiskies tunisiens',
                  story: 'Atmosphère feutrée et service discret créent l\'environnement idéal pour vos négociations et moments de détente entre professionnels.'
                },
                {
                  name: 'Sports Bar',
                  type: 'Sports Bar',
                  description: 'Bar sportif avec écrans géants et ambiance conviviale',
                  specialties: ['Bières du monde', 'Cocktails énergisants', 'Snacks sportifs', 'Retransmissions live'],
                  hours: '12h00 - 23h00',
                  capacity: 70,
                  image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
                  signature: 'Champion\'s Choice - Cocktail protéiné post-workout',
                  story: 'Directement connecté à notre SportHub, ce bar sportif est le lieu de rendez-vous des passionnés de sport et des professionnels actifs.'
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
                    <div className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
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

                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 mb-4">
                      <h6 className="font-semibold text-gray-700 text-sm mb-1">Signature</h6>
                      <p className="text-gray-600 text-xs">{bar.signature}</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-3 mb-4">
                      <p className="text-blue-700 text-xs italic leading-relaxed">
                        "{bar.story}"
                      </p>
                    </div>

                    <Link
                      to="/bars"
                      className="w-full bg-gray-500 text-white py-2 rounded-lg font-medium hover:bg-gray-600 transition-colors duration-300 text-center block text-sm"
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
                  <Maximize className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-navy-700">{hotelData.rooms[parseInt(selectedRoom)].size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-navy-700">{hotelData.rooms[parseInt(selectedRoom)].capacity}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-navy-900">Équipements inclus :</h4>
                {hotelData.rooms[parseInt(selectedRoom)].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-navy-700">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-600">
                  À partir de {hotelData.rooms[parseInt(selectedRoom)].price} TND/nuit
                </div>
                <Link
                  to="/booking"
                  onClick={() => setSelectedRoom(null)}
                  className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-gray-500 to-navy-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Trophy className="w-8 h-8 text-blue-300" />
              <span className="text-4xl">🏆</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Atteignez l'Excellence
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Réservez votre séjour au ONE Resort Jockey et découvrez l'équilibre parfait entre business et bien-être
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
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

export default JockeyResortPage;