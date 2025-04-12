import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Importação antecipada
const NotFound = () => (
  <div className="container py-20 text-center">
    <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
    <p className="text-xl text-gray-400 mb-8">A página que você está procurando não existe ou foi movida.</p>
    <a href="/" className="btn-primary">Voltar para a Home</a>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-dark-950">
      <Header />
      
      {isLoading ? (
        <div className="flex-grow flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Adicionar outras rotas aqui quando criarmos as páginas correspondentes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      )}
      
      <Footer />
    </div>
  );
}

export default App;