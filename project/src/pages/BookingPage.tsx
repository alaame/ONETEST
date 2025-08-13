import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, CreditCard, Check, ArrowLeft, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    type: 'hotel',
    hotel: '',
    room: '',
    checkIn: '',
    checkOut: '',
    guests: {
      adults: 2,
      children: 0
    },
    services: [] as string[],
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: ''
    }
  });

  const steps = [
    { id: 1, name: 'Sélection', icon: MapPin },
    { id: 2, name: 'Dates & Invités', icon: Calendar },
    { id: 3, name: 'Services', icon: Users },
    { id: 4, name: 'Informations', icon: Mail },
    { id: 5, name: 'Paiement', icon: CreditCard }
  ];

  const hotels = [
    { id: '1', name: 'ONE Resort Aquapark', location: 'Monastir'},
    { id: '2', name: 'ONE Resort Premium', location: 'Hammamet' },
    { id: '3', name: 'ONE Resort Jockey', location: 'Monastir' }
  ];

  const roomTypes = [
    { id: 'deluxe', name: 'Chambre Deluxe', capacity: '2 adultes' },
    { id: 'suite', name: 'Suite Junior', capacity: '2 adultes + 1 enfant' },
    { id: 'presidential', name: 'Suite Présidentielle', capacity: '4 adultes' }
  ];

  const additionalServices = [
    { id: 'spa', name: 'Accès Spa Premium', price: 45, description: 'Accès illimité aux installations spa' },
    { id: 'breakfast', name: 'Petit-déjeuner Continental', price: 25, description: 'Buffet petit-déjeuner inclus' },
    { id: 'airport', name: 'Transfert Aéroport', price: 35, description: 'Navette privée aller-retour' },
    { id: 'dinner', name: 'Dîner Gastronomique', price: 65, description: 'Menu 5 services au restaurant étoilé' },
    { id: 'excursion', name: 'Excursion Guidée', price: 85, description: 'Visite des sites touristiques avec guide' },
    { id: 'massage', name: 'Massage Relaxant', price: 120, description: 'Massage 60 minutes au spa' }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setBookingData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === bookingData.room);
    const roomPrice = selectedRoom ? selectedRoom.price || 0 : 0;
    
    const servicesPrice = bookingData.services.reduce((total, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);

    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));

    return (roomPrice * Math.max(1, nights)) + servicesPrice;
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return bookingData.hotel && bookingData.room;
      case 2:
        return bookingData.checkIn && bookingData.checkOut;
      case 3:
        return true; // Services are optional
      case 4:
        return bookingData.personalInfo.firstName && 
               bookingData.personalInfo.lastName && 
               bookingData.personalInfo.email && 
               bookingData.personalInfo.phone;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-50 via-white to-navy-50 pt-20">
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="flex items-center space-x-2 text-navy-600 hover:text-navy-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-serif font-bold text-navy-900">Réservation</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-navy-500">Total estimé</div>
                <div className="text-2xl font-bold text-gold-600">{calculateTotal()} TND</div>
              </div>
              <a
                href="tel:+21670123456"
                className="bg-navy-800 text-white px-4 py-2 rounded-lg hover:bg-navy-900 transition-colors duration-300 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Aide</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  currentStep >= step.id ? 'text-gold-600' : 'text-gray-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step.id 
                      ? 'bg-gold-600 border-gold-600 text-white' 
                      : 'border-gray-300 text-gray-400'
                  }`}>
                    {currentStep > step.id ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  <span className="font-medium hidden sm:block">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-gold-600' : 'bg-gray-300'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Step 1: Hotel & Room Selection */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Choisissez votre hôtel</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {hotels.map((hotel) => (
                    <div
                      key={hotel.id}
                      onClick={() => setBookingData(prev => ({ ...prev, hotel: hotel.id }))}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        bookingData.hotel === hotel.id
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-gray-200 hover:border-gold-300'
                      }`}
                    >
                      <h3 className="font-bold text-navy-900 mb-2">{hotel.name}</h3>
                      <div className="flex items-center text-navy-600 text-sm mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {hotel.location}
                      </div>
                      <div className="text-gold-600 font-semibold">À partir de {hotel.priceFrom} TND/nuit</div>
                    </div>
                  ))}
                </div>

                {bookingData.hotel && (
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-4">Sélectionnez votre chambre</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {roomTypes.map((room) => (
                        <div
                          key={room.id}
                          onClick={() => setBookingData(prev => ({ ...prev, room: room.id }))}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            bookingData.room === room.id
                              ? 'border-gold-500 bg-gold-50'
                              : 'border-gray-200 hover:border-gold-300'
                          }`}
                        >
                          <h4 className="font-semibold text-navy-900 mb-1">{room.name}</h4>
                          <p className="text-sm text-navy-600 mb-2">{room.capacity}</p>
                  
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Dates & Guests */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Dates et invités</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4">Dates de séjour</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">Date d'arrivée</label>
                        <input
                          type="date"
                          value={bookingData.checkIn}
                          onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">Date de départ</label>
                        <input
                          type="date"
                          value={bookingData.checkOut}
                          onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-4">Nombre d'invités</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">Adultes</label>
                        <select
                          value={bookingData.guests.adults}
                          onChange={(e) => setBookingData(prev => ({ 
                            ...prev, 
                            guests: { ...prev.guests, adults: parseInt(e.target.value) }
                          }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        >
                          {[1, 2, 3, 4, 5, 6].map(num => (
                            <option key={num} value={num}>{num} adulte{num > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">Enfants (0-12 ans)</label>
                        <select
                          value={bookingData.guests.children}
                          onChange={(e) => setBookingData(prev => ({ 
                            ...prev, 
                            guests: { ...prev.guests, children: parseInt(e.target.value) }
                          }))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                        >
                          {[0, 1, 2, 3, 4].map(num => (
                            <option key={num} value={num}>{num} enfant{num > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {bookingData.checkIn && bookingData.checkOut && (
                  <div className="mt-8 p-4 bg-gold-50 rounded-lg">
                    <h4 className="font-semibold text-navy-900 mb-2">Résumé de votre séjour</h4>
                    <div className="text-sm text-navy-700">
                      <p>Du {new Date(bookingData.checkIn).toLocaleDateString('fr-FR')} au {new Date(bookingData.checkOut).toLocaleDateString('fr-FR')}</p>
                      <p>{Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 3600 * 24))} nuit(s)</p>
                      <p>{bookingData.guests.adults} adulte{bookingData.guests.adults > 1 ? 's' : ''} {bookingData.guests.children > 0 && `, ${bookingData.guests.children} enfant${bookingData.guests.children > 1 ? 's' : ''}`}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Additional Services */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Services additionnels</h2>
                <p className="text-navy-600 mb-8">Personnalisez votre séjour avec nos services premium (optionnel)</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {additionalServices.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        bookingData.services.includes(service.id)
                          ? 'border-gold-500 bg-gold-50'
                          : 'border-gray-200 hover:border-gold-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-navy-900">{service.name}</h3>
                        <div className="text-gold-600 font-bold">{service.price} TND</div>
                      </div>
                      <p className="text-sm text-navy-600">{service.description}</p>
                      {bookingData.services.includes(service.id) && (
                        <div className="mt-3 flex items-center text-gold-600">
                          <Check className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">Ajouté</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {bookingData.services.length > 0 && (
                  <div className="mt-8 p-4 bg-gold-50 rounded-lg">
                    <h4 className="font-semibold text-navy-900 mb-2">Services sélectionnés</h4>
                    <div className="space-y-1">
                      {bookingData.services.map(serviceId => {
                        const service = additionalServices.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex justify-between text-sm">
                            <span className="text-navy-700">{service.name}</span>
                            <span className="text-gold-600 font-medium">{service.price} TND</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Personal Information */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Vos informations</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Prénom *</label>
                    <input
                      type="text"
                      value={bookingData.personalInfo.firstName}
                      onChange={(e) => setBookingData(prev => ({ 
                        ...prev, 
                        personalInfo: { ...prev.personalInfo, firstName: e.target.value }
                      }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Nom *</label>
                    <input
                      type="text"
                      value={bookingData.personalInfo.lastName}
                      onChange={(e) => setBookingData(prev => ({ 
                        ...prev, 
                        personalInfo: { ...prev.personalInfo, lastName: e.target.value }
                      }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={bookingData.personalInfo.email}
                      onChange={(e) => setBookingData(prev => ({ 
                        ...prev, 
                        personalInfo: { ...prev.personalInfo, email: e.target.value }
                      }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      value={bookingData.personalInfo.phone}
                      onChange={(e) => setBookingData(prev => ({ 
                        ...prev, 
                        personalInfo: { ...prev.personalInfo, phone: e.target.value }
                      }))}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-navy-700 mb-2">Demandes spéciales</label>
                  <textarea
                    value={bookingData.personalInfo.specialRequests}
                    onChange={(e) => setBookingData(prev => ({ 
                      ...prev, 
                      personalInfo: { ...prev.personalInfo, specialRequests: e.target.value }
                    }))}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Allergies alimentaires, préférences de chambre, occasions spéciales..."
                  />
                </div>
              </div>
            )}

            {/* Step 5: Payment */}
            {currentStep === 5 && (
              <div>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Récapitulatif et paiement</h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h3 className="font-bold text-navy-900 mb-4">Récapitulatif de votre réservation</h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-navy-600">Hôtel :</span>
                          <span className="font-medium text-navy-900">
                            {hotels.find(h => h.id === bookingData.hotel)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-navy-600">Chambre :</span>
                          <span className="font-medium text-navy-900">
                            {roomTypes.find(r => r.id === bookingData.room)?.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-navy-600">Dates :</span>
                          <span className="font-medium text-navy-900">
                            {new Date(bookingData.checkIn).toLocaleDateString('fr-FR')} - {new Date(bookingData.checkOut).toLocaleDateString('fr-FR')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-navy-600">Invités :</span>
                          <span className="font-medium text-navy-900">
                            {bookingData.guests.adults} adulte{bookingData.guests.adults > 1 ? 's' : ''} {bookingData.guests.children > 0 && `, ${bookingData.guests.children} enfant${bookingData.guests.children > 1 ? 's' : ''}`}
                          </span>
                        </div>
                      </div>

                      {bookingData.services.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <h4 className="font-semibold text-navy-900 mb-2">Services additionnels :</h4>
                          <div className="space-y-1">
                            {bookingData.services.map(serviceId => {
                              const service = additionalServices.find(s => s.id === serviceId);
                              return service ? (
                                <div key={serviceId} className="flex justify-between text-sm">
                                  <span className="text-navy-600">{service.name}</span>
                                  <span className="font-medium text-navy-900">{service.price} TND</span>
                                </div>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-lg font-bold">
                          <span className="text-navy-900">Total :</span>
                          <span className="text-gold-600">{calculateTotal()} TND</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="font-semibold text-navy-900 mb-2">Informations importantes</h4>
                      <ul className="text-sm text-navy-700 space-y-1">
                        <li>• Annulation gratuite jusqu'à 48h avant l'arrivée</li>
                        <li>• Check-in à partir de 15h00</li>
                        <li>• Check-out avant 12h00</li>
                        <li>• Paiement sécurisé par carte bancaire</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h3 className="font-bold text-navy-900 mb-4">Informations de paiement</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-2">Numéro de carte</label>
                          <input
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-navy-700 mb-2">Date d'expiration</label>
                            <input
                              type="text"
                              placeholder="MM/AA"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-navy-700 mb-2">CVV</label>
                            <input
                              type="text"
                              placeholder="123"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-navy-700 mb-2">Nom sur la carte</label>
                          <input
                            type="text"
                            placeholder="Nom complet"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-2 text-green-700">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Paiement sécurisé SSL</span>
                        </div>
                        <p className="text-sm text-green-600 mt-1">
                          Vos informations sont protégées par un cryptage de niveau bancaire
                        </p>
                      </div>

                      <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 mt-6">
                        Confirmer et payer {calculateTotal()} TND
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-navy-700 hover:bg-gray-300'
                }`}
              >
                Précédent
              </button>

              {currentStep < steps.length ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isStepValid()
                      ? 'bg-gold-600 text-white hover:bg-gold-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Suivant
                </button>
              ) : (
                <div className="text-sm text-navy-600">
                  Cliquez sur "Confirmer et payer" pour finaliser
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Help Section */}
      <section className="py-12 bg-navy-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">Besoin d'aide ?</h3>
          <p className="text-white/80 mb-6">Notre équipe est disponible 24h/24 pour vous accompagner</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+21670123456"
              className="bg-gold-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-gold-700 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+216 70 123 456</span>
            </a>
            <a
              href="mailto:reservations@onehotels.tn"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors duration-300 inline-flex items-center space-x-2 border border-white/30"
            >
              <Mail className="w-5 h-5" />
              <span>reservations@onehotels.tn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;