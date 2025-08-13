import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Crown, Waves, Trophy } from 'lucide-react';

const HotelNavigation: React.FC = () => {
  const location = useLocation();

  const hotels = [
    {
      id: 'aquapark',
      name: 'Aquapark & Spa',
      path: '/aquapark-resort',
      icon: '🏊‍♀️',
      color: 'from-cyan-500 to-blue-600',
      concept: 'Famille & Aventure'
    },
    {
      id: 'premium',
      name: 'Premium',
      path: '/premium-resort',
      icon: '👑',
      color: 'from-gold-500 to-amber-600',
      concept: 'Luxe & Raffinement'
    },
    {
      id: 'jockey',
      name: 'Jockey',
      path: '/jockey-resort',
      icon: '🏆',
      color: 'from-blue-500 to-gray-600',
      concept: 'Business & Sport'
    }
  ];

  const getCurrentHotelIndex = () => {
    return hotels.findIndex(hotel => location.pathname === hotel.path);
  };

  const currentIndex = getCurrentHotelIndex();
  const previousHotel = currentIndex > 0 ? hotels[currentIndex - 1] : hotels[hotels.length - 1];
  const nextHotel = currentIndex < hotels.length - 1 ? hotels[currentIndex + 1] : hotels[0];

  if (currentIndex === -1) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gold-200/50 p-4"
      >
        <div className="flex items-center space-x-4">
          {/* Hôtel Précédent */}
          <Link to={previousHotel.path}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 text-navy-600" />
              <div className="text-left">
                <div className="text-xs text-navy-500">Précédent</div>
                <div className="text-sm font-medium text-navy-800">{previousHotel.name}</div>
              </div>
            </motion.button>
          </Link>

          {/* Hôtel Actuel */}
          <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-gold-100 to-gold-200 rounded-xl">
            <span className="text-2xl">{hotels[currentIndex].icon}</span>
            <div className="text-center">
              <div className="text-xs text-gold-700">Vous êtes ici</div>
              <div className="text-sm font-bold text-gold-800">{hotels[currentIndex].name}</div>
            </div>
          </div>

          {/* Hôtel Suivant */}
          <Link to={nextHotel.path}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-300"
            >
              <div className="text-right">
                <div className="text-xs text-navy-500">Suivant</div>
                <div className="text-sm font-medium text-navy-800">{nextHotel.name}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-navy-600" />
            </motion.button>
          </Link>
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center space-x-2 mt-3">
          {hotels.map((hotel, index) => (
            <Link key={hotel.id} to={hotel.path}>
              <motion.div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold-500 w-6' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HotelNavigation;