import React, { useState } from 'react';
import { Heart, Users, Award, Globe, Leaf, Star, ArrowRight, Phone, Mail, Handshake, Download, FileText, Image, Target, GraduationCap, HandHeart, Recycle, Sun, Droplets, Shield, TreePine, Building2, Lightbulb, Zap, Waves } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OneVisionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedPillar, setSelectedPillar] = useState('planet');

  // Les 3 Piliers de ONE VISION
  const visionPillars = [
    {
      id: 'planet',
      title: 'Good for the Planet',
      subtitle: 'Notre Engagement Environnemental',
      description: 'Préserver et protéger notre belle planète pour les générations futures',
      icon: '🌍',
      color: 'green',
      image: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1920',
      initiatives: [
        {
          title: 'Zéro Plastique 2025',
          description: 'Élimination complète du plastique à usage unique dans tous nos établissements',
          impact: '100% sans plastique',
          status: 'En cours',
          icon: '♻️'
        },
        {
          title: 'Énergie Renouvelable',
          description: 'Transition vers 100% d\'énergie solaire et éolienne',
          impact: '80% d\'énergie verte',
          status: 'Réalisé',
          icon: '☀️'
        },
        {
          title: 'Préservation Marine',
          description: 'Protection des écosystèmes marins méditerranéens',
          impact: '500m² de récifs restaurés',
          status: 'En cours',
          icon: '🌊'
        },
        {
          title: 'Forêt ONE',
          description: 'Plantation de 10,000 arbres endémiques',
          impact: '10,000 arbres plantés',
          status: 'En cours',
          icon: '🌳'
        }
      ],
      story: 'Notre planète est notre maison commune. Chaque geste compte, chaque décision impacte l\'avenir. Chez ONE, nous avons fait le choix de l\'excellence environnementale, transformant nos resorts en sanctuaires durables où luxe rime avec respect de la nature.'
    },
    {
      id: 'people',
      title: 'Good for our People',
      subtitle: 'Notre Famille ONE',
      description: 'Épanouissement et développement de chaque membre de notre équipe',
      icon: '👥',
      color: 'blue',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
      initiatives: [
        {
          title: 'Formation Continue',
          description: 'Programme de développement professionnel pour tous',
          impact: '500+ heures/an par employé',
          status: 'Permanent',
          icon: '🎓'
        },
        {
          title: 'Bien-être au Travail',
          description: 'Environnement de travail sain et équilibré',
          impact: '95% satisfaction employés',
          status: 'Réalisé',
          icon: '💚'
        },
        {
          title: 'Égalité & Diversité',
          description: 'Promotion de l\'égalité des chances et de la diversité',
          impact: '50% femmes en management',
          status: 'Réalisé',
          icon: '⚖️'
        },
        {
          title: 'Reconnaissance & Récompenses',
          description: 'Système de reconnaissance des talents et performances',
          impact: '100% employés évalués',
          status: 'Permanent',
          icon: '🏆'
        }
      ],
      story: 'Nos collaborateurs sont le cœur battant de ONE. Leur passion, leur dévouement et leur talent créent la magie que vivent nos clients. Investir dans leur épanouissement, c\'est investir dans l\'excellence de demain.'
    },
    {
      id: 'community',
      title: 'Good for the Community',
      subtitle: 'Impact Social Positif',
      description: 'Contribuer au développement et au bien-être de nos communautés locales',
      icon: '🤝',
      color: 'purple',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920',
      initiatives: [
        {
          title: 'Éducation pour Tous',
          description: 'Construction d\'écoles et bourses d\'études',
          impact: '500 enfants scolarisés',
          status: 'En cours',
          icon: '📚'
        },
        {
          title: 'Emploi Local',
          description: 'Priorité à l\'embauche locale et formation des jeunes',
          impact: '85% employés locaux',
          status: 'Permanent',
          icon: '💼'
        },
        {
          title: 'Artisanat Traditionnel',
          description: 'Soutien aux artisans locaux et préservation des savoir-faire',
          impact: '50 artisans partenaires',
          status: 'Permanent',
          icon: '🎨'
        },
        {
          title: 'Santé Communautaire',
          description: 'Programmes de santé et dispensaires mobiles',
          impact: '2000 bénéficiaires/an',
          status: 'En cours',
          icon: '🏥'
        }
      ],
      story: 'Une entreprise prospère est une entreprise qui enrichit sa communauté. Nous croyons fermement que notre succès doit bénéficier à tous ceux qui nous entourent, créant un cercle vertueux de développement partagé.'
    }
  ];

  // Vision d'Équipe ONE TEAM ONE VISION ONE GOAL
  const teamVision = {
    motto: 'ONE TEAM • ONE VISION • ONE GOAL',
    philosophy: 'Unis dans la diversité, forts dans l\'unité, excellents dans l\'action',
    values: [
      {
        title: 'ONE TEAM',
        description: 'Une équipe unie où chaque talent brille et contribue au succès collectif',
        icon: '🤝',
        color: 'blue',
        principles: [
          'Collaboration avant compétition',
          'Entraide et solidarité',
          'Respect mutuel et bienveillance',
          'Célébration des succès ensemble'
        ]
      },
      {
        title: 'ONE VISION',
        description: 'Une vision partagée qui guide chacune de nos actions vers l\'excellence',
        icon: '👁️',
        color: 'gold',
        principles: [
          'Excellence dans chaque détail',
          'Innovation constante',
          'Durabilité et responsabilité',
          'Expérience client exceptionnelle'
        ]
      },
      {
        title: 'ONE GOAL',
        description: 'Un objectif commun : créer des expériences qui marquent les cœurs',
        icon: '🎯',
        color: 'purple',
        principles: [
          'Satisfaction client absolue',
          'Croissance durable',
          'Impact positif sur la société',
          'Héritage pour l\'avenir'
        ]
      }
    ]
  };

  // Domaines de Partenariat
  const partnerCategories = [
    { id: 'all', name: 'Tous les partenaires', icon: '🤝' },
    { id: 'environment', name: 'Environnement', icon: '🌱' },
    { id: 'education', name: 'Éducation', icon: '🎓' },
    { id: 'culture', name: 'Culture & Arts', icon: '🎭' },
    { id: 'health', name: 'Santé', icon: '🏥' },
    { id: 'technology', name: 'Innovation', icon: '💻' }
  ];

  const partners = [
    {
      id: 1,
      name: 'WWF Méditerranée',
      category: 'environment',
      logo: '🐼',
      description: 'Protection de la biodiversité marine méditerranéenne',
      partnership: 'Partenaire environnemental depuis 2021',
      projects: ['Restauration corallienne', 'Protection tortues marines', 'Sensibilisation écologique'],
      contact: 'mediterranean@wwf.org',
      website: 'www.wwf.fr',
      image: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'UNICEF Tunisie',
      category: 'education',
      logo: '🦄',
      description: 'Éducation et protection des enfants défavorisés',
      partnership: 'Partenaire humanitaire depuis 2019',
      projects: ['Bourses scolaires', 'Fournitures éducatives', 'Programmes nutritionnels'],
      contact: 'tunisia@unicef.org',
      website: 'www.unicef.org/tunisia',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Association Tunisienne des Arts',
      category: 'culture',
      logo: '🎭',
      description: 'Promotion de l\'art et de la culture tunisienne',
      partnership: 'Partenaire culturel depuis 2020',
      projects: ['Expositions d\'art', 'Festivals culturels', 'Ateliers artistiques'],
      contact: 'contact@ata.tn',
      website: 'www.arts-tunisie.tn',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      name: 'Croissant Rouge Tunisien',
      category: 'health',
      logo: '🏥',
      description: 'Programmes de santé communautaire',
      partnership: 'Partenaire santé depuis 2018',
      projects: ['Dispensaires mobiles', 'Campagnes vaccination', 'Sensibilisation santé'],
      contact: 'info@croissantrouge.tn',
      website: 'www.croissantrouge.tn',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  // Certifications RSE
  const certifications = [
    {
      name: 'Green Key Gold',
      description: 'Plus haut niveau de certification environnementale internationale',
      year: '2023',
      logo: '🔑',
      organization: 'Green Key International',
      category: 'Environnement'
    },
    {
      name: 'ISO 14001',
      description: 'Management environnemental certifié',
      year: '2022',
      logo: '🌍',
      organization: 'ISO International',
      category: 'Environnement'
    },
    {
      name: 'Great Place to Work',
      description: 'Certification excellence environnement de travail',
      year: '2023',
      logo: '👥',
      organization: 'Great Place to Work Institute',
      category: 'Social'
    },
    {
      name: 'Travelife Gold',
      description: 'Tourisme durable et responsable',
      year: '2023',
      logo: '🏆',
      organization: 'Travelife',
      category: 'Durabilité'
    },
    {
      name: 'EarthCheck Silver',
      description: 'Benchmark scientifique pour la durabilité',
      year: '2023',
      logo: '✅',
      organization: 'EarthCheck',
      category: 'Environnement'
    },
    {
      name: 'Fair Trade Tourism',
      description: 'Commerce équitable dans le tourisme',
      year: '2023',
      logo: '🤝',
      organization: 'Fair Trade Tourism',
      category: 'Social'
    }
  ];

  // Projets d'Impact par Pilier
  const impactProjects = {
    planet: [
      {
        title: 'Projet Corail Méditerranéen',
        description: 'Restauration des récifs coralliens en partenariat avec l\'Institut National des Sciences Marines',
        impact: '500m² de récifs restaurés',
        investment: '300,000 TND',
        status: 'En cours',
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
        year: '2024',
        sdg: ['SDG 14: Vie aquatique', 'SDG 13: Action climatique']
      },
      {
        title: 'Ferme Solaire ONE',
        description: 'Installation de panneaux solaires pour alimenter 100% de nos besoins énergétiques',
        impact: '2MW d\'énergie propre',
        investment: '1,200,000 TND',
        status: 'Réalisé',
        image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
        year: '2023',
        sdg: ['SDG 7: Énergie propre', 'SDG 13: Action climatique']
      }
    ],
    people: [
      {
        title: 'Académie ONE Excellence',
        description: 'Centre de formation interne pour le développement des compétences',
        impact: '100% employés formés',
        investment: '500,000 TND',
        status: 'Permanent',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        year: '2022',
        sdg: ['SDG 4: Éducation de qualité', 'SDG 8: Travail décent']
      },
      {
        title: 'Programme Bien-être Employés',
        description: 'Initiatives complètes pour la santé physique et mentale de nos équipes',
        impact: '95% satisfaction employés',
        investment: '200,000 TND/an',
        status: 'Permanent',
        image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
        year: '2021',
        sdg: ['SDG 3: Bonne santé', 'SDG 8: Travail décent']
      }
    ],
    community: [
      {
        title: 'École Primaire de Hammamet',
        description: 'Construction et équipement d\'une école moderne pour 300 enfants',
        impact: '300 enfants bénéficiaires',
        investment: '800,000 TND',
        status: 'Terminé',
        image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
        year: '2023',
        sdg: ['SDG 4: Éducation de qualité', 'SDG 11: Villes durables']
      },
      {
        title: 'Centre Artisanal de Monastir',
        description: 'Soutien aux artisans locaux et préservation des savoir-faire traditionnels',
        impact: '50 artisans soutenus',
        investment: '300,000 TND',
        status: 'En cours',
        image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
        year: '2024',
        sdg: ['SDG 8: Travail décent', 'SDG 11: Villes durables']
      }
    ]
  };

  const currentPillar = visionPillars.find(p => p.id === selectedPillar) || visionPillars[0];
  const filteredPartners = selectedCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === selectedCategory);

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      green: 'bg-green-500 text-white',
      blue: 'bg-blue-500 text-white',
      purple: 'bg-purple-500 text-white',
      gold: 'bg-gold-500 text-white'
    };
    return colors[color] || 'bg-gold-500 text-white';
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'Réalisé': 'bg-green-100 text-green-700',
      'En cours': 'bg-blue-100 text-blue-700',
      'Permanent': 'bg-purple-100 text-purple-700',
      'Planifié': 'bg-orange-100 text-orange-700'
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
      {/* Hero Section Renforcé */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-green-800/75 to-blue-600/85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="font-medium tracking-wide">Responsabilité Sociétale d'Entreprise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight">
              ONE
              <span className="block text-green-400 font-medium">VISION</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-6">
                ONE Life • ONE Vision • ONE World
              </p>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                Notre engagement global pour un tourisme responsable, durable et socialement impactant
              </p>
            </div>

            {/* Motto d'Équipe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-gold-300 mb-2 tracking-wider">
                {teamVision.motto}
              </div>
              <p className="text-white/80 italic">
                "{teamVision.philosophy}"
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Séjour Responsable
              </Link>
              <button 
                onClick={() => document.getElementById('team-vision')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Notre Équipe</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Les 3 Piliers de ONE VISION */}
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
                Nos Trois <span className="text-gold-600 font-medium">Piliers</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light leading-relaxed">
                Une approche holistique pour un impact positif durable
              </p>
            </motion.div>
          </div>

          {/* Sélecteur de Piliers */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {visionPillars.map((pillar) => (
              <motion.button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedPillar === pillar.id
                    ? getColorClass(pillar.color)
                    : 'bg-white text-navy-600 hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{pillar.icon}</span>
                <div className="text-left">
                  <div className="font-semibold">{pillar.title}</div>
                  <div className="text-xs opacity-75">{pillar.subtitle}</div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Détail du Pilier Sélectionné */}
          <motion.div
            key={selectedPillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`text-6xl p-4 rounded-2xl ${getColorClass(currentPillar.color)} bg-opacity-20`}>
                    {currentPillar.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-navy-900">{currentPillar.title}</h3>
                    <p className="text-xl text-navy-600">{currentPillar.description}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 mb-8">
                  <p className="text-navy-700 italic text-lg leading-relaxed">
                    "{currentPillar.story}"
                  </p>
                </div>

                <h4 className="text-xl font-bold text-navy-900 mb-6">Nos Initiatives</h4>
                <div className="space-y-4">
                  {currentPillar.initiatives.map((initiative, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{initiative.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-navy-900">{initiative.title}</h5>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}>
                              {initiative.status}
                            </span>
                          </div>
                          <p className="text-navy-600 text-sm mb-2">{initiative.description}</p>
                          <div className="text-gold-600 font-bold text-sm">{initiative.impact}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">{currentPillar.title}</h4>
                  <p className="text-white/90">{currentPillar.subtitle}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section ONE TEAM ONE VISION ONE GOAL */}
      <section id="team-vision" className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-navy-100 px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 text-navy-600" />
                <span className="text-navy-700 font-medium">Notre Philosophie d'Équipe</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-navy-900 mb-6">
                <span className="text-blue-600 font-medium">ONE TEAM</span> • 
                <span className="text-gold-600 font-medium"> ONE VISION</span> • 
                <span className="text-purple-600 font-medium"> ONE GOAL</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto font-light italic">
                "{teamVision.philosophy}"
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamVision.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${getColorClass(value.color)}`}>
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{value.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-navy-800 text-sm">Nos Principes :</h4>
                  {value.principles.map((principle, principleIndex) => (
                    <div key={principleIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="text-sm text-navy-700">{principle}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projets d'Impact par Pilier */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-navy-900 mb-4">
              Projets d'<span className="text-gold-600 font-medium">Impact</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto font-light">
              Des initiatives concrètes alignées sur les Objectifs de Développement Durable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {impactProjects[selectedPillar as keyof typeof impactProjects]?.map((project, index) => (
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
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-navy-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{project.title}</h3>
                  <p className="text-navy-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="font-bold text-green-600 text-sm">{project.impact}</div>
                      <div className="text-xs text-navy-600">Impact</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-bold text-blue-600 text-sm">{project.investment}</div>
                      <div className="text-xs text-navy-600">Investissement</div>
                    </div>
                  </div>

                  {/* ODD */}
                  <div className="space-y-1">
                    <h5 className="text-xs font-semibold text-navy-800">Objectifs de Développement Durable :</h5>
                    {project.sdg.map((sdg, sdgIndex) => (
                      <div key={sdgIndex} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full inline-block mr-1">
                        {sdg}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Partenaires RSE */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-navy-900 mb-4">
              Nos <span className="text-gold-600 font-medium">Partenaires</span> RSE
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto font-light">
              Collaborations stratégiques pour maximiser notre impact positif
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {partnerCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-navy-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <span className="text-sm">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <span className="text-xl">{partner.logo}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-navy-900 mb-1 text-sm">{partner.name}</h3>
                  <p className="text-green-600 text-xs mb-2">{partner.partnership}</p>
                  <p className="text-navy-600 mb-3 text-xs leading-relaxed">{partner.description}</p>

                  <div className="space-y-1 mb-3">
                    <h4 className="font-semibold text-navy-800 text-xs">Projets :</h4>
                    {partner.projects.slice(0, 2).map((project, projectIndex) => (
                      <div key={projectIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-navy-600">{project}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <a href={`mailto:${partner.contact}`} className="text-blue-600 hover:text-blue-700">
                      Contact
                    </a>
                    <a href={`https://${partner.website}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                      Site web
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Reconnaissances */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-light text-navy-900 mb-4">
              Certifications & <span className="text-gold-600 font-medium">Reconnaissances</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto font-light">
              Notre excellence RSE reconnue par les organismes internationaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.logo}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{cert.name}</h3>
                <p className="text-navy-600 text-sm mb-3 leading-relaxed">{cert.description}</p>
                <div className="text-xs text-navy-500 mb-2">{cert.organization}</div>
                <div className="flex items-center justify-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.category === 'Environnement' ? 'bg-green-100 text-green-700' :
                    cert.category === 'Social' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {cert.category}
                  </span>
                  <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs font-medium">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers Global */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-500 to-purple-600">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-light text-white mb-6">
                Notre Impact en <span className="text-gold-300 font-medium">Chiffres</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
              <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                Des résultats concrets qui témoignent de notre engagement
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: '3M', 
                label: 'TND investis en RSE', 
                description: 'depuis 2020', 
                color: 'text-green-300',
                icon: '💰',
                category: 'Investissement'
              },
              { 
                number: '8000+', 
                label: 'Bénéficiaires directs', 
                description: 'dans nos communautés', 
                color: 'text-blue-300',
                icon: '👥',
                category: 'Impact Social'
              },
              { 
                number: '25', 
                label: 'Projets RSE réalisés', 
                description: 'en 4 ans', 
                color: 'text-purple-300',
                icon: '🚀',
                category: 'Projets'
              },
              { 
                number: '50+', 
                label: 'Partenaires RSE', 
                description: 'associations et ONG', 
                color: 'text-gold-300',
                icon: '🤝',
                category: 'Partenariats'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-white/70 text-sm mb-2">{stat.description}</div>
                <div className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                  {stat.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Globale ONE Life ONE Vision ONE World */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-8">
                <Globe className="w-5 h-5 text-gold-600" />
                <span className="text-gold-700 font-medium">Vision Globale</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-light text-navy-900 mb-8 leading-tight">
                <span className="text-blue-600 font-medium">ONE Life</span> • 
                <span className="text-gold-600 font-medium"> ONE Vision</span> • 
                <span className="text-green-600 font-medium"> ONE World</span>
              </h2>

              <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
                <blockquote className="text-2xl md:text-3xl font-light text-navy-800 leading-relaxed italic mb-6">
                  "Nous ne créons pas seulement des expériences de voyage, nous façonnons un avenir 
                  où le luxe et la responsabilité se rencontrent pour créer un monde meilleur."
                </blockquote>
                <div className="text-gold-600 font-medium">— Vision ONE Hotels & Resorts</div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">ONE Life</h3>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    Chaque vie compte, chaque expérience enrichit, chaque moment crée des souvenirs durables
                  </p>
                </div>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-6">
                  <div className="text-4xl mb-4">👁️</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">ONE Vision</h3>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    Une vision partagée d'excellence, de durabilité et d'impact positif sur le monde
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">ONE World</h3>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    Un monde uni dans la diversité, préservé dans sa beauté, partagé dans l'harmonie
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section Renforcée */}
      <section className="py-24 bg-gradient-to-r from-navy-900 via-gold-800 to-green-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Handshake className="w-5 h-5 text-gold-400" />
              <span className="text-gold-200 font-medium">Rejoignez Notre Mission</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6 leading-tight">
              Ensemble, Construisons un
              <span className="block text-gold-400 font-medium">Avenir Durable</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Votre séjour chez ONE contribue directement à nos initiatives RSE. 
              Ensemble, créons des expériences exceptionnelles tout en préservant notre monde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center justify-center space-x-2"
              >
                <Leaf className="w-5 h-5" />
                <span>Séjour Responsable</span>
              </Link>
              
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Devenir Partenaire</span>
              </Link>
            </div>

            <div className="mt-12 text-white/60 text-sm max-w-2xl mx-auto">
              <p className="italic bg-black/20 backdrop-blur-sm rounded-2xl p-6">
                "ONE TEAM • ONE VISION • ONE GOAL<br/>
                Good for the Planet • Good for our People • Good for the Community<br/>
                ONE Life • ONE Vision • ONE World"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OneVisionPage;