import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Waves, Clock, Star, Phone, Calendar, User, Users, MapPin, Heart, Crown, Sparkles, Play, Pause, Volume2, VolumeX, Download, MessageCircle, Camera, ArrowRight, Check, Gift, Leaf, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import TouchOptimizedButton from '../components/TouchOptimizedButton';

const SpaPage: React.FC = () => {
  const [selectedHotel, setSelectedHotel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('signature');
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [showCatalogPDF, setShowCatalogPDF] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Données des hôtels avec leurs spas
  const hotels = [
    {
      id: '1',
      name: 'ONE Resort Aquapark & Spa',
      location: 'Monastir',
      phone: '+216 73 521 777',
      whatsapp: '+21673521777',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920',
      philosophy: 'Sanctuaire aquatique où l\'eau devient thérapie, alliant traditions orientales et techniques modernes pour une régénération complète.',
      signature: 'Rituel Aqua Zen',
      facilities: ['Hammam traditionnel', 'Jacuzzi panoramique', 'Piscine thérapeutique', 'Jardin de méditation']
    },
    {
      id: '2', 
      name: 'ONE Resort Premium',
      location: 'Hammamet',
      phone: '+216 72 280 101',
      whatsapp: '+21672280101',
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920',
      philosophy: 'Oasis de luxe face à la Méditerranée, où chaque soin devient voyage sensoriel vers la sérénité absolue.',
      signature: 'Rituel Méditerranéen Royal',
      facilities: ['Spa face mer', 'Suites de soins privées', 'Hammam de marbre', 'Terrasse zen']
    },
    {
      id: '3',
      name: 'ONE Resort Jockey',
      location: 'Monastir',
      phone: '+216 73 500 500',
      whatsapp: '+21673500500',
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1920',
      philosophy: 'Équilibre parfait entre dynamisme urbain et détente profonde, conçu pour l\'homme et la femme modernes.',
      signature: 'Rituel Business Détox',
      facilities: ['Spa urbain design', 'Cabines high-tech', 'Espace détente lounge', 'Fitness spa intégré']
    }
  ];

  // Catalogue des soins par catégorie
  const treatmentCategories = [
    { id: 'signature', name: 'Rituels Signature', icon: '👑', color: 'gold' },
    { id: 'massage', name: 'Massages', icon: '💆‍♀️', color: 'blue' },
    { id: 'facial', name: 'Soins Visage', icon: '✨', color: 'pink' },
    { id: 'body', name: 'Soins Corps', icon: '🌿', color: 'green' },
    { id: 'couples', name: 'Rituels Couples', icon: '💕', color: 'coral' },
    { id: 'wellness', name: 'Bien-être', icon: '🧘‍♀️', color: 'purple' }
  ];

  const treatments = [
    {
      id: 1,
      name: 'Rituel Royal Méditerranéen',
      category: 'signature',
      duration: 120,
      price: 280,
      originalPrice: 320,
      description: 'Voyage sensoriel exclusif combinant gommage aux sels de mer, massage aux huiles précieuses et soin visage régénérant.',
      story: 'Inspiré des traditions de beauté des reines de Carthage, ce rituel d\'exception vous transporte dans un univers de luxe absolu.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: ['1', '2', '3'],
      benefits: ['Régénération cellulaire', 'Hydratation profonde', 'Éclat naturel', 'Détente absolue'],
      includes: ['Gommage corps', 'Massage 60min', 'Soin visage', 'Tisane détox', 'Accès spa']
    },
    {
      id: 2,
      name: 'Massage Signature aux Pierres Chaudes',
      category: 'massage',
      duration: 90,
      price: 180,
      description: 'Massage thérapeutique aux pierres volcaniques chaudes pour une détente musculaire profonde.',
      story: 'Les pierres de basalte, chauffées à la perfection, libèrent leurs énergies bienfaisantes le long de vos méridiens.',
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: ['1', '2', '3'],
      benefits: ['Décontraction musculaire', 'Amélioration circulation', 'Élimination toxines'],
      includes: ['Massage 90min', 'Pierres chaudes', 'Huiles essentielles', 'Tisane relaxante']
    },
    {
      id: 3,
      name: 'Soin Visage Anti-Âge Diamant',
      category: 'facial',
      duration: 75,
      price: 220,
      description: 'Soin visage haut de gamme aux micro-particules de diamant pour un éclat incomparable.',
      story: 'La préciosité du diamant révèle l\'éclat naturel de votre peau, effaçant le temps avec délicatesse.',
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: ['2', '3'],
      benefits: ['Lissage rides', 'Éclat immédiat', 'Fermeté retrouvée'],
      includes: ['Nettoyage profond', 'Peeling diamant', 'Masque régénérant', 'Sérum anti-âge']
    },
    {
      id: 4,
      name: 'Rituel Couple Évasion',
      category: 'couples',
      duration: 150,
      price: 450,
      description: 'Expérience romantique exclusive dans notre suite couple avec massage synchronisé et champagne.',
      story: 'Dans l\'intimité de notre suite privée, partagez un moment d\'exception qui resserrera vos liens.',
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: ['1', '2'],
      benefits: ['Complicité renforcée', 'Détente partagée', 'Moment unique'],
      includes: ['Suite privée 3h', 'Massage couple 90min', 'Champagne', 'Fruits frais', 'Accès spa privatif']
    },
    {
      id: 5,
      name: 'Gommage Corps Argan & Rose',
      category: 'body',
      duration: 60,
      price: 120,
      description: 'Exfoliation douce aux pétales de rose et huile d\'argan pour une peau soyeuse.',
      story: 'Les secrets de beauté du Maroc révèlent la douceur naturelle de votre peau.',
      image: 'https://images.pexels.com/photos/3188/steam.jpg?auto=compress&cs=tinysrgb&w=800',
      hotels: ['1', '2', '3'],
      benefits: ['Peau douce', 'Élimination cellules mortes', 'Hydratation'],
      includes: ['Gommage 45min', 'Hydratation 15min', 'Huile d\'argan', 'Douche sensorielle']
    },
    {
      id: 6,
      name: 'Séance Méditation & Yoga',
      category: 'wellness',
      duration: 60,
      price: 45,
      description: 'Cours privé de yoga et méditation dans notre jardin zen face à la mer.',
      story: 'Reconnectez-vous à votre essence dans un cadre naturel propice à l\'élévation spirituelle.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      hotels: ['1', '2', '3'],
      benefits: ['Équilibre mental', 'Flexibilité', 'Sérénité'],
      includes: ['Cours privé 60min', 'Tapis fourni', 'Tisane détox', 'Guide méditation']
    }
  ];

  // Packages spa exclusifs
  const spaPackages = [
    {
      id: 1,
      name: 'Évasion Bien-être 3 Jours',
      description: 'Séjour complet avec hébergement, soins quotidiens et accès illimité au spa',
      duration: '3 jours / 2 nuits',
      price: 890,
      originalPrice: 1200,
      savings: 310,
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Hébergement 2 nuits en suite',
        '3 soins au choix',
        'Accès spa illimité',
        'Petit-déjeuner wellness',
        'Dîner gastronomique',
        'Transfert aéroport'
      ],
      hotels: ['1', '2']
    },
    {
      id: 2,
      name: 'Week-end Détox Premium',
      description: 'Programme détox complet avec coaching nutrition et soins purifiants',
      duration: '2 jours / 1 nuit',
      price: 650,
      originalPrice: 800,
      savings: 150,
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Hébergement 1 nuit',
        'Bilan nutritionnel',
        '2 soins détox',
        'Cours de yoga',
        'Repas détox',
        'Kit détox à emporter'
      ],
      hotels: ['2', '3']
    },
    {
      id: 3,
      name: 'Lune de Miel Spa',
      description: 'Package romantique avec soins couples et expériences exclusives',
      duration: '5 jours / 4 nuits',
      price: 1890,
      originalPrice: 2400,
      savings: 510,
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Suite nuptiale 4 nuits',
        'Rituel couple quotidien',
        'Dîner romantique privé',
        'Excursion en mer',
        'Séance photo couple',
        'Champagne et pétales'
      ],
      hotels: ['1', '2']
    }
  ];

  // Galerie média
  const galleryItems = [
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Salle de massage premium',
      description: 'Ambiance feutrée et vue panoramique'
    },
    {
      type: 'image', 
      url: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Hammam traditionnel',
      description: 'Vapeurs parfumées aux huiles essentielles'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Suite couple privée',
      description: 'Intimité et luxe pour des moments à deux'
    },
    {
      type: 'image',
      url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Piscine thérapeutique',
      description: 'Hydrothérapie avec jets massants'
    }
  ];

  const filteredTreatments = treatments.filter(treatment => {
    const categoryMatch = treatment.category === selectedCategory;
    const hotelMatch = selectedHotel === 'all' || treatment.hotels.includes(selectedHotel);
    return categoryMatch && hotelMatch;
  });

  const filteredPackages = selectedHotel === 'all' 
    ? spaPackages
    : spaPackages.filter(pkg => pkg.hotels.includes(selectedHotel));

  const currentHotel = hotels.find(h => h.id === selectedHotel);

  const getWhatsAppLink = (hotelId: string) => {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) return '#';
    const message = encodeURIComponent(`Bonjour, je souhaite réserver un soin au spa du ${hotel.name}. Pouvez-vous m'aider ?`);
    return `https://wa.me/${hotel.whatsapp}?text=${message}`;
  };

  const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section Immersif */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen overflow-hidden"
      >
        {/* Background Vidéo/Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-800/40 to-transparent" />
        </div>

        {/* Particules Zen */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-400/60 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.6, 1, 0.6],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-white text-center sm:text-left"
              >
                {/* Badge Luxe */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30"
                >
                  <Waves className="w-5 h-5 text-gold-400" />
                  <span className="font-medium tracking-wide">Spa & Wellness Premium</span>
                </motion.div>

                {/* Titre Principal */}
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-4xl sm:text-6xl md:text-8xl font-display font-light mb-6 leading-tight tracking-tight"
                >
                  <span className="block">Sanctuaire de</span>
                  <span className="block text-gold-400 font-medium">Bien-être</span>
                </motion.h1>

                {/* Sous-titre Émotionnel */}
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="text-xl sm:text-2xl md:text-3xl text-gold-300 font-light mb-8 tracking-wide max-w-3xl"
                >
                  Où chaque souffle devient sérénité, chaque geste une caresse de l'âme
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <TouchOptimizedButton
                    variant="luxury"
                    size="xl"
                    icon={Crown}
                    onClick={() => setShowCatalogPDF(true)}
                  >
                    Découvrir le Catalogue
                  </TouchOptimizedButton>

                  <TouchOptimizedButton
                    variant="ghost"
                    size="xl"
                    icon={Calendar}
                    onClick={() => window.location.href = '/booking'}
                  >
                    Réserver Maintenant
                  </TouchOptimizedButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contrôles Média */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          <motion.button
            onClick={() => setAudioEnabled(!audioEnabled)}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {audioEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </motion.button>

          <motion.button
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.section>

      {/* Présentation du SPA */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-cream-50 via-white to-sage-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-navy-900 mb-6"
                >
                  L'Art du <span className="text-gold-600 font-medium">Bien-être</span>
                </motion.h2>
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
                <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
                  Dans nos trois sanctuaires de bien-être, chaque soin devient un voyage vers la sérénité absolue. 
                  Découvrez l'harmonie parfaite entre traditions orientales et innovations modernes.
                </p>
              </div>

              {/* Sélection d'Hôtel */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => setSelectedHotel('all')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedHotel === 'all'
                      ? 'bg-gold-500 text-white shadow-lg'
                      : 'bg-white text-navy-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Tous nos Spas
                </button>
                {hotels.map((hotel) => (
                  <button
                    key={hotel.id}
                    onClick={() => setSelectedHotel(hotel.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedHotel === hotel.id
                        ? 'bg-gold-500 text-white shadow-lg'
                        : 'bg-white text-navy-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {hotel.name}
                  </button>
                ))}
              </div>

              {/* Philosophie du Spa Sélectionné */}
              {currentHotel && (
                <motion.div
                  key={selectedHotel}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-3xl p-8 shadow-xl mb-16"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                        {currentHotel.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-gold-600 mb-6">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">{currentHotel.location}</span>
                      </div>
                      <p className="text-lg text-navy-700 leading-relaxed mb-6 italic">
                        "{currentHotel.philosophy}"
                      </p>
                      <div className="bg-gold-50 rounded-2xl p-6">
                        <h4 className="font-bold text-gold-700 mb-3 flex items-center space-x-2">
                          <Crown className="w-5 h-5" />
                          <span>Soin Signature : {currentHotel.signature}</span>
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {currentHotel.facilities.map((facility, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <Sparkles className="w-4 h-4 text-gold-500" />
                              <span className="text-sm text-navy-700">{facility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={currentHotel.image}
                        alt={currentHotel.name}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Catalogue des Soins */}
      <ScrollReveal delay={0.2}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                Catalogue des <span className="text-gold-600 font-medium">Soins</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Chaque soin raconte une histoire, chaque geste révèle un art millénaire
              </p>
            </div>

            {/* Filtres Catégories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {treatmentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gold-500 text-white shadow-lg'
                      : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Grille des Soins */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTreatments.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Prix et Durée */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-navy-600" />
                      <span className="text-sm font-semibold text-navy-800">{treatment.duration} min</span>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      {treatment.originalPrice && (
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                          -{Math.round(((treatment.originalPrice - treatment.price) / treatment.originalPrice) * 100)}%
                        </div>
                      )}
                      <div className="bg-gold-500 text-white px-4 py-2 rounded-full font-bold">
                        {treatment.price} TND
                      </div>
                    </div>

                    {/* Catégorie */}
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-navy-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {treatmentCategories.find(c => c.id === treatment.category)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                      {treatment.name}
                    </h3>
                    
                    <p className="text-navy-600 mb-4 text-sm leading-relaxed">
                      {treatment.description}
                    </p>

                    {treatment.story && (
                      <div className="bg-gold-50 rounded-xl p-4 mb-4">
                        <p className="text-navy-700 text-sm italic leading-relaxed">
                          "{treatment.story}"
                        </p>
                      </div>
                    )}

                    {/* Bénéfices */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-navy-800 text-sm mb-2">Bénéfices :</h4>
                      <div className="flex flex-wrap gap-1">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Inclus */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-800 text-sm mb-2">Inclus :</h4>
                      <div className="space-y-1">
                        {treatment.includes.slice(0, 3).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            <Check className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-navy-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <TouchOptimizedButton
                        variant="luxury"
                        size="md"
                        onClick={() => window.location.href = '/booking'}
                        className="flex-1"
                      >
                        Réserver
                      </TouchOptimizedButton>
                      
                      {treatment.hotels.length > 0 && (
                        <a
                          href={getWhatsAppLink(treatment.hotels[0])}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bouton Catalogue PDF */}
            <div className="text-center mt-12">
              <TouchOptimizedButton
                variant="outline"
                size="lg"
                icon={Download}
                onClick={() => setShowCatalogPDF(true)}
              >
                Télécharger le Catalogue Complet (PDF)
              </TouchOptimizedButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* L'Expérience ONE Hotels */}
      <ScrollReveal delay={0.3}>
        <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                L'Expérience <span className="text-gold-600 font-medium">ONE Hotels</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Découvrez nos espaces dédiés au bien-être, conçus pour éveiller vos sens et apaiser votre esprit
              </p>
            </div>

            {/* Espaces Spa */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  name: 'Hammam Traditionnel', 
                  description: 'Vapeurs parfumées aux huiles essentielles dans un décor de marbre authentique',
                  icon: '🏛️',
                  image: 'https://images.pexels.com/photos/3188/steam.jpg?auto=compress&cs=tinysrgb&w=600'
                },
                { 
                  name: 'Jacuzzi Panoramique', 
                  description: 'Bains bouillonnants avec vue imprenable sur la Méditerranée',
                  icon: '🌊',
                  image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                { 
                  name: 'Salles de Soins', 
                  description: 'Cabines privées équipées des dernières technologies de bien-être',
                  icon: '💆‍♀️',
                  image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600'
                },
                { 
                  name: 'Tisanerie Zen', 
                  description: 'Espace détente avec sélection de thés et infusions bien-être',
                  icon: '🍃',
                  image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
              ].map((space, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group text-center"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img
                      src={space.image}
                      alt={space.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 text-4xl">{space.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {space.name}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{space.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Offres Spéciales & Forfaits */}
      <ScrollReveal delay={0.4}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                Forfaits <span className="text-gold-600 font-medium">Exclusifs</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Packages hôtel + spa conçus pour une évasion complète et transformatrice
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="group bg-gradient-to-br from-white to-cream-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gold-200/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Badge Économie */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                      Économisez {pkg.savings} TND
                    </div>
                    
                    {/* Durée */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-navy-800">{pkg.duration}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <Gift className="w-6 h-6 text-gold-500" />
                      <h3 className="text-2xl font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                        {pkg.name}
                      </h3>
                    </div>
                    
                    <p className="text-navy-600 mb-6 leading-relaxed">{pkg.description}</p>

                    {/* Prix */}
                    <div className="flex items-center space-x-3 mb-6">
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{pkg.originalPrice} TND</span>
                      )}
                      <span className="text-3xl font-bold text-gold-600">{pkg.price} TND</span>
                    </div>

                    {/* Inclus */}
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3">Inclus dans le forfait :</h4>
                      <div className="space-y-2">
                        {pkg.includes.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-navy-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <TouchOptimizedButton
                        variant="luxury"
                        size="lg"
                        onClick={() => window.location.href = '/booking'}
                        className="flex-1"
                      >
                        Réserver
                      </TouchOptimizedButton>
                      
                      {pkg.hotels.length > 0 && (
                        <a
                          href={getWhatsAppLink(pkg.hotels[0])}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white p-3 rounded-xl hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Galerie & Médias */}
      <ScrollReveal delay={0.5}>
        <section className="py-20 bg-gradient-to-br from-sage-50 to-stone-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                Galerie <span className="text-gold-600 font-medium">Immersive</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Plongez dans l'univers visuel de nos spas d'exception
              </p>
            </div>

            {/* Galerie Interactive */}
            <div className="max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentGalleryIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    src={galleryItems[currentGalleryIndex].url}
                    alt={galleryItems[currentGalleryIndex].title}
                    className="w-full h-96 object-cover"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{galleryItems[currentGalleryIndex].title}</h3>
                  <p className="text-white/90">{galleryItems[currentGalleryIndex].description}</p>
                </div>

                {/* Navigation Galerie */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  {galleryItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGalleryIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentGalleryIndex ? 'bg-gold-400 w-8' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Miniatures */}
              <div className="grid grid-cols-4 gap-4 mt-6">
                {galleryItems.map((item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                      index === currentGalleryIndex ? 'ring-4 ring-gold-400' : 'hover:scale-105'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-20 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Réservation Rapide */}
      <ScrollReveal delay={0.6}>
        <section className="py-20 bg-gradient-to-r from-navy-900 via-gold-800 to-navy-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="text-5xl sm:text-6xl mb-6">🧘‍♀️</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white mb-6 leading-tight">
                Votre Moment de
                <span className="block text-gold-400 font-medium">Sérénité Vous Attend</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Réservez dès maintenant votre évasion bien-être dans l'un de nos spas d'exception. 
                Chaque instant devient précieux, chaque soin une renaissance.
              </p>
              
              {/* Contact par Hôtel */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {hotels.map((hotel, index) => (
                  <motion.div
                    key={hotel.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{hotel.name}</h3>
                    <p className="text-white/80 text-sm mb-4">{hotel.location}</p>
                    
                    <div className="flex flex-col space-y-3">
                      <a
                        href={`tel:${hotel.phone}`}
                        className="bg-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/30 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">{hotel.phone}</span>
                      </a>
                      
                      <a
                        href={getWhatsAppLink(hotel.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md sm:max-w-none mx-auto">
                <TouchOptimizedButton
                  variant="luxury"
                  size="xl"
                  icon={Calendar}
                  onClick={() => window.location.href = '/booking'}
                  className="sm:px-12"
                >
                  Réservation en Ligne
                </TouchOptimizedButton>
                
                <TouchOptimizedButton
                  variant="ghost"
                  size="xl"
                  icon={Phone}
                  onClick={() => window.location.href = '/contact'}
                  className="sm:px-12"
                >
                  Conseil Personnalisé
                </TouchOptimizedButton>
              </div>

              <div className="mt-12 text-white/60 text-sm">
                <p className="italic bg-black/20 backdrop-blur-sm rounded-2xl p-4 inline-block">
                  "Réservation confirmée en 24h • Annulation gratuite 48h avant • Service conciergerie inclus"
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Modal Catalogue PDF */}
      <AnimatePresence>
        {showCatalogPDF && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCatalogPDF(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-gold-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Catalogue Spa Premium</h3>
                <p className="text-navy-600 mb-6">
                  Téléchargez notre catalogue complet avec tous les soins, tarifs et forfaits exclusifs.
                </p>
                
                <div className="bg-gold-50 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-navy-600">Format :</span>
                    <span className="font-semibold text-navy-900">PDF - 2.8 MB</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-navy-600">Pages :</span>
                    <span className="font-semibold text-navy-900">24 pages</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-navy-600">Langues :</span>
                    <span className="font-semibold text-navy-900">FR / EN / AR</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowCatalogPDF(false)}
                    className="flex-1 bg-gray-100 text-navy-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                  >
                    Fermer
                  </button>
                  <button
                    onClick={() => {
                      // Simulation du téléchargement
                      const link = document.createElement('a');
                      link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPD4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQo+PgplbmRvYmoKeHJlZgowIDQKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDA5IDAwMDAwIG4gCjAwMDAwMDAwNTggMDAwMDAgbiAKMDAwMDAwMDExNSAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDQKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjE3NAolJUVPRgo=';
                      link.download = 'ONE_Hotels_Spa_Catalogue.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      setShowCatalogPDF(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-xl font-medium hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Télécharger</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpaPage;