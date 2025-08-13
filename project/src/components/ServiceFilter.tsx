import React, { useState } from 'react';
import { Filter, MapPin } from 'lucide-react';

interface ServiceFilterProps {
  onHotelFilter: (hotelId: string) => void;
  selectedHotel: string;
  showLocationFilter?: boolean;
}

const ServiceFilter: React.FC<ServiceFilterProps> = ({ 
  onHotelFilter, 
  selectedHotel, 
  showLocationFilter = true 
}) => {
  const hotels = [
    { id: 'all', name: 'Tous les hôtels', location: 'Tunisie' },
    { id: '1', name: 'ONE Resort Aquapark & spa', location: 'Monastir' },
    { id: '2', name: 'ONE Resort Premium', location: 'Hammamet' },
    { id: '3', name: 'ONE Resort Jockey', location: 'Monastir' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-navy-600" />
          <h3 className="font-semibold text-navy-900">Filtrer par hôtel</h3>
        </div>
        
        <select
          value={selectedHotel}
          onChange={(e) => onHotelFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
        >
          {hotels.map((hotel) => (
            <option key={hotel.id} value={hotel.id}>
              {hotel.name}
              {showLocationFilter && hotel.location !== 'Tunisie' && ` - ${hotel.location}`}
            </option>
          ))}
        </select>
      </div>
      
      {selectedHotel !== 'all' && (
        <div className="mt-3 flex items-center space-x-2 text-sm text-navy-600">
          <MapPin className="w-4 h-4" />
          <span>
            Affichage des services pour {hotels.find(h => h.id === selectedHotel)?.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default ServiceFilter;