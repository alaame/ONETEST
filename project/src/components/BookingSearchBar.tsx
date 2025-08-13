import React, { useState } from 'react';
import { Users, X, Plus, MapPin, Calendar, Search } from 'lucide-react';

interface RoomConfig {
  id: string;
  adults: number;
  children: number;
  childrenAges: number[];
}

const BookingSearchBar: React.FC = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    rooms: [{ id: '1', adults: 2, children: 0, childrenAges: [] }] as RoomConfig[]
  });
  const [showRoomsConfig, setShowRoomsConfig] = useState(false);

  const destinations = [
    'ONE Resort Premium - Hammamet',
    'ONE Resort Aqua Park & Spa - Monastir',
    'ONE Resort Jockey - Monastir'
  ];

  const addRoom = () => {
    const newRoom: RoomConfig = {
      id: Date.now().toString(),
      adults: 2,
      children: 0,
      childrenAges: []
    };
    setSearchData(prev => ({ ...prev, rooms: [...prev.rooms, newRoom] }));
  };

  const removeRoom = (roomId: string) => {
    if (searchData.rooms.length > 1) {
      setSearchData(prev => ({
        ...prev,
        rooms: prev.rooms.filter(room => room.id !== roomId)
      }));
    }
  };

  const updateRoom = (roomId: string, field: keyof RoomConfig, value: any) => {
    setSearchData(prev => ({
      ...prev,
      rooms: prev.rooms.map(room => {
        if (room.id === roomId) {
          if (field === 'children') {
            const newChildrenCount = value;
            const currentAges = room.childrenAges;
            let newAges = [...currentAges];
            if (newChildrenCount > currentAges.length) {
              for (let i = currentAges.length; i < newChildrenCount; i++) {
                newAges.push(5);
              }
            } else if (newChildrenCount < currentAges.length) {
              newAges = newAges.slice(0, newChildrenCount);
            }
            return { ...room, [field]: value, childrenAges: newAges };
          }
          return { ...room, [field]: value };
        }
        return room;
      })
    }));
  };

  const updateChildAge = (roomId: string, childIndex: number, age: number) => {
    setSearchData(prev => ({
      ...prev,
      rooms: prev.rooms.map(room => {
        if (room.id === roomId) {
          const newAges = [...room.childrenAges];
          newAges[childIndex] = age;
          return { ...room, childrenAges: newAges };
        }
        return room;
      })
    }));
  };

  const handleDirectInput = (roomId: string, field: 'adults' | 'children', value: string) => {
    const numValue = parseInt(value) || 0;
    const maxValue = field === 'adults' ? 6 : 4;
    const finalValue = Math.max(field === 'adults' ? 1 : 0, Math.min(maxValue, numValue));
    updateRoom(roomId, field, finalValue);
  };

  const getRoomsText = () => {
    const roomCount = searchData.rooms.length;
    const totalAdults = searchData.rooms.reduce((sum, room) => sum + room.adults, 0);
    const totalChildren = searchData.rooms.reduce((sum, room) => sum + room.children, 0);
    let text = `${roomCount} chambre${roomCount > 1 ? 's' : ''}, ${totalAdults} adulte${totalAdults > 1 ? 's' : ''}`;
    if (totalChildren > 0) {
      text += `, ${totalChildren} enfant${totalChildren > 1 ? 's' : ''}`;
    }
    return text;
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-white shadow-xl rounded-xl space-y-4 md:flex md:items-end md:space-y-0 md:space-x-4">
      {/* Destination */}
      <div className="flex-1">
        <label className="text-sm font-medium text-navy-800 flex items-center mb-1">
          <MapPin className="w-4 h-4 mr-2 text-gold-600" /> Destination
        </label>
        <select
          value={searchData.destination}
          onChange={(e) => setSearchData(prev => ({ ...prev, destination: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="">Choisir un hôtel</option>
          {destinations.map(dest => (
            <option key={dest} value={dest}>{dest}</option>
          ))}
        </select>
      </div>

      {/* Check-in */}
      <div className="flex-1">
        <label className="text-sm font-medium text-navy-800 flex items-center mb-1">
          <Calendar className="w-4 h-4 mr-2 text-gold-600" /> Arrivée
        </label>
        <input
          type="date"
          value={searchData.checkIn}
          onChange={(e) => setSearchData(prev => ({ ...prev, checkIn: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      {/* Check-out */}
      <div className="flex-1">
        <label className="text-sm font-medium text-navy-800 flex items-center mb-1">
          <Calendar className="w-4 h-4 mr-2 text-gold-600" /> Départ
        </label>
        <input
          type="date"
          value={searchData.checkOut}
          onChange={(e) => setSearchData(prev => ({ ...prev, checkOut: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      {/* Guests */}
      <div className="flex-1 relative">
        <label className="text-sm font-medium text-navy-800 flex items-center mb-1">
          <Users className="w-4 h-4 mr-2 text-gold-600" /> Voyageurs
        </label>
        <button
          type="button"
          onClick={() => setShowRoomsConfig(!showRoomsConfig)}
          className="w-full px-3 py-2 border rounded-md text-left"
        >
          {getRoomsText()}
        </button>

        {/* Popup Rooms */}
        {showRoomsConfig && (
          <div className="absolute z-50 top-full left-0 w-full bg-white mt-2 border rounded-md p-4 shadow-xl space-y-4">
            {searchData.rooms.map((room, i) => (
              <div key={room.id} className="bg-gray-50 p-3 rounded-md border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Chambre {i + 1}</span>
                  {searchData.rooms.length > 1 && (
                    <button onClick={() => removeRoom(room.id)} className="text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm">Adultes</label>
                    <input
                      type="number"
                      min={1}
                      max={6}
                      value={room.adults}
                      onChange={(e) => handleDirectInput(room.id, 'adults', e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </div>
                  <div>
                    <label className="text-sm">Enfants</label>
                    <input
                      type="number"
                      min={0}
                      max={4}
                      value={room.children}
                      onChange={(e) => handleDirectInput(room.id, 'children', e.target.value)}
                      className="w-full px-2 py-1 border rounded"
                    />
                  </div>
                </div>
                {room.children > 0 && (
                  <div className="mt-2 space-y-1">
                    {room.childrenAges.map((age, idx) => (
                      <div key={idx}>
                        <label className="text-sm">Âge Enfant {idx + 1}</label>
                        <select
                          value={age}
                          onChange={(e) => updateChildAge(room.id, idx, parseInt(e.target.value))}
                          className="w-full px-2 py-1 border rounded"
                        >
                          {Array.from({ length: 12 }, (_, j) => (
                            <option key={j} value={j}>{j === 0 ? 'Moins de 1 an' : `${j} an${j > 1 ? 's' : ''}`}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {searchData.rooms.length < 5 && (
              <button onClick={addRoom} className="w-full border border-dashed text-gold-600 border-gold-500 p-2 rounded-md text-sm">
                <Plus className="w-4 h-4 inline mr-1" /> Ajouter une chambre
              </button>
            )}
          </div>
        )}
      </div>

      {/* Search */}
      <div className="md:w-auto w-full">
        <button className="w-full bg-gold-600 text-white font-semibold py-3 rounded-md flex justify-center items-center gap-2">
          <Search className="w-5 h-5" /> Rechercher
        </button>
      </div>
    </div>
  );
};

export default BookingSearchBar;
