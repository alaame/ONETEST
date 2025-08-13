import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Phone, MapPin, Globe, ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  });
  
  const location = useLocation();
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du clic extérieur pour fermer les menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageMenuRef.current && 
        languageButtonRef.current &&
        !languageMenuRef.current.contains(event.target as Node) &&
        !languageButtonRef.current.contains(event.target as Node)
      ) {
        setShowLanguageMenu(false);
      }
    };

    if (showLanguageMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showLanguageMenu]);

  const isHomePage = location.pathname === '/';

  const languages: Language[] = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇹🇳' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  // Nouvelle structure du menu principal
  const mainMenuItems = [
    {
      id: 'valeurs',
      name: 'Valeurs',
      icon: '🌿',
      items: [
        { name: 'Notre Philosophie', path: '/about', description: 'Découvrez nos valeurs et notre vision' },
        { name: 'Ressources Humaines', path: '/careers', description: 'Rejoignez notre équipe' },
        { name: 'ONE VISION', path: '/one-vision', description: 'Notre engagement global pour un tourisme responsable' }
      ]
    },
    {
      id: 'savor',
      name: 'Savor',
      icon: '🍴',
      items: [
        { name: 'Restaurants', path: '/restaurants', description: 'Expériences culinaires' },
        { name: 'Bars & Cocktails', path: '/bars', description: 'Ambiances et cocktails' },
        { name: 'Occasions & Événements', path: '/events', description: 'Célébrations sur mesure' }
      ]
    },
    {
      id: 'animation',
      name: 'Animation',
      icon: '🎉',
      items: [
        { name: 'Enjoying Experience', path: '/enjoying', description: 'Expérience familiale immersive' },
        { name: 'ONE SportHub', path: '/sporthub', description: 'Fitness premium et padel professionnel' },
      ]
    },
    {
      id: 'facilities',
      name: 'Facilities',
      icon: '🏖️',
      items: [
        { name: 'Nos Resorts', path: '/hotels', description: 'Découvrir nos établissements' },
        { name: 'Spa & Bien-être', path: '/spa', description: 'Détente et soins premium' },
        { name: 'ONE SportHub', path: '/sporthub', description: 'Fitness et padel dans un seul univers' },
        { name: 'Visite Virtuelle', path: '/tour', description: 'Tour 360° de nos espaces' }
      ]
    },
    {
      id: 'test',
      name: 'Test',
      icon: '🧪',
      items: [
        { name: 'Page Test', path: '/test', description: 'Page de test avec sections et programmes' }
      ]
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: '📞',
      items: [
        { name: 'Réservation', path: '/booking', description: 'Réserver votre séjour' },
        { name: 'Contact & Localisation', path: '/contact', description: 'Nous trouver et nous contacter' }
      ]
    }
  ];

  // Traductions basiques
  const translations: { [key: string]: { [key: string]: string } } = {
    fr: {
      search: 'Rechercher...',
      contact: 'Contact'
    },
    en: {
      search: 'Search...',
      contact: 'Contact'
    },
    ar: {
      search: 'بحث...',
      contact: 'اتصال'
    },
    es: {
      search: 'Buscar...',
      contact: 'Contacto'
    },
    de: {
      search: 'Suchen...',
      contact: 'Kontakt'
    },
    it: {
      search: 'Cerca...',
      contact: 'Contatto'
    },
    ru: {
      search: 'Поиск...',
      contact: 'Контакт'
    },
    pl: {
      search: 'Szukaj...',
      contact: 'Kontakt'
    }
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.fr[key] || key;
  };

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    setShowLanguageMenu(false);
    localStorage.setItem('selectedLanguage', language.code);
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  const handleDropdownToggle = (menuId: string) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
  };

  // Charger la langue sauvegardée au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        {/* MOBILE LAYOUT */}
        <div className="xl:hidden flex items-center justify-between h-16 sm:h-18">
          {/* Logo - Gauche */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/LOGO BLEU.png" 
                  alt="ONE Hotels & Resorts" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-sm sm:text-base leading-tight ${
                  isScrolled || !isHomePage ? 'text-navy-900' : 'text-white'
                }`}>
                  ONE 
                </span>
                <span className={`text-xs font-light leading-tight ${
                  isScrolled || !isHomePage ? 'text-navy-600' : 'text-white/80'
                }`}>
                  Hotels & Resorts
                </span>
              </div>
            </Link>
          </div>

          {/* Language Selector - Centre */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <button
                ref={languageButtonRef}
                onClick={toggleLanguageMenu}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 touch-manipulation ${
                  isScrolled || !isHomePage ? 'text-navy-600 hover:bg-navy-50' : 'text-white hover:bg-white/10'
                } ${showLanguageMenu ? 'bg-navy-50' : ''}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
                aria-label="Sélectionner la langue"
                aria-expanded={showLanguageMenu}
                aria-haspopup="true"
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showLanguageMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Menu Langue Mobile */}
              {showLanguageMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setShowLanguageMenu(false)}
                    style={{ backgroundColor: 'transparent' }}
                  />
                  
                  <div 
                    ref={languageMenuRef}
                    className="absolute z-50 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden left-1/2 -translate-x-1/2 w-72 max-w-[calc(100vw-2rem)]"
                    style={{ maxHeight: '70vh', overflowY: 'auto' }}
                  >
                    <div className="px-4 py-3 bg-gradient-to-r from-navy-50 to-gold-50 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-navy-900">Choisir la langue</h3>
                        <button
                          onClick={() => setShowLanguageMenu(false)}
                          className="p-1 hover:bg-white/50 rounded-full transition-colors"
                          aria-label="Fermer le menu"
                        >
                          <span className="text-navy-400 text-lg">×</span>
                        </button>
                      </div>
                    </div>

                    <div className="py-2 max-h-64 overflow-y-auto">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang)}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 active:bg-gray-100 flex items-center space-x-3 text-sm transition-all duration-200 touch-manipulation ${
                            currentLanguage.code === lang.code ? 'bg-gold-50 text-gold-700 border-r-2 border-gold-500' : 'text-navy-700'
                          }`}
                          style={{ WebkitTapHighlightColor: 'transparent' }}
                        >
                          <span className="text-lg flex-shrink-0">{lang.flag}</span>
                          <span className="flex-1 font-medium">{lang.name}</span>
                          {currentLanguage.code === lang.code && (
                            <span className="text-gold-600 font-bold">✓</span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        Langue actuelle : {currentLanguage.name}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Espace pour le menu burger - Droite */}
          <div className="w-12 flex justify-end">
            {/* Espace réservé pour le menu burger du FloatingMenu */}
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden xl:flex items-center justify-between h-20 lg:h-24 gap-6">
          {/* Logo Desktop */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0 min-w-0">
            <div className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <img 
                src="/LOGO BLEU.png" 
                alt="ONE Hotels & Resorts" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`font-serif font-bold text-xl xl:text-2xl leading-tight ${
                isScrolled || !isHomePage ? 'text-navy-900' : 'text-white'
              }`}>
                ONE 
              </span>
              <span className={`text-sm md:text-base font-light leading-tight truncate ${
                isScrolled || !isHomePage ? 'text-navy-600' : 'text-white/80'
              }`}>
                Hotels & Resorts
              </span>
            </div>
          </Link>
 
          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-2 2xl:space-x-4">
            {mainMenuItems.map((menuItem) => (
              <div 
                key={menuItem.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menuItem.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`font-medium text-sm hover:text-gold-500 transition-colors duration-300 relative group flex items-center space-x-1 whitespace-nowrap px-3 py-2 rounded-lg ${
                    isScrolled || !isHomePage ? 'text-navy-700' : 'text-white'
                  }`}
                >
                  <span className="text-base">{menuItem.icon}</span>
                  <span>{menuItem.name}</span>
                  <ChevronDown className="w-3 h-3" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
                </button>

                {activeDropdown === menuItem.id && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 py-2 min-w-80 z-50"
                    onMouseEnter={() => setActiveDropdown(menuItem.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {menuItem.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-1">
                          <div className="font-medium text-navy-900">{item.name}</div>
                          <div className="text-sm text-navy-600">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Contact Link */}
            <Link
              to="/contact"
              className={`font-medium text-sm hover:text-gold-500 transition-colors duration-300 relative group whitespace-nowrap px-3 py-2 rounded-lg flex items-center space-x-1 ${
                isScrolled || !isHomePage ? 'text-navy-700' : 'text-white'
              }`}
            >
              <span className="text-base">📞</span>
              <span>{t('contact')}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center space-x-6 flex-shrink-0">
            {/* Search */}
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isScrolled || !isHomePage ? 'text-navy-400' : 'text-white/60'
              }`} />
              <input
                type="text"
                placeholder={t('search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-full text-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 w-48 ${
                  isScrolled || !isHomePage 
                    ? 'bg-white border-navy-200 text-navy-700 placeholder-navy-400' 
                    : 'bg-white/20 border-white/30 text-white placeholder-white/60 backdrop-blur-sm'
                }`}
              />
            </div>

            {/* Language Selector Desktop */}
            <div className="relative">
              <button
                ref={languageButtonRef}
                onClick={toggleLanguageMenu}
                className={`flex items-center space-x-1 px-3 py-2.5 rounded-lg transition-all duration-300 ${
                  isScrolled || !isHomePage ? 'text-navy-600 hover:bg-navy-50' : 'text-white hover:bg-white/10'
                } ${showLanguageMenu ? 'bg-navy-50' : ''}`}
                aria-label="Sélectionner la langue"
                aria-expanded={showLanguageMenu}
                aria-haspopup="true"
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showLanguageMenu ? 'rotate-180' : ''}`} />
              </button>

              {/* Menu Langue Desktop */}
              {showLanguageMenu && (
                <>
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setShowLanguageMenu(false)}
                    style={{ backgroundColor: 'transparent' }}
                  />
                  
                  <div 
                    ref={languageMenuRef}
                    className="absolute z-50 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden right-0 w-72"
                    style={{ maxHeight: '70vh', overflowY: 'auto' }}
                  >
                    <div className="px-4 py-3 bg-gradient-to-r from-navy-50 to-gold-50 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-navy-900">Choisir la langue</h3>
                        <button
                          onClick={() => setShowLanguageMenu(false)}
                          className="p-1 hover:bg-white/50 rounded-full transition-colors"
                          aria-label="Fermer le menu"
                        >
                          <span className="text-navy-400 text-lg">×</span>
                        </button>
                      </div>
                    </div>

                    <div className="py-2 max-h-64 overflow-y-auto">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang)}
                          className={`w-full px-4 py-3 text-left hover:bg-gray-50 active:bg-gray-100 flex items-center space-x-3 text-sm transition-all duration-200 ${
                            currentLanguage.code === lang.code ? 'bg-gold-50 text-gold-700 border-r-2 border-gold-500' : 'text-navy-700'
                          }`}
                        >
                          <span className="text-lg flex-shrink-0">{lang.flag}</span>
                          <span className="flex-1 font-medium">{lang.name}</span>
                          {currentLanguage.code === lang.code && (
                            <span className="text-gold-600 font-bold">✓</span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                      <p className="text-xs text-gray-500 text-center">
                        Langue actuelle : {currentLanguage.name}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <Link
              to="/booking"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Réserver
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;