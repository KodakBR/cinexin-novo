import { Link } from 'react-router-dom';
import { Promotion } from '../../types';

interface PromotionsSectionProps {
  promotions: Promotion[];
}

const PromotionsSection = ({ promotions }: PromotionsSectionProps) => {
  return (
    <section className="section bg-dark-900">
      <div className="container">
        <h2 className="section-title text-white">Promoções</h2>
        <p className="section-subtitle">Confira nossas promoções e aproveite o melhor do cinema com descontos exclusivos</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promotion) => (
            <div 
              key={promotion.id} 
              className="bg-dark-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3">
                  <img 
                    className="h-64 w-full object-cover md:h-full" 
                    src={promotion.imageUrl} 
                    alt={promotion.title} 
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  {promotion.validUntil && (
                    <p className="text-primary-500 text-sm font-semibold mb-2">
                      Válido até {new Date(promotion.validUntil).toLocaleDateString('pt-BR')}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{promotion.title}</h3>
                  <p className="text-gray-400 mb-4">{promotion.description}</p>
                  
                  {promotion.price && (
                    <p className="text-xl font-bold text-white mb-4">
                      R$ {promotion.price.toFixed(2).replace('.', ',')}
                      {promotion.discountPercentage && (
                        <span className="ml-2 text-sm bg-primary-600 text-white px-2 py-1 rounded-full">
                          {promotion.discountPercentage}% OFF
                        </span>
                      )}
                    </p>
                  )}
                  
                  {promotion.discountPercentage && !promotion.price && (
                    <p className="text-xl font-bold text-white mb-4">
                      <span className="text-sm bg-primary-600 text-white px-2 py-1 rounded-full">
                        {promotion.discountPercentage}% OFF
                      </span>
                    </p>
                  )}
                  
                  {promotion.conditions && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">
                        <span className="font-semibold">Condições:</span> {promotion.conditions}
                      </p>
                    </div>
                  )}
                  
                  <Link 
                    to={`/promocoes/${promotion.id}`} 
                    className="btn-primary inline-block text-center"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/promocoes" className="btn-primary">
            Ver Todas as Promoções
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;