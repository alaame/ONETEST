import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Navigation, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    hotel: ''
  });

  const hotels = [
    {
      id: '1',
      name: 'ONE Resort Auapark & spa',
      address: 'Zone Touristique, Monastir 5000',
      phone: '+216 71 123 456',
      email: 'royal@onehotels.tn',
      coordinates: { lat: 36.8065, lng: 10.1815 },
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '2',
      name: 'ONE Resort Premium',
      address: 'Hammamet, Hammamet 8050',
      phone: '+216 72 234 567',
      email: 'beach@onehotels.tn',
      coordinates: { lat: 36.4167, lng: 10.6167 },
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '3',
      name: 'ONE Resort Jockey',
      address: 'Zone Touristique, Monastir 5000',
      phone: '+216 72 345 678',
      email: 'golf@onehotels.tn',
      coordinates: { lat: 36.4000, lng: 10.6000 },
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const attractions = [
    {
      name: 'Médina de Tunis',
      description: 'Site UNESCO avec souks traditionnels et architecture historique',
      distance: '5 min de ONE Royal Tunis',
      type: 'Culture',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sidi Bou Saïd',
      description: 'Village pittoresque aux maisons bleues et blanches',
      distance: '20 min de Tunis',
      type: 'Patrimoine',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carthage',
      description: 'Vestiges antiques et musées archéologiques',
      distance: '25 min de Tunis',
      type: 'Histoire',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Nabeul',
      description: 'Centre de poterie traditionnelle tunisienne',
      distance: '15 min de Hammamet',
      type: 'Artisanat',
      image: 'https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Parc National de Boukornine',
      description: 'Randonnées et observation de la faune locale',
      distance: '45 min de Tunis',
      type: 'Nature',
      image: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dougga',
      description: 'Site archéologique romain le mieux préservé',
      distance: '1h30 de Tunis',
      type: 'Archéologie',
      image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const culturalEvents = [
    {
      name: 'Festival International de Hammamet',
      period: 'Juillet - Août',
      description: 'Théâtre, musique et arts dans un cadre historique'
    },
    {
      name: 'Festival de Carthage',
      period: 'Juillet - Août',
      description: 'Spectacles internationaux dans l\'amphithéâtre antique'
    },
    {
      name: 'Festival du Sahara',
      period: 'Décembre',
      description: 'Traditions nomades et culture du désert'
    },
    {
      name: 'Nuits Musicales de Sidi Bou Saïd',
      period: 'Été',
      description: 'Concerts intimistes dans le village bleu et blanc'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-coral-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-blue-800/70 to-coral-600/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="w-12 h-12 text-coral-400" />
              <span className="text-6xl">🗺️</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Contact &
              <span className="block text-coral-400">Explorer</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed">
              Contactez-nous et découvrez les merveilles de la Tunisie autour de nos hôtels
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Hotels */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Contactez-nous</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">Hôtel concerné</label>
                      <select
                        name="hotel"
                        value={formData.hotel}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      >
                        <option value="">Sélectionner un hôtel</option>
                        {hotels.map(hotel => (
                          <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Sujet *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-coral-500 to-coral-600 text-white py-4 rounded-xl font-semibold hover:from-coral-600 hover:to-coral-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Hotels Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Nos Hôtels</h2>
              
              {hotels.map((hotel, index) => (
                <div key={hotel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="flex">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 p-4">
                      <h3 className="font-bold text-navy-900 mb-2">{hotel.name}</h3>
                      <div className="space-y-1 text-sm text-navy-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{hotel.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${hotel.phone}`} className="hover:text-coral-600">{hotel.phone}</a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${hotel.email}`} className="hover:text-coral-600">{hotel.email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-coral-50 to-navy-50 rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-4 flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Rapide</span>
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+21670123456"
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-coral-50 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-coral-600" />
                    <div>
                      <div className="font-medium text-navy-900">Réservations</div>
                      <div className="text-sm text-navy-600">+216 70 123 456</div>
                    </div>
                  </a>
                  <a
                    href="mailto:contact@onehotels.tn"
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-coral-50 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-coral-600" />
                    <div>
                      <div className="font-medium text-navy-900">Email</div>
                      <div className="text-sm text-navy-600">contact@onehotels.tn</div>
                    </div>
                  </a>
                  <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                    <Clock className="w-5 h-5 text-coral-600" />
                    <div>
                      <div className="font-medium text-navy-900">Horaires</div>
                      <div className="text-sm text-navy-600">24h/24 - 7j/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore Around */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Explorer Autour de Vous</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Découvrez les trésors culturels et naturels de la Tunisie
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-coral-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {attraction.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Camera className="w-4 h-4 text-navy-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{attraction.name}</h3>
                  <p className="text-navy-600 text-sm mb-3">{attraction.description}</p>
                  <div className="flex items-center space-x-2 text-coral-600 text-sm">
                    <Navigation className="w-4 h-4" />
                    <span>{attraction.distance}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="py-16 bg-gradient-to-r from-coral-50 to-navy-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-4">Événements Culturels</h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Festivals et manifestations culturelles tout au long de l'année
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="font-bold text-navy-900 mb-2">{event.name}</h3>
                <div className="text-coral-600 font-medium text-sm mb-3">{event.period}</div>
                <p className="text-navy-600 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-coral-600 via-navy-500 to-coral-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Planifiez Votre Séjour Parfait
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Laissez-nous vous aider à créer des souvenirs inoubliables en Tunisie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-white text-coral-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Réserver maintenant
              </Link>
              <Link
                to="/hotels"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                Découvrir nos hôtels
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;