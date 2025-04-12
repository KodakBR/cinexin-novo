import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Cuiabá');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCityModal = () => {
    setIsCityModalOpen(!isCityModalOpen);
  };

  const changeCity = (city: string) => {
    setSelectedCity(city);
    setIsCityModalOpen(false);
  };

  return (
    <header className="bg-dark-900 sticky top-0 z-50">
      {/* Barra de cidade */}
      <div className="bg-dark-800 py-2">
        <div className="container flex justify-end items-center">
          <button 
            className="text-sm flex items-center text-primary-500 hover:text-primary-400 transition-colors"
            onClick={toggleCityModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {selectedCity}
          </button>
        </div>
      </div>
      
      {/* Navegação principal */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="CineXin" className="h-10" />
          </Link>
          
          {/* Menu Mobile Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          
          {/* Menu Normal */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary-500 transition-colors">Home</Link>
            <Link to="/sobre" className="text-white hover:text-primary-500 transition-colors">CineXin</Link>
            <div className="relative group">
              <button className="text-white hover:text-primary-500 transition-colors flex items-center">
                Filmes
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-800 rounded-md shadow-lg py-2 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to="/programacao" className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors">Programação</Link>
                <Link to="/classificacao" className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors">Classificação Indicativa</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-white hover:text-primary-500 transition-colors flex items-center">
                Serviços
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-800 rounded-md shadow-lg py-2 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link to="/anuncie" className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors">CineMídia</Link>
                <Link to="/cineescola" className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors">Projeto Cine Escola</Link>
                <Link to="/cineempresa" className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors">Cine Empresa</Link>
                <Link to="/cineevento" className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors">Locação de Sala</Link>
                <Link to="/cinefesta" className="block px-4 py-2 text-white hover:bg-primary-600 hover:text-white transition-colors">Aniversário no Cinema</Link>
              </div>
            </div>
            <Link to="/contato" className="text-white hover:text-primary-500 transition-colors">Contato</Link>
          </nav>
          
          {/* Botão de ingressos */}
          <Link to="/ingressos" className="hidden md:block btn-primary">Comprar Ingressos</Link>
        </div>
      </div>
      
      {/* Menu Mobile */}
      <div className={`md:hidden bg-dark-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="container py-4 flex flex-col space-y-4">
          <Link to="/" className="text-white hover:text-primary-500 transition-colors">Home</Link>
          <Link to="/sobre" className="text-white hover:text-primary-500 transition-colors">CineXin</Link>
          
          {/* Dropdown Mobile */}
          <div className="relative">
            <button 
              className="text-white hover:text-primary-500 transition-colors flex items-center justify-between w-full"
              onClick={() => {
                const element = document.getElementById('filmes-dropdown');
                if (element) element.classList.toggle('hidden');
              }}
            >
              Filmes
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="filmes-dropdown" className="mt-2 pl-4 hidden">
              <Link to="/programacao" className="block py-2 text-white hover:text-primary-500 transition-colors">Programação</Link>
              <Link to="/classificacao" className="block py-2 text-white hover:text-primary-500 transition-colors">Classificação Indicativa</Link>
            </div>
          </div>
          
          <div className="relative">
            <button 
              className="text-white hover:text-primary-500 transition-colors flex items-center justify-between w-full"
              onClick={() => {
                const element = document.getElementById('servicos-dropdown');
                if (element) element.classList.toggle('hidden');
              }}
            >
              Serviços
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="servicos-dropdown" className="mt-2 pl-4 hidden">
              <Link to="/anuncie" className="block py-2 text-white hover:text-primary-500 transition-colors">CineMídia</Link>
              <Link to="/cineescola" className="block py-2 text-white hover:text-primary-500 transition-colors">Projeto Cine Escola</Link>
              <Link to="/cineempresa" className="block py-2 text-white hover:text-primary-500 transition-colors">Cine Empresa</Link>
              <Link to="/cineevento" className="block py-2 text-white hover:text-primary-500 transition-colors">Locação de Sala</Link>
              <Link to="/cinefesta" className="block py-2 text-white hover:text-primary-500 transition-colors">Aniversário no Cinema</Link>
            </div>
          </div>
          
          <Link to="/contato" className="text-white hover:text-primary-500 transition-colors">Contato</Link>
          <Link to="/ingressos" className="btn-primary text-center">Comprar Ingressos</Link>
        </nav>
      </div>
      
      {/* Modal de seleção de cidade */}
      {isCityModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-dark-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Selecione a Cidade</h3>
              <button onClick={toggleCityModal} className="text-gray-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Cuiabá', 'Várzea Grande', 'Rondonópolis', 'Sinop'].map((city) => (
                <button
                  key={city}
                  onClick={() => changeCity(city)}
                  className={`p-3 rounded-lg transition-colors ${
                    selectedCity === city
                      ? 'bg-primary-600 text-white'
                      : 'bg-dark-700 text-white hover:bg-dark-600'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;