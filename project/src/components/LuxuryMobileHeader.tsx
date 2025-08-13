import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Menu, X, Phone, Calendar, MapPin, Sparkles } from 'lucide-react';

const LuxuryMobileHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const menuSections = [
    {
      title: 'Découvrir',
      icon: '✨',
      items: [
        { name: 'Accueil', path: '/', icon: '🏠', description: 'Page d\'accueil' },
        { name: 'À propos', path: '/about', icon: '💫', description: 'Notre philosophie' },
        { name: 'Nos Resorts', path: '/hotels', icon: '🏨', description: 'Sanctuaires d\'exception' },
        { name: 'Visite Virtuelle', path: '/tour', icon: '📷', description: 'Tour 360° de nos espaces' }
      ]
    },
    {
      title: 'Gastronomie & Bars',
      icon: '🍽️',
      items: [
        { name: 'Restaurants', path: '/restaurants', icon: '🍽️', description: 'Art culinaire raffiné' },
        { name: 'Bars & Cocktails', path: '/bars', icon: '🍸', description: 'Ambiances et cocktails' },
        { name: 'Occasions & Événements', path: '/events', icon: '🎉', description: 'Célébrations sur mesure' }
      ]
    },
    {
      title: 'Bien-être & Sport',
      icon: '💆‍♀️',
      items: [
        { name: 'Spa & Wellness', path: '/spa', icon: '💆‍♀️', description: 'Oasis de bien-être' },
        { name: 'ONE SportHub', path: '/sporthub', icon: '🏆', description: 'Fitness premium et padel professionnel' }
      ]
    },
    {
      title: 'Famille & Animation',
      icon: '🎭',
      items: [
        { name: 'Enjoying Experience', path: '/enjoying', icon: '🎭', description: 'Expérience complète famille' },
      ]
    },
    {
      title: 'Vision & Valeurs',
      icon: '🏢',
      items: [
        { name: 'Carrières', path: '/careers', icon: '💼', description: 'Rejoignez notre équipe' },
        { name: 'ONE VISION', path: '/one-vision', icon: '🌍', description: 'Notre engagement global responsable' }
      ]
    },
    {
      title: 'Test & Détails',
      icon: '🧪',
      items: [
        { name: 'Page Test', path: '/test', icon: '🧪', description: 'Page de test avec sections' },
      ]
    },
    {
      title: 'Contact & Réservation',
      icon: '📞',
      items: [
        { name: 'Contact', path: '/contact', icon: '📧', description: 'Nous contacter' },
        { name: 'Réservation', path: '/booking', icon: '📅', description: 'Réserver votre séjour' }
      ]
    }
  ];

  return (
    <>
      {/* Header Principal */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gold-200/20'
            : 'bg-transparent'
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Luxe */}
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                  <img 
                    src="/LOGO BLEU.png" 
                    alt="ONE Hotels & Resorts" 
                    className="w-full h-full object-contain"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-full opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              <div className="hidden sm:block">
                <div className={`font-display font-light text-xl sm:text-2xl transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-navy-900' : 'text-white'
                }`}>
                  ONE
                </div>
                <div className={`text-xs font-light tracking-wider transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-navy-600' : 'text-white/80'
                }`}>
                  Hotels & Resorts
                </div>
              </div>
            </Link>

            {/* Actions Rapides */}
            <div className="flex items-center space-x-2">
              {/* Recherche Mobile */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled || !isHomePage 
                    ? 'bg-gold-100 text-gold-600 hover:bg-gold-200' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                } backdrop-blur-sm`}
              >
                <Search className="w-5 h-5" />
              </motion.div>

              {/* Réservation Rapide */}
              <Link to="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Réserver</span>
                </motion.button>
              </Link>

              {/* Menu Burger Luxe */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isScrolled || !isHomePage 
                    ? 'bg-navy-100 text-navy-600 hover:bg-navy-200' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                } backdrop-blur-sm`}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile Luxe */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay pour fermer le menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-xl"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Menu */}
              <div className="p-6 bg-gradient-to-br from-navy-800 to-navy-900">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/LOGO BLEU.png" 
                      alt="ONE Hotels & Resorts" 
                      className="w-8 h-8"
                    />
                    <div>
                      <div className="text-white font-display text-lg">ONE</div>
                      <div className="text-gold-200 text-xs">Hotels & Resorts</div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-white" />
                  </motion.button>
                </div>
                
                {/* Recherche dans le menu */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gold-200" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gold-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>

              {/* Sections Menu */}
              <div className="p-6 space-y-8">
                {menuSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIndex * 0.1 + 0.3 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-2xl">{section.icon}</span>
                      <h4 className="text-lg font-semibold text-navy-900">{section.title}</h4>
                    </div>
                    
                    <div className="space-y-2">
                      {section.items.map((item, index) => (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (sectionIndex * 0.1) + (index * 0.05) + 0.4 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-gold-50 hover:to-gold-100 transition-all duration-300 group"
                          >
                            <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-lg">{item.icon}</span>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-navy-900 group-hover:text-gold-600 transition-colors duration-300">
                                {item.name}
                              </div>
                              <div className="text-sm text-navy-600 group-hover:text-gold-500 transition-colors duration-300">
                                {item.description}
                              </div>
                            </div>
                            <Sparkles className="w-4 h-4 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Actions Rapides */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="border-t border-gray-200 pt-6 space-y-4"
                >
                  <h4 className="text-lg font-semibold text-navy-900 flex items-center space-x-2">
                    <span>⚡</span>
                    <span>Actions Rapides</span>
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      to="/booking"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex flex-col items-center p-4 bg-gradient-to-br from-gold-500 to-gold-600 text-white rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Calendar className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium">Réserver</span>
                    </Link>
                    
                    <a
                      href="tel:+21658406722"
                      className="flex flex-col items-center p-4 bg-gradient-to-br from-navy-500 to-navy-600 text-white rounded-xl hover:from-navy-600 hover:to-navy-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="w-6 h-6 mb-2" />
                      <span className="text-sm font-medium">Appeler</span>
                    </a>
                  </div>
                </motion.div>

                {/* Footer Menu */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center pt-6 border-t border-gray-200"
                >
                  <p className="text-sm text-navy-500 italic mb-2">
                    "Experience a Life Well Lived"
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-xs text-navy-400">
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>À propos</Link>
                    <span>•</span>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <span>•</span>
                    <Link to="/careers" onClick={() => setIsMenuOpen(false)}>Carrières</Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LuxuryMobileHeader;