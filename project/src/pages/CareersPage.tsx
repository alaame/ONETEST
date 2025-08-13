import React, { useState } from 'react';
import { Users, MapPin, Clock, Send, Heart, Award, Globe, Briefcase, GraduationCap, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [applicationForm, setApplicationForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    cv: null as File | null
  });

  const departments = [
    { id: 'all', name: 'Tous les départements', icon: '🏢' },
    { id: 'hospitality', name: 'Hôtellerie', icon: '🏨' },
    { id: 'restaurant', name: 'Restauration', icon: '🍽️' },
    { id: 'spa', name: 'Spa & Bien-être', icon: '💆‍♀️' },
    { id: 'animation', name: 'Animation', icon: '🎭' },
    { id: 'maintenance', name: 'Maintenance', icon: '🔧' },
    { id: 'administration', name: 'Administration', icon: '📊' }
  ];

  const jobOffers = [
    {
      id: 1,
      title: 'Réceptionniste de Nuit',
      department: 'hospitality',
      location: 'ONE Resort Premium - Hammamet',
      type: 'CDI',
      experience: '2-3 ans',
      description: 'Nous recherchons un(e) réceptionniste de nuit dynamique pour assurer l\'accueil et le service client durant les heures nocturnes.',
      requirements: [
        'Expérience en hôtellerie de luxe',
        'Maîtrise du français et de l\'anglais',
        'Excellentes compétences relationnelles',
        'Disponibilité pour travail de nuit'
      ],
      benefits: [
        'Salaire attractif + primes',
        'Formation continue',
        'Assurance santé',
        'Réductions dans nos resorts'
      ]
    },
    {
      id: 2,
      title: 'Chef de Partie',
      department: 'restaurant',
      location: 'ONE Resort Aquapark - Monastir',
      type: 'CDI',
      experience: '3-5 ans',
      description: 'Rejoignez notre équipe culinaire d\'exception en tant que Chef de Partie dans notre restaurant gastronomique.',
      requirements: [
        'Formation en cuisine professionnelle',
        'Expérience en restauration haut de gamme',
        'Créativité et passion culinaire',
        'Capacité à travailler en équipe'
      ],
      benefits: [
        'Évolution de carrière',
        'Formation avec chefs renommés',
        'Environnement de travail stimulant',
        'Avantages sociaux complets'
      ]
    },
    {
      id: 3,
      title: 'Animateur Kids Club',
      department: 'animation',
      location: 'Tous nos resorts',
      type: 'Saisonnier',
      experience: '1-2 ans',
      description: 'Créez des moments magiques pour nos jeunes clients en tant qu\'animateur(trice) au Kids Club.',
      requirements: [
        'BAFA ou équivalent',
        'Expérience avec les enfants',
        'Créativité et dynamisme',
        'Multilingue apprécié'
      ],
      benefits: [
        'Environnement de travail unique',
        'Formation spécialisée',
        'Équipe internationale',
        'Logement possible'
      ]
    },
    {
      id: 4,
      title: 'Thérapeute Spa',
      department: 'spa',
      location: 'ONE Resort Premium - Hammamet',
      type: 'CDI',
      experience: '2-4 ans',
      description: 'Offrez des soins d\'exception dans notre spa de luxe avec vue sur la Méditerranée.',
      requirements: [
        'Certification en massothérapie',
        'Expérience en spa haut de gamme',
        'Connaissance des soins orientaux',
        'Présentation impeccable'
      ],
      benefits: [
        'Formation continue',
        'Environnement zen',
        'Clientèle internationale',
        'Évolution professionnelle'
      ]
    },
    {
      id: 5,
      title: 'Responsable Maintenance',
      department: 'maintenance',
      location: 'ONE Resort Jockey - Monastir',
      type: 'CDI',
      experience: '5+ ans',
      description: 'Supervisez l\'entretien et la maintenance de nos installations pour garantir l\'excellence opérationnelle.',
      requirements: [
        'Formation technique supérieure',
        'Expérience en management d\'équipe',
        'Connaissance des normes hôtelières',
        'Polyvalence technique'
      ],
      benefits: [
        'Poste à responsabilités',
        'Équipe technique qualifiée',
        'Matériel moderne',
        'Formation technique continue'
      ]
    },
    {
      id: 6,
      title: 'Assistant(e) RH',
      department: 'administration',
      location: 'Siège Social - Tunis',
      type: 'CDI',
      experience: '2-3 ans',
      description: 'Participez au développement de nos talents en rejoignant notre équipe RH dynamique.',
      requirements: [
        'Formation en RH ou équivalent',
        'Maîtrise des outils RH',
        'Excellente communication',
        'Esprit d\'analyse'
      ],
      benefits: [
        'Environnement corporate',
        'Projets variés',
        'Formation RH continue',
        'Évolution rapide'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: 'Passion du Service',
      description: 'Nous cultivons l\'excellence dans chaque interaction avec nos clients'
    },
    {
      icon: Users,
      title: 'Esprit d\'Équipe',
      description: 'La collaboration et l\'entraide sont au cœur de notre réussite'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons constamment l\'amélioration et l\'innovation'
    },
    {
      icon: Globe,
      title: 'Diversité',
      description: 'Nous célébrons la richesse de nos différences culturelles'
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Formation Continue',
      description: 'Programmes de développement professionnel et personnel'
    },
    {
      icon: Heart,
      title: 'Bien-être au Travail',
      description: 'Environnement de travail sain et équilibré'
    },
    {
      icon: Award,
      title: 'Reconnaissance',
      description: 'Système de récompenses et d\'évolution de carrière'
    },
    {
      icon: Coffee,
      title: 'Avantages Sociaux',
      description: 'Assurance santé, réductions, événements d\'équipe'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOffers 
    : jobOffers.filter(job => job.department === selectedDepartment);

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    // Handle form submission
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'CDI': return 'bg-green-100 text-green-700';
      case 'CDD': return 'bg-blue-100 text-blue-700';
      case 'Saisonnier': return 'bg-orange-100 text-orange-700';
      case 'Stage': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-blue-800/70 to-purple-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Users className="w-12 h-12 text-blue-400" />
              <span className="text-6xl">💼</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Carrières &
              <span className="block text-blue-400">Talents</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Rejoignez une équipe passionnée et construisez votre avenir avec ONE Hotels & Resorts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#jobs"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Voir les offres d'emploi
              </a>
              <a
                href="#application"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Candidature spontanée
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Les principes qui guident notre équipe au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-navy-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Pourquoi Nous Rejoindre ?</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Des avantages qui font la différence pour votre épanouissement professionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{benefit.title}</h3>
                <p className="text-navy-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offers */}
      <section id="jobs" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Offres d'Emploi</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Découvrez les opportunités de carrière dans nos différents départements
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{dept.icon}</span>
                <span>{dept.name}</span>
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center text-navy-500 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(job.type)}`}>
                    {job.type}
                  </span>
                </div>

                <p className="text-navy-600 mb-4 text-sm line-clamp-3">{job.description}</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-navy-800 text-sm mb-2">Exigences :</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 2).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-navy-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-navy-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Expérience: {job.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{departments.find(d => d.id === job.department)?.name}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-300">
                  Postuler
                </button>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">Aucune offre dans ce département</h3>
              <p className="text-navy-600 mb-6">Consultez les autres départements ou envoyez une candidature spontanée</p>
              <button
                onClick={() => setSelectedDepartment('all')}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors duration-300"
              >
                Voir toutes les offres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Candidature Spontanée</h2>
              <p className="text-xl text-navy-600">
                Vous ne trouvez pas le poste idéal ? Envoyez-nous votre candidature !
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Prénom *</label>
                    <input
                      type="text"
                      required
                      value={applicationForm.firstName}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Nom *</label>
                    <input
                      type="text"
                      required
                      value={applicationForm.lastName}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Poste souhaité</label>
                    <input
                      type="text"
                      value={applicationForm.position}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, position: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Poste recherché"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Années d'expérience</label>
                    <select
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm(prev => ({ ...prev, experience: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionner</option>
                      <option value="0-1">0-1 an</option>
                      <option value="1-3">1-3 ans</option>
                      <option value="3-5">3-5 ans</option>
                      <option value="5-10">5-10 ans</option>
                      <option value="10+">Plus de 10 ans</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">Lettre de motivation *</label>
                  <textarea
                    required
                    rows={5}
                    value={applicationForm.motivation}
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, motivation: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre ONE Hotels & Resorts..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">CV (PDF) *</label>
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    onChange={(e) => setApplicationForm(prev => ({ ...prev, cv: e.target.files?.[0] || null }))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer ma candidature</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-500 to-navy-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Prêt à Rejoindre l'Aventure ONE ?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Construisez votre carrière dans l'industrie hôtelière de luxe avec une équipe passionnée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#jobs"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Voir les offres d'emploi
              </a>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;