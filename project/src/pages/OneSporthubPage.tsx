import React, { useState, useRef } from 'react';
import { Trophy, Target, Users, Clock, Star, MapPin, Phone, Calendar, Play, Zap, Award, Crown, Sparkles, Filter, ChevronDown, Heart, Share2, Camera, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import TouchOptimizedButton from '../components/TouchOptimizedButton';

const OneSporthubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [showPadelBooking, setShowPadelBooking] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Catégories d'activités
  const categories = [
    { id: 'all', name: 'Toutes les activités', icon: '🏆', count: 24 },
    { id: 'racket', name: 'Sports de Raquette', icon: '🏸', count: 6 },
    { id: 'water', name: 'Sports Nautiques', icon: '🏊‍♀️', count: 5 },
    { id: 'fitness', name: 'Fitness & Wellness', icon: '💪', count: 7 },
    { id: 'outdoor', name: 'Activités Outdoor', icon: '🌿', count: 4 },
    { id: 'team', name: 'Sports d\'Équipe', icon: '⚽', count: 2 }
  ];

  // Activités sportives complètes
  const activities = [
    // Sports de Raquette
    {
      id: 'padel',
      name: 'Padel Premium',
      category: 'racket',
      featured: true,
      description: 'Courts FIP certifiés avec coaching professionnel et matériel Wilson',
      story: 'Le padel, sport en pleine expansion, trouve ici son temple. Nos courts aux normes FIP offrent une expérience de jeu exceptionnelle dans un cadre luxueux.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['4 courts FIP certifiés', 'Coaching professionnel', 'Matériel Wilson premium', 'Éclairage LED professionnel'],
      level: 'Tous niveaux',
      duration: '1h30',
      capacity: '4 joueurs',
      price: '80 TND/court',
      schedule: '7h00 - 22h00',
      equipment: 'Fourni (Wilson)',
      certification: 'FIP Certified'
    },
    {
      id: 'tennis',
      name: 'Tennis Club',
      category: 'racket',
      description: 'Courts en terre battue avec académie de tennis',
      story: 'Tradition et modernité se rencontrent sur nos courts de tennis, où chaque échange devient un art.',
      image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['2 courts terre battue', 'Académie de tennis', 'Cours particuliers', 'Tournois mensuels'],
      level: 'Débutant à Expert',
      duration: '1h00',
      capacity: '2-4 joueurs',
      price: '60 TND/court',
      schedule: '6h00 - 21h00',
      equipment: 'Location disponible'
    },
    {
      id: 'badminton',
      name: 'Badminton',
      category: 'racket',
      description: 'Terrains couverts climatisés pour un confort optimal',
      story: 'Sport de précision et d\'agilité, le badminton révèle votre potentiel athlétique.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['2 terrains couverts', 'Climatisation', 'Éclairage optimal', 'Matériel professionnel'],
      level: 'Tous niveaux',
      duration: '45min',
      capacity: '2-4 joueurs',
      price: '40 TND/terrain',
      schedule: '8h00 - 20h00',
      equipment: 'Fourni'
    },
    {
      id: 'squash',
      name: 'Squash',
      category: 'racket',
      description: 'Court vitré professionnel pour un jeu intense',
      story: 'Dans l\'intimité du court de squash, chaque point devient un défi personnel.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Court vitré professionnel', 'Sol spécialisé', 'Ventilation optimale', 'Système de score'],
      level: 'Intermédiaire à Expert',
      duration: '45min',
      capacity: '2 joueurs',
      price: '50 TND/court',
      schedule: '8h00 - 21h00',
      equipment: 'Location disponible'
    },
    {
      id: 'ping-pong',
      name: 'Tennis de Table',
      category: 'racket',
      description: 'Tables professionnelles pour tournois et loisirs',
      story: 'Sport de réflexes et de stratégie, le ping-pong unit les générations.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['4 tables professionnelles', 'Éclairage spécialisé', 'Tournois réguliers', 'Coaching disponible'],
      level: 'Tous niveaux',
      duration: '30min',
      capacity: '2-4 joueurs',
      price: '25 TND/table',
      schedule: '9h00 - 22h00',
      equipment: 'Fourni'
    },
    {
      id: 'beach-tennis',
      name: 'Beach Tennis',
      category: 'racket',
      description: 'Terrain de sable face à la mer',
      story: 'Le tennis rencontre la plage dans une fusion parfaite de sport et de détente.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Terrain sable fin', 'Vue mer', 'Filets professionnels', 'Ambiance beach'],
      level: 'Tous niveaux',
      duration: '1h00',
      capacity: '2-4 joueurs',
      price: '45 TND/terrain',
      schedule: '8h00 - 18h00',
      equipment: 'Fourni'
    },

    // Sports Nautiques
    {
      id: 'swimming',
      name: 'Natation',
      category: 'water',
      description: 'Piscine olympique 50m avec lignes d\'eau',
      story: 'Dans le silence de l\'eau, trouvez votre rythme et dépassez vos limites.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Piscine 50m', 'Lignes d\'eau', 'Chronométrage', 'Maître nageur'],
      level: 'Tous niveaux',
      duration: 'Libre',
      capacity: 'Illimitée',
      price: 'Inclus',
      schedule: '6h00 - 22h00',
      equipment: 'Non fourni'
    },
    {
      id: 'aqua-fitness',
      name: 'Aqua Fitness',
      category: 'water',
      description: 'Cours collectifs dans l\'eau avec musique',
      story: 'L\'eau devient votre partenaire d\'entraînement dans une ambiance festive.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Cours collectifs', 'Musique motivante', 'Instructeur qualifié', 'Matériel aquatique'],
      level: 'Tous niveaux',
      duration: '45min',
      capacity: '15 personnes',
      price: '30 TND/séance',
      schedule: '10h00, 16h00',
      equipment: 'Fourni'
    },
    {
      id: 'water-polo',
      name: 'Water Polo',
      category: 'water',
      description: 'Sport d\'équipe aquatique intense',
      story: 'Stratégie et endurance se mêlent dans ce sport aquatique spectaculaire.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Bassin dédié', 'Équipes mixtes', 'Arbitrage', 'Matériel professionnel'],
      level: 'Intermédiaire',
      duration: '1h30',
      capacity: '14 joueurs',
      price: '40 TND/match',
      schedule: 'Sur réservation',
      equipment: 'Fourni'
    },
    {
      id: 'diving',
      name: 'Plongée',
      category: 'water',
      description: 'Initiation et perfectionnement en piscine',
      story: 'Découvrez les secrets du monde sous-marin en toute sécurité.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Bassin 4m profondeur', 'Instructeur PADI', 'Équipement complet', 'Certification possible'],
      level: 'Débutant à Avancé',
      duration: '2h00',
      capacity: '6 personnes',
      price: '120 TND/cours',
      schedule: 'Sur réservation',
      equipment: 'Fourni'
    },
    {
      id: 'surfing',
      name: 'Surf & Paddle',
      category: 'water',
      description: 'École de surf avec planches et combinaisons',
      story: 'Domptez les vagues méditerranéennes et ressentez la liberté absolue.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['École de surf', 'Planches variées', 'Combinaisons', 'Moniteur diplômé'],
      level: 'Débutant à Expert',
      duration: '2h00',
      capacity: '8 personnes',
      price: '90 TND/cours',
      schedule: 'Selon conditions',
      equipment: 'Fourni'
    },

    // Fitness & Wellness
    {
      id: 'gym',
      name: 'Salle de Fitness',
      category: 'fitness',
      featured: true,
      description: 'Équipements Technogym dernière génération',
      story: 'Temple moderne du fitness où technologie et performance se rencontrent.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Technogym premium', 'Coaching personnel', 'Programmes sur mesure', 'Suivi digital'],
      level: 'Tous niveaux',
      duration: 'Libre',
      capacity: '50 personnes',
      price: 'Inclus',
      schedule: '5h00 - 23h00',
      equipment: 'Complet'
    },
    {
      id: 'crossfit',
      name: 'CrossFit',
      category: 'fitness',
      description: 'Box dédiée avec équipements spécialisés',
      story: 'Dépassez vos limites dans notre box CrossFit où chaque WOD devient une victoire.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Box équipée', 'WOD quotidiens', 'Coach certifié', 'Communauté active'],
      level: 'Intermédiaire à Expert',
      duration: '1h00',
      capacity: '12 personnes',
      price: '50 TND/séance',
      schedule: '7h00, 18h00',
      equipment: 'Fourni'
    },
    {
      id: 'yoga',
      name: 'Yoga & Méditation',
      category: 'fitness',
      description: 'Studio zen avec vue panoramique',
      story: 'Trouvez l\'harmonie intérieure dans notre studio baigné de lumière naturelle.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Studio zen', 'Vue panoramique', 'Professeur certifié', 'Matériel fourni'],
      level: 'Tous niveaux',
      duration: '1h00',
      capacity: '20 personnes',
      price: '35 TND/cours',
      schedule: '7h00, 18h30',
      equipment: 'Fourni'
    },
    {
      id: 'pilates',
      name: 'Pilates',
      category: 'fitness',
      description: 'Méthode Pilates avec équipements spécialisés',
      story: 'Renforcez votre corps en profondeur avec la méthode Pilates authentique.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Reformer Pilates', 'Cours privés', 'Instructeur certifié', 'Programmes personnalisés'],
      level: 'Tous niveaux',
      duration: '50min',
      capacity: '8 personnes',
      price: '45 TND/cours',
      schedule: '9h00, 17h00',
      equipment: 'Fourni'
    },
    {
      id: 'spinning',
      name: 'Spinning',
      category: 'fitness',
      description: 'Studio avec vélos haut de gamme et ambiance club',
      story: 'Pédalez au rythme de la musique dans une ambiance électrisante.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['20 vélos premium', 'Système audio immersif', 'Éclairage dynamique', 'Coach motivant'],
      level: 'Tous niveaux',
      duration: '45min',
      capacity: '20 personnes',
      price: '35 TND/cours',
      schedule: '8h00, 19h00',
      equipment: 'Fourni'
    },
    {
      id: 'functional',
      name: 'Functional Training',
      category: 'fitness',
      description: 'Entraînement fonctionnel avec équipements variés',
      story: 'Développez une condition physique globale avec des mouvements naturels.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Équipements variés', 'Circuits training', 'Coaching groupe', 'Progression mesurée'],
      level: 'Intermédiaire',
      duration: '1h00',
      capacity: '10 personnes',
      price: '40 TND/séance',
      schedule: '7h30, 18h30',
      equipment: 'Fourni'
    },
    {
      id: 'stretching',
      name: 'Stretching & Recovery',
      category: 'fitness',
      description: 'Séances de récupération et d\'assouplissement',
      story: 'Prenez soin de votre corps avec des séances dédiées à la récupération.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Techniques de récupération', 'Étirements guidés', 'Relaxation', 'Prévention blessures'],
      level: 'Tous niveaux',
      duration: '30min',
      capacity: '15 personnes',
      price: '25 TND/séance',
      schedule: '12h00, 20h00',
      equipment: 'Fourni'
    },

    // Sports d'Équipe
    {
      id: 'football',
      name: 'Football',
      category: 'team',
      description: 'Terrain synthétique éclairé pour matchs et entraînements',
      story: 'Le roi des sports trouve son royaume sur notre terrain aux normes FIFA.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Terrain synthétique', 'Éclairage LED', 'Vestiaires équipés', 'Arbitrage possible'],
      level: 'Tous niveaux',
      duration: '1h30',
      capacity: '22 joueurs',
      price: '100 TND/terrain',
      schedule: '16h00 - 22h00',
      equipment: 'Ballons fournis'
    },
    {
      id: 'volleyball',
      name: 'Volleyball',
      category: 'team',
      description: 'Terrain de beach volley sur sable fin',
      story: 'Entre ciel et sable, le volleyball devient une danse aérienne.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Terrain sable fin', 'Filets professionnels', 'Éclairage nocturne', 'Tournois organisés'],
      level: 'Tous niveaux',
      duration: '1h00',
      capacity: '12 joueurs',
      price: '60 TND/terrain',
      schedule: '9h00 - 21h00',
      equipment: 'Fourni'
    },

    // Activités Outdoor
    {
      id: 'running',
      name: 'Running Club',
      category: 'outdoor',
      description: 'Parcours balisés avec coaching running',
      story: 'Courez vers vos objectifs sur nos parcours inspirants face à la Méditerranée.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Parcours balisés', 'Coaching running', 'Groupes de niveau', 'Suivi GPS'],
      level: 'Tous niveaux',
      duration: '45min',
      capacity: '20 personnes',
      price: '25 TND/séance',
      schedule: '6h30, 18h00',
      equipment: 'Tracker fourni'
    },
    {
      id: 'cycling',
      name: 'Cyclisme',
      category: 'outdoor',
      description: 'VTT et vélos de route pour explorations',
      story: 'Explorez les paysages tunisiens à vélo, entre mer et collines.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Flotte de VTT', 'Vélos route', 'Casques sécurité', 'Circuits guidés'],
      level: 'Tous niveaux',
      duration: '2h00',
      capacity: '12 personnes',
      price: '40 TND/sortie',
      schedule: '8h00, 16h00',
      equipment: 'Fourni'
    },
    {
      id: 'hiking',
      name: 'Randonnée',
      category: 'outdoor',
      description: 'Excursions guidées dans l\'arrière-pays',
      story: 'Découvrez les trésors cachés de la Tunisie lors de randonnées authentiques.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Guide expérimenté', 'Circuits variés', 'Transport inclus', 'Collation fournie'],
      level: 'Débutant à Avancé',
      duration: '4h00',
      capacity: '15 personnes',
      price: '60 TND/excursion',
      schedule: 'Sur réservation',
      equipment: 'Conseils fournis'
    },
    {
      id: 'beach-activities',
      name: 'Activités Plage',
      category: 'outdoor',
      description: 'Sports de plage variés et animations',
      story: 'La plage devient votre terrain de jeu avec une multitude d\'activités.',
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Multiples activités', 'Animateurs sportifs', 'Matériel varié', 'Ambiance festive'],
      level: 'Tous niveaux',
      duration: 'Variable',
      capacity: 'Variable',
      price: 'Inclus',
      schedule: '10h00 - 17h00',
      equipment: 'Fourni'
    }
  ];

  // Programmes spéciaux
  const specialPrograms = [
    {
      id: 'padel-academy',
      name: 'Académie Padel ONE',
      description: 'Programme intensif de perfectionnement padel',
      duration: '5 jours',
      price: '350 TND',
      features: ['Coaching individuel', 'Analyse vidéo', 'Matériel Wilson', 'Certificat'],
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'wellness-week',
      name: 'Semaine Wellness',
      description: 'Programme holistique corps et esprit',
      duration: '7 jours',
      price: '450 TND',
      features: ['Yoga quotidien', 'Nutrition coaching', 'Spa inclus', 'Bilan santé'],
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'family-sports',
      name: 'Sports en Famille',
      description: 'Activités sportives adaptées à toute la famille',
      duration: '3 jours',
      price: '200 TND',
      features: ['Activités multi-âges', 'Encadrement spécialisé', 'Matériel adapté', 'Récompenses'],
      image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  const featuredActivities = activities.filter(activity => activity.featured);

  const getCategoryColor = (categoryId: string) => {
    const colors: { [key: string]: string } = {
      all: 'bg-gold-500 text-white',
      racket: 'bg-blue-500 text-white',
      water: 'bg-cyan-500 text-white',
      fitness: 'bg-green-500 text-white',
      outdoor: 'bg-orange-500 text-white',
      team: 'bg-purple-500 text-white'
    };
    return colors[categoryId] || 'bg-gray-500 text-white';
  };

  const getLevelColor = (level: string) => {
    if (level.includes('Débutant')) return 'bg-green-100 text-green-700';
    if (level.includes('Intermédiaire')) return 'bg-yellow-100 text-yellow-700';
    if (level.includes('Expert')) return 'bg-red-100 text-red-700';
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
      {/* Hero Section Immersif */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-blue-800/70 to-green-600/80"></div>
        </motion.div>

        {/* Particules Sportives */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
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
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              {/* Badge Premium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20"
              >
                <Trophy className="w-5 h-5 text-gold-400" />
                <span className="font-medium tracking-wide">24+ Activités Premium</span>
              </motion.div>

              {/* Titre Principal */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light mb-6 leading-tight"
              >
                ONE
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="block text-gold-400 font-medium"
                >
                  SportHub
                </motion.span>
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl text-blue-200 font-light mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Fitness premium, padel professionnel et bien-être dans un seul univers d'exception
              </motion.p>

              {/* CTAs Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto"
              >
                <TouchOptimizedButton
                  variant="luxury"
                  size="xl"
                  icon={Trophy}
                  onClick={() => setShowPadelBooking(true)}
                  className="sm:px-10"
                >
                  Réserver Padel Maintenant
                </TouchOptimizedButton>
                
                <TouchOptimizedButton
                  variant="ghost"
                  size="xl"
                  icon={Play}
                  onClick={() => window.location.href = '/tour'}
                  className="sm:px-10"
                >
                  Visite Virtuelle
                </TouchOptimizedButton>
              </motion.div>

              {/* Stats Impressionnantes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto"
              >
                {[
                  { number: '24+', label: 'Activités', icon: '🏆' },
                  { number: '4', label: 'Courts Padel FIP', icon: '🏸' },
                  { number: '7j/7', label: 'Ouvert', icon: '⏰' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                    className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gold-400">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Padel Premium */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gold-100 px-6 py-3 rounded-full mb-6">
              <Crown className="w-5 h-5 text-gold-600" />
              <span className="text-gold-800 font-semibold">Expérience Padel Premium</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-6">
              Courts Padel <span className="text-gold-600">FIP Certifiés</span>
            </h2>
            <p className="text-lg md:text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Vivez le padel dans des conditions professionnelles avec nos 4 courts certifiés FIP et notre matériel Wilson premium
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Courts Padel FIP"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6 bg-gold-500 text-white px-4 py-2 rounded-full font-semibold">
                  FIP Certified
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Courts Professionnels</h3>
                  <p className="text-white/90">Standards internationaux FIP</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">Excellence Padel</h3>
                <div className="space-y-4">
                  {[
                    { icon: '🏆', title: 'Courts FIP Certifiés', desc: '4 courts aux normes internationales' },
                    { icon: '🎾', title: 'Matériel Wilson', desc: 'Raquettes et balles premium incluses' },
                    { icon: '👨‍🏫', title: 'Coaching Pro', desc: 'Instructeurs certifiés disponibles' },
                    { icon: '💡', title: 'Éclairage LED', desc: 'Jeu possible jusqu\'à 22h00' }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-3xl">{feature.icon}</div>
                      <div>
                        <div className="font-semibold text-navy-900">{feature.title}</div>
                        <div className="text-navy-600 text-sm">{feature.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Offre Spéciale Padel</h4>
                <p className="mb-4">Réservez 5 séances et obtenez la 6ème gratuite !</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">400 TND</span>
                    <span className="text-gold-200 line-through ml-2">480 TND</span>
                  </div>
                  <TouchOptimizedButton
                    variant="ghost"
                    onClick={() => setShowPadelBooking(true)}
                    className="bg-white/20 hover:bg-white/30"
                  >
                    Réserver
                  </TouchOptimizedButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filtres Catégories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-navy-600" />
              <h3 className="font-semibold text-navy-900">Catégories d'Activités</h3>
            </div>
            <div className="text-sm text-navy-600">
              {filteredActivities.length} activité{filteredActivities.length > 1 ? 's' : ''} disponible{filteredActivities.length > 1 ? 's' : ''}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? getCategoryColor(category.id)
                    : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm sm:text-base">{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{category.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Activités Vedettes */}
      {selectedCategory === 'all' && (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-4">
                Activités <span className="text-gold-600">Vedettes</span>
              </h2>
              <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                Nos expériences sportives les plus prisées pour une performance optimale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredActivities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Vedette</span>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{activity.name}</h3>
                      <p className="text-white/90 text-sm">{activity.level}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-navy-600 mb-4 text-sm leading-relaxed">{activity.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gold-500" />
                        <span className="text-navy-700">{activity.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gold-500" />
                        <span className="text-navy-700">{activity.capacity}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-gold-600 font-bold">{activity.price}</div>
                      <TouchOptimizedButton
                        variant="primary"
                        size="sm"
                        onClick={() => setSelectedActivity(activity.id)}
                      >
                        Découvrir
                      </TouchOptimizedButton>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Grille des Activités */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-4">
              {selectedCategory === 'all' ? 'Toutes nos Activités' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              {filteredActivities.length} activité{filteredActivities.length > 1 ? 's' : ''} pour tous les niveaux et toutes les passions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {activity.featured && (
                    <div className="absolute top-3 left-3 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>Premium</span>
                    </div>
                  )}

                  {activity.certification && (
                    <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {activity.certification}
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-sm">{activity.name}</h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-navy-600 text-xs mb-3 line-clamp-2">{activity.description}</p>
                  
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-navy-500 flex items-center">
                        <Target className="w-3 h-3 mr-1" />
                        Niveau :
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(activity.level)}`}>
                        {activity.level}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-navy-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Durée :
                      </span>
                      <span className="text-navy-900 font-medium">{activity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-navy-500 flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        Capacité :
                      </span>
                      <span className="text-navy-900 font-medium">{activity.capacity}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gold-600 font-bold text-sm">{activity.price}</div>
                    <button
                      onClick={() => setSelectedActivity(activity.id)}
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-blue-600 transition-colors"
                    >
                      Détails
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Spéciaux */}
      <section className="py-16 bg-gradient-to-r from-navy-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-4">
              Programmes <span className="text-blue-600">Spéciaux</span>
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Programmes intensifs et expériences uniques pour approfondir votre passion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-navy-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">{program.name}</h3>
                  <p className="text-navy-600 mb-4 text-sm">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-navy-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 font-bold text-lg">{program.price}</div>
                    <TouchOptimizedButton
                      variant="secondary"
                      size="sm"
                      onClick={() => window.location.href = '/booking'}
                    >
                      S'inscrire
                    </TouchOptimizedButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Détails Activité */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {(() => {
              const activity = activities.find(a => a.id === selectedActivity);
              if (!activity) return null;

              return (
                <>
                  <div className="relative">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button
                      onClick={() => setSelectedActivity(null)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30"
                    >
                      ×
                    </button>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{activity.name}</h3>
                      <p className="text-white/90">{activity.level}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-2">Histoire de l'Activité</h4>
                      <p className="text-navy-700 italic leading-relaxed">"{activity.story}"</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-navy-500 mb-1">Durée</div>
                        <div className="font-semibold text-navy-900">{activity.duration}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-navy-500 mb-1">Capacité</div>
                        <div className="font-semibold text-navy-900">{activity.capacity}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-navy-500 mb-1">Horaires</div>
                        <div className="font-semibold text-navy-900">{activity.schedule}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-navy-500 mb-1">Équipement</div>
                        <div className="font-semibold text-navy-900">{activity.equipment}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-navy-900 mb-3">Caractéristiques</h4>
                      <div className="space-y-2">
                        {activity.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-navy-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedActivity(null)}
                        className="flex-1 bg-gray-100 text-navy-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                      >
                        Fermer
                      </button>
                      <TouchOptimizedButton
                        variant="primary"
                        onClick={() => {
                          setSelectedActivity(null);
                          if (activity.id === 'padel') {
                            setShowPadelBooking(true);
                          } else {
                            window.location.href = '/booking';
                          }
                        }}
                        className="flex-1"
                      >
                        Réserver
                      </TouchOptimizedButton>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}

      {/* Modal Réservation Padel */}
      {showPadelBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-md w-full"
          >
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-6 text-white rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Réservation Padel</h3>
                </div>
                <button
                  onClick={() => setShowPadelBooking(false)}
                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Date souhaitée</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Heure</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500">
                    <option>7h00 - 8h30</option>
                    <option>9h00 - 10h30</option>
                    <option>11h00 - 12h30</option>
                    <option>14h00 - 15h30</option>
                    <option>16h00 - 17h30</option>
                    <option>18h00 - 19h30</option>
                    <option>20h00 - 21h30</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Nombre de joueurs</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500">
                    <option>2 joueurs</option>
                    <option>3 joueurs</option>
                    <option>4 joueurs</option>
                  </select>
                </div>

                <div className="bg-gold-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gold-700 mb-2">Inclus dans votre réservation</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      <span className="text-gold-600">Court FIP certifié (1h30)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      <span className="text-gold-600">Raquettes Wilson premium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      <span className="text-gold-600">Balles de padel neuves</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                      <span className="text-gold-600">Vestiaires et douches</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-600 mb-2">80 TND</div>
                  <div className="text-sm text-navy-600">par court (1h30)</div>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowPadelBooking(false)}
                  className="flex-1 bg-gray-100 text-navy-700 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
                <TouchOptimizedButton
                  variant="luxury"
                  onClick={() => {
                    setShowPadelBooking(false);
                    window.location.href = '/booking';
                  }}
                  className="flex-1"
                >
                  Confirmer
                </TouchOptimizedButton>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Section Équipements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-4">
              Équipements <span className="text-green-600">Premium</span>
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Matériel haut de gamme et installations modernes pour une expérience optimale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Technogym', category: 'Fitness', description: 'Équipements dernière génération', icon: '💪' },
              { name: 'Wilson', category: 'Padel', description: 'Raquettes et accessoires premium', icon: '🏸' },
              { name: 'Speedo', category: 'Natation', description: 'Équipements aquatiques professionnels', icon: '🏊‍♀️' },
              { name: 'Nike', category: 'Running', description: 'Chaussures et vêtements techniques', icon: '👟' }
            ].map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{equipment.icon}</div>
                <h3 className="font-bold text-navy-900 mb-2">{equipment.name}</h3>
                <p className="text-green-600 text-sm mb-2">{equipment.category}</p>
                <p className="text-navy-600 text-xs">{equipment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-navy-500 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Trophy className="w-8 h-8 text-gold-400" />
              <span className="text-4xl">🏆</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Votre Performance
              <span className="block text-gold-400">Commence Ici</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rejoignez ONE SportHub et découvrez un univers où sport, bien-être et excellence se rencontrent
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <TouchOptimizedButton
                variant="luxury"
                size="xl"
                icon={Trophy}
                onClick={() => setShowPadelBooking(true)}
                className="sm:px-12"
              >
                Réserver Padel Premium
              </TouchOptimizedButton>
              
              <TouchOptimizedButton
                variant="ghost"
                size="xl"
                icon={Phone}
                onClick={() => window.location.href = '/contact'}
                className="sm:px-12"
              >
                +216 58 406 722
              </TouchOptimizedButton>
            </div>

            <div className="mt-8 text-white/60 text-sm">
              <p className="italic">
                "Excellence sportive, innovation technologique, expérience premium"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OneSporthubPage;