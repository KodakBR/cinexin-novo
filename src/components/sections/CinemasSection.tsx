import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cinema } from '../../types';

interface CinemasSectionProps {
  cinemas: Cinema[];
}

const CinemasSection = ({ cinemas }: CinemasSectionProps) => {
  const [activeCinema, setActiveCinema] = useState(cinemas[0].id);
  
  const selectedCinema = cinemas.find(cinema => cinema.id === activeCinema) || cinemas[0];
  
  return (
    <section className="section bg-dark-950">
      <div className="container">
        <h2 className="section-title text-white">Nossas Unidades</h2>
        <p className="section-subtitle">Conheça as unidades do CineXin pelo estado</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-dark-800 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Selecione uma Unidade</h3>
              <div className="space-y-2">
                {cinemas.map((cinema) => (
                  <button
                    key={cinema.id}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeCinema === cinema.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-700 text-white hover:bg-dark-600'
                    }`}
                    onClick={() => setActiveCinema(cinema.id)}
                  >
                    <h4 className="font-bold">{cinema.name}</h4>
                    <p className="text-sm opacity-80">{cinema.city}, {cinema.state}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-dark-800 rounded-lg overflow-hidden h-full">
              {selectedCinema.coordinates ? (
                <div className="aspect-video w-full">
                  <iframe
                    title={`Mapa de ${selectedCinema.name}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBGTAJ7JVQmE-5eGxJbQcuSBlOoWYU9xag&q=${selectedCinema.coordinates.lat},${selectedCinema.coordinates.lng}&zoom=15`}
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="aspect-video w-full bg-dark-700 flex items-center justify-center text-gray-500">
                  Mapa não disponível
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCinema.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Endereço</h4>
                    <p className="text-gray-400">{selectedCinema.address}</p>
                    <p className="text-gray-400">{selectedCinema.city}, {selectedCinema.state}</p>
                    
                    <h4 className="text-lg font-semibold text-white mt-4 mb-2">Contato</h4>
                    <p className="text-gray-400">{selectedCinema.phoneNumber}</p>
                    {selectedCinema.email && (
                      <p className="text-gray-400">{selectedCinema.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Horário de Funcionamento</h4>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Segunda à Sexta:</span>
                      <span className="text-white">{selectedCinema.openingHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-400">Fim de Semana:</span>
                      <span className="text-white">{selectedCinema.openingHours.weekend}</span>
                    </div>
                    {selectedCinema.openingHours.holidays && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Feriados:</span>
                        <span className="text-white">{selectedCinema.openingHours.holidays}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex mt-6 space-x-4">
                  <Link 
                    to={`/cinema/${selectedCinema.id}`} 
                    className="btn-primary flex-1"
                  >
                    Detalhes
                  </Link>
                  <Link 
                    to={`/programacao/${selectedCinema.id}`} 
                    className="btn-outline flex-1"
                  >
                    Programação
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemasSection;