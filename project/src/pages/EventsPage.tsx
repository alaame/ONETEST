import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Star, Crown, Sparkles, Filter, ChevronDown, Phone, Mail, Award, Heart, Gift, Music, Camera, Utensils, Wine } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedHotel, setSelectedHotel] = useState('all');
  const [selectedCapacity, setSelectedCapacity] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const eventCategories = [
    { id: 'all', name: 'Tous les événements', icon: '✨', color: 'gold' },
    { id: 'wedding', name: 'Mariages', icon: '💍', color: 'rose' },
    { id: 'corporate', name: 'Événements d\'entreprise', icon: '🏢', color: 'navy' },
    { id: 'celebration', name: 'Célébrations privées', icon: '🎉', color: 'purple' },
    { id: 'conference', name: 'Conférences & Séminaires', icon: '🎯', color: 'blue' },
    { id: 'gala', name: 'Galas & Réceptions', icon: '👑', color: 'gold' }
  ];

  const hotels = [
    { id: 'all', name: 'Tous nos resorts', location: 'Tunisie' },
    { id: '1', name: 'ONE Resort Aquapark & Spa', location: 'Monastir' },
    { id: '2', name: 'ONE Resort Premium', location: 'Hammamet' },
    { id: '3', name: 'ONE Resort Jockey', location: 'Monastir' }
  ];

  const capacityRanges = [
    { id: 'all', name: 'Toutes capacités', range: '' },
    { id: 'intimate', name: 'Intime', range: '10-30 personnes' },
    { id: 'medium', name: 'Moyen', range: '30-100 personnes' },
    { id: 'large', name: 'Grand', range: '100-300 personnes' },
    { id: 'gala', name: 'Gala', range: '300+ personnes' }
  ];

  const budgetRanges = [
    { id: 'all', name: 'Tous budgets', range: '' },
    { id: 'premium', name: 'Premium', range: '5,000 - 15,000 TND' },
    { id: 'luxury', name: 'Luxe', range: '15,000 - 50,000 TND' },
    { id: 'exclusive', name: 'Exclusif', range: '50,000+ TND' }
  ];

  const eventSpaces = [
    {
      id: 1,
      name: 'Salle de Bal Impériale',
      hotel: '2',
      category: 'gala',
      capacity: { min: 200, max: 400 },
      area: '600 m²',
      ceiling: '6 mètres',
      features: ['Lustre en cristal de Bohême', 'Parquet en chêne massif', 'Système son Bose', 'Éclairage LED programmable'],
      description: 'Salle de prestige avec vue panoramique sur la Méditerranée, conçue pour les événements d\'exception.',
      story: 'Inspirée des palais européens, cette salle majestueuse a accueilli des personnalités internationales et des célébrations royales.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: 'luxury',
      amenities: [
        'Vestiaire VIP avec service de conciergerie',
        'Terrasse privée avec vue mer',
        'Cuisine professionnelle adjacente',
        'Parking valet inclus'
      ],
      packages: [
        { name: 'Mariage Royal', price: 45000, includes: ['Décoration florale premium', 'Menu gastronomique 7 services', 'Orchestre live', 'Photographe professionnel'] },
        { name: 'Gala Corporate', price: 35000, includes: ['Équipement audiovisuel complet', 'Service traiteur premium', 'Hostesses d\'accueil', 'Coordination événementielle'] }
      ]
    },
    {
      id: 2,
      name: 'Salon Méditerranéen',
      hotel: '1',
      category: 'corporate',
      capacity: { min: 50, max: 150 },
      area: '300 m²',
      ceiling: '4 mètres',
      features: ['Écrans 4K intégrés', 'Mobilier modulable', 'Climatisation zonée', 'WiFi haute performance'],
      description: 'Espace polyvalent idéal pour conférences, séminaires et événements d\'entreprise.',
      story: 'Conçu selon les principes feng shui, cet espace favorise la créativité et la productivité lors de vos événements professionnels.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: 'premium',
      amenities: [
        'Équipement de visioconférence HD',
        'Service café premium continu',
        'Espaces de networking adjacents',
        'Support technique dédié'
      ],
      packages: [
        { name: 'Séminaire Executive', price: 12000, includes: ['Location salle 8h', 'Pauses café premium', 'Déjeuner d\'affaires', 'Support technique'] },
        { name: 'Conférence Prestige', price: 18000, includes: ['Streaming live', 'Traduction simultanée', 'Cocktail de clôture', 'Documentation personnalisée'] }
      ]
    },
    {
      id: 3,
      name: 'Jardin des Oliviers',
      hotel: '2',
      category: 'wedding',
      capacity: { min: 80, max: 200 },
      area: '800 m²',
      ceiling: 'Ciel ouvert',
      features: ['Pergola en bois noble', 'Éclairage féerique', 'Fontaine centrale', 'Jardins paysagers'],
      description: 'Cadre romantique en plein air avec oliviers centenaires et vue sur la baie d\'Hammamet.',
      story: 'Chaque olivier de ce jardin a été planté avec amour, créant un sanctuaire naturel où les serments d\'amour résonnent avec l\'éternité.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: 'luxury',
      amenities: [
        'Cérémonie laïque autorisée',
        'Tente de réception climatisée',
        'Coordination mariage complète',
        'Photographe et vidéaste inclus'
      ],
      packages: [
        { name: 'Mariage Intime', price: 25000, includes: ['Cérémonie + cocktail', 'Dîner 50 personnes', 'Décoration florale', 'Musique live'] },
        { name: 'Mariage de Rêve', price: 55000, includes: ['Cérémonie complète', 'Réception 150 personnes', 'Orchestre + DJ', 'Suite nuptiale 2 nuits'] }
      ]
    },
    {
      id: 4,
      name: 'Terrasse Panoramique',
      hotel: '3',
      category: 'celebration',
      capacity: { min: 30, max: 80 },
      area: '200 m²',
      ceiling: 'Ciel ouvert',
      features: ['Vue 360° sur Monastir', 'Bar intégré', 'Cuisine ouverte', 'Mobilier design'],
      description: 'Terrasse exclusive avec vue imprenable, parfaite pour célébrations intimes et cocktails VIP.',
      story: 'Perchée au sommet de notre resort, cette terrasse offre une perspective unique sur la ville historique de Monastir et ses monuments millénaires.',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: 'premium',
      amenities: [
        'Service de majordome privé',
        'Menu cocktails signature',
        'Éclairage d\'ambiance personnalisé',
        'Accès VIP par ascenseur privé'
      ],
      packages: [
        { name: 'Cocktail Prestige', price: 8000, includes: ['Location 4h', 'Open bar premium', 'Canapés gastronomiques', 'Service majordome'] },
        { name: 'Célébration VIP', price: 15000, includes: ['Location journée', 'Menu dégustation', 'Champagne Cristal', 'Musiciens live'] }
      ]
    },
    {
      id: 5,
      name: 'Amphithéâtre Antique',
      hotel: '1',
      category: 'conference',
      capacity: { min: 100, max: 300 },
      area: '500 m²',
      ceiling: '8 mètres',
      features: ['Acoustique parfaite', 'Gradins en pierre naturelle', 'Scène modulable', 'Éclairage théâtral'],
      description: 'Amphithéâtre inspiré de l\'architecture antique, idéal pour conférences et spectacles.',
      story: 'Construit selon les proportions dorées des amphithéâtres romains, cet espace unique allie histoire et modernité pour des événements mémorables.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: 'premium',
      amenities: [
        'Régie technique professionnelle',
        'Loges VIP avec service dédié',
        'Système de traduction simultanée',
        'Retransmission live possible'
      ],
      packages: [
        { name: 'Conférence Magistrale', price: 20000, includes: ['Location journée', 'Équipement AV complet', 'Pauses café', 'Déjeuner networking'] },
        { name: 'Spectacle Privé', price: 30000, includes: ['Location soirée', 'Éclairage spectacle', 'Sonorisation premium', 'Cocktail VIP'] }
      ]
    },
    {
      id: 6,
      name: 'Salon Privé Jasmin',
      hotel: '2',
      category: 'celebration',
      capacity: { min: 10, max: 40 },
      area: '120 m²',
      ceiling: '3.5 mètres',
      features: ['Cheminée en marbre', 'Bibliothèque ancienne', 'Piano à queue', 'Terrasse privée'],
      description: 'Salon intime au charme authentique, parfait pour célébrations familiales et réunions privées.',
      story: 'Ancienne demeure de notable transformée en salon de réception, chaque détail raconte l\'histoire de l\'hospitalité tunisienne raffinée.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      priceRange: 'premium',
      amenities: [
        'Service de butler personnel',
        'Menu sur mesure par chef privé',
        'Cave à vins sélectionnée',
        'Décoration personnalisable'
      ],
      packages: [
        { name: 'Dîner Familial', price: 6000, includes: ['Location soirée', 'Menu 5 services', 'Sommelier privé', 'Pianiste'] },
        { name: 'Anniversaire Prestige', price: 10000, includes: ['Décoration thématique', 'Gâteau sur mesure', 'Photographe', 'Animation musicale'] }
      ]
    }
  ];

  const eventServices = [
    {
      id: 'planning',
      name: 'Coordination Événementielle',
      icon: '📋',
      description: 'Planification complète de A à Z par nos experts',
      features: ['Timeline détaillée', 'Coordination fournisseurs', 'Gestion jour J', 'Suivi post-événement']
    },
    {
      id: 'catering',
      name: 'Service Traiteur Premium',
      icon: '🍽️',
      description: 'Gastronomie d\'exception adaptée à votre événement',
      features: ['Menus personnalisés', 'Chef privé', 'Service à table', 'Bars mobiles']
    },
    {
      id: 'decoration',
      name: 'Décoration & Ambiance',
      icon: '🎨',
      description: 'Création d\'univers uniques selon vos désirs',
      features: ['Design sur mesure', 'Floraison premium', 'Éclairage d\'ambiance', 'Mobilier de luxe']
    },
    {
      id: 'entertainment',
      name: 'Animation & Spectacle',
      icon: '🎭',
      description: 'Divertissements professionnels pour tous âges',
      features: ['Artistes internationaux', 'DJ résidents', 'Spectacles sur mesure', 'Animation enfants']
    },
    {
      id: 'technology',
      name: 'Solutions Techniques',
      icon: '🎬',
      description: 'Équipements audiovisuels de pointe',
      features: ['Sonorisation premium', 'Éclairage LED', 'Écrans géants', 'Streaming live']
    },
    {
      id: 'photography',
      name: 'Captation Professionnelle',
      icon: '📸',
      description: 'Immortalisez vos moments précieux',
      features: ['Photographe expert', 'Vidéaste 4K', 'Drone autorisé', 'Retouche premium']
    }
  ];

  const testimonials = [
    {
      name: 'Sophie & Alexandre',
      event: 'Mariage au Jardin des Oliviers',
      rating: 5,
      comment: 'Un mariage de conte de fées dans un cadre absolument magique. L\'équipe ONE a transformé nos rêves en réalité.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Septembre 2023'
    },
    {
      name: 'Directeur Général TechCorp',
      event: 'Conférence Internationale',
      rating: 5,
      comment: 'Organisation parfaite pour notre événement de 250 participants. Professionnalisme et élégance au rendez-vous.',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Octobre 2023'
    },
    {
      name: 'Famille Ben Ali',
      event: 'Anniversaire 60 ans',
      rating: 5,
      comment: 'Une soirée inoubliable dans le Salon Jasmin. Attention aux détails remarquable et service impeccable.',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'Novembre 2023'
    }
  ];

  const filteredSpaces = eventSpaces.filter(space => {
    const categoryMatch = selectedCategory === 'all' || space.category === selectedCategory;
    const hotelMatch = selectedHotel === 'all' || space.hotel === selectedHotel;
    const capacityMatch = selectedCapacity === 'all' || 
      (selectedCapacity === 'intimate' && space.capacity.max <= 30) ||
      (selectedCapacity === 'medium' && space.capacity.max <= 100 && space.capacity.min >= 30) ||
      (selectedCapacity === 'large' && space.capacity.max <= 300 && space.capacity.min >= 100) ||
      (selectedCapacity === 'gala' && space.capacity.min >= 300);
    const budgetMatch = selectedBudget === 'all' || space.priceRange === selectedBudget;
    
    return categoryMatch && hotelMatch && capacityMatch && budgetMatch;
  });

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      gold: 'bg-gold-500 text-white',
      rose: 'bg-rose-500 text-white',
      navy: 'bg-navy-500 text-white',
      purple: 'bg-purple-500 text-white',
      blue: 'bg-blue-500 text-white'
    };
    return colors[color] || 'bg-gold-500 text-white';
  };

  const getBudgetColor = (range: string) => {
    const colors: { [key: string]: string } = {
      premium: 'bg-blue-100 text-blue-700',
      luxury: 'bg-purple-100 text-purple-700',
      exclusive: 'bg-gold-100 text-gold-700'
    };
    return colors[range] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-gold-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1920)',
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
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Crown className="w-10 h-10 text-gold-400" />
              <span className="text-5xl">🎭</span>
              <Sparkles className="w-10 h-10 text-gold-400" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight">
              Occasions &
              <span className="block text-gold-400 font-medium">Événements</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Créons ensemble des moments d'exception dans nos espaces de prestige
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Award className="w-5 h-5 text-gold-300" />
              <span className="text-gold-200 font-medium">Événements sur Mesure depuis 1995</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtres Élégants */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gold-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-navy-600" />
              <h3 className="font-semibold text-navy-900 text-lg">Filtres de Recherche</h3>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gold-100 text-gold-700 rounded-lg hover:bg-gold-200 transition-colors"
            >
              <span>Filtres</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: showFilters || window.innerWidth >= 1024 ? 'auto' : 0, 
              opacity: showFilters || window.innerWidth >= 1024 ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Catégorie */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Type d'événement</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white"
                >
                  {eventCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hôtel */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Resort</label>
                <select
                  value={selectedHotel}
                  onChange={(e) => setSelectedHotel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white"
                >
                  {hotels.map((hotel) => (
                    <option key={hotel.id} value={hotel.id}>
                      {hotel.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Capacité */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Capacité</label>
                <select
                  value={selectedCapacity}
                  onChange={(e) => setSelectedCapacity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white"
                >
                  {capacityRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} {range.range && `(${range.range})`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">Budget</label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent bg-white"
                >
                  {budgetRanges.map((budget) => (
                    <option key={budget.id} value={budget.id}>
                      {budget.name} {budget.range && `(${budget.range})`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Résultats du filtre */}
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-navy-600">
                {filteredSpaces.length} espace{filteredSpaces.length > 1 ? 's' : ''} disponible{filteredSpaces.length > 1 ? 's' : ''}
              </span>
              {(selectedCategory !== 'all' || selectedHotel !== 'all' || selectedCapacity !== 'all' || selectedBudget !== 'all') && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedHotel('all');
                    setSelectedCapacity('all');
                    setSelectedBudget('all');
                  }}
                  className="text-gold-600 hover:text-gold-700 font-medium"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Espaces Événementiels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-navy-900 mb-4">
              Nos Espaces d'<span className="text-gold-600 font-medium">Exception</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto font-light">
              Chaque espace raconte une histoire, chaque événement devient légende
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredSpaces.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClass(eventCategories.find(c => c.id === space.category)?.color || 'gold')}`}>
                      {eventCategories.find(c => c.id === space.category)?.icon} {eventCategories.find(c => c.id === space.category)?.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBudgetColor(space.priceRange)}`}>
                      {budgetRanges.find(b => b.id === space.priceRange)?.name}
                    </span>
                  </div>

                  {/* Capacité */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-2 text-navy-800">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{space.capacity.min}-{space.capacity.max} pers.</span>
                    </div>
                  </div>

                  {/* Hôtel */}
                  <div className="absolute top-4 right-4 bg-navy-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {hotels.find(h => h.id === space.hotel)?.name.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {space.name}
                      </h3>
                      <div className="flex items-center text-navy-500 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotels.find(h => h.id === space.hotel)?.location}
                      </div>
                    </div>
                    <div className="text-right text-sm text-navy-500">
                      <div>{space.area}</div>
                      <div>Hauteur: {space.ceiling}</div>
                    </div>
                  </div>

                  <p className="text-navy-600 mb-4 text-sm leading-relaxed">{space.description}</p>

                  {/* Histoire */}
                  <div className="bg-gradient-to-r from-gold-50 to-cream-50 rounded-lg p-4 mb-4">
                    <p className="text-navy-700 text-sm italic leading-relaxed">
                      "{space.story}"
                    </p>
                  </div>

                  {/* Caractéristiques */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-800 text-sm mb-2">Caractéristiques :</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {space.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                          <span className="text-xs text-navy-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy-800 text-sm mb-3">Formules disponibles :</h4>
                    <div className="space-y-2">
                      {space.packages.slice(0, 2).map((pkg, pkgIndex) => (
                        <div key={pkgIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-navy-900 text-sm">{pkg.name}</div>
                            <div className="text-xs text-navy-600">{pkg.includes.slice(0, 2).join(', ')}</div>
                          </div>
                          <div className="text-gold-600 font-bold text-sm">{pkg.price.toLocaleString()} TND</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Link
                      to="/booking"
                      className="flex-1 bg-gold-500 text-white py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors duration-300 text-center text-sm"
                    >
                      Réserver
                    </Link>
                    <button className="px-4 py-3 bg-navy-100 text-navy-600 rounded-lg hover:bg-navy-200 transition-colors duration-300">
                      <Camera className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-3 bg-gray-100 text-navy-600 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredSpaces.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Aucun espace trouvé</h3>
              <p className="text-navy-600 mb-6">Modifiez vos critères de recherche pour voir plus d'options</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedHotel('all');
                  setSelectedCapacity('all');
                  setSelectedBudget('all');
                }}
                className="bg-gold-500 text-white px-6 py-3 rounded-xl hover:bg-gold-600 transition-colors duration-300"
              >
                Voir tous les espaces
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Services Événementiels */}
      <section className="py-16 bg-gradient-to-br from-gold-50 to-cream-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-navy-900 mb-4">
              Services d'<span className="text-gold-600 font-medium">Excellence</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto font-light">
              Une équipe dédiée pour orchestrer chaque détail de votre événement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group border border-gold-100"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{service.name}</h3>
                  <p className="text-navy-600 text-sm">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      <span className="text-xs text-navy-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 bg-gold-100 text-gold-700 py-2 rounded-lg font-medium hover:bg-gold-200 transition-colors duration-300 text-sm">
                  En savoir plus
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-navy-900 mb-4">
              Témoignages d'<span className="text-gold-600 font-medium">Exception</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto font-light">
              Chaque événement laisse des souvenirs impérissables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-cream-50 to-gold-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gold-100"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-navy-900 text-sm">{testimonial.name}</div>
                    <div className="text-gold-600 text-xs">{testimonial.event}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'text-gold-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-navy-700 text-sm leading-relaxed italic mb-3">
                  "{testimonial.comment}"
                </p>

                <div className="text-xs text-navy-500">{testimonial.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de Planification */}
      <section className="py-16 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-navy-900 mb-4">
              Processus de <span className="text-gold-600 font-medium">Création</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto font-light">
              De l'idée à la réalisation, nous vous accompagnons à chaque étape
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Consultation', description: 'Rencontre personnalisée pour comprendre votre vision', icon: '💭' },
                { step: '02', title: 'Conception', description: 'Création d\'un concept unique adapté à vos besoins', icon: '🎨' },
                { step: '03', title: 'Coordination', description: 'Planification détaillée et gestion des prestataires', icon: '📋' },
                { step: '04', title: 'Réalisation', description: 'Exécution parfaite le jour J avec notre équipe dédiée', icon: '✨' }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{process.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">{process.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-gold-800 to-navy-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Crown className="w-8 h-8 text-gold-400" />
              <span className="text-4xl">🎭</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-white mb-6 leading-tight">
              Créons Ensemble Votre
              <span className="block text-gold-400 font-medium">Événement d'Exception</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Chaque détail compte, chaque moment devient précieux. Laissez-nous transformer votre vision en réalité.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Planifier mon événement</span>
              </Link>
              <a
                href="tel:+21670123456"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>+216 70 123 456</span>
              </a>
            </div>

            <div className="mt-8 text-white/60 text-sm">
              <p className="italic">
                "Votre événement, notre passion. Ensemble, créons l'extraordinaire."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;