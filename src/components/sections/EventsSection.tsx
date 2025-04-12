import { Link } from 'react-router-dom';
import { Event } from '../../types';

interface EventsSectionProps {
  events: Event[];
}

const EventsSection = ({ events }: EventsSectionProps) => {
  // Função para formatar a data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };
  
  // Função para obter a cor do tipo de evento
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'premiere':
        return 'bg-red-600';
      case 'special':
        return 'bg-purple-600';
      case 'festival':
        return 'bg-blue-600';
      default:
        return 'bg-gray-600';
    }
  };
  
  // Função para obter o nome do tipo de evento
  const getEventTypeName = (type: string) => {
    switch (type) {
      case 'premiere':
        return 'Pré-estreia';
      case 'special':
        return 'Evento Especial';
      case 'festival':
        return 'Festival';
      default:
        return 'Evento';
    }
  };
  
  return (
    <section className="section bg-dark-900 relative overflow-hidden">
      {/* Detalhe decorativo */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <h2 className="section-title text-white">Eventos Especiais</h2>
        <p className="section-subtitle">Fique por dentro dos eventos e pré-estreias que estão acontecendo no CineXin</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="group bg-dark-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative">
                <img 
                  className="w-full h-48 object-cover" 
                  src={event.imageUrl} 
                  alt={event.title} 
                />
                <div className="absolute top-0 right-0 m-4">
                  <span className={`${getEventTypeColor(event.type)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {getEventTypeName(event.type)}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 m-4 bg-dark-900/90 backdrop-blur-sm text-white p-2 rounded">
                  <time dateTime={event.date} className="text-sm font-medium">
                    {formatDate(event.date)}
                  </time>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{event.description}</p>
                
                {event.location && (
                  <div className="flex items-center text-gray-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                )}
                
                <Link 
                  to={`/eventos/${event.id}`} 
                  className="btn-primary w-full text-center"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/eventos" className="btn-primary">
            Ver Todos os Eventos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;