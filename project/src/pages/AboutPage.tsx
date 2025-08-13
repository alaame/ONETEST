import React from 'react';
import { Heart, Users, Award, Globe, Leaf, Star, ArrowRight, Phone, Trophy } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const ScrollReveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const milestones = [
    {
      year: '1995',
      title: 'Les Fondations',
      description: 'Naissance de ONE Hotels & Resorts avec une vision : révolutionner l\'hospitalité tunisienne',
      icon: '🏛️'
    },
    {
      year: '2005',
      title: 'Expansion Premium',
      description: 'Ouverture du ONE Resort Premium, établissant notre réputation d\'excellence',
      icon: '✨'
    },
    {
      year: '2015',
      title: 'Innovation Familiale',
      description: 'Lancement du ONE Resort Aqua Park & Spa, redéfinissant le tourisme familial',
      icon: '🏊‍♀️'
    },
    {
      year: '2020',
      title: 'Vision Urbaine',
      description: 'Inauguration du ONE Resort Jockey, alliant business et détente',
      icon: '🏢'
    },
    {
      year: '2024',
      title: 'Futur Durable',
      description: 'Engagement total vers un tourisme responsable et des expériences authentiques',
      icon: '🌿'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Hospitalité Sincère',
      description: 'L\'authenticité tunisienne au cœur de chaque interaction, créant des liens humains durables.',
      color: 'from-coral-400 to-red-500'
    },
    {
      icon: Users,
      title: 'Esprit Famille',
      description: 'Nous créons des expériences intergénérationnelles où chaque membre trouve son bonheur.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Leaf,
      title: 'Respect de la Nature',
      description: 'Préserver la beauté méditerranéenne pour les générations futures.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Excellence Continue',
      description: 'L\'amélioration constante de nos services pour dépasser vos attentes.',
      color: 'from-gold-400 to-yellow-500'
    }
  ];

  const team = [
    {
      name: 'Amira Ben Salem',
      role: 'Directrice Générale',
      description: 'Visionnaire passionnée, elle guide notre évolution vers l\'excellence durable.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Karim Mansouri',
      role: 'Directeur Opérations',
      description: 'Expert en hospitalité, il orchestre la magie de chaque séjour.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Leila Trabelsi',
      role: 'Directrice Expérience Client',
      description: 'Architecte du bonheur, elle conçoit des moments inoubliables.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://onepremium.tn/img/383ede83a0da7de7.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-800/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <p className="text-gold-300 font-light tracking-wider text-sm mb-2">DEPUIS 1995</p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-light mb-6">
              Notre <span className="text-gold-400 font-medium">Philosophie</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              L'art de l'hospitalité tunisienne réinventé pour créer des expériences qui marquent les cœurs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-8">
                Notre <span className="text-gold-600 font-medium">Mission</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-12"></div>
              
              <div className="bg-gradient-to-br from-sage-50 to-stone-50 rounded-3xl p-12 mb-16">
                <blockquote className="text-2xl font-light text-navy-800 leading-relaxed italic mb-8">
                  "Nous ne créons pas seulement des séjours, nous orchestrons des symphonies d'émotions 
                  où chaque note résonne avec l'âme tunisienne et l'excellence internationale."
                </blockquote>
                <div className="text-gold-600 font-medium">— Vision ONE Hotels & Resorts</div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Authenticité</h3>
                  <p className="text-navy-600">Révéler la beauté de la culture tunisienne à travers des expériences sincères</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Excellence</h3>
                  <p className="text-navy-600">Dépasser les attentes par l'attention aux détails et l'innovation constante</p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">Durabilité</h3>
                  <p className="text-navy-600">Préserver notre patrimoine naturel et culturel pour les générations futures</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-sage-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                Notre <span className="text-gold-600 font-medium">Histoire</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto">
                Trois décennies d'innovation et de passion au service de l'hospitalité d'exception
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year}>
                <motion.div
                  className="flex items-center mb-16 group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                      <div className="text-4xl mb-4">{milestone.icon}</div>
                      <div className="text-3xl font-bold text-gold-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-3">{milestone.title}</h3>
                      <p className="text-navy-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                Nos <span className="text-gold-600 font-medium">Valeurs</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto">
                Les piliers qui guident chacune de nos actions et définissent notre identité
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title}>
                <motion.div
                  className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-stone-50/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-4">{value.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{value.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-sage-50 to-stone-50">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                Notre <span className="text-gold-600 font-medium">Équipe</span> Dirigeante
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto">
                Des leaders passionnés qui incarnent nos valeurs et guident notre vision vers l'excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <ScrollReveal key={member.name}>
                <motion.div
                  className="group text-center"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-navy-900 mb-2">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-4">{member.role}</p>
                  <p className="text-navy-600 leading-relaxed">{member.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-display font-light text-navy-900 mb-6">
                Excellence <span className="text-gold-600 font-medium">Reconnue</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto">
                Notre engagement envers l'excellence récompensé par les plus prestigieuses institutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { award: 'World Travel Awards', year: '2023', category: 'Leading Resort Tunisia', icon: '🏆' },
              { award: 'TripAdvisor', year: '2023', category: 'Travelers\' Choice', icon: '⭐' },
              { award: 'Green Key', year: '2023', category: 'Environmental Excellence', icon: '🌿' },
              { award: 'Booking.com', year: '2023', category: 'Guest Review Award', icon: '💎' }
            ].map((recognition, index) => (
              <ScrollReveal key={index}>
                <div className="text-center p-8 bg-gradient-to-b from-stone-50 to-sage-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-5xl mb-4">{recognition.icon}</div>
                  <h3 className="font-semibold text-navy-900 mb-2">{recognition.award}</h3>
                  <p className="text-gold-600 font-medium text-sm mb-1">{recognition.category}</p>
                  <p className="text-sage-600 text-sm">{recognition.year}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy-900 via-navy-800 to-sage-900">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-light text-white mb-6">
                Rejoignez Notre <span className="text-gold-400 font-medium">Histoire</span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8"></div>
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Devenez partie intégrante de notre légende en vivant une expérience qui transcende l'ordinaire
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/booking"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-2xl inline-flex items-center space-x-2"
                >
                  <span>Vivre l'Expérience</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="/sporthub"
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 inline-flex items-center space-x-3"
                >
                  <Trophy className="w-5 h-5" />
                  <span>Découvrir ONE SportHub</span>
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;