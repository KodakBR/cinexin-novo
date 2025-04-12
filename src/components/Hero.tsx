import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showButtons?: boolean;
}

const Hero = ({ 
  title = "Bem-vindo ao CineXin", 
  subtitle = "A melhor experiência de cinema em Mato Grosso! Confira nossa programação, compre seus ingressos e aproveite o melhor do cinema com todo o conforto que você merece.", 
  backgroundImage = "/images/hero-bg.jpg",
  showButtons = true
}: HeroProps) => {
  return (
    <div 
      className="relative py-20 md:py-32 overflow-hidden bg-dark-900"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Efeito de overlay dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 to-primary-900/30 mix-blend-multiply"></div>
      
      {/* Conteúdo */}
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fadeIn animation-delay-200">
          {subtitle}
        </p>
        
        {showButtons && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-400">
            <Link to="/programacao" className="btn-primary">
              Ver Programação
            </Link>
            <Link to="/ingressos" className="btn-outline">
              Comprar Ingressos
            </Link>
          </div>
        )}
      </div>
      
      {/* Detalhe estilístico */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-950 to-transparent"></div>
    </div>
  );
};

export default Hero;