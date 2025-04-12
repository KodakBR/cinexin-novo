import { Link } from 'react-router-dom';
import { Service } from '../../types';

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="section bg-dark-950">
      <div className="container">
        <h2 className="section-title text-white">Nossos Serviços</h2>
        <p className="section-subtitle">Conheça os serviços exclusivos que o CineXin oferece para você, sua família, empresa ou escola</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={service.imageUrl} 
                  alt={service.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-6 h-24 overflow-hidden">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="btn-primary inline-block text-center w-full"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;