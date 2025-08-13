import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, ChevronDown, Menu, X } from 'lucide-react';

const LuxuryNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      id: 'experiences',
      name: 'Expériences',
      items: [
        { name: 'Nos Resorts', path: '/hotels', description: 'Découvrez nos établissements d\'exception' },
        { name: 'Chambres & Suites', path: '/rooms', description: 'Hébergements de luxe' },
        { name: 'Gastronomie', path: '/restaurants', description: 'Art culinaire raffiné' },
        { name: 'Spa & Wellness', path: '/spa', description: 'Oasis de bien-être' }
      ]
    },
    {
      id: 'lifestyle',
      name: 'Art de Vivre',
      items: [
        { name: 'Activités', path: '/activities', description: 'Loisirs et aventures' },
        { name: 'Kids Universe', path: '/kids-club', description: 'Univers dédié aux enfants' },
        { name: 'Événements', path: '/events', description: 'Célébrations mémorables' },
        { name: 'Padel Club', path: '/padel', description: 'Sport et convivialité' }
      ]
    },
    {
      id: 'heritage',
      name: 'Héritage',
      items: [
        { name: 'Notre Histoire', path: '/about', description: 'Philosophie et valeurs' },
        { name: 'Engagement Durable', path: '/sustainability', description: 'Responsabilité environnementale' },
        { name: 'Impact Social', path: '/social-impact', description: 'Contribution communautaire' }
      ]
    }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 relative">
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
              <div className={`font-display font-light text-2xl lg:text-3xl transition-colors duration-300 ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}>
                ONE
              </div>
              <div className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-navy-600' : 'text-white/80'
              }`}>
                Hotels & Resorts
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 font-light text-lg transition-all duration-300 hover:text-gold-500 ${
                    isScrolled ? 'text-navy-700' : 'text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 py-4 min-w-80 z-50"
                    >
                      {item.items.map((subItem, index) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="flex items-start space-x-4 px-6 py-3 hover:bg-gold-50/50 transition-colors duration-300 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                          <div>
                            <div className="font-medium text-navy-900 group-hover:text-gold-600 transition-colors duration-300">
                              {subItem.name}
                            </div>
                            <div className="text-sm text-navy-600 mt-1">
                              {subItem.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden lg:block relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isScrolled ? 'text-navy-400' : 'text-white/60'
              }`} />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-full text-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 w-48 ${
                  isScrolled 
                    ? 'bg-white border-navy-200 text-navy-700 placeholder-navy-400' 
                    : 'bg-white/20 border-white/30 text-white placeholder-white/60 backdrop-blur-sm'
                }`}
              />
            </div>

            {/* Language */}
            <motion.button
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-navy-600 hover:bg-navy-50' : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">FR</span>
              <ChevronDown className="w-3 h-3" />
            </motion.button>

            {/* CTA */}
            <Link
              to="/booking"
              className="hidden sm:block"
            >
              <motion.button
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full font-medium hover:from-gold-600 hover:to-gold-700 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Réserver
              </motion.button>
            </Link>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'text-navy-600 hover:bg-navy-50' : 'text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-white/20"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-6">
                {navigationItems.map((section) => (
                  <div key={section.id}>
                    <h3 className="font-medium text-navy-900 mb-3">{section.name}</h3>
                    <div className="space-y-2 pl-4">
                      {section.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-navy-600 hover:text-gold-600 transition-colors duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default LuxuryNavigation;