import React, { useState } from 'react';
import { Users, Shield, Heart, Star, Clock, Camera, Phone, Calendar, MapPin, CheckCircle, Sparkles, Crown, Wand2, Target, ChevronDown, X, Award, Gift, Eye, BookOpen, Play, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const EnjoyingPage: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string>("ALL CLUBS");

  // Options du menu déroulant
  const ageOptions = [
    "ALL CLUBS",
    "ONE KIDS",
    "ONE JUNIOR", 
    "ONE TEEN",
    "ONE ADULTS"
  ];

  // Expériences immersives par âge avec storytelling
  const immersiveExperiences = {
    "ONE KIDS": {
      title: 'Royaume Enchanté',
      subtitle: 'Où les rêves prennent vie',
      character: '🧚‍♀️ Fée Luna',
      description: 'Un univers magique où chaque enfant découvre ses talents créatifs',
      story: 'Dans un royaume lointain où la magie existe encore, la Fée Luna guide nos petits explorateurs à travers des aventures extraordinaires. Chaque jour apporte de nouvelles découvertes, chaque activité révèle un talent caché.',
      ambiance: 'Couleurs pastel, musiques douces, décors féeriques avec châteaux miniatures et jardins enchantés',
      pedagogie: 'Développement de la créativité, confiance en soi, expression artistique et motricité fine',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gallery: [
        'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'ONE KIDS',
      experiences: [
        { 
          name: 'Atelier Peinture Magique', 
          story: 'Dans l\'atelier de la Fée Luna, les pinceaux se transforment en baguettes magiques. Chaque couleur raconte une histoire, chaque trait révèle un rêve. Les enfants découvrent que l\'art n\'a pas de limites.',
          pedagogie: 'Expression créative, coordination œil-main, reconnaissance des couleurs',
          duration: '1h30',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Théâtre de Marionnettes', 
          story: 'Sur la scène enchantée, les marionnettes prennent vie pour raconter des histoires venues du cœur. Chaque enfant devient conteur, donnant voix aux personnages de ses rêves.',
          pedagogie: 'Expression orale, confiance en soi, imagination narrative',
          duration: '45min',
          image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Jardinage des Fées', 
          story: 'Dans le jardin secret de Luna, chaque graine plantée devient une promesse d\'avenir. Les petites mains apprennent que la patience et l\'amour font naître les plus belles fleurs.',
          pedagogie: 'Respect de la nature, patience, responsabilité',
          duration: '1h',
          image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    "ONE JUNIOR": {
      title: 'Académie des Héros',
      subtitle: 'Où naissent les légendes',
      character: '🏴‍☠️ Capitaine Aventure',
      description: 'Formation complète pour devenir un véritable héros moderne',
      story: 'L\'Académie des Héros n\'est pas qu\'un lieu, c\'est une philosophie. Ici, chaque défi devient une leçon, chaque épreuve forge le caractère. Le Capitaine Aventure enseigne que le vrai héroïsme réside dans l\'entraide et le dépassement de soi.',
      ambiance: 'Décors d\'aventure, cartes au trésor, équipements d\'exploration et laboratoires de découverte',
      pedagogie: 'Leadership, travail d\'équipe, résolution de problèmes, confiance en soi',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gallery: [
        'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'ONE JUNIOR',
      experiences: [
        { 
          name: 'Mission Escape Game', 
          story: 'Dans les couloirs secrets de l\'Académie, une mission attend nos jeunes héros. Ensemble, ils doivent résoudre des énigmes pour sauver le monde. Chaque indice découvert renforce leur esprit d\'équipe.',
          pedagogie: 'Logique, coopération, gestion du stress, communication',
          duration: '2h',
          image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Laboratoire Sciences', 
          story: 'Dans le laboratoire du Professeur Eureka, la science devient spectacle. Volcans en éruption, potions colorées, expériences fascinantes... Chaque découverte éveille la curiosité naturelle.',
          pedagogie: 'Méthode scientifique, observation, hypothèses, expérimentation',
          duration: '1h30',
          image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Tournoi Multi-Sports', 
          story: 'Sur les terrains de l\'honneur, nos héros apprennent que la vraie victoire n\'est pas de gagner, mais de donner le meilleur de soi-même et de respecter ses adversaires.',
          pedagogie: 'Fair-play, persévérance, esprit sportif, dépassement de soi',
          duration: '2h',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    "ONE TEEN": {
      title: 'Laboratoire du Futur',
      subtitle: 'Où l\'impossible devient possible',
      character: '🎮 Maître Digital',
      description: 'Espace high-tech pour les créateurs de demain',
      story: 'Dans le Laboratoire du Futur, les adolescents ne sont plus des consommateurs mais des créateurs. Guidés par le Maître Digital, ils explorent les technologies de demain et façonnent le monde qu\'ils souhaitent voir naître.',
      ambiance: 'Éclairages LED, écrans interactifs, studios d\'enregistrement et espaces de création numérique',
      pedagogie: 'Créativité numérique, leadership, innovation, pensée critique',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gallery: [
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'ONE TEEN',
      experiences: [
        { 
          name: 'Studio Création Vidéo', 
          story: 'Dans le studio professionnel, chaque adolescent devient réalisateur de sa propre histoire. Caméras, éclairages, montage... ils apprennent que derrière chaque image se cache une intention artistique.',
          pedagogie: 'Expression créative, techniques audiovisuelles, storytelling, travail collaboratif',
          duration: '2h',
          image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Tournoi Gaming Pro', 
          story: 'L\'arène digitale s\'illumine pour accueillir nos champions. Ici, le gaming devient art, la stratégie devient passion. Chaque partie enseigne la persévérance et l\'esprit d\'équipe.',
          pedagogie: 'Stratégie, réflexes, gestion du stress, esprit d\'équipe',
          duration: '2h30',
          image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Atelier DJ Mixing', 
          story: 'Les platines s\'animent sous les mains expertes de nos apprentis DJ. Chaque mix raconte une émotion, chaque transition crée une nouvelle ambiance. La musique devient leur langage universel.',
          pedagogie: 'Sens du rythme, créativité musicale, techniques audio, performance',
          duration: '1h30',
          image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    },
    "ONE ADULTS": {
      title: 'Expérience Premium',
      subtitle: 'Détente et raffinement',
      character: '🍸 Maître Sommelier',
      description: 'Activités exclusives pour adultes dans un cadre sophistiqué',
      story: 'L\'Expérience Premium transcende le simple divertissement pour devenir un art de vivre. Chaque moment est pensé pour éveiller les sens, enrichir l\'esprit et nourrir l\'âme. C\'est l\'essence même du luxe authentique.',
      ambiance: 'Espaces feutrés, éclairages tamisés, mobilier design et atmosphère raffinée',
      pedagogie: 'Développement personnel, culture générale, art de vivre, bien-être',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gallery: [
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      category: 'ONE ADULTS',
      experiences: [
        { 
          name: 'Dégustation de Vins', 
          story: 'Dans la cave voûtée aux mille reflets, le Maître Sommelier révèle les secrets des terroirs tunisiens. Chaque gorgée raconte l\'histoire du soleil, de la terre et du savoir-faire ancestral.',
          pedagogie: 'Culture œnologique, développement du goût, histoire des terroirs',
          duration: '2h',
          image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Cours de Cuisine Gastronomique', 
          story: 'Aux côtés du Chef étoilé, découvrez les secrets de la haute gastronomie. Chaque geste est précis, chaque saveur calculée. L\'art culinaire devient poésie entre vos mains.',
          pedagogie: 'Techniques culinaires, créativité, précision, art de dresser',
          duration: '3h',
          image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        { 
          name: 'Yoga Sunset', 
          story: 'Face à l\'horizon doré, votre corps et votre esprit s\'unissent dans une danse millénaire. Le soleil couchant devient témoin de votre quête d\'harmonie intérieure.',
          pedagogie: 'Bien-être physique, méditation, gestion du stress, connexion nature',
          duration: '1h',
          image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    }
  };

  // Fonction pour obtenir les expériences filtrées
  const getFilteredExperiences = () => {
    if (selectedAge === "ALL CLUBS") {
      return Object.values(immersiveExperiences);
    } else {
      const experience = immersiveExperiences[selectedAge as keyof typeof immersiveExperiences];
      return experience ? [experience] : [];
    }
  };

  const filteredExperiences = getFilteredExperiences();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-gold-50">
      {/* Hero Section Storytelling */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/85 via-purple-800/75 to-gold-600/85"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <BookOpen className="w-5 h-5 text-gold-400" />
              <span className="font-medium tracking-wide">Expériences Immersives</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 leading-tight">
              Enjoying
              <span className="block text-gold-400 font-medium">Experience</span>
            </h1>
            
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-6">
                Découvrez • Explorez • Vivez
              </p>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                Plongez dans nos univers thématiques où chaque expérience raconte une histoire unique
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center space-x-2"
              >
                <Eye className="w-5 h-5" />
                <span>Découvrir les Expériences</span>
              </button>
              <Link
                to="/contact"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Plus d'Informations</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sélection d'Âge */}
      <section id="experiences" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-navy-900 mb-6">
                Explorez Nos <span className="text-gold-600 font-medium">Univers</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto font-light">
                Chaque âge a son univers, chaque univers raconte une histoire
              </p>
            </div>

            {/* Menu Déroulant Élégant */}
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-gold-50 to-cream-50 rounded-2xl shadow-lg border border-gold-200 p-6 min-w-80">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Wand2 className="w-6 h-6 text-gold-600" />
                  <h3 className="text-lg font-semibold text-navy-900">Sélectionnez votre Univers</h3>
                </div>
                <select
                  value={selectedAge}
                  onChange={(e) => setSelectedAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gold-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white text-navy-800 font-medium text-center shadow-sm"
                >
                  {ageOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gold-200/50">
                    <Eye className="w-4 h-4 text-gold-600" />
                    <span className="text-sm text-navy-700">
                      <span className="font-semibold text-gold-600">{filteredExperiences.length}</span> expérience{filteredExperiences.length > 1 ? 's' : ''} à découvrir
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expériences Storytelling */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {filteredExperiences.length > 0 ? (
              <div className="space-y-20">
                {filteredExperiences.map((experience, index) => (
                  <motion.div
                    key={`${experience.category}-${index}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                  >
                    {/* Header de l'Expérience */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-8xl mb-4">{experience.character.split(' ')[0]}</div>
                          <h3 className="text-4xl font-serif font-bold mb-2">{experience.title}</h3>
                          <p className="text-xl text-gold-300 font-light">{experience.subtitle}</p>
                        </div>
                      </div>

                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-sm font-medium text-navy-800">{experience.category}</span>
                      </div>
                    </div>

                    {/* Contenu Storytelling */}
                    <div className="p-8 md:p-12">
                      <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                          <div className="flex items-center space-x-3 mb-6">
                            <BookOpen className="w-6 h-6 text-gold-600" />
                            <h4 className="text-2xl font-serif font-bold text-navy-900">L'Histoire de cet Univers</h4>
                          </div>
                          
                          <div className="bg-gradient-to-r from-gold-50 to-cream-50 rounded-2xl p-6 mb-8">
                            <p className="text-navy-700 text-lg leading-relaxed italic">
                              "{experience.story}"
                            </p>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h5 className="font-semibold text-navy-900 mb-3 flex items-center space-x-2">
                                <Camera className="w-5 h-5 text-gold-600" />
                                <span>Ambiance & Décor</span>
                              </h5>
                              <p className="text-navy-600 leading-relaxed">{experience.ambiance}</p>
                            </div>

                            <div>
                              <h5 className="font-semibold text-navy-900 mb-3 flex items-center space-x-2">
                                <Target className="w-5 h-5 text-gold-600" />
                                <span>Approche Pédagogique</span>
                              </h5>
                              <p className="text-navy-600 leading-relaxed">{experience.pedagogie}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-2xl font-serif font-bold text-navy-900 mb-6 flex items-center space-x-2">
                            <Sparkles className="w-6 h-6 text-gold-600" />
                            <span>Expériences Signature</span>
                          </h4>
                          
                          <div className="space-y-6">
                            {experience.experiences.map((exp, expIndex) => (
                              <motion.div
                                key={expIndex}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: expIndex * 0.1, duration: 0.6 }}
                                className="bg-gradient-to-r from-white to-gold-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group"
                                onClick={() => setSelectedExperience(`${experience.category}-${expIndex}`)}
                              >
                                <div className="flex items-start space-x-4">
                                  <img
                                    src={exp.image}
                                    alt={exp.name}
                                    className="w-16 h-16 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="flex-1">
                                    <h6 className="font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                                      {exp.name}
                                    </h6>
                                    <p className="text-navy-600 text-sm leading-relaxed line-clamp-3">
                                      {exp.story.substring(0, 120)}...
                                    </p>
                                    <div className="flex items-center justify-between mt-3">
                                      <span className="text-xs text-gold-600 bg-gold-100 px-2 py-1 rounded-full">
                                        {exp.duration}
                                      </span>
                                      <button className="text-gold-600 hover:text-gold-700 text-sm font-medium flex items-center space-x-1">
                                        <Eye className="w-4 h-4" />
                                        <span>Découvrir</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>

                          {/* Galerie Photos */}
                          <div className="mt-8">
                            <h5 className="font-semibold text-navy-900 mb-4 flex items-center space-x-2">
                              <Camera className="w-5 h-5 text-gold-600" />
                              <span>Galerie Photos</span>
                            </h5>
                            <div className="grid grid-cols-3 gap-3">
                              {experience.gallery.map((image, imgIndex) => (
                                <motion.div
                                  key={imgIndex}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: imgIndex * 0.1, duration: 0.5 }}
                                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                                >
                                  <img
                                    src={image}
                                    alt={`${experience.title} - Photo ${imgIndex + 1}`}
                                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-700"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <BookOpen className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-navy-900 mb-4">Aucune expérience pour cette sélection</h3>
                <p className="text-navy-600 mb-8 text-lg">Sélectionnez un autre univers pour découvrir nos expériences</p>
                <button
                  onClick={() => setSelectedAge("ALL CLUBS")}
                  className="bg-gold-500 text-white px-8 py-4 rounded-xl hover:bg-gold-600 transition-colors duration-300 text-lg font-medium"
                >
                  Voir tous les univers
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Modal Expérience Détaillée */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header Modal */}
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Expérience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-serif font-bold mb-2">Expérience Détaillée</h3>
                <p className="text-white/90">Découvrez l'histoire complète</p>
              </div>
            </div>

            {/* Contenu Modal */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-gold-100 px-4 py-2 rounded-full mb-4">
                  <BookOpen className="w-4 h-4 text-gold-600" />
                  <span className="text-gold-700 font-medium">Histoire Immersive</span>
                </div>
                <h4 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                  Plongez dans l'Expérience
                </h4>
                <p className="text-navy-600 max-w-2xl mx-auto">
                  Chaque détail a été pensé pour créer une expérience mémorable et enrichissante
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                    <h5 className="font-bold text-navy-900 mb-3 flex items-center space-x-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span>Storytelling</span>
                    </h5>
                    <p className="text-navy-700 leading-relaxed italic">
                      "Chaque expérience est conçue comme un voyage narratif où l'enfant devient le héros de sa propre histoire, développant confiance et créativité."
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6">
                    <h5 className="font-bold text-navy-900 mb-3 flex items-center space-x-2">
                      <Target className="w-5 h-5 text-green-600" />
                      <span>Objectifs Pédagogiques</span>
                    </h5>
                    <p className="text-navy-700 leading-relaxed">
                      Développement holistique de l'enfant à travers des activités ludiques et éducatives adaptées à chaque tranche d'âge.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6">
                    <h5 className="font-bold text-navy-900 mb-3 flex items-center space-x-2">
                      <Camera className="w-5 h-5 text-purple-600" />
                      <span>Environnement Immersif</span>
                    </h5>
                    <p className="text-navy-700 leading-relaxed">
                      Décors thématiques, ambiances sonores et visuelles créent un monde parallèle où l'imagination n'a pas de limites.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gold-50 to-gold-100 rounded-2xl p-6">
                    <h5 className="font-bold text-navy-900 mb-3 flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-gold-600" />
                      <span>Encadrement Expert</span>
                    </h5>
                    <p className="text-navy-700 leading-relaxed">
                      Animateurs formés en psychologie de l'enfant et techniques d'animation créative pour un accompagnement bienveillant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Section Philosophie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-navy-900 mb-6">
                Notre <span className="text-gold-600 font-medium">Philosophie</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto font-light leading-relaxed">
                Chaque expérience est une histoire, chaque histoire forge une personnalité
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📚',
                  title: 'Storytelling Immersif',
                  description: 'Chaque activité s\'inscrit dans une narration captivante qui stimule l\'imagination et l\'engagement émotionnel.',
                  color: 'blue'
                },
                {
                  icon: '🎭',
                  title: 'Personnages Guides',
                  description: 'Des personnages attachants accompagnent les participants, créant des liens affectifs durables et des souvenirs précieux.',
                  color: 'purple'
                },
                {
                  icon: '🌟',
                  title: 'Expériences Transformatrices',
                  description: 'Au-delà du divertissement, nos expériences visent l\'épanouissement personnel et le développement de compétences.',
                  color: 'gold'
                }
              ].map((philosophy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center p-8 bg-gradient-to-br from-cream-50 to-gold-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="text-6xl mb-6">{philosophy.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-4">{philosophy.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{philosophy.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Informations Pratiques */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-gold-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-navy-900 mb-6">
                Informations <span className="text-gold-600 font-medium">Pratiques</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto font-light">
                Tout ce que vous devez savoir pour une expérience parfaite
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '⏰',
                  title: 'Horaires',
                  value: '9h00 - 17h30',
                  detail: '7 jours sur 7',
                  color: 'blue'
                },
                {
                  icon: '👶',
                  title: 'Âges Acceptés',
                  value: '3 - 17 ans',
                  detail: 'Groupes par tranche d\'âge',
                  color: 'green'
                },
                {
                  icon: '🎁',
                  title: 'Accès',
                  value: 'INCLUS',
                  detail: 'Dans votre séjour',
                  color: 'gold'
                },
                {
                  icon: '👨‍👩‍👧‍👦',
                  title: 'Encadrement',
                  value: '1 pour 8',
                  detail: 'Animateurs qualifiés',
                  color: 'purple'
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="text-5xl mb-6">{info.icon}</div>
                  <h3 className="font-semibold text-navy-900 mb-3 text-xl">{info.title}</h3>
                  <p className={`font-bold text-2xl mb-2 ${
                    info.color === 'gold' ? 'text-gold-600' :
                    info.color === 'blue' ? 'text-blue-600' :
                    info.color === 'green' ? 'text-green-600' :
                    info.color === 'purple' ? 'text-purple-600' : 'text-navy-600'
                  }`}>
                    {info.value}
                  </p>
                  <p className="text-navy-500">{info.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages Storytelling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-navy-900 mb-6">
                Histoires <span className="text-gold-600 font-medium">Vécues</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto font-light">
                Chaque famille repart avec des souvenirs qui deviennent légendes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Famille Martin',
                  children: 'Emma (5 ans) & Lucas (9 ans)',
                  story: 'Emma est rentrée en racontant qu\'elle avait rencontré une vraie fée, et Lucas n\'arrête pas de parler de ses missions de héros. Ces expériences ont marqué leurs cœurs.',
                  experience: 'Royaume Enchanté & Académie des Héros',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400'
                },
                {
                  name: 'Famille Ben Ali',
                  children: 'Yasmine (14 ans) & Sami (11 ans)',
                  story: 'Yasmine a créé son premier clip vidéo et Sami a résolu toutes les énigmes de l\'escape game. Ils ont découvert des talents qu\'ils ne soupçonnaient pas.',
                  experience: 'Laboratoire du Futur & Académie des Héros',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400'
                },
                {
                  name: 'Famille Dubois',
                  children: 'Léa (4 ans) & Tom (7 ans)',
                  story: 'Les enfants nous racontent encore leurs aventures des mois après. Ces expériences ont nourri leur imagination et renforcé leur complicité fraternelle.',
                  experience: 'Royaume Enchanté',
                  rating: 5,
                  image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400'
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="bg-gradient-to-br from-cream-50 to-gold-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gold-100"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-navy-900 text-lg">{testimonial.name}</div>
                      <div className="text-gold-600 text-sm">{testimonial.children}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-gold-500 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-navy-700 leading-relaxed italic mb-4 text-lg">
                    "{testimonial.story}"
                  </p>

                  <div className="text-sm text-gold-600 bg-gold-100 px-3 py-1 rounded-full inline-block">
                    {testimonial.experience}
                  </div>
                </motion.div>
              ))}
            </div>
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
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
              <Gift className="w-5 h-5 text-gold-400" />
              <span className="text-gold-200 font-medium">Expériences Incluses dans votre Séjour</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Vivez des Histoires
              <span className="block text-gold-400 font-medium">Extraordinaires</span>
            </h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
              Chaque expérience devient un chapitre de votre histoire familiale, 
              chaque sourire un souvenir impérissable
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-md sm:max-w-none mx-auto">
              <Link
                to="/booking"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-12 py-6 rounded-full font-semibold text-xl hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center justify-center space-x-3"
              >
                <Calendar className="w-6 h-6" />
                <span>Réserver l'Expérience</span>
              </Link>
              
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-full font-semibold text-xl hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center justify-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>Découvrir Plus</span>
              </Link>
            </div>

            <div className="mt-16 text-white/60">
              <p className="italic bg-black/20 backdrop-blur-sm rounded-2xl p-6 inline-block text-lg">
                "Où chaque expérience devient légende • Où chaque enfant devient héros • Où chaque famille crée son histoire"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnjoyingPage;